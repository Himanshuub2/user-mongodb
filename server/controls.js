import userdetail from "./db/schema.js";

export const addUser = async (request,response) =>{
    const user = request.body;
    console.log(user);
    const newuser = new userdetail(user);
    try{
        await newuser.save()
        response.status(200).json(newuser);
    }catch(error){
        console.log("failed with controls",error);
    }
}

export const getUser= async (request,response)=>{

    try{
        const details =await userdetail.find() 
       
       response.status(200).json(details)

    }catch(error){
        response.status(400).json({message:error.message})


    }
}

