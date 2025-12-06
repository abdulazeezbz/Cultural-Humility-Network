import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from "react-router-dom";
import './App.css'

import AppLogo from './assets/new logo.png'
import FounderIcon from './assets/founder-placeholder.jpg'

import Login from './login';
import TopNav from './topnava';
import Footer from './footer';


function Home() {

  
  

  const [activeDot, setActiveDot] = useState(0);
  const navigate = useNavigate();   // <-- HERE
  


  return (
    <>

    <TopNav/>
 


   

     <div className="hero" data-aos="fade-up" data-aos-delay="1000" data-aos-duration="1000">
      <div className="main">
        <div className="content">
          <br /><br />
          <h2 style={{lineHeight:1}}>Welcome to <br />Cultural Humility Network <span>(CHN)</span></h2>
          <p>We believe cultural humility is the cornerstone of equitable practice in health and education. Explore immersive learning, evidence-based modules, and a supportive community that centres respect, reflection, and inclusion.</p>

        <div id="about" className="" style={{display:'flex'}}>
          <button className="cta"  onClick={()=> navigate("/modules")}>Start Learning</button>
          <button className="cta outlines" onClick={()=> navigate("/community")}>Visit Community</button>
        </div>
        
      
      
      </div>
      </div>
      
<br /><br />
     
      
      <div className="heroB" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
      <div className="main">
        <div className="content b">

           <div className="card" style={{textAlign:'left'}}>
  <h2 style={{textAlign:'left', lineHeight:1}}>What is cultural humility?</h2>
  <p style={{textAlign:'left'}}>Cultural humility is a way of approaching other people and communities that begins with respect and a recognition that we do not know everything about someone else’s life. Instead of assuming we are “the expert” on a person or group, we see them as the experts on their own experiences. Our role is to listen, to reflect, and to work with them.</p>


  <br />
  <p style={{textAlign:'left'}}>
​Instead of a one-off "competence" you can tick off, cultural humility is a lifelong practice of: paying attention to yourself, sharing power where you can, and working with people and communities rather than doing things to or for them.
</p>


<div className="badges">
  <span><ion-icon name="barbell-outline"></ion-icon> Lifelong Learning</span>
  <span><ion-icon name="analytics-outline"></ion-icon> Power-aware practice</span>
  <span><ion-icon name="business-outline"></ion-icon> Community Partnership</span>
</div>
<br />
  <p style={{textAlign:'left'}}>
Want a bit more detail? Open the short sections below. You can revisit them at any point.</p>
<br />

<div className="">
  <div className="faq">
    <details>
      <summary>Origins and background</summary>
     
        <p style={{textAlign:'left', marginLeft:0, fontSize:16}}>Cultural humility emerged in the United States in the 1990s, particularly within medical and nursing education. Melanie Tervalon and Jann Murray-García were teaching clinicians who were expected to be “culturally competent” when working with diverse communities. They noticed that this language could give the impression that culture was a checklist you could master with enough facts.
          <br />Instead, they proposed cultural humility as a more honest and ethical approach. It recognises that no professional can ever be fully “competent” in someone else’s culture, history and daily reality. What we can do is commit to:
          <br />
        
      <ul style={{textAlign:'left', marginLeft:10, fontSize:17, marginTop:10}}>
        <li> <ion-icon name="checkmark-done-circle-outline"></ion-icon> ongoing self-evaluation and self-critique,</li>
        <li> <ion-icon name="checkmark-done-circle-outline"></ion-icon> being alert to power imbalances in professional relationships, and</li>
        <li> <ion-icon name="checkmark-done-circle-outline"></ion-icon> building partnerships with communities that are genuinely collaborative.</li>
      </ul>
<br />

<p  style={{textAlign:'left', marginLeft:0, fontSize:16}}>Since then, cultural humility has been developed further in areas such as social work, mental health, community development and education. In the UK, the idea has been used to support anti-racist practice, patient and public involvement, trauma-informed care and work that centres lived experience. You might see it alongside related ideas such as cultural safety, structural competence and intersectionality.

  <br />

  For example: Tervalon M & Murray-García J (1998); Yeager KA & Bauer-Wu S (2013); work on cultural humility in UK social work and nursing; and resources from professional bodies and community organisations.
</p>


      </p>
    </details>
  </div>

  <div className="faq">
    <details>
      <summary>How is cultural humility different from cultural competence?</summary>
      <p style={{textAlign:'left', marginLeft:0, fontSize:16}}>
        Many training programmes talk about “cultural competence”. This can be helpful if it encourages people to learn about different communities and to build communication skills. However, the language of competence can also suggest that there is an end point: that we can eventually know enough to be “done” <br />

        Cultural humility starts from a different place. Instead of asking “How do I become competent in this other culture?”, it asks: “How can I stay open, reflective and ready to learn from each person and community I meet?”
        <br />
        Some key differences are:
      </p>

      <ul style={{textAlign:'left', marginLeft:10, fontSize:17, marginTop:10}}>
        <li> <ion-icon name="checkmark-done-circle-outline"></ion-icon> <b>Focus:</b> competence often focuses on gaining knowledge about “others”; humility focuses on understanding ourselves and the relationship we build with others.</li>
        <li> <ion-icon name="checkmark-done-circle-outline"></ion-icon> <b>End point vs journey: </b> competence can sound like a target; humility is explicitly a lifelong process.</li>
        <li> <ion-icon name="checkmark-done-circle-outline"></ion-icon> <b>Power:</b> competence can unintentionally place professionals as experts on people’s cultures; humility emphasises shared power and the person’s own expertise.</li>
      </ul>

      <br />
      <p style={{textAlign:'left', marginLeft:0, fontSize:16}}>
        In practice, cultural humility does not reject knowledge or skills. It simply places them in a wider frame that includes self-awareness, reflexivity and attention to power. You can still learn about communities and histories – you just do so in a way that recognises the limits of your own perspective.
      </p>
    </details>
  </div>

 

  <div className="faq">
    <details>
      <summary>Lifelong learning and self-reflection</summary>
      <p style={{textAlign:'left', marginLeft:0, fontSize:16}}>
        Cultural humility treats learning as something that never stops. Our communities, services and policies keep changing. So do we. New situations will always raise new questions. Rather than seeing this as a problem, cultural humility treats it as normal and expected.
      <br />

      Self-reflection is at the heart of this. It can be as simple as asking yourself:
      </p>

      <ul style={{textAlign:'left', marginLeft:10, fontSize:17, marginTop:10}}>
        <li> <ion-icon name="checkmark-done-circle-outline"></ion-icon> What assumptions did I bring into that conversation?</li>
        <li> <ion-icon name="checkmark-done-circle-outline"></ion-icon> How might my background, training or role have shaped the way I responded?</li>
        <li> <ion-icon name="checkmark-done-circle-outline"></ion-icon> Did I really listen, or was I rushing to fix or explain?</li>
      </ul>

      <br />
     <p style={{textAlign:'left', marginLeft:0, fontSize:16}}>Over time, reflection can become part of daily practice. Some people use short reflective notes, supervision, peer discussion or journalling. Others build it into team meetings by asking “Whose voices were missing?” or “What might we have misunderstood?” The important thing is to keep coming back to these questions gently and honestly, without harsh self-judgement but with a willingness to grow.</p>
    </details>
  </div>


   <div className="faq">
    <details>
      <summary>Power, privilege and fairness</summary>
      <p style={{textAlign:'left', marginLeft:0, fontSize:16}}>

        Cultural humility asks us to pay attention to power. In many settings – clinics, schools, mental health services, social care – professionals hold power through their role, information, access to records or ability to make decisions that affect people’s lives.
        <br />
        On top of this, some of us benefit from wider social privileges linked to race, class, language, citizenship, gender, sexuality, disability or other aspects of identity. These can affect how we are heard, how safe we feel to speak up, and how we are treated by institutions.
        <br />
        Practising cultural humility means asking:
      </p>

      <ul style={{textAlign:'left', marginLeft:10, fontSize:17, marginTop:10}}>
        
      </ul>
    </details>
  </div>


   <div className="faq">
    <details>
      <summary>Lifelong learning and self-reflection</summary>
      <p style={{textAlign:'left', marginLeft:0, fontSize:16}}>

        Cultural humility asks us to pay attention to power. In many settings – clinics, schools, mental health services, social care – professionals hold power through their role, information, access to records or ability to make decisions that affect people’s lives.
        <br />
        On top of this, some of us benefit from wider social privileges linked to race, class, language, citizenship, gender, sexuality, disability or other aspects of identity. These can affect how we are heard, how safe we feel to speak up, and how we are treated by institutions.
        <br />
        Practising cultural humility means asking:
      </p>

      <ul style={{textAlign:'left', marginLeft:10, fontSize:17, marginTop:10}}>
        <li> <ion-icon name="checkmark-done-circle-outline"></ion-icon> Who has the final say in this situation, and how might that feel for the other person?</li>
        <li> <ion-icon name="checkmark-done-circle-outline"></ion-icon> Whose stories and needs are shaping our policies and procedures?</li>
        <li> <ion-icon name="checkmark-done-circle-outline"></ion-icon> Are some groups experiencing poorer outcomes, and if so, why?</li>
      </ul>
      <br />
      <p style={{textAlign:'left', marginLeft:0, fontSize:16}}>
        We cannot remove all power differences, but we can be transparent, offer meaningful choices, make information clear, and invite feedback. Small shifts can make services feel more respectful and less intimidating.
      </p>
    </details>
  </div>


   <div className="faq">
    <details>
      <summary>Working with people and communities</summary>
      <p style={{textAlign:'left', marginLeft:0, fontSize:16}}>

       Cultural humility places relationships at the centre of practice. Instead of seeing people mainly as “service users”, “patients” or “students”, we remember that they are individuals with their own histories, cultures, families, beliefs and strengths.

In practice, this can mean:
      </p>

      <ul style={{textAlign:'left', marginLeft:10, fontSize:17, marginTop:10}}>
        <li> <ion-icon name="checkmark-done-circle-outline"></ion-icon> 
          asking open questions about what matters most to the person right now,
        </li>
        <li> <ion-icon name="checkmark-done-circle-outline"></ion-icon> avoiding assumptions based on labels or group membership,</li>
        <li> <ion-icon name="checkmark-done-circle-outline"></ion-icon> checking how someone would like to be addressed and how they understand their situation,</li>
        <li> <ion-icon name="checkmark-done-circle-outline"></ion-icon> inviting community members to help design, deliver and evaluate services and training.</li>
      </ul>

      <br />

     <p style={{textAlign:'left', marginLeft:0, fontSize:16}}>It also means recognising diversity within communities. No single person can represent a whole group. Being curious and respectful, rather than relying on stereotypes, helps build trust and avoid harm.</p>
    </details>
  </div>


  
   <div className="faq">
    <details>
      <summary>Cultural humility in organisations and systems</summary>
      <p style={{textAlign:'left', marginLeft:0, fontSize:16}}>
Cultural humility is not only about individual attitudes. Organisations and systems also need to reflect on how their structures may help or harm different groups. Even when individual staff are caring and committed, policies and procedures can still create unequal outcomes.

Organisations that take cultural humility seriously might:
      </p>

      <ul style={{textAlign:'left', marginLeft:10, fontSize:17, marginTop:10}}>
        <li> <ion-icon name="checkmark-done-circle-outline"></ion-icon> review policies, forms and pathways to see where they may disadvantage certain groups,</li>
        <li> <ion-icon name="checkmark-done-circle-outline"></ion-icon> use data and lived experience to identify gaps in access, experience and outcomes,</li>
        <li> <ion-icon name="checkmark-done-circle-outline"></ion-icon> ensure meaningful community participation in decision-making, not just one-off consultation,</li>
        <li> <ion-icon name="checkmark-done-circle-outline"></ion-icon> offer ongoing learning and reflective spaces, rather than one-off “awareness days”.</li>
      </ul>

      
      <p style={{textAlign:'left', marginLeft:0, fontSize:16}}>This can be slow and sometimes uncomfortable work, but it is essential for creating services that are genuinely responsive and fair.</p>
    </details>
  </div>


  
   <div className="faq">
    <details>
      <summary>Putting cultural humility into everyday practice</summary>
      <p style={{textAlign:'left', marginLeft:0, fontSize:16}}>

       Cultural humility is shown in small, everyday actions as much as in big strategies. You do not need to be perfect to begin. You simply need to be willing to notice, to listen and to adjust.

<br />
       Helpful everyday practices include:
      </p>

      <ul style={{textAlign:'left', marginLeft:10, fontSize:17, marginTop:10}}>
        <li> <ion-icon name="checkmark-done-circle-outline"></ion-icon> using simple, respectful language and checking understanding,</li>
        <li> <ion-icon name="checkmark-done-circle-outline"></ion-icon> being honest when you do not know something and offering to find out,</li>
        <li> <ion-icon name="checkmark-done-circle-outline"></ion-icon> inviting feedback with questions such as “Is there anything I have missed or misunderstood?”,</li>
        <li> <ion-icon name="checkmark-done-circle-outline"></ion-icon> being open to being corrected without becoming defensive,</li>
        <li> <ion-icon name="checkmark-done-circle-outline"></ion-icon> making space for people to bring their own beliefs, values and priorities into the conversation.</li>
      </ul>
<p style={{textAlign:'left', marginLeft:0, fontSize:16}}>These actions may seem small, but they can make a significant difference to how safe, heard and respected people feel in your care, classroom, organisation or community space.</p>

    </details>
  </div>

  
   <div className="faq">
    <details>
      <summary>Looking after yourself while you learn</summary>
      <p style={{textAlign:'left', marginLeft:0, fontSize:16}}>

     Learning about cultural humility can sometimes feel challenging. You may notice discomfort, guilt, sadness, anger or confusion, especially if you reflect on times when you did not get things right or when you have been hurt by systems yourself.

This emotional response is understandable. It does not mean you are failing. It simply shows that you are taking the learning seriously. It can help to: <br />
        Practising cultural humility means asking:
      </p>

      <ul style={{textAlign:'left', marginLeft:10, fontSize:17, marginTop:10}}>
        <li> <ion-icon name="checkmark-done-circle-outline"></ion-icon> take breaks from learning activities when you need to,</li>
        <li> <ion-icon name="checkmark-done-circle-outline"></ion-icon> talk with trusted colleagues, friends or supervisors about what you are noticing,</li>
        <li> <ion-icon name="checkmark-done-circle-outline"></ion-icon> seek support if the material connects with trauma or difficult experiences,</li>
        <li> <ion-icon name="checkmark-done-circle-outline"></ion-icon> approach yourself with compassion, remembering that everyone is learning.</li>
       
      </ul>

    <p style={{textAlign:'left', marginLeft:0, fontSize:16}}>Cultural humility includes humility towards ourselves: recognising that we are human, that we will make mistakes, and that what matters is how we respond and continue to grow.</p>
    </details>
  </div>

 


</div>
</div>

<div className="why">
          <h2 style={{lineHeight:1, textAlign:'left'}}>Why Cultural Humility Matters</h2>
          <p id="ABZZ" className='b' style={{textAlign:'left'}}>
            Cultural humility is a lifelong practice of self-reflection, accountability, and challenging assumptions. Across healthcare and education, inequalities persist. Humility moves beyond awareness to listening deeply, engaging respectfully, and acting for equity.</p>
</div>

<br /><br />
  
<div className="layout c">
  <div className='child'>
  <h2 style={{textAlign:'left', marginLeft:20}}>
      What the Data Says
      </h2 >
      <p style={{fontSize:15, textAlign:'left'}}>The UK is increasingly diverse — but equity has not kept pace.</p>


      <div className="slide"
      
      >
       
          <div className="cc">
            <h2 style={{lineHeight:1, marginTop:20, textAlign:'center'}}>Ethnic diversity</h2>
            <p style={{fontSize:20}}>Population identifying with an ethnic minority group in England & Wales (2021 Census).</p>
            <p style={{fontSize:16}}>The UK’s population is becoming more ethnically diverse, especially in cities such as London, Birmingham and Manchester.</p>
          </div>


          <div className="cc">
            <h2 style={{lineHeight:1, marginTop:20, textAlign:'center'}}>International students</h2>
            <p style={{fontSize:20}}>UK university students are from outside the UK.</p>
            <p style={{fontSize:16}}>Classrooms, placements and supervision spaces now routinely bring together people with very different cultural, faith and migration backgrounds</p>
          </div>

          <div className="cc">
            <h2 style={{lineHeight:1, marginTop:20, textAlign:'center'}}>Maternal mortality gap</h2>
            <p style={{fontSize:20}}>Black women in the UK face more than double the risk of maternal death compared with White women.</p>
            <p style={{fontSize:16}}>Racialised inequities in care, bias and structural disadvantage all contribute to this gap.</p>
          </div>

          <div className="cc">
            <h2 style={{lineHeight:1, marginTop:20, textAlign:'center'}}>Deprivation and safety</h2>
            <p style={{fontSize:20}}>Higher maternal mortality for women in the most deprived areas versus the least deprived.</p>
            <p style={{fontSize:16}}>Inequity is not only about identity; where you live and the resources around you also shape risk and outcomes.</p>
          </div>

           <div className="cc">
            <h2 style={{lineHeight:1, marginTop:20, textAlign:'center'}}>Diversity in cities</h2>
            <p style={{fontSize:20}}>Of London residents identify as Asian, Black, Mixed or from another minority ethnic background.</p>
            <p style={{fontSize:16}}>Many services are still designed around a default ‘norm’ that doesn’t match the realities of the communities they serve.</p>
          </div>

           <div className="cc">
            <h2 style={{lineHeight:1, marginTop:20, textAlign:'center'}}>A multilingual UK</h2>
            <p style={{fontSize:20}}>Spoken in homes, communities and services across the UK.</p>
            <p style={{fontSize:16}}>Language, interpretation and communication support are central to safe, person-centred care – yet they are often treated as an optional extra.</p>
          </div>


           <div className="cc">
            <h2 style={{lineHeight:1, marginTop:20, textAlign:'center'}}>Experiences of care</h2>
            <p style={{fontSize:20}}>Surveys show that people from some ethnic minority groups report lower satisfaction and trust in services and higher rates of feeling disrespected or ignored.</p>
            <p style={{fontSize:16}}>Cultural humility asks: whose voice is missing here, and how do we make it easier – and safer – for them to be heard?</p>
          </div>

           <div className="cc">
            <h2 style={{lineHeight:1, marginTop:20, textAlign:'center'}}>Workforce diversity</h2>
            <p style={{fontSize:20}}>Health, care and education workforces in the UK include large numbers of staff who trained overseas or come from minority ethnic backgrounds</p>
            <p style={{fontSize:16}}>Supporting staff to bring their full selves to work – and tackling racism and discrimination – is part of cultural humility in organisations</p>
          </div>
           
           <div className="cc">
            <h2 style={{lineHeight:1, marginTop:20, textAlign:'center'}}>Cultural humility in one lin3</h2>
            <p style={{fontSize:20}}>Cultural humility is a lifelong practice, not a competency you ‘tick off’.</p>
            <p style={{fontSize:16}}>It is about self-reflection, addressing power imbalances and building accountable partnerships with the communities we serve.</p>
          </div>

           <div className="cc">
            <h2 style={{lineHeight:1, marginTop:20, textAlign:'center'}}>Why this hub exists</h2>
            <p style={{fontSize:20}}>This hub supports you to move beyond one-off training towards everyday practice change.</p>
            <p style={{fontSize:16}}>Short modules, reflection prompts and action plans help you translate insight into concrete, accountable steps in your own context.</p>
          </div>

          

          

       
      </div>
      {/* <div className="dot">
        {Array.from({ length: 10 }).map((_, i) => (
    <div
      key={i}
      className={`dots ${activeDot === i ? "active" : ""}`}
      onClick={() => setActiveDot(i)}
    />
  ))}
      </div> */}
  </div>
</div>

<section className="layout nn" >
  <div className='child' data-aos-delay="500" data-aos-duration="500">
    <h2 style={{textAlign:'left', lineHeight:1}}>
      See Our Learning Opportunities
    </h2>
    <p style={{fontSize:16, marginLeft:0, textAlign:'left'}}>
      Short, interactive modules on power, bias, and anti-racism with UK case studies and self-assessments. Free and self-paced; earn a certificate.
      </p>
      <br /><br />


    <ul>
      <ion-icon name="checkmark-done-circle-outline"></ion-icon> Understanding Power, Privilege & Bias
      <br /> <ion-icon name="checkmark-done-circle-outline"></ion-icon> Reflective Practice
      <br /> <ion-icon name="checkmark-done-circle-outline"></ion-icon> Working Across Cultural Boundaries
      <br /> <ion-icon name="checkmark-done-circle-outline"></ion-icon> Trauma-Informed Care
      <br /> <ion-icon name="checkmark-done-circle-outline"></ion-icon> Anti-Racism in Practice
      <br />
      <div id="about" className="" style={{display:'flex'}}>
          <button className="cta mini" onClick={()=> navigate("/modules")}>Start learning</button>
          <button className="cta outlines mini" onClick={()=> navigate("/modules")}>View Certificate</button>
        </div>
    </ul>

<br /><br />
 
  </div>



  <div className='child' data-aos-delay="500" data-aos-duration="500">


         <h2 style={{textAlign:'left'}}>
     We Offer Training
    </h2>
    <p style={{fontSize:16, marginLeft:0, textAlign:'left'}}>

      We Offer Online and in-person trainings that center african, Black and other minortised communities. our session blend
      cultural humility, anti-racism and community-based practice to help individualz, teams and organizations build safer, more equitable enviroments
    </p><br /><br />

<ion-icon name="checkmark-done-circle-outline"></ion-icon> For Indivisuals, Teams and organizations <br /> <br />
<ion-icon name="checkmark-done-circle-outline"></ion-icon> Online or in-person tailored to your context <br /> <br />
<ion-icon name="checkmark-done-circle-outline"></ion-icon> Grounded in lived experience, research and practice <br /> <br />


     <div id="about" className="" style={{display:'flex'}}>
          <button className="cta mini"  onClick={()=> navigate("/training")}>Explore Trainings</button>
          <button className="cta outlines mini" onClick={()=> navigate("/training")}>Register For Training</button>
        </div>
  </div>




  


  
</section>
<br />
<hr />
<div className="" style={{paddingLeft:15}}>
       <h2 style={{textAlign:'left'}}>
      Our Community
    </h2>
    <p style={{fontSize:16, marginLeft:0, textAlign:'left'}}>
      Connect with others through discussions, real-life case examples, Q&A sessions and supportive conversations. Share your experiences, learn from others, and take part in research and projects that help improve care, education and community services for everyone.
    </p>

     <div id="about" className="" style={{display:'flex'}}>
          <button className="cta mini"  onClick={()=> navigate("/community")}>Join Our Community</button>
          <button className="cta outlines mini" onClick={()=> navigate("/community")}>Browse Blogs</button>
        </div>  
        </div>
<br />
<hr /><br />


  <div className="why">
          <h2 style={{lineHeight:1, textAlign:'left'}}> Our Collaborations</h2>
          <p id="ABZZ" style={{fontSize:16, marginLeft:0, textAlign:'left'}} className='b' >We believe lasting change is built through collaboration. We aim to work with the NHS, the British Educational Research Association, Health Education England, and universities across the UK and beyond to embed cultural humility into policy, training, and practice.

We also welcome collaboration with international bodies such as WHO, UNESCO, and UNICEF to expand access to culturally humble education and centre dignity, diversity, and justice worldwide.</p>
</div>
<br /><br /><hr /><br />



  <div className="why b a" style={{textAlign:'left'}}>
          <h2  style={{textAlign:'left', lineHeight:1}}>Latest Announcements</h2>
          <p id="ABZZ" className='b' style={{marginLeft:0, textAlign:'left'}}>Stay updated with news, events, and meeting dates.</p>

          No announcements yet. Check back soon!
</div>
<br />

  <div className="why b a" style={{textAlign:'left'}}>
          <h2  style={{textAlign:'left',lineHeight:1}}>Get Involved</h2>
          <p id="ABZZ" className='b' style={{marginLeft:0, textAlign:'left'}}>Subscribe for updates, webinars, and events. Join our movement!</p>
<br />
          <div className="inputGroup b">
            <input  type="email" required placeholder='Enter your Email Here!' />
            <button className='cta mini b'>Subscribe</button>
          </div>
          
          
</div>


        </div>


      </div>


     </div>
<br /><br /><br />  

<Footer />
     </div>

     
{/* <div className="mainn"></div> */}
    </>
  )
}

export default Home
