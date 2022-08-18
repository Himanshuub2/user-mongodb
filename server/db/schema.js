import mongoose from "mongoose";


const UserSchema = mongoose.Schema({
    name :{type:String,required:true},
    city:{type:String},
    age:{type:String},

})


const userdetail = mongoose.model("experiment",UserSchema);


export default userdetail;