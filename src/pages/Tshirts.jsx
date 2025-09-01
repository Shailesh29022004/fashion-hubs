 /* import React, { useState } from "react";

import polo from "./Assets2/polo.png"
import louis from "./Assets2/louis.png"
import celio from "./Assets2/celio.png"
import fra from "./Assets2/fratini.png"
import jack from "./Assets2/jack.png"
import alt from "./Assets2/alt.png"
import lou from "./Assets2/Lou.png"
import arr from "./Assets2/arrow.png"
import alle from "./Assets2/alle.png"



function Tshirts(){
  
   
    return(<>


    <section className="adi">

          <div className="main">
          
          
         <div>
            <img src={polo} alt="img" width={150} />
            <h1>FRATINI</h1>
             <p>Solid  Regular Fit Men's T-shirt</p>
            <h6>$500</h6>
        </div>

         <div>
            <img src={louis} alt="img" width={150} />
            <h1>Louis Philippe</h1>
             <p>Solid  Regular Fit Men's T-shirt</p>
            <h6>$500</h6>

        </div>
           
        <div>
            <img src={celio} alt="img" width={150} />
            <h1>Celio</h1>
             <p>Solid  Regular Fit Men's T-shirt</p>
            <h6>$500</h6>
        </div>

         <div>
            <img src={fra} alt="img" width={150} />
            <h1>FRATINI</h1>
             <p>Solid  Regular Fit Men's T-shirt</p>
            <h6>$500</h6>
        </div>
         <div>
            <img src={jack} alt="img" width={150} />
            <h1>JACK & JONES</h1>
             <p>Solid  Regular Fit Men's T-shirt</p>
            <h6>$500</h6>
        </div>
         <div>
            <img src={alt} alt="img" width={150} />
            <h1>ALTLIFE</h1>
             <p>Solid  Regular Fit Men's T-shirt</p>
            <h6>$500</h6>
        </div>
         <div>
            <img src={lou} alt="img" width={150} />
            <h1>Louis Philippe</h1>
             <p>Solid  Regular Fit Men's T-shirt</p>
            <h6>$500</h6>
        </div>
         <div>
            <img src={arr} alt="img" width={150} />
            <h1>Arrow</h1>
             <p>Solid  Regular Fit Men's T-shirt</p>
            <h6>$500</h6>
        </div>

         <div>
            <img src={alle} alt="img" width={150} />
            <h1>Allen Solly</h1>
             <p>Solid  Regular Fit Men's T-shirt</p>
            <h6>$500</h6>
        </div>
        
        </div>

    </section>

        
        
    </>)

}
export default Tshirts  */
 


 import React from "react";
 import Header from "./Header";
 import { useDispatch } from "react-redux";
 import { addToCart } from "../slice/slice";
 import Tshirtproduct from "./Tshirt"
import Products from "./Products";

function Tshirts(){
    console.log(Tshirtproduct)

    const dispatch=useDispatch();

    const handleAddToCart=(Product)=>{
        dispatch(addToCart(Product));
        alert(`${Product.name} has been added to the cart!`);
  
     console.log("Product added:", Product);
    };

    
   return(
    <div className="adi">
    <div className="main">

            {Tshirtproduct.map((v,i)=>(

               <div key={i}>
                
               <img src={v.image}  ></img>
               <h1>{v.name}</h1>
                <p>{v.description}</p> 
                <h6>Price: ${v.price}</h6>
                <span className="starrating" data-rating="4.5"></span>
                
                <div className="buy">
                <button type="button" onClick={() => handleAddToCart(v)}>🛒ADD TO CART</button>
                      
                </div>  
                 
               </div>
              

))}                  
                                
        </div>
       </div>
   )


}
export default Tshirts


