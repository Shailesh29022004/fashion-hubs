import React from "react";
import bgm11 from "../Assets2/image copy 5.png"
import bgm12 from "../Assets2/image copy 6.png"
import bgm13 from "../Assets2/image copy 4.png"
import bgm14 from "../Assets2/image copy 7.png"

function Footer(){
    return(
    <>
   { <footer className="footer">
  <div className="footer__container">

    <div className="footer__brand">
      <h1>FASHION</h1>
      <p>Complete your style with awesome clothes from us.</p>
      <div className="footer__socials">
        <img src={bgm11} alt="Instagram" />
        <img src={bgm12} alt="Twitter" />
        <img src={bgm13} alt="Facebook" />
        <img src={bgm14} alt="LinkedIn" />
      </div>
    </div>

    <div className="footer__links">
      <div className="footer__section">
        <h4>Company</h4>
        <a href="#">About us</a>
        <a href="#">Contact us</a>
        <a href="#">Support</a>
      </div>

      <div className="footer__section">
        <h4>Quick Links</h4>
        <a href="#">Share Location</a>
        <a href="#">Orders Tracking</a>
        <a href="#">Size Guide</a>
        <a href="#">FAQs</a>
      </div>

      <div className="footer__section">
        <h4>Legal</h4>
        <a href="#">Terms & Conditions</a>
        <a href="#">Privacy Policy</a>
      </div>
    </div>

  </div>
</footer>

     }
    
    </>)
}export default Footer