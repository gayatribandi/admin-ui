
import { getDate, getPrevDate } from "./functions";
import { getCookiesObj } from "./functions";

class AppCookies{
  
  static setCookie(key:string,value:string,days:number){

    if(days){
      document.cookie = `${key}=${value};expires=${getDate(days)}`
    }
    else{
      document.cookie=`${key}=${value}`
    }

  }

  static getCookie(key:string){
    const cookieObj=getCookiesObj();
    return cookieObj[key]

  }

  static getAllCookies(){
      return getCookiesObj();
  }

  static deleteCookie(key:string){
    document.cookie=`${key}=;expires=${getPrevDate()}`
  }

  static deleteAllCookies(){
    const cookiesObj = getCookiesObj();
    for(const key in cookiesObj){
      document.cookie = `${key}=;expires=${getPrevDate()}`
    }
  }

}