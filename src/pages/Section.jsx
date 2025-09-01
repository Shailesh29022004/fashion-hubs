import React, { useState } from 'react';
import bgm1 from "../Assets2/happy-beautiful-couple-posing-with-shopping-bags-violet.png"
import bgm3 from "../Assets2//linen.png"
import bgm4 from "../Assets2/formal shirt.jpg"
import bgm5 from "../Assets2/chic.png"
import bgm6 from "../Assets2/boy2-removebg-preview (1).png"
import bgm7 from "../Assets2/Rectangle 50.png"
import bgm8 from "../Assets2/Rectangle 49.png"
import bgm9 from "../Assets2/image copy.png"
import bgm10 from "../Assets2/image.png"
import men from "../Assets2/mens.png"
import wes from "../Assets2/ws.png"
import indian from "../Assets2/indw.png"
import kids from "../Assets2/kidsw.jpg"
import strip from "../Assets2/s.png"
import jean from "../Assets2/bagy.png"
import top from "../Assets2/offtop.png"
import adi from "../Assets2/adi.png"
import puma from "../Assets2/puma.png"
import calv from "../Assets2/calv.png"
import nik from "../Assets2/nike.png"
import tomm from "../Assets2/tomm.png"
import rain from "../Assets2/Rai.png"
import { Link } from "react-router-dom";


function Section(){
  
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can replace this with your backend logic
    console.log('Email submitted:', email);
    // Reset input
    setEmail('');
  };


    return(<div className='home'>
    
    <section className="lets">
        
            <div>
               <div  className="un">
                <h1><span>LET'S</span></h1>
                <h1>EXPLORE</h1> 
                <h2><span>UNIQUE</span></h2>
                <h1>CLOTHES.</h1><br></br>
                <p>Live for Influential and Innovative fashion!</p><br></br>
               
              </div>
               <button type="submit">Shop Now</button>
              </div>
              <div>
              <img src={bgm1} alt="img" width={500} />
              </div>
     </section>

    

           <section className="brand">
           <img src={adi} alt="img" width={130} />
           <img src={puma} alt="img"   width={130}/>
           <img src={calv} alt="img"   width={130}/>
           <img src={nik} alt="img"   width={130}/>
           <img src={tomm} alt="img"   width={130}/>
          </section>
          
          <section className="cate">
              <h1>SHOP BY CATEGORY</h1>

              <div  className="cate1">
            <Link to={"Mens"}><div className="men">
                <img src={men } alt="img" width={150} />
                <p>MEN</p>
            </div></Link>

            <Link to={"Rain"}><div className="rain">
                <img src={rain} alt="img" width={130} />
                <p>RAINWEAR</p>
            </div></Link>

           <div className="wes">
                <img src={wes} alt="img" width={130} />
                <p>WESTERNWEAR</p>
            </div>

            <div className="ind">
                <img src={indian} alt="img" width={120} />
                <p>INDIAN WEAR</p>

            </div>
            <div className="KID">
                <img src={kids} alt="img"  width={120}/>
                <p>KIDSWEAR</p>
            </div>
</div> </section>


         <section className="trending">
            <h2>TRENDING NOW</h2>

          <div className="trend">

            <div className="strip">
              <div>  
                <h1>STRIPED SHIRT</h1>
                <p>Up to 65% off</p></div>
                <img src={strip} alt="img" width={400} />
            </div>

            <div className="baggy">
                <h1>BAGGY JEANS</h1>
                <p>Up to 70% off</p>
                <img src={jean} alt="img" width={290} />
            </div>

            
             
              <div className="top">
              <h1>OFF-SHOULDER TOPS</h1>
              <p>Up to 70% off</p>
              <img src={top} alt="img" width={350} />
            </div>
            </div>

         </section>
    
    
           <section class="arrival">
           <div>
            <h1>🆕 NEW ARRIVALS</h1>
             <p>Fresh styles, just landed! Discover what's trending now.</p>
            <div class="coats">
    
                <div className="hood">
                <img src={bgm3} alt="img" width={320} />
                <h5>Summer Linen Set</h5>
                <p>Explore Now!</p>
                </div>
                
                 <div className="shirt">
                <img src={bgm4} alt="img" width={370}/>
                 <h5>Formal shirt</h5>
                 <p>Explore Now!</p>
                 </div>
    
                <div className="girl">
               <img src={bgm5} alt="img" width={320} />
                <h5>Chic Office Blazer</h5>
                <p>Explore Now!</p>
                </div>
                
              </div>
            </div>
        </section>
     

     

        
      <section class="payday">
  <div class="payday-img">
    <img src={bgm6} alt="Flash Fashion Sale"/>
  </div>

  <div class="payday-sale">
    <h1><span>FLASH DEAL</span></h1>
    <h3><span>FASHION BONANZA</span></h3>
    <p>Shop for $150+ & get <strong>40% OFF</strong> instantly</p>
    <p>Use Code: <strong>FASHION40</strong></p>
    <p>Valid: 5 Aug - 15 Aug 2025</p>
    <p class="terms">*Limited time offer. T&C apply.</p>
    <button type="submit">GRAB THE DEAL</button>
  </div>
</section>


    
        <section class='young'>
            <div>
            <h2>Young’s Favourite</h2>
             
                <div class="you1">
                    <div>
                    <img src={bgm7} alt="img" width={500}/>
                    <h1>Trending on instagram</h1>
                    <p>Explore Now!</p>
                    </div>
    
                    <div>
                    <img src={bgm8} alt="img" width={500}/>
                    <h1>All Under $40</h1>
                    <p>Explore Now!</p>
                   </div>
               
                </div>
    </div>
        </section>
    
        <section class="subscribe">
        
          <div>
            <img src={bgm9} alt="img" width={250}/>
            </div> 
    
            <div class="new">
                <h1>Exclusive offer</h1>
                <p>Unlock the ultimate style upgrade with our exclusive<br></br> offer Enjoy savings of up to 40% off on our latest New Arrivals</p><br></br>
               
                <div class="day">
                    <p>06<br></br><small>Days</small></p>
                    <p>18<br></br><small>Hours</small></p>
                    <p>48<br></br><small>Min</small></p>
                </div><br></br>
               <button>BUY NOW</button>
            </div>
              
            <div>
                <img src={bgm10} alt="img" width={230} />
            </div>
              </section>
     
    
        <section class="email">
            <div>
            <div>
            <h1>JOIN SHOPPING COMMUNITY TO<br></br> GET MONTHLY PROMO</h1>
              <p>Type your email down below and be young wild generation</p><br></br>
             </div>
            
        
         <form onSubmit={handleSubmit}>
          <div className="fo">
        <label htmlFor="email"></label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Add your email here"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">SEND</button>
     
      </div>
     </form>
        </div>
        </section>
    
    </div>)

}
export default Section
