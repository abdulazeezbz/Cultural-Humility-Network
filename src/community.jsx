import { useState } from 'react'
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import './App.css'



import AppLogo from './assets/logo.png'
import userIcon from './assets/user.webp'
import userIcon2 from './assets/user2.png'
import FounderIcon from './assets/founder-placeholder.jpg'

import Login from './login';
import TopNav from './topnava';
import Footer from './footer';

const Community = () => {
    const navigate = useNavigate();   // <-- HERE
    const [open, setOpen] = useState(false);


      const location = useLocation();

  const hideUI = location.pathname === "/dashboard"; // or any other route
  return (
    <>
    {!hideUI && <TopNav />}

            
         {!hideUI && (

        <div className="content modules about"  data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
          <h2>Join Our Global Community</h2>
          <p>Connect with practitioners, students, educators and community 
            members from around the world. <br />Share experiences of cultural humility, ask questions, 
            and learn from real stories from health, care and education
          </p>
          

<div className="">
<button className="cta"  onClick={()=> location.href='#forum'}>Browse Forum</button>
          <button className="cta outlines" onClick={()=> location.href='#blog'}>Read blog posts</button>
</div>
<p>
            This community space is moderated. Posts may be reviewed to ensure they align with our values of respect, safety and inclusion
          </p>

</div>


    )}

     {!hideUI && (

      <div className="card comm">
        <h2>
            About this community
        </h2>
        <p>
            This space is designed to help people learn about cultural humility through real
             experiences, questions and discussions. It sits alongside the learning modules and 
             offers a place to think aloud, ask for help and share what is working (and what is not)
              in everyday practice
        </p>

        <br />
        <p>In the community hub you can:</p>
        <ul>
            <li><ion-icon name="checkmark-done-circle-outline"></ion-icon>  Start forum threads to explore real scenarios and invite others to reflect with you.</li>
            <li><ion-icon name="checkmark-done-circle-outline"></ion-icon>  Comment on and react to other people’s posts in a thoughtful, respectful way.</li>
            <li><ion-icon name="checkmark-done-circle-outline"></ion-icon>  Submit longer blog posts sharing your learning, case studies and reflections.</li>
            <li><ion-icon name="checkmark-done-circle-outline"></ion-icon>  Browse highlighted threads and themes, including health, education, community work and more.</li>
            <li><ion-icon name="checkmark-done-circle-outline"></ion-icon>  Suggest topics for future discussion, events or learning resources.</li>
        </ul>
<br /><hr /><br />
        <p>The right-hand column contains community guidelines, safety information and ways to stay connected.</p>
      

  <div>
      <button
        onClick={() => setOpen(!open)}
        className="cta outlines mini"
        style={{ marginTop: 10, width: "auto" }}
      >
        How to use this space
      </button>

      {open && (
        <div style={{ marginTop: 10 }}>
          <p className="meta">A gentle way to get started is:</p>

          <ul className="overview-list">
            <li><ion-icon name="checkmark-done-circle-outline"></ion-icon> Complete one or two modules on the Learn page or reflect on your own experience.</li>
            <li><ion-icon name="checkmark-done-circle-outline"></ion-icon> Bring a real situation you are thinking about and start a short thread describing it.</li>
            <li><ion-icon name="checkmark-done-circle-outline"></ion-icon> Read how others respond, noticing where you feel challenged, affirmed or surprised.</li>
            <li><ion-icon name="checkmark-done-circle-outline"></ion-icon> Share a small next step you plan to try in your own work, study or community.</li>
          </ul>

          <p className="meta">
            You do not need to be an expert. Cultural humility is about staying open, curious, and willing to learn.
          </p>
        </div>
      )}
    </div>


      </div>
  )}


 {!hideUI && (

       <div className="card comm">
        <h2>
            Join our Cultural Humility Research & Practice Group
        </h2>
        <p>
           We are building a small research and practice group focused on cultural humility, 
           implementation science and equity in health and education. We welcome practitioners,
            students, educators, community members and researchers who are interested in 
           collaborating on studies, co-producing resources, and shaping future teaching and events.
        </p>

        <br />
        <ul>
            <li> <ion-icon name="checkmark-done-circle-outline"></ion-icon> Be kept informed about research projects, studies and calls for participants.</li>
            <li> <ion-icon name="checkmark-done-circle-outline"></ion-icon> Shape teaching, conferences and culture days centred on cultural humility.</li>
            <li> <ion-icon name="checkmark-done-circle-outline"></ion-icon> Co-develop resources, case studies and practice tools used in the Learn and Community spaces.</li>
            <li> <ion-icon name="checkmark-done-circle-outline"></ion-icon> Partner on implementation projects in healthcare, education or community settings.</li>
            <li> <ion-icon name="checkmark-done-circle-outline"></ion-icon> If you are interested in joining or hearing more, share a few details below. This is not a commitment – it simply helps us understand who 
                is interested and how we might work together:</li>
        </ul>
<br />

<div className="inputGroup">
    <div className="">
        <label htmlFor="">Your role / background</label>
        <input type="text" placeholder='e.g. student nurse, lecturer, mental health practitioner, community worker' />
    </div>

     <div className="">
        <label htmlFor="">Areas of interest</label>
        <input type="text" placeholder='e.g. mental health, education, implementation, Black health, placements' />
    </div>
</div>

<div className="inputGroup">
   
     <div className="">
        <label htmlFor="">Anything you would like us to know</label>
        <textarea rows={7} value={''} readOnly placeholder='Optional – share ideas, questions, or the kinds of projects you might want to be involved in.'> </textarea>
    </div>
</div>

<p><input type="checkbox" /> I am happy for the team to contact me about research and related activities.</p>

<button className='cta mini' style={{width:'auto', marginTop:10}}>Submit Your Intrest</button>
<br /><br />
      
      </div>

)}
<hr />
<br />

 

<section className="section glanc">
  <div className="">
  <h2>
    Your community snapshot
  </h2>
  <p>This is a light-touch way of noticing how you might engage with the community. In a live version, these numbers can update based on your activity</p>
<center>
<div className="glance new" aria-label="Cultural Humility Hub at a glance">
   
      <div className="glance-item">
        <div className="glance-label">Threads started</div>
        <div className="glance-value">37</div>
        <p className="glance-text">Once you post your first thread, this number begins to grow.</p>
      </div>
      <div className="glance-item">
        <div className="glance-label">Comments posted</div>
        <div className="glance-value">34</div>
        <p className="glance-text">Thoughtful comments help build shared learning and support.</p>
      </div>
      <div className="glance-item">
        <div className="glance-label">Blog posts submitted</div>
        <div className="glance-value">344</div>
        <p className="glance-text">Longer reflections can be shared as blog posts once you feel ready.</p>
      </div>
    </div>
</center>


</div>



  </section>
        <div className="content modules community"  id='newthread'  data-aos="fade-up" data-aos-delay="200" data-aos-duration="500">
            

            
            <div className="t">
                <h2>Community Hub</h2>
                <div className="fle" style={{display:'flex'}}>
                    <button className="cta outlines mini" onClick={()=> navigate("/modules")}>Complete Modules</button>
                    <button className="cta outlines mini">Visit Blog</button>
                    <button className="cta outlines mini" onClick={()=> navigate("/about")}>Contact Admin</button>
                </div>
            </div>

            {/* <div className="m"> */}
                <div className="inputGroup commu">
                    <input type="text" placeholder='Search topics, keywords, authors…'/>
                    <div className="aa">
                    <select name="" id="">
                        <option value="">Latest</option>
                        <option value="">Trending</option>
                        <option value="">Most popular</option>
                    </select>
                    <button className='cta mini'>Search</button>
                    </div>
                </div>
            {/* </div> */}

          

        
      </div>

      <div className="separate">
        {/* Left Start */}
        <div className="left">

            {/* Start Discution */}
            <div className="card" data-aos="fade-up" data-aos-delay="200" data-aos-duration="500">
                <h2>Start a Discussion</h2><br />
                <input type="checkbox" /> Post anonymously
                <br /><br />
                    Post Title
                <div className="inputGroup">
                <input type="text" />
                </div>

                     Post Content
                <div className="inputGroup" id='newpost'>
                    <textarea name="" rows={8} id=""></textarea>
                </div>

                <button className='cta mini'>Publish</button>


            </div>
            {/* ENDStart Discution */}


             {/* Start Discution */}
            <div className="card" data-aos="fade-up" data-aos-delay="200" data-aos-duration="500">
                <h2>Start a Blog Post</h2><br />
                <input type="checkbox" /> Post anonymously
                <br /><br />
                    Post Title
                <div className="inputGroup">
                <input type="text" />
                </div>

                     Post Content
                <div className="inputGroup">
                    <textarea name="" rows={8} id=""></textarea>
                </div>

                <button className='cta mini'>Publish</button>


            </div>
            {/* ENDStart Discution */}




            {/* Start Posts */}

            <div className="card">
                <div className="" style={{display:'flex', justifyContent:'space-between', alignItems:"center"}}>
                    <h3>Forum Threads</h3>
                    <button className='cta outlines mini' onClick={()=>location.href='#newthread'}>Start Thread</button>
                </div>


{/* POST START */}
<div className="postCard">
    <div className="card">
        <div className="poster">
            <img src={userIcon} alt="" />
            <div className="">
                <h4>AbdulAzeez ABZ</h4>
                <p>10/11/2025</p>
            </div>
        </div>

        <div className="post">
            <h3>Sample Post: Education Scenario</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ullam corrupti consequuntur explicabo, vitae hic, libero doloribus vel pariatur qui tenetur iure quod? Obcaecati, velit! Laboriosam ratione debitis quas distinctio?</p>
        </div>

        <div className="controls">
            <button className='cta outlines mini'>Like&nbsp;(0)</button>
            <button className='cta outlines mini'>DisLike</button>
            <button className='cta outlines mini'>Recommend&nbsp;(13)</button>
        </div>
        <div className="controls">
            <button className='cta mini'>Reply in a new thread</button>
        </div>
    </div>
</div>
{/* END POST */}


{/* POST START */}
<div className="postCard">
    <div className="card">
        <div className="poster">
            <img src={userIcon2} alt="" />
            <div className="">
                <h4>Anonymous User</h4>
                <p>10/11/2025</p>
            </div>
        </div>

        <div className="post">
            <h3>Sample Post: Education Scenario</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ullam corrupti consequuntur explicabo, vitae hic, libero doloribus vel pariatur qui tenetur iure quod? Obcaecati, velit! Laboriosam ratione debitis quas distinctio?</p>
        </div>

        <div className="controls">
            <button className='cta outlines mini'>Like&nbsp;(0)</button>
            <button className='cta outlines mini'>DisLike</button>
            <button className='cta outlines mini'>Recommend&nbsp;(13)</button>
        </div>

        <div className="controls">
            <button className='cta mini'>Reply in a new thread</button>
        </div>
    </div>
</div>
{/* END POST */}

                
            </div>

            {/* End Posts */}



    {/* Start Posts */}

            <div className="card">
                <div className="" style={{display:'flex', justifyContent:'space-between', alignItems:"center"}}>
                    <h3>Approved Blog Posts</h3>
                    <button className='cta outlines mini' onClick={()=>location.href='#newpost'}>Start Post</button>
                </div>


{/* POST START */}
<div className="postCard">
    <div className="card">
        <div className="poster">
            <img src={userIcon} alt="" />
            <div className="">
                <h4>AbdulAzeez ABZ</h4>
                <p>10/11/2025</p>
            </div>
        </div>

        <div className="post">
            <h3>Sample Post: Education Scenario</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ullam corrupti consequuntur explicabo, vitae hic, libero doloribus vel pariatur qui tenetur iure quod? Obcaecati, velit! Laboriosam ratione debitis quas distinctio?</p>
        </div>

        <div className="controls">
            <button className='cta outlines mini'>Like&nbsp;(0)</button>
            <button className='cta outlines mini'>DisLike</button>
            <button className='cta outlines mini'>Recommend&nbsp;(13)</button>
        </div>
        <div className="controls">
            <button className='cta mini'>Reply in a new thread</button>
        </div>
    </div>
</div>
{/* END POST */}


{/* POST START */}
<div className="postCard">
    <div className="card">
        <div className="poster">
            <img src={userIcon2} alt="" />
            <div className="">
                <h4>Anonymous User</h4>
                <p>10/11/2025</p>
            </div>
        </div>

        <div className="post">
            <h3>Sample Post: Education Scenario</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum ullam corrupti consequuntur explicabo, vitae hic, libero doloribus vel pariatur qui tenetur iure quod? Obcaecati, velit! Laboriosam ratione debitis quas distinctio?</p>
        </div>

        <div className="controls">
            <button className='cta outlines mini'>Like&nbsp;(0)</button>
            <button className='cta outlines mini'>DisLike</button>
            <button className='cta outlines mini'>Recommend&nbsp;(13)</button>
        </div>

        <div className="controls">
            <button className='cta mini'>Reply in a new thread</button>
        </div>
    </div>
</div>
{/* END POST */}

                
            </div>

            {/* End Posts */}
            
        </div>
        {/* Left End */}
        <div className="right">

         {/* Start Discution */}
            <div className="card" data-aos="fade-up" data-aos-delay="200" data-aos-duration="500">
                <h3>Community Guidelines</h3>
               <p>This space is for learning together. We expect kindness, curiosity and care when discussing culture, identity, power and inequality.</p>
               <br />
               <p>Be respectful and open to learning from others’ experiences.</p>
               <br />
               <p>Avoid using names, locations or details that could identify individuals or services.</p>
               <br />

                <p>Use content warnings for posts that mention trauma, self-harm, abuse or discrimination.</p>

<br />
<p>Challenge ideas, not people. No harassment, hate speech or personal attacks.</p>
<br />
<p>Remember this is a learning space, not a place for clinical or legal advice.</p>



                <br />
                <hr />
                <br />
                <h3>Why we collect optional details</h3>
                <p>We may ask optional questions (such as country, role or sector) so we can understand who is taking part and improve inclusivity. Any data we collect is stored securely and handled in line with data protection law, including GDPR. We will never share identifiable information without your clear consent.</p>


            </div>
            {/* ENDStart Discution */}




  <div className="card" data-aos="fade-up" data-aos-delay="200" data-aos-duration="500">
                <h3>Sharing safely</h3>
               <p>Many people use this community to talk about difficult experiences, including racism, exclusion and unequal treatment. When you post:</p>
               <br />
               <p>Change or remove details that could identify real people or organisations.</p>
               <br />
               <p>Focus on what happened, how it felt, and what might need to change.</p>
               <br />

               <p>If you feel distressed while posting, take a break and reach out for support locally.</p>
               <br />

               <p>If you see something that worries you, you can let the team know via the support or contact page.</p>
               <br />
               
               
    </div>


    

  <div className="card" data-aos="fade-up" data-aos-delay="200" data-aos-duration="500">
                <h3>Quick links</h3>
             <br />

<a href="">Join the research & practice group</a><br /><br />
<a href="">Start a new thread</a><br /><br />
<a href="">Browse forum threads</a><br /><br />
<a href="">Read approved blogs</a><br /><br />
<a href="">View pinned threads</a><br /><br />
<a href="">Back to community hub</a><br /><br />
               
               
    </div>


            {/* Start Discution */}
            <div className="card" data-aos="fade-up" data-aos-delay="200" data-aos-duration="500">
                <h3>Stay Connected</h3>
               <p>Stay updated with the latest blog posts, global community highlights, and upcoming webinars by subscribing to our newsletter.</p>
                <br />
                <div className="inputGroup">
                    <input type="text" placeholder='Enter your email'/>
                </div>

                <button className='cta mini' style={{width:"90%"}}>Subscribe</button>


            </div>
            {/* ENDStart Discution */}


             {/* Start Discution */}
            <div className="card" data-aos="fade-up" data-aos-delay="200" data-aos-duration="500">
                <br /><h3>Suggest a Topic</h3>
                <br />
                <div className="inputGroup">
                    <input type="text" placeholder='Short Title'/>
                </div>

                 <div className="inputGroup">
                   <textarea name="" rows={7} placeholder='Describe what you want to discuss…' id=""></textarea>
                </div>

                <button className='cta mini' style={{width:"90%"}}>Subscribe</button>


            </div>
            {/* ENDStart Discution */}

        </div>
      </div>


<Footer />
     
    </>
  )
}

export default Community