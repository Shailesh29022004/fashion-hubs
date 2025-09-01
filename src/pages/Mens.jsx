import React from "react"
import tsh from "../Assets2/Tsh.png"
import shirt from "../Assets2/shirt.png"
import jeans from "../Assets2/jean.png"
import formal from "../Assets2/for.png"
import suit from "../Assets2/suit.png"
import { Link } from "react-router-dom"



function Mens(){
   

    return(
   <>
   <section className="upto">

    <div className="off">
        <h1>SALE</h1>
        <h4>UP TO</h4>
        <h2>50%<h5>OFF</h5></h2>
    </div>

    <h1>+</h1>

    <div className="add">
      <h5> ADDITIONAL</h5>
      <h4>400 OFF</h4>
      <h3>-----USE CODE-----</h3>
      <h2>SSALE25</h2>
    </div>

   </section>
   

   

    <section className="him">
  <h1>Essential For Him</h1>

  <div className="essen-slider" id="slider">
    <div className="card">
      <Link to={"/tshirt"}>
        <img src={tsh} alt="T-shirt" width={400}/>
        <p>T-SHIRT</p>
      </Link>
    </div>

    <div className="card">
      <img src={shirt} alt="Shirt" />
      <p>SHIRT</p>
    </div>

    <div className="card">
      <img src={jeans} alt="Jeans" />
      <p>JEANS</p>
    </div>

    <div className="card">
      <img src={suit} alt="Suit & Blazers" />
      <p> SUIT & BLAZERS</p>
    </div>
   </div>

   <div className="card">
      <img src={formal} alt="Formal-Wear" />
      <p>FORMAL-WEAR</p>
    </div>

</section>

   
   </> 
    )
}export default Mens