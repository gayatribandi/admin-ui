import React,{useContext, useEffect, useState} from 'react'
import config from './config.json'
import {Input} from '../shared/Input'
import { TextArea } from '../shared/TextArea'
import { handleFieldLevelValidation,handleFormLevelValidation,setFormData } from '@/services/validations'
import Ajax from '@/services/ajax'
import { updateStoreData } from '@/services/functions'
import { appCtx } from '@/context/appCtx'


export const VendorForm = ({setShowForm,fnGetVendors,row,isEdit}:any) => {
  const [inputControls, setInputControls]=useState(config)
  const {dispatch}=useContext(appCtx)


  useEffect(()=>{
    setFormData(inputControls,setInputControls,row,isEdit,"uid")
  },[row])

  const handleChange=(eve:any)=>{
    handleFieldLevelValidation(eve,inputControls,setInputControls)
  }

  const fnSubmit=async ()=>{

    try{
    const [isInValid,data]:any=handleFormLevelValidation(inputControls,setInputControls)
    if(isInValid) return;
      updateStoreData(dispatch,"LOADER",true)
      const res=await Ajax.post('vendor/save',{data})
      const {acknowledged,insertedId}=res?.data
      if(acknowledged && insertedId){
        setShowForm(false)
        fnGetVendors();
        updateStoreData(dispatch,'TOASTER',{
          isShowToaster: true,
          toasterMsg: 'Registered !!!',
          color: 'green'
        })

      }
    }catch(ex){
      console.error("VendorForm",ex)
      updateStoreData(dispatch,'TOASTER',{
        isShowToaster: true,
        toasterMsg: 'Not registered !!!',
        color: 'red'
      })

    }finally{
      updateStoreData(dispatch,"LOADER",false)
    }
    
    
  }

  const fnUpdate=async()=>{
    try{
      const [isInValid,data]:any=handleFormLevelValidation(inputControls,setInputControls)
      if(isInValid) return;
        updateStoreData(dispatch,"LOADER",true)
        console.log(11,data)
        const res=await Ajax.put(`vendor/update?id=${row._id}`,{data})
        const {acknowledged,modifiedCount}=res?.data
        if(acknowledged && modifiedCount){
          setShowForm(false)
          fnGetVendors();
          updateStoreData(dispatch,'TOASTER',{
            isShowToaster: true,
            toasterMsg: 'Updated !!!',
            color: 'green'
          })
  
        }
      }catch(ex){
        console.error("VendorForm",ex)
        updateStoreData(dispatch,'TOASTER',{
          isShowToaster: true,
          toasterMsg: 'Not Updated !!!',
          color: 'red'
        })
  
      }finally{
        updateStoreData(dispatch,"LOADER",false)
      }
  }

  return (
    <div className='container-fluid mt-5'>
    
      {
         inputControls.map((obj)=>{

          switch(obj.tag){

            case 'input':
              return <Input {...obj} handleChange={handleChange}/>

            case 'textarea':
              return <TextArea {...obj} handleChange={handleChange}/>
              
            default:
                return <></>  

          }
          
         })

      }

      <div>
       { isEdit? <button onClick={fnUpdate} className='btn btn-primary form-control'>Update</button>:<button onClick={fnSubmit} className='btn btn-primary form-control'>Submit</button>}
      </div>
      
    </div>
  )
}
