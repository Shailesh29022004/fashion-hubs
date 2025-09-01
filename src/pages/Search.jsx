import React, { use, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Products from "./Products";
import Itemsproduct from "./Product"


function Search(){

    const{term}=useParams();
    const[filterdata,setData]=useState([]);

    useEffect(()=>{

        const filterdata=()=>{

             const productsData=Itemsproduct.filter((p)=>
                p.category.toLowerCase().includes(term.toLowerCase())
            );
    
             setData(productsData);
        };

         filterdata();

},[term]);

    return(<>
    <Products Itemsproduct={filterdata}/>
    
    </>)
}export default Search