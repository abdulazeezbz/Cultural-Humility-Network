import { useState } from 'react'
import { Routes, Route, useNavigate } from "react-router-dom";
import './App.css'

import AppLogo from './assets/logo.png'
import FounderIcon from './assets/founder-placeholder.jpg'

import Login from './login';
import TopNav from './topnava';
import Footer from './footer';

const Support = () => {
    const navigate = useNavigate();   // <-- HERE
  return (
    <>
      <TopNav/>

      
               <div className="founder b sup"  data-aos="fade-up" data-aos-delay="500" data-aos-duration="500">

          <div className="a"> 
            <h2>Support CHN</h2>
                    <p style={{textAlign:'center', maxWidth:'90%', marginLeft:'20px', marginTop:10,}}>CHN is free and self-funded so anyone can learn. If our work helps you or your organisation, a voluntary contribution keeps the lights on and the work growing.</p>
                    


                      <a href="https://paypal.me/JESSEUSMAN" target='_blank'><button className="cta"><ion-icon name="logo-paypal"></ion-icon> Support with PayPal</button></a>
                      <button className="cta outlines"  onClick={()=> navigate("/community")}>Join The Community</button>
                    
                    </div>
            </div>
        
<br />

             <section className="layout nn ab">
  <div className='child' data-aos-delay="500" data-aos-duration="500">
    <h3 style={{textAlign:'left'}}>
      Why your support matters
    </h3>
    <p style={{fontSize:16, marginLeft:0, textAlign:'left'}}>
      Contributions cover essentials and help us expand access, quality, and impact:</p>
      <br /><br />


    <ul>
      <ion-icon name="checkmark-done-circle-outline"></ion-icon> Hosting & infrastructure to keep the site fast, secure, and accessible.
      <br /> <ion-icon name="checkmark-done-circle-outline"></ion-icon> Regular content updates across modules and resources.
      <br /> <ion-icon name="checkmark-done-circle-outline"></ion-icon> New tools and features driven by user feedback.
      <br /> <ion-icon name="checkmark-done-circle-outline"></ion-icon> Community events, moderation, and learner support.
      <br /> <ion-icon name="checkmark-done-circle-outline"></ion-icon> Accessibility improvements and mobile optimisation.
      <br />
     
    </ul>
  </div>

  <div className='child' data-aos-delay="500" data-aos-duration="500">
    <h3 style={{textAlign:'left'}}>
      Where your contribution goes
    </h3>
    <p style={{fontSize:16, marginLeft:0, textAlign:'left'}}>We’re not a charity, donations are optional and help sustain free access.</p>

    <div className="cols">
        <div className="">
            <h4 className='A'><ion-icon name="checkmark-done-circle-outline"></ion-icon> Infrastructure</h4>
            <h4>Hosting, backups, monitoring</h4>
        </div>
        <div className="">
            <h4 className='A'> <ion-icon name="checkmark-done-circle-outline"></ion-icon>Learning content</h4>
            <h4>New modules, research updates</h4>
        </div>
        <div className="">
            <h4 className='A'> <ion-icon name="checkmark-done-circle-outline"></ion-icon>Community</h4>
            <h4>Forums, moderation, events</h4>
        </div>
    </div>
  </div>

  
</section>



               <div className="founder b sup an"  data-aos="fade-up" data-aos-delay="500" data-aos-duration="500">

          <div className="a"> 
            <h2>Ways to support</h2>
                    <p style={{textAlign:'center', maxWidth:'90%', marginLeft:'20px', marginTop:10,}}>If you’d like to contribute financially, use the PayPal button. Non-financial support is welcome too: share CHN, contribute a case study, or invite colleagues.</p>
                    


<div className="tribtn" style={{display:'flex', justifyContent:"center"}}>
                      <a href="https://paypal.me/JESSEUSMAN" target='_blank'><button className="cta mini"><ion-icon name="logo-paypal"></ion-icon> Support with PayPal</button></a>
                      <button className="cta outlines mini" onClick={()=> navigate("/community")}>Contribute content</button>
                      <button className="cta outlines mini"   onClick={()=> navigate("/")}>Subscribe for updates</button>
                    </div>
                    </div>
            </div>
        

        <div className="founder" data-aos="fade-up" data-aos-delay="500" data-aos-duration="500">
 <div className="a"> 
     <h2 style={{lineHeight:1, textAlign:'left', marginLeft:10,}}>Frequently Asked Questions</h2>
<br />
     <details className='faq' open>
        <summary>Is my contribution required to access CHN?</summary>

        <p style={{textAlign:'left', fontSize:14}}>No. Core modules and community areas remain free for everyone. Donations are optional.</p>
     </details>

      <details className='faq'>
        <summary>How are contributions processed?</summary>

        <p style={{textAlign:'left', fontSize:14}}>Payments go through PayPal. We don’t store card details and only receive confirmation metadata.</p>
     </details>


      <details className='faq'>
        <summary>Can I help without donating?</summary>

        <p style={{textAlign:'left', fontSize:14}}>Absolutely—share CHN with colleagues, submit a blog post or case study, or join forum discussions.</p>
     </details>


     <details className='faq'  id='contact'>
        <summary>How long does each module take?</summary>

        <p style={{textAlign:'left', fontSize:14}}>Between 1 and 1.5 hours. It’s self-paced and your progress is saved.</p>
     </details>

      <details className='faq'  id='contact'>
        <summary>Will I get a receipt or invoice?</summary>

        <p style={{textAlign:'left', fontSize:14}}>PayPal provides a receipt. CHN isn’t a charity, so we can’t issue Gift Aid receipts.</p>
     </details>
      

    </div>

    
 
</div>



   <div className="founder b sup an"  data-aos="fade-up" data-aos-delay="500" data-aos-duration="500">

          <div className="a"> 
            <h2>Thank you</h2>
                    <p style={{textAlign:'center', maxWidth:'90%', marginLeft:'20px', marginTop:10,}}>Whether you donate, share our work, or take part in the community—thank you for moving cultural humility forward.</p>
                    


                    </div>
            </div>
<br /><br />


<Footer />
     
    </>
  )
}

export default Support