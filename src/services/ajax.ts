import axios from 'axios'

class Ajax{
  
  static get(url:string){
    return axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}${url}`)
  }
  static post(url:any,data:any){
    return axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}${url}`,data)
  }
  static put(url:any,data:any){
    return axios.put(`${process.env.NEXT_PUBLIC_BASE_URL}${url}`,data)
  }
  static patch(){

  }
  static delete(url:string){
    return axios.delete(`${process.env.NEXT_PUBLIC_BASE_URL}${url}`)
  }
  static head(){

  }

}

export default Ajax