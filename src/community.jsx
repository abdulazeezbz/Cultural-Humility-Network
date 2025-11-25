import { useState } from 'react'
import { Routes, Route, useNavigate } from "react-router-dom";
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
  return (
    <>
      <TopNav/>
<br /><br />
      
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
               <p>Be respectful and open to learning.
                Avoid identifiers in sensitive case studies.
                Use content warnings where appropriate.
                Cite resources when sharing materials.</p>
                <br />
                <hr />
                <br />
                <h3>Why we collect optional details</h3>
                <p>To understand participation worldwide and improve inclusivity. Data is stored securely and never shared without consent (GDPR-aligned).</p>


            </div>
            {/* ENDStart Discution */}


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