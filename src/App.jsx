import "./pages/Fashion.css"
import Header from "./pages/Header"
import Rain from "./pages/Rain"
import Section from "./pages/Section"
import Mens from "./pages/Mens"
import Tshirts from "./pages/Tshirts"
import{BrowserRouter,Route,Routes} from "react-router-dom"
import "./pages/Tshirt.css"
import "./pages/Mens.css"
import "./pages/Footer.css"
import "./pages/Rain.css"
import Footer from "./pages/Footer"
import Signup from "./pages/Signup"
import "./pages/Sign.css"
import Search from "./pages/Search"
import "./pages/products.css"
import Products from "./pages/Products"
import Cart from "./pages/Cart"
import "./pages/Cart.css"
import { useRef } from "react"

function App(){
  
  return(
    <>
    <BrowserRouter>
     <Header/>
    
     <Routes>
      
      <Route element={<Section/>} path="/"/>
      <Route element={<Search/>} path="/search/:term"/>
      <Route element={<Mens/>} path="/mens"/>
      <Route element={<Tshirts/>} path="/tshirt"/>
      <Route element={<Rain/>} path="/Rain"/>
      <Route element={<Signup/>} path="/signup"/>
      <Route element={<Products/>} path="/products"/>
      <Route element={<Cart/>} path="cart" />
     

      </Routes> 
       
     <Footer/>
    
     </BrowserRouter>
   
    </>
    
  )
}export default App;
 
