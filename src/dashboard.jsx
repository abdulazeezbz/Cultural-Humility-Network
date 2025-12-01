import React from 'react'
import TopNav from './topnava'

import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {

      const { currentUser } = useAuth();
  const navigate = useNavigate();


  if (!currentUser) return <p>Login To View this Page...</p>;


  return (
    <>
    <TopNav/>

    <div className="dashb">
      
      <h2>Welcome back, {currentUser.name || currentUser.email}!</h2><br />
        <div className="child">
        <div className="c one">
            <div className="card">
                <h3>My Action Plan</h3>
                <p>Create and track your SMART commitments from the modules. Check them off as you complete them.</p>

                <div className="inputGroup">
                    <input type="text" name="" placeholder='New commitment (e.g., Add interpreter step to booking form)' id="" />
                    <input type="date" name="" id="" />
                    <button className='cta mini' style={{marginTop:5}}>Add</button>
                </div>


 <br /><br />

 <div className="slideee">


                <table>
                    <tr>
                    <th>SN</th>
                    <th style={{minWidth:150}}>Plan</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Action</th>
                    </tr>
                   
                    <tr>
                        <td>1</td>
                        <td>Submit My task</td>
                        <td>25/12/2025</td>
                        <td>Upcoming</td>
                        <td><button className='cta mini outlines' style={{width:'auto', marginTop:10}}>Cancel</button></td>
                    </tr>


                      <tr>
                        <td>2</td>
                        <td>Start my Quiz</td>
                        <td>10/12/2025</td>
                        <td>Upcoming</td>
                        <td><button className='cta mini outlines' style={{width:'auto', marginTop:10}}>Cancel</button></td>
                    </tr>
                </table>


                 </div>

            </div>
                 <div className="card">

                    <h3>Certificates</h3>
                    <p>Generate a certificate for each completed module. Complete all five to unlock the full programme certificate.</p>



                                 <br />           {/* Lecture Start */}
           <div className="card module"  data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
            <div className="courseD">
                <div className="">
                  <h4>Module 1: Sustaining Humility & Advocacy</h4>
                  <p>Status: Completed</p>  
                </div>
                <div className="">
                 <button className='cta mini' style={{width:'auto'}}>Generate Certificate</button>
                </div>
                </div>
            
           </div>

                {/* Lecture End */}


                
                                            {/* Lecture Start */}
           <div className="card module"  data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
            <div className="courseD">
                <div className="">
                  <h4>Module 2: Sustaining Humility & Advocacy</h4>
                  <p>Status: started</p>  
                </div>
                <div className="">
                 <button className='cta mini outlines' style={{width:'auto'}}>Generate Certificate</button>
                </div>
                </div>
            
           </div>

                {/* Lecture End */}


                 </div>

        </div>
        <div className="c">
            <div className="card">
                <h3>My progress</h3>
                <button className="cta mini outlines" style={{width:'auto', marginTop:10}} disabled>0 open Action</button>
                <button className="cta mini outlines" style={{width:'auto', marginTop:10}} disabled>0 Completed</button>

                <br /><br />


                   <div className="progress" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1000">
                <h3>Modules Completed</h3>
            
            <div className="slid">
                <div className="Scont" style={{width:"10%"}}></div>
            </div>

            <p>Complete each core module to unlock certificates..</p>

<div className="flll">
 <button className="cta mini" style={{marginTop:10}} disabled>M1 Started</button>
 <button className="cta mini outlines" style={{marginTop:10}} disabled>M2 Not Started</button>
 <button className="cta mini outlines" style={{marginTop:10}} disabled>M3 Not Started</button>
 <button className="cta mini outlines" style={{marginTop:10}} disabled>M4 Not Started</button>
 <button className="cta mini outlines" style={{marginTop:10}} disabled>M5 Not Started</button>
 <button className="cta mini outlines" style={{marginTop:10}} disabled>M6 Not Started</button>
 <button className="cta mini outlines" style={{marginTop:10}} disabled>M7 Not Started</button>
 <button className="cta mini outlines" style={{marginTop:10}} disabled>M8 Not Started</button>
 <button className="cta mini outlines" style={{marginTop:10}} disabled>M9 Not Started</button>
 <button className="cta mini outlines" style={{marginTop:10}} disabled>M10 Not Started</button>
 <button className="cta mini outlines" style={{marginTop:10}} disabled>M11 Not Started</button>
</div>

          </div>

            </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default DashboardPage