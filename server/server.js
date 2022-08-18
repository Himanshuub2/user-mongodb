import Connection from "./db/db.js";
import bodyParser from "body-parser";
import {router} from "./routes.js"
import cors from "cors"

import express from "express";
const app = express();
const port = 4000;

app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))

app.use(cors())
Connection();

app.use("/",router)

app.listen(port,()=>{
    try{
        console.log("hello all from express");
    }catch(err){
        console.log("error occured",err);
    }
})