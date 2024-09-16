import axios from 'axios'

class Ajax{
  
  static get(){

  }
  static post(url:any,data:any){
    return axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}${url}`,data)
  }
  static put(){

  }
  static patch(){

  }
  static delete(){

  }
  static head(){

  }

}

export default Ajax