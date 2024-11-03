export const reducer = (state:any,action:any)=>{

  switch(action.type){

    case 'LOGIN':
      state= {
        ...state,
        isLoggedIn: action.payload
        
      }
      break;
    case 'LOADER':
        state= {
          ...state,
          isShowLoader: action.payload
        }
        break;  

    case 'MODAL':
      state={
        ...state,
        modal:action.payload
       
      }    
    case 'TOASTER':
       state= {
        ...state,
       toaster: action.payload
        }  
       break;  
  }
  console.log ("new state",state)
  return state;

}