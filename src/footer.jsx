import { useState } from "react";
import Modal from "./modal";
import { useLocation } from "react-router-dom";

export default function Footer() {
  const [openModal, setOpenModal] = useState(null);


  const location = useLocation();
  const isHome = location.pathname === "/"; // true if home page

  return (
    <>
      <div className="footer">
        © 2025 Cultural Humility Network. All rights reserved.

        <div className="options">
          <a onClick={() => setOpenModal(1)}>Privacy Policy</a>
          <a onClick={() => setOpenModal(2)}>Terms of Service</a>
          <a onClick={() => setOpenModal(4)}>Disclaimer</a>
          <a onClick={() => setOpenModal(3)}>Accessibility</a>
          <a onClick={() => setOpenModal(5)}>Donation Policy</a>
          <a onClick={() => setOpenModal(6)}>Sitemap</a>
        </div>




         {/* Pass `home` prop dynamically */}
      <Modal isOpen={openModal === 1} onClose={() => setOpenModal(null)} home={isHome}>

        <button className="cta mini" style={{width:"30%", marginTop:0, marginBottom:20}} onClick={() => setOpenModal(null)}>Close</button>
<br />
        <h3>Privacy Policy</h3>
        <hr />
        <p>Last updated: 02 Aug 2025</p>
<br />

        <h4>Who we are</h4>
        <p>The Cultural Humility Hub (“CHN”) is the data controller for this website and services. Contact: info@thechn.org.</p>
<br /><br />
 <h4>Data we process</h4>

<p> 
<b><ion-icon name="checkmark-done"></ion-icon> Account: </b>
 name, email, and profile details when you register/subscribe/post
 </p>

 <p> 
<b><ion-icon name="checkmark-done"></ion-icon> Usage: </b>
IP address, device, browser, pages visited (see Cookie Policy).
 </p>
 

  <p> 
<b><ion-icon name="checkmark-done"></ion-icon> Community: </b>
posts, comments, reactions, flags.
 </p>
 

  <p> 
<b><ion-icon name="checkmark-done"></ion-icon> Learning: </b>
PayPal transaction confirmations (we do not store card details).
 </p>
 


       <br />

<br />
       <h4>Why & lawful bases</h4>

<p> 
<ion-icon name="checkmark-done"></ion-icon> Provide and improve services; issue certificates (contract/legitimate interests).
 </p>

 <p> 
<ion-icon name="checkmark-done"></ion-icon>Security, anti‑abuse, moderation (legitimate interests/legal obligation).
 </p>
  

  <p> 
<ion-icon name="checkmark-done"></ion-icon> Communications (service emails; marketing only with consent). </p>

 <p> 
<ion-icon name="checkmark-done"></ion-icon>Legal obligations (e.g., record keeping). </p>
  <br /><br />

         <h4>Sharing</h4>

<p> 
Vendors (e.g., hosting, analytics, PayPal), legal requests, or restructuring with notice. We do not sell your data.
</p>

<br /><br />
        <h4>Retention</h4>

<p> 
We retain data only as long as necessary (e.g., analytics up to 26 months). You may request deletion via email.
 </p><br /><br />
        



       <h4>Your rights (UK GDPR)</h4>

<p> 
<ion-icon name="checkmark-done"></ion-icon> Access, rectification, erasure, restriction, portability, objection, and withdrawal of consent. </p>



<p> 
<ion-icon name="checkmark-done"></ion-icon> Complain to the ICO: ico.org.uk.</p>

        <br /><br />

                <h4>International transfers</h4>

<p> 
When used, we rely on adequacy decisions, SCCs, or equivalent safeguards</p>
<br /><br />



        <h4>Security</h4>

<p> 
Industry‑standard technical and organisational measures; no method is 100% secure.</p><br /><br />




                <h4>Children</h4>

<p> 
Not intended for under‑13s; we do not knowingly collect children’s data.</p>
<br /><br />
      </Modal>




     {/* Pass `home` prop dynamically */}
      <Modal isOpen={openModal === 2} onClose={() => setOpenModal(null)} home={isHome}>

        <button className="cta mini" style={{width:"30%", marginTop:0, marginBottom:20}} onClick={() => setOpenModal(null)}>Close</button>
<br />
        <h3>Terms of Service</h3>
        <hr />
        <p>Last updated: 02 Aug 2025</p>
<br />

        <h4>Acceptance</h4>
        <p>By using CHH you agree to these Terms. If you do not agree, do not use the site.</p>
<br />
 <h4>Accounts & Conduct</h4>

<p> 
    <ion-icon name="checkmark-done"></ion-icon>
Keep credentials secure; you are responsible for activity on your account
 </p>

 <p>
    <ion-icon name="checkmark-done"></ion-icon> 
No unlawful, discriminatory, harassing, or infringing content/actions.
 </p>

 <p> 
    <ion-icon name="checkmark-done"></ion-icon>
We may moderate, remove content, or suspend accounts for breaches.
 </p>

 <br />



        <h4>Content & Licences</h4>
        <p>You own your posts; you grant CHH a non‑exclusive licence to host/display for operation of the site. You must have rights to what you post.</p>
<br />



        <h4>Learning & Certificates</h4>
        <p>Certificates may be issued upon completion; CHH may revoke for misuse or fraud.</p>
<br />


        <h4>Donations</h4>
        <p>Processed by PayPal. Donations are generally non‑refundable except where required by law or in case of error.</p>
<br />



        <h4>Availability</h4>
        <p>Service is provided “as is” without warranty; we may change or discontinue features.</p>
<br />



        <h4>Liability</h4>
        <p>To the extent permitted by law, CHH excludes liability for indirect or consequential loss.</p>
<br />




        <h4>Governing Law</h4>
        <p>These Terms are governed by the laws of England and Wales. Contact: info@thechh.org.</p>
<br />
  </Modal>

      {/* Pass `home` prop dynamically */}
      <Modal isOpen={openModal === 4} onClose={() => setOpenModal(null)} home={isHome}>

        <button className="cta mini" style={{width:"30%", marginTop:0, marginBottom:20}} onClick={() => setOpenModal(null)}>Close</button>
<br />
        <h3>Educational Disclaimer</h3>
        <hr />
        <p>Last updated: 02 Aug 2025</p>
<br />

        {/* <h4>Acceptance</h4> */}
        <p>Content is for educational purposes only and does not constitute legal, medical, or professional advice. Always seek appropriately qualified advice for specific situations. CHH does not guarantee completeness or accuracy of materials and is not responsible for outcomes resulting from their use. Views expressed by community members are their own.</p>
<br />
 <h4>External Links</h4>

<p> 
    <ion-icon name="checkmark-done"></ion-icon>
Links to third‑party sites are provided for convenience; CHH is not responsible for their content or policies
 </p>

 </Modal>



       {/* Pass `home` prop dynamically */}
      <Modal isOpen={openModal === 3} onClose={() => setOpenModal(null)} home={isHome}>

        <button className="cta mini" style={{width:"30%", marginTop:0, marginBottom:20}} onClick={() => setOpenModal(null)}>Close</button>
<br />
        <h3>Accessibility Statement</h3>
        <hr />
        <p>Last updated: 02 Aug 2025</p>
<br />

        <h4>Commitment</h4>
        <p>We aim to meet WCAG 2.1 AA across the site in line with the Equality Act 2010 and the Public Sector Bodies (Websites and Mobile Applications) Accessibility Regulations 2018.</p>
<br />

  

 <h4>What we’ve done</h4>

<p> 
    <ion-icon name="checkmark-done"></ion-icon>
Keyboard‑accessible navigation and focus states. </p>

 <p> 
    <ion-icon name="checkmark-done"></ion-icon>
Text alternatives for non‑text content.
 </p>

 <p> 
    <ion-icon name="checkmark-done"></ion-icon>
Responsive layouts with sufficient colour contrast.
 </p>
 <p> 
    <ion-icon name="checkmark-done"></ion-icon>
ARIA semantics for menus and dialogs.
 </p>

 <br />
         <h4>Known issues</h4>
        <p>Some PDFs and older videos lack full accessibility. Target resolution: September 2025.</p>
<br />

 <br />
         <h4>Feedback & Enforcement</h4>
        <p>Email info@thechh.org. You can contact the Equality Advisory and Support Service (EASS). The Equality and Human Rights Commission (EHRC) is responsible for enforcement.</p>
<br />


 </Modal>




      {/* Pass `home` prop dynamically */}
      <Modal isOpen={openModal === 5} onClose={() => setOpenModal(null)} home={isHome}>

        <button className="cta mini" style={{width:"30%", marginTop:0, marginBottom:20}} onClick={() => setOpenModal(null)}>Close</button>
<br />
        <h3>Donation Policy</h3>
        <hr />
        <p>Last updated: 02 Aug 2025</p>
<br />

        <h4>Purpose</h4>
        <p>Donations sustain hosting, maintenance, accessibility improvements, and educational content. Donations do not influence access levels.</p>
<br />


        <h4>Processing</h4>
        <p>Payments are processed by PayPal; CHH does not handle or store card details.</p>
<br />


 <h4>Use of Funds</h4>

<p> 
    <ion-icon name="checkmark-done"></ion-icon>
Hosting and infrastructure.
 </p>

 <p> 
    <ion-icon name="checkmark-done"></ion-icon>
Content development and updates.
 </p>

 <p> 
    <ion-icon name="checkmark-done"></ion-icon>
Accessibility and QA tooling.
 </p>
<br />

  <h4>Refunds</h4>

<p> 
Non‑refundable except where required by law or in case of error (email admin@thechh.org within 7 days).
 </p>

 <br />
  <h4>Transparency</h4>

<p> 
We aim to publish annual summaries of how funds are used.
 </p>
 

 </Modal>




   {/* Pass `home` prop dynamically */}
      <Modal isOpen={openModal === 6} onClose={() => setOpenModal(null)} home={isHome}>

        <button className="cta mini" style={{width:"30%", marginTop:0, marginBottom:20}} onClick={() => setOpenModal(null)}>Close</button>
<br />
        <h3>Sitemap</h3>
        <hr />

<br />
<p> 
    <ion-icon name="checkmark-done"></ion-icon> Home
 </p>

 <p> 
    <ion-icon name="checkmark-done"></ion-icon>  About
 </p>

 <p> 
    <ion-icon name="checkmark-done"></ion-icon>  Modules
 </p>

 <p> 
    <ion-icon name="checkmark-done"></ion-icon>   Community
 </p>
 <p> 
    <ion-icon name="checkmark-done"></ion-icon>   Support
 </p>


 <p> 
    <ion-icon name="checkmark-done"></ion-icon>   Dashboard
 </p>
 <p> 
    <ion-icon name="checkmark-done"></ion-icon>   Login
 </p>




</Modal>

      </div>
    </>
  );
}