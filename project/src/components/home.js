import React from 'react'
import pankaj from '../images/pankaj.jpeg'
import logo1 from '../images/logo1.PNG'
import img1 from '../images/tajmahal.jpg'
import img2 from '../images/agriculture.jpg'
import img3 from '../images/photography.jpg'
import ahila from '../images/ahila.png'
import maria from '../images/maria.png'
import yoga from '../images/aloyoga.jpg'
import alphabets from '../images/alphabet.jpg'
import maths from '../images/maths.jpg'
import science from '../images/science.jpg'
import edvolve from '../images/edvolve.png'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
function Home() {
    function myFunction(){
        var x = document.getElementById("menus");
        if(x.style.display == "block")
        {
            x.style.display = "none";
        }
        else
        {
            x.style.display = "block";
        }
    }
    return (<div>
        <div id="header">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <div id="menu">
                        <span onClick={myFunction}>&#9776;<img src={edvolve} alt="logo" style={{width:'100px',height:'40px'}}/></span>
                            <ul id='menus'>
                                <img src={logo1} alt="logo" />
                                <li className='active'><a href="">Dashboard</a></li>
                                <li><a href="">Experience Zone</a></li>
                                <li><a href="">Learning Zone</a></li>
                                <li><input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" /></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="row mt-2">
                            <div className="col-6 discovery">
                                <button className='btn btn-secondary'><i class="fa fa-play-circle" aria-hidden="true"></i> Discovery Zone</button>
                            </div>
                            <div className="col-md-6 users">
                                <div id='user' className='d-flex'>
                                    <img src={pankaj} alt="" /><p>Pankaj Keshari</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="content">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <strong> <p id='icon'><i className='fas fa-hand'></i> Welcome back, Pankaj</p></strong>
                        <p>How are we Edvolving today?</p>
                    </div>
                </div>
                <div className="row">
                <div className="col-md-8">
                    <div className="row">
                    <div id="experience">
                        <div className='mb-3'>
                        <span className='span1'><b>Your upcomming experiences</b></span>
                        <span className='span2'>see all</span>
                        </div>
                   
                   <div className="row services">
                   <div className="col-sm-12 col-lg-6 col-xl-4">
                        <div className="card" style={{ width: '15rem' }}>
                            <img src={img1} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title"><i class="fas fa-circle"></i> Live Now</h5>
                                <p class="card-text">Learn about history of Taj Mahal and architecture</p>
                                <p style={{color:'gray'}}>By By Itihas Chronicles</p>
                                <button className='btn btn-success'>Join now</button>
                            </div>
                        </div>
                    </div>
                    <div className=" col-sm-12-12 col-lg-6 col-xl-4">
                        <div className="card" style={{ width: '15rem' }}>
                            <img src={img2} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">26 February 20021, 9 am</h5>
                                <p class="card-text">How does Organic Farming workk, and why its earth friendly</p>
                                <p style={{color:'gray'}}>By Lavika Sundar</p>
                                <a href="#"><NotificationsActiveIcon/> Remind Me</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-6 col-xl-4">
                        <div className="card" style={{ width: '15rem' }}>
                            <img src={img3} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">26 February 20021, 9 am</h5>
                                <p class="card-text">Photography 101: Let's learn all about portrait photography</p>
                                <p style={{color:'gray'}}>By Drake Jacob</p>
                                <a href="#"><NotificationsActiveIcon/> Remind Me</a>
                            </div>
                        </div>
                    </div>
                   </div>
                    </div>
                    
                    </div>
<br />
                    <div className="row">
                    <div id="experience">
                        <div className='mb-3'>
                        <span className='span1'><b>Your upcomming classes of course</b></span>
                        <span className='span2'>see all</span>
                        </div>
                   
                   <div className="row services">
                   <div className="col-sm-12 col-lg-6 col-xl-4">
                        <div className="card" style={{ width: '15rem' }}>
                            <img src={alphabets} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title"><i class="fas fa-circle"></i> Live Now</h5>
                                <p class="card-text"><b>class 1: </b>Alphabets</p>
                                <p style={{color:'gray'}}>By Manoj Kumar</p>
                                <button className='btn btn-success'>Join now</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-6 col-xl-4">
                        <div className="card" style={{ width: '15rem' }}>
                            <img src={maths} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">26 February 20021, 9 am</h5>
                                <p class="card-text"><b>Class 3:</b> Maths</p>
                                <p style={{color:'gray'}}>By RD Verma</p>
                                <a href="#"><NotificationsActiveIcon/> Remind Me</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-lg-6 col-xl-4">
                        <div className="card" style={{ width: '15rem' }}>
                            <img src={science} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">26 February 20021, 9 am</h5>
                                <p class="card-text"><b>Class 5:</b>Science</p>
                                <p style={{color:'gray'}}>By Rossom Datt</p>
                                <a href="#"><NotificationsActiveIcon/> Remind Me</a>
                            </div>
                        </div>
                    </div>
                   </div>
                    </div>
                    
                    </div>

                </div>
              
               <div className="col-md-4">   
               <div id="main">                
                        <div className="row">
                        <div id="sidebar">
                        <p className='span1 p-3'><b>Your Stats</b></p>
                        <div className="row sidebars">
                            <div className="col-lg-6 col-xl-4">
                                <div id='sdiv1'>
                                    <h3>12</h3>
                                    <p id='para'>Experiences this week</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-xl-4">
                                <div id='sdiv1'>
                                <h3>24</h3>
                                <p id='para'>Experiences overall</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-xl-4">
                                <div id='sdiv1'>
                                <h3>12</h3>
                                <p id='para'>Courses this week</p>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <br />
                <div id="main">                
                        <div className="row">
                        <div id="sidebar">
                        <p className='span1 p-3'><b>New mentors on Edvolve</b></p>
                        <div className="row">
                            <div className="col d-flex">
                                <div id='mentor'>
                                    <img src={ahila} style={{width:'100px', height:'100px'}} alt="" />
                                </div>
                                <div id='mentor2'>
                                <strong><p>Ahila Pillai</p></strong>
                                <p id="p1">Fitness enthusiast, and <br />founder of fitness.io! <br /> Can't wait to teach your kids.</p>
                                <a href="" style={{color:'green'}}><b>SEE PEOPLE</b></a>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col d-flex">
                                <div id='mentor'>
                                    <img src={maria} style={{width:'100px', height:'100px'}} alt="" />
                                </div>
                                <div id='mentor2'>
                                <strong><p>Maria Dunham</p></strong>
                                <p id="p1">Love all things science! A <br />Neuroscience major and <br />excited about Astronomy.</p>
                                <a href="" style={{color:'green'}}><b>SEE PEOPLE</b></a>
                                </div>
                            </div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col d-flex">
                                <div id='mentor'>
                                    <img src={yoga} style={{width:'100px', height:'100px'}} alt="" />
                                </div>
                                <div id='mentor2'>
                                <strong><p>Alo Design Studio</p></strong>
                                <p id="p1">A Look Inside Alo Yoga's Brand <br /> New Store In Pacific Palisades, <br /> LA</p>
                                <a href="" style={{color:'green'}}><b>SEE PEOPLE</b></a>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
               </div>
                 </div>
            </div>
        </div>
    </div>)
}
export default Home