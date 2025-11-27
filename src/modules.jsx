import { useState } from 'react'
import { Routes, Route, useNavigate } from "react-router-dom";
import './App.css'

import AppLogo from './assets/logo.png'
import FounderIcon from './assets/founder-placeholder.jpg'

import Login from './login';
import TopNav from './topnava';
import Footer from './footer';

function Modules() {
   const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  const navigate = useNavigate();   // <-- HERE


  

  return (
    <>

    <TopNav />

   




     <br /><br />
    



        <div className="content modules"  data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
           <div className="why card">
          <h2 style={{lineHeight:1, textAlign:'left'}}> Cultural Humility in Practice</h2>
          <p id="ABZZ" style={{fontSize:16, marginLeft:0, textAlign:'left'}} className='b' >This hub offers self-guided learning on cultural humility in health, social care, education and community settings. Work through core modules, explore specialist topics, and collect certificates you can use for CPD or portfolio evidence.</p>
</div>
<br /><hr /><br />



          

             <div className="content b">

           <div className="card" style={{textAlign:'left'}}>
  <h2 style={{textAlign:'left', lineHeight:1}}>Access, contributions and how this hub is funded</h2><br />
  <p style={{textAlign:'left'}}> This learning space is a small, independent project. It is <b>not run as a business</b> and is <b>not a registered charity or NGO</b>. Any money given simply helps with hosting, maintenance and ongoing development of the webapp and resources.</p>


  <br />
<div className="card">
  <li>Modules 1 and 2 are free for anyone to access.</li>
  <li>Modules 3–15 are contribution-supported: a minimum contribution of £5 is requested for access, and any amount above that is welcome.</li>
  <li>Contributions are voluntary and go towards running costs only. They should not be treated as charitable donations for tax or gift-aid purposes, and they do not purchase personalised clinical, legal or financial advice.</li>
  <li>If a financial contribution is difficult or you would prefer to support in another way, please log in and contact us so we can discuss options such as free access, collaboration or sharing resources.</li>
  </div>
  


<div className="badges">
  <span><ion-icon name="barbell-outline"></ion-icon> Free access: Modules 1–2</span>
  <span><ion-icon name="analytics-outline"></ion-icon> Contribution-supported: Modules 3–15 (min £5)</span>
  <span><ion-icon name="business-outline"></ion-icon> Core pathway: Modules 1–5</span>
</div>
<br />
  <p style={{textAlign:'left'}}>
You can use the 
<a href="/about#contact">{" "}contact form </a>to ask for payment details (for example PayPal or bank transfer) or to offer other kinds of support.</p>
<br />
</div>
</div>







          {/* <h2>Interactive Learning Modules</h2>
          <p>Comprehensive, evidence-based training in cultural humility. Work at your pace with interactive scenarios, quizzes, and reflections. Complete a module at ≥80% to unlock its certificate; finish all five for the overall certificate.
          </p> */}

          <div className="progress">
            <div className="to"><h2>Core pathway progress</h2> <p>0/5 completed</p></div>
            <p>Modules 1–5 make up the core pathway. Advanced and specialist modules (6–15) can be taken in any order.</p>
            
            <div className="slid">
                <div className="Scont"></div>
            </div>

            <p>Complete each core module to unlock certificates..</p>
          </div>
      </div>

      <div className="content">
        <div className="layout b modules aa">
           

         
           



                        
        </div>
      </div>

        <div className="content cert" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
            <div className="">
          <h2>Certificates</h2>
          <p><b>Per-module certificates:</b> Available as soon as each module is completed. Use the button on each card.</p>
          
          <br />
          <button className="cta cerr"  onClick={()=> navigate("/login")}>Generate Certificate</button>
          <p>Every certificate includes a unique serial and public verification link.</p>
          </div>

           <div className="">
            <h2>.</h2>
          <p><b>Overall certificate:</b>Complete all 5 modules to unlock.
          </p>
          <br />

          <button className="cta cerr"  onClick={()=> navigate("/login")}>Generate Certificate</button>
          <p>Complete all modules to unlock the overall certificate.</p>

          
          </div>
        </div>


<br /><br /><br />


      
      <Footer />

    </>
  )
}

export default Modules
