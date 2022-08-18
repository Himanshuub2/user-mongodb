
import {getUser} from "../api";
import { useEffect,useState } from "react";
import{Table,TableHead,TableRow,TableCell,TableBody} from "@mui/material";




const UserDetails = ()=>{

    useEffect(()=>{
        allUsers()
    },[]);

 const [user,setUser] = useState([])
    
    const allUsers = async ()=>{
        let result = await getUser();
        const newres = (result.data);
        // const newres = JSON.stringify(result);
        console.log(newres);
       setUser(newres);
        console.log(user);

       
       
        
    }
    
    
    return (
        <>
        <Table style = {{marginTop:10}} aria-label="customized table">
            <TableHead >
                <TableRow>
                    <TableCell >Name</TableCell>
                    <TableCell>City</TableCell>
                    <TableCell>Age</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    user.map(item=>(
                        <TableRow>
                            <TableCell>{item.name?item.name:"-"}</TableCell>
                            <TableCell>{item.city?item.city:"-"}</TableCell>
                            <TableCell>{item.age?item.age:"-"}</TableCell>

                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
        </>
    )
}

export default UserDetails