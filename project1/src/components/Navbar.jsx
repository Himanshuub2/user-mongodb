import {AppBar,Toolbar,Typography,styled} from "@mui/material";
import {Link} from "react-router-dom"


const Links = styled(Link)`
    margin-right:45px;
    font-size:20px;
    text-decoration:none;
    color:white;
`


const Navbar = ()=>{
    return (
        
        <AppBar position = "static">
            <Toolbar>
               <Links to = "/home">Home</Links>
               <Links to = "/userdetails">User Details</Links>
               <Links to = "/signup" style={{marginLeft:"auto"}}>Signup</Links>

            </Toolbar>
        </AppBar>
        
        
    )
}

export default Navbar
