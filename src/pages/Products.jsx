import React from "react"
 import { useDispatch } from "react-redux";
 import { addToCart } from "../slice/slice";
import Itemsproduct from "./Product"

function Products(){
console.log(Itemsproduct);

  const dispatch=useDispatch();

    const handleAddToCart=(Product)=>{
        dispatch(addToCart(Product));
        alert(`${Product.name} has been added to the cart!`);
  
     console.log("Product added:", Product);
    };

return(

  <div className="xys">
    <div className="abcd">
 
  {Itemsproduct.map((v,i)=>(
    <div key={i}>
         <img src={v.image} width={250} alt={v.name} />
               <h1>{v.name}</h1>
                {v.description && <p>{v.description}</p>}
                <h6>Price:${v.price}</h6> 
                 <span className="starrating" data-rating="4.5"></span>
                <div className="pro">
                
                <button type="button"  onClick={() => handleAddToCart(v)}>🛒ADD TO CART</button>
                      
                </div>  
    </div>

 ))}
</div>
</div>



);

}
export default Products



