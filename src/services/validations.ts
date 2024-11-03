const regEx:any={
 
  "REQUIRED": {
    pattern: /./,
    message: 'Required !!!'
  },
  "EMAIL": {
    pattern: /^[a-zA-Z]{1}[a-zA-Z0-9_./]*@[a-zA-Z]{3,10}\.[a-zA-Z]{2,3}$/,
    message: "Should be in email format"
  },
  "MIN5CHAR": {
    pattern: /[a-zA-Z0-9]{5,}/,
    message: "Min 5 chars"

  },
  "PHONE": {
    pattern: /^[0-9]{10}$/,
    message: "Exactly 10 digits"

  }
}


function validate(inputObj:any){

  inputObj.errorMsg=""
  for(let val of inputObj?.criteria){
    const {pattern,message}=regEx[val]
    if(!pattern.test(inputObj?.value)){
      inputObj.errorMsg=message
      break;
    }
  }
}



export function handleFieldLevelValidation(eve:any,inputControls:any,setInputControls:any){
  
  console.log("field change")
  const {name,value}=eve?.target
  const clonedInputControls=JSON.parse(JSON.stringify(inputControls))
  let inputObj: any = clonedInputControls.find((obj: any) => {
    return obj.name === name
  })
 
  inputObj.value=value;
  validate(inputObj)
  setInputControls(clonedInputControls)

}

  export function handleFormLevelValidation(inputControls:any,setInputControls:any){

    const clonedInputControls = JSON.parse(JSON.stringify(inputControls))
    const dataObj:any={}
    clonedInputControls.forEach((obj:any)=>{
      dataObj[obj.name]=obj.value;
      validate(obj)
    })  

    const isInvalid = clonedInputControls.some((obj:any)=>obj.errorMsg)
   
    setInputControls(clonedInputControls)
    return [isInvalid,dataObj] 


}


export function setFormData(inputControls:any,setInputControls:any,data:any,isEdit:boolean,fieldName:string){

  const clonedInputControls=JSON.parse(JSON.stringify(inputControls))
  clonedInputControls.forEach((obj:any)=>{
    if(isEdit&& obj.name===fieldName){
        obj.isDisabled=true
    }
   obj.value=data[obj.name]

  })

  setInputControls(clonedInputControls)

}



export function clearFormData(){

}