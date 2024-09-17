
export function updateStoreData(dispatch:any,type:any,payload:any){

  dispatch({type,payload})

}

export function getDate(days:number){
    const date = new Date();
    date.setDate(date.getDate()+days)
    return date
}

export function getPrevDate(){
  const date = new Date();
  date.setDate(date.getDate()-1)
  return date
}

export function getCookiesObj(){

  const cookieArr:any=document.cookie?.split(";")
  return cookieArr.reduce((init:any,val:any)=>{

    const [key,value] = val.split('=')
    init[key.trim()]=value.trim()
    return init

  },{})
}