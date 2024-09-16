export const reducer = (state,action)=>{

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