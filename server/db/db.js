import mongoose from "mongoose";



const Connection = async ()=>{
    const url = "mongodb+srv://admin:himanshu@cluster0.thkmk.mongodb.net/?retryWrites=true&w=majority"
    try{
        await mongoose.connect(url,{useUnifiedTopology:true,useNewUrlParser:true})
        console.log("DB connected successfuly")
    }catch(err){
        console.log("failed to connect to DB",err);
    }
}


export default Connection;