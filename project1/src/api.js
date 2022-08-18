import axios from "axios";

const url = "http://localhost:4000"
 export const addUser = async (data)=>{
  console.log(data);
    try{ await axios.post(`${url}/signup`,data)}
    catch(error){
      console.log('error with axios',error);
    }
 }

 


 export const getUser = async()=>{
  try{
    return await axios.get(`${url}/userdetails`)
    

  }catch(error){

  }
 }

