import React from "react";
import { useState } from "react";
import bgm from "../Assets2/Frame 57.png"
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";



function Header(){ 
const navigate=useNavigate();
    const [searchItem, setSearch] =useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        navigate(`/search/${searchItem}`)
        setSearch("")

}
const [menuOpen, setMenuOpen] = useState(false);
   

  
      
    return(<>
    <div className="main-container">
      
    <header >
        <img src={bgm} alt="img" width={130}/>

          <form
         onSubmit={handleSubmit}
         className="search">

         <input 
         value={searchItem}
         onChange={(e)=>setSearch(e.target.value)}
         type="text" 
         placeholder="Search For Product" 
         id="search" />
        </form>
          
          {/* Menu Icon for Mobile */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      
        <nav className={`nav-menu ${menuOpen ? "active" : ""}` }>
             <Link to={"/"}>HOME</Link>
             <Link to={"Products"}>PRODUCTS</Link>
             <Link to={"CATEGORY"}> CATEGORY</Link>
             <Link to={"Cart"}>🛒CART</Link>
             <Link to={"Signup"}><button type="submit">SIGN UP</button></Link>
        </nav>
        
    </header>
    </div>
    </>
    )

    }export default Header
