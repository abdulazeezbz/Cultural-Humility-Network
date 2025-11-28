import { useState } from 'react'
import { Routes, Route, useNavigate } from "react-router-dom";
import './App.css'

import AppLogo from './assets/logo.png'
import FounderIcon from './assets/founder-placeholder.jpg'

import Login from './login';
import TopNav from './topnava';
import Footer from './footer';

const About = () => {


    const navigate = useNavigate();   // <-- HERE
    
  return (
    <>
      <TopNav/>

        <div className="content modules about"  data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
          <h2>About CHN</h2>
          <p>The Cultural Humility Network (CHN) brings together education, practice and research to
             support more equitable care and learning environments. <br />
             We focus on turning evidence into practical tools that help people notice power, listen differently, and act for change
          </p>

<div className="">
<button className="cta"  onClick={()=> navigate("/modules")}>Explore Learn & Modules</button>
          <button className="cta outlines" onClick={()=> navigate("/training")}>Training & Workshops</button>
          <button className="cta outlines" onClick={()=> navigate("/community")}>Meet The Community</button>
</div>


      </div>


<section class="section glanc">
  <div className="">
  <h2>
    CHN at a Glance
  </h2>

  <p>The hub sits at the intersection of cultural humility, implementation science and community partnership.</p>  

<div class="glance" aria-label="Cultural Humility Hub at a glance">
      <div class="glance-item">
        <div class="glance-label">Focus</div>
        <div class="glance-value">Health &amp; education</div>
        <p class="glance-text">Working across clinical, social care, community and university settings.</p>
      </div>
      <div class="glance-item">
        <div class="glance-label">Approach</div>
        <div class="glance-value">Implementation science</div>
        <p class="glance-text">Turning evidence and lived experience into everyday practice.</p>
      </div>
      <div class="glance-item">
        <div class="glance-label">Core idea</div>
        <div class="glance-value">Cultural humility</div>
        <p class="glance-text">Lifelong self-reflection, power awareness and partnership, not one-off training.</p>
      </div>
      <div class="glance-item">
        <div class="glance-label">Ways to engage</div>
        <div class="glance-value">Learn · Train · Connect</div>
        <p class="glance-text">Self-paced modules, live training and a moderated global community.</p>
      </div>
    </div>



</div>



  </section>

  <hr />
                <div className="founder b ann" data-aos="fade-up" data-aos-delay="500" data-aos-duration="500">

                  <div className="a">  <h2>Our Founder</h2>
                            <img src={FounderIcon} alt='' />
                </div>
                          <div className="b">
                                      <p id="ABZZ" style={{textAlign:'left'}}>
                                        Dr Jesse Enebi Usman is a lecturer, social care nurse and public health practitioner with experience across West Africa and the UK.
                                        <br />
                                        He has worked in acute mental health, community services and higher education, supporting people and families from a wide range of cultural, faith and migration backgrounds. <br />
                                        Jesse holds advanced degrees in nursing, public health and implementation science. His academic work explores how evidence-based approaches to cultural humility, anti-racism and co-production 'can be embedded into real services and curricula, rather than remaining as one-off workshops. His research has been published in international journals and shared at conferences in the UK and abroad <br />
                                        The Cultural Humility Hub emerged from repeated patterns Jesse noticed in practice: people experiencing poorer outcomes, distress or exclusion not because of a lack of expertise, but because cultural needs, histories and power imbalances were not being recognised. CHN was created to offer structured, evidence-informed ways for professionals and organisations 'to reflect, learn and act together for more just systems.
                                      </p>
                      </div>   
                      </div>




                      <div className="founder sii" data-aos="fade-up" data-aos-delay="500" data-aos-duration="500">

                  <div className="a"> 
                    <h2>Our Mission & Vision</h2>
                    <br />
                            <p id="ABZZ">Our mission is to equip people working in health, social care, public health and education with the mindset and tools to practise cultural humility.
                              We focus on everyday decisions, conversations and systems that either widen or reduce inequalities. <br />

                              Our vision is a world where cultural humility is a normal part of practice. In this world, people are listened to, power is shared more fairly, and outcomes are less shaped by race, migration status, class, disability, gender, sexuality or faith.
                            </p>
                </div>






                <div className="a">
                    {/* <h2 className='Val' data-aos="fade-up" data-aos-delay="500" data-aos-duration="500">Our Values</h2> */}

                  {/* <div className="ourvalues" data-aos="fade-up" data-aos-delay="500" data-aos-duration="500"> */}
<h2 style={{textAlign:'left'}} data-aos="fade-up" data-aos-delay="500" data-aos-duration="500">Our Values</h2>
<br />
<div data-aos="fade-up" data-aos-delay="500" data-aos-duration="500">
                  <p><b>Respect & Empathy</b> <br />  Honouring each person’s story and experience</p>
                  <p><b>Lifelong Learning</b> <br />  
                  Committed to growth, reflection, and adaptation.</p>
                  

                  <p><b>Equity & Inclusion</b> <br />  
                  Challenging power imbalances and promoting fairness.</p>
                  
                    <p><b>Evidence-Based Practice</b> <br />  
                  Grounded in rigorous research and implementation science.</p>
                  
                  <p  id='support'><b>Community Collaboration</b> <br />  
                  Building connections for shared learning and support.</p>
                  
                  </div>
        
                </div>
              


             
                    </div> 



<hr />
<section class="section glanc aa">
  <div className="">
  <h2>
    Who is this for?
  </h2>
 <ul>
  <li> <ion-icon name="checkmark-done-circle-outline"></ion-icon> Health, social care and mental health professionals seeking to practise in more culturally humble, anti-racist ways.</li>
<li> <ion-icon name="checkmark-done-circle-outline"></ion-icon> Educators, lecturers and supervisors who want to create more inclusive learning environments.</li>
<li> <ion-icon name="checkmark-done-circle-outline"></ion-icon> Students and early-career practitioners who want a framework for reflecting on culture, power and identity.</li>
<li> <ion-icon name="checkmark-done-circle-outline"></ion-icon> Leaders and organisations working to reduce inequities and embed cultural humility into policies and pathways.</li>
<li> <ion-icon name="checkmark-done-circle-outline"></ion-icon> Community partners and lived-experience experts interested in co-producing training, resources or research.</li>

 </ul>
 
 </div>

</section>

<hr /><br />
<section class="section glanc">
  <div className="">
  <h2>
    What we offer
  </h2>

<div class="glance" aria-label="Cultural Humility Hub at a glance">
      <div class="glance-item">
        <div class="glance-value">Learn</div>
        <div class="glance-text">Self-paced online modules on cultural humility, with interactive activities, reflections and certificates.</div>
        <button className='cta mini' onClick={()=> navigate('/modules') }>Explore Learn</button>
      </div>

      <div class="glance-item">
        <div class="glance-value">Training</div>
        <div class="glance-text">In-person and online workshops tailored to your team, drawing on evidence, lived experience and local context.</div>
        <button className='cta mini' onClick={()=> navigate('/modules') }>Explore Training</button>
      </div>

      <div class="glance-item">
        <div class="glance-value">Community</div>
        <div class="glance-text">A moderated forum and blog space to share scenarios, learning and practice tools with others globally.</div>
        <button className='cta mini' onClick={()=> navigate('/modules') }>Join Our Community</button>
      </div>

      <div class="glance-item">
        <div class="glance-value">Collaboration</div>
        <div class="glance-text">Opportunities to co-design projects, evaluation and research related to cultural humility and equity.</div>
        <button className='cta mini' onClick={()=> location.href='#contact' }>Discuss Collaboration</button>
      </div>


    </div>



</div>



  </section>

  <hr />



  <div className="founder" data-aos="fade-up" data-aos-delay="500" data-aos-duration="500">
 <div className="a"> 
     <h2 style={{lineHeight:1, textAlign:'left', marginLeft:10,}}>Frequently Asked Questions</h2>
<br />
     <details className='faq' open>
        <summary>Is this just another “cultural competence” course?</summary>

        <p style={{textAlign:'left', fontSize:14}}>No. Cultural humility is different from traditional “cultural competence” models that imply we can become fully knowledgeable about other cultures. Instead, it focuses on ongoing self-reflection, recognising power, and building respectful partnerships. The Hub encourages questioning our assumptions and adapting our practice over time, rather than aiming to “master” other people’s cultures.</p>
     </details>

     <details className='faq' >
        <summary>Is it free to use the Cultural Humility Hub?</summary>

        <p style={{textAlign:'left', fontSize:14}}>Parts of the Hub are free to access, such as information pages and some community content. Other elements, such as full access to modules or structured training packages, may require payment or an organisational subscription. Any costs will be made clear on the relevant pages. If cost is a barrier, you can still explore freely available resources and contact us to discuss options.</p>
     </details>

     <details className='faq' >
        <summary>Do I receive a certificate for completing modules?</summary>

        <p style={{textAlign:'left', fontSize:14}}>Yes. The Learn area includes self-paced modules with short activities and knowledge checks. When you complete a module and meet the required score, you can generate a downloadable certificate. There is also an option to work through all modules and receive an overall certificate. These can support CPD records, appraisals or portfolios, but it is up to your employer, university or professional body how they recognise them.</p>
     </details>


     <details className='faq' >
        <summary>Do I need permission from my organisation to use CHN?</summary>

        <p style={{textAlign:'left', fontSize:14}}>You can use CHN as an individual learner without formal organisational permission. Many people explore the modules or community space on their own initiative. If you would like to embed CHN into teaching programmes, team training or organisational development work, we recommend contacting us so that we can plan this together and ensure local approval where needed.</p>
     </details>

     <details className='faq' >
        <summary>Do I have to complete modules in one go?</summary>

        <p style={{textAlign:'left', fontSize:14}}>No. The modules are designed to be taken at your own pace. You can pause, return later and revisit sections as many times as you like. In fact, repeating modules or re-reading key sections after some time can deepen reflection and support longer-term behaviour change.</p>
     </details>

     <details className='faq' >
        <summary>Who can join the community space?</summary>

        <p style={{textAlign:'left', fontSize:14}}>The community space welcomes practitioners, students, educators, leaders and community partners who are interested in cultural humility. You do not have to be an “expert” or hold a particular job title. We ask everyone to follow the community guidelines, respect confidentiality and engage in a way that is thoughtful, curious and kind.</p>
     </details>

     <details className='faq' >
        <summary>How is my data and information used?</summary>

        <p style={{textAlign:'left', fontSize:14}}>We collect only the information that is needed to run the site safely and to understand who is taking part. This may include your email address, basic role information and how you use the modules. Data is stored securely and handled in line with data protection law, including GDPR. We do not share identifiable information with others without your clear consent. You can contact us if you have questions about how your data is used.</p>
     </details>
     <details className='faq' >
        <summary>Is the site accessible?</summary>

        <p style={{textAlign:'left', fontSize:14}}>Accessibility matters. The Hub aims to use clear language, readable fonts, good colour contrast and keyboard accessible navigation. If you encounter any barriers—for example, screen reader issues, colour contrast problems or difficulty with interactive elements—please let us know using the contact form so we can work to improve this.</p>
     </details>
<div  id='contact'></div>

     <details className='faq'>
        <summary>Can CHN design something specifically for our team or organisation?</summary>

        <p style={{textAlign:'left', fontSize:14}}>Yes. Alongside the self-paced modules, CHN offers tailored training and collaborative projects. This might include workshops, longer programmes, or support with embedding cultural humility into curricula, policies or service pathways. You can use the contact form below to start a conversation and we can discuss what would be realistic and helpful in your context.</p>
     </details>

   

      
      

    </div>
    
 
</div>


<hr />

<div className="founder b input" data-aos="fade-up" data-aos-delay="500" data-aos-duration="500">

          <div className="a"> 
            <h2>Contact Us</h2>
                    <p id="formH">We’re here to support your journey. Questions, feedback, or partnership ideas? Get in touch and let’s move the work forward together.</p>
                    

                    <form action="">
                      <div className="inputGroup">
                        <input type="text" placeholder='Enter your Full name'/>
                        <input type="text" placeholder='Enter Your Email'/>
                      </div>

                         <div className="inputGroup">
                        <input type="text" placeholder='Enter Organisation Name (Optional)'/>
                        <input type="text" placeholder='Enter Role Student, nurse, lecturer (Optional)'/>
                      </div>

                      <div className="inputGroup sel">
                         <select id="enquiry_type" name="enquiry_type" class="select">
          <option value="">What is your message mainly about? (optional)</option>
          <option value="modules">Question about Learn / modules</option>
          <option value="training">Training or workshop enquiry</option>
          <option value="collaboration">Collaboration / research / co-production</option>
          <option value="technical">Technical issue with the website</option>
          <option value="feedback">General feedback or suggestion</option>
          <option value="other">Something else</option>
        </select>

                        <input type="text" placeholder='Enter Subject, A short summary of your message (Optional)'/>

                      </div>

                      <div className="inputGroup">
                        <textarea rows="5" placeholder='Enter Your Message Here' name="" id=""></textarea>
                      </div>

                      <button className="cta">Send Message</button>
                    </form>
                    </div>
            </div>



                       {/* <div className="a"> 
                    <h2>Looking Ahead: Our Collaborations</h2>
                            <p id="ABZZ">We believe lasting change is built through collaboration. We aim to work with the NHS, the British Educational Research Association, Health Education England, and universities across the UK and beyond to embed cultural humility into policy, training, and practice.

                We also welcome collaboration with international bodies such as WHO, UNESCO, and UNICEF to expand access to culturally humble education and centre dignity, diversity, and justice worldwide.
                </p></div> */}

     

     
     <Footer />
    </>
  )
}

export default About