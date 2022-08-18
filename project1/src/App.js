
import Navbar from "./components/Navbar";
import Home from "./components/Home"
import Signup from "./components/Signup";
import UserDetails from "./components/UserDetails";

import {Routes,Route,Link } from "react-router-dom";


import './App.css';


function App() {
  return (
    <div >
     <Navbar/>
     <Routes>
      
      <Route path = "/home" element={<Home/>}/>
      
     <Route path = "/signup" element={<Signup/>}/>
     <Route path = "/userdetails" element = {<UserDetails/>} />
     </Routes>
    </div>
  );
}

export default App;
