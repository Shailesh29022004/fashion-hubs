
import React from "react";
 import { useDispatch } from "react-redux";
 import { addToCart } from "../slice/slice";
import rain2 from "../Assets2/rain2.png";
import rain1 from "../Assets2/rain1.png";
import Rainnproduct from "./Rainn";


  function Rain(){
    console.log(Rainnproduct)

      const dispatch=useDispatch();
    
        const handleAddToCart=(Product)=>{
            dispatch(addToCart(Product));
            alert(`${Product.name} has been added to the cart!`);
      
         console.log("Product added:", Product);
        };


    return(<>
         <div className="rainn">

        <div  className="be">

        <div className="ue">
            <img src={rain2} alt="img" width={300} />
        </div>

        <div className="uo">
          <img src={rain1} alt="img"  width={320}/>
        </div>

        <div className="ready">
        <h1>FASHION</h1>
        <p>CLIMATE CLOTHING</p>
        <h2>-----------BE RAIN READY!</h2>
        </div>

    </div>

   </div>

    
   <div className="coat">
    <h1>MEN</h1>
    <div className="rcoat">
    
    {Rainnproduct.map((v,i)=>(
       
              <div>
               <img src={v.image} width={210} ></img>
               <h1>{v.name}</h1>
                <h6>{v.description}</h6> 
               <p>Price:${v.price}</p> 
                <span className="starrating" data-rating="4.5"></span>
               <div className="rai">
                <button type="button" onClick={() => handleAddToCart(v)}>🛒ADD TO CART</button>
                      
                </div>        
               </div> 
))}
    
    </div>

   </div>
</>)
}
export default  Rain


