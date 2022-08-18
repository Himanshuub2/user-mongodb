
import { Typography,styled,Link } from "@mui/material"


const Heading = styled(Typography)`
    display:flex;
    align-items:center;
    justify-content : center;
    height:100vh;
    font-size:50px;
    font-weight:600;
    
`
const Home = ()=>{
    return (
        
        <Heading>Welcome to Home page , Navigate via the Links in Navbar</Heading>
        
    )
}

export default Home;