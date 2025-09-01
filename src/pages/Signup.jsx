import React, { useState } from "react";
import { useEffect } from "react";
function Signup(){
    const[Signup,setsignup]=useState({
        fname:"",
        email:"",
        Password:"",
    })

    const [submitted, setSubmitted] = useState(false); // New state to trigger useEffect

    function  handlechange(event){
        let name=event.target.name;
        let value=event.target.value;

        setsignup((prev)=>({...prev,[name]:value}))
    }

    function handleSubmit(event){
        event.preventDefault();

        if (Signup.Password.length < 8) {
    alert("Password must be at least 8 characters long!");
    return;   // Stop form submission
  }



        console.log(Signup)
        setSubmitted(true);  // Trigger useEffect

        setsignup({
             fname:"",
             email:"",
             Password:"",
        })
 
    }


    useEffect(() => {
    if (submitted) {
      alert("SING UP Successfully!");
      setSubmitted(false); // Reset the flag
    }
  }, [submitted]);



    return(
    <div className="for">
    <form onSubmit={handleSubmit} className="rou">
        <h2>SIGN UP</h2>
     <div className="text">
        <input
        type="text"
        placeholder="Enter your name"
        value={Signup.fname}
        name="fname"
        onChange={handlechange}
        />

        <input
        type="email"
        name="email"
        value={Signup.email}
        onChange={handlechange}
        placeholder="Your Email"
       />
        

       <input
        type="text"
        name="Password"
        value={Signup.Password}
        onChange={handlechange}
        placeholder="Your Password" 
       />          
     <button type="submit">SUBMIT</button>
 
 
 </div>
</form>
</div>
    )

}export default Signup