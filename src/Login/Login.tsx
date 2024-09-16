import {appCtx} from '@/context/appCtx'
import React,{useContext,useState} from 'react'
import { Input } from '@/app/common/components/Input'
import config from './config.json'
import axios from 'axios'
import { handleFieldLevelValidation,handleFormLevelValidation } from '@/app/common/components/services/validations'
import Ajax from '@/app/common/components/services/ajax'
import { updateStoreData } from '@/app/common/components/services/functions'

export const Login = () => {

 
    const {dispatch} = useContext(appCtx)
    const [inputControls, setInputControls] = useState(config)

    const  fnLogin = async()=>{

    try{  
        
    const [isInValid,data]:any=handleFormLevelValidation(inputControls,setInputControls)

    if (isInValid) return;
      //alert(JSON.stringify(dataObj))
    
    updateStoreData(dispatch,'LOADER',true)
    
    const res=await Ajax.post("auth/login",{data})

  /*  const res=await axios.post("http://localhost:2020/auth/login", {
      data  
      // or just data (shorthand syntax).here "data" is key used in postman in body
    })  */

    if(res?.data?.length>0){
      updateStoreData(dispatch,'LOGIN',true)
    
   } else{
      alert("please check entered uid or pwd")
   }

  }catch(ex){

  }finally{
    updateStoreData(dispatch,'LOADER',false)
  }
    }
  const  handleChange = (eve: any) => {
   
    handleFieldLevelValidation(eve, inputControls, setInputControls)

  }
   
  

  return (
    <div className='container-fluid'>
      <h3 className='mt-3 mb-3 text-center'>Login</h3>
      {
         inputControls.map((obj)=>{
          return <Input {...obj} handleChange={handleChange}/>
         })

      }

    

      <div className='row mb-3'>
        <div className='offset-sm-5 col-sm-7'>
            <button className='btn btn-primary'onClick={fnLogin}>Login</button>


        </div>

      </div>

    </div>
  )
}

