
import {Box,Button,styled, Typography} from "@mui/material";
import {useState,useEffect} from "react";
import {addUser} from "../api.js";




const Wrapper = styled(Box)`
   
    width:100vw;
    height:100vh;
   
    overflow:"hidden";
    border:2px solid blue

`

const Container = styled(Box)`
    margin-top:17vh;
    margin-left:35vw;
    width:30%;
    height:70%;
    border:2px solid black;
    background:#fff8b6;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    border-radius:14px;
    & span,p,input{
        font-size:20px;
        margin-bottom:30px;
        
    }
    & input {
        margin-left:25px;
    }
   
`
const defaultValue = {
    name : "",
    city : "",
    age : "",
}
const Signup = ()=>{

    const [val,setVal]= useState(defaultValue);
  
    

    const handleChange = (e)=>{
        setVal({...val,[e.target.name]:e.target.value})
        console.log(val);
    }
    
    const clicked = async ()=>{
        const data = await addUser(val)
       
       
    }
    const Reseted= ()=>{
        setVal(defaultValue);
    }
    
    return (
        <Wrapper style={{backgroundColor:"#bbe4e9"}}>
        <Container >
            <Typography style ={{fontWeight:600,fontSize:"30px",color:"Green"}}>Signup</Typography>
            <span>Name:<input name = "name" onChange={(e)=>handleChange(e)}></input></span>
            <span>City:<input name = "city" onChange={(e)=>handleChange(e)}></input></span>
            <span>Age:<input  name = "age"onChange={(e)=>handleChange(e)}></input></span>
            
            <Button variant="contained" onClick = {clicked}>Submit</Button>
            <Button variant = "contained" color="secondary" onClick = {Reseted} >Reset</Button>
        </Container>
       
        </Wrapper>
    )
}

export default Signup   