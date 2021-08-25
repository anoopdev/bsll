import React, { useState, useEffect } from 'react';

import Header from './Header'
import Banner from './Banner'
import HomeCount from './HomeCount';
import Footer from './Footer';
const axios = require('axios');
const Home = () => {
     const fetchData = async () => {
          try {
               const response = await axios.get('https://jsonplaceholder.typicode.com/users');
               console.error(response);
               setUsers(response.data);
          } catch (error) {
               console.error(error);
          }
     }
     const [users, setUsers] = useState([]);
     useEffect(() => {
          fetchData();
     }, []);
     return (
          <div id="wrapper" className="homepage homepage-1">
               <Header />
               <div className="bannercontainer spacetop">
                    <Banner />

                    <div className="container">
                         <div className="row">
                              <div className="col-md-8" />
                              <div className="col-md-4">
                                   <div className="wap-tabing">
                                        <ul className="nav nav-tabs">
                                             <li className="active "><a data-toggle="tab" href="#home">City Buses</a>
                                             </li>
                                             <li><a data-toggle="tab" href="#menu1">Intercity Bus</a>
                                             </li>
                                        </ul>
                                        <div className="tab-content">
                                             <div id="home" className="tab-pane fade in active">
                                                  <div className="request-quote top-spacer">
                                                       <div className="heading"> <span>Plan Your Trip </span>
                                                            <h3>Trip Planner</h3>
                                                       </div>
                                                       <form>
                                                            <select className="select">
                                                                 <option value=" ">From(Location)</option>
                                                                 <option value={1}>car</option>
                                                                 <option value={2}>train</option>
                                                                 <option value={3}>bus</option>
                                                                 <option value={4}>air-plane</option>
                                                                 <option value={5}>ship</option>
                                                            </select>
                                                            <select className="select">
                                                                 <option value=" ">Destination(location)</option>
                                                                 <option value={1}>car</option>
                                                                 <option value={2}>train</option>
                                                                 <option value={3}>bus</option>
                                                                 <option value={4}>air-plane</option>
                                                                 <option value={5}>ship</option>
                                                            </select>
                                                            <input id="quote" className="submit-quote" type="submit" defaultValue="Search " name="get " />
                                                       </form>
                                                  </div>
                                             </div>
                                             <div id="menu1" className="tab-pane fade">
                                                  <div className="request-quote top-spacer">
                                                       <div className="heading "> <span>Plan Your Trip </span>
                                                            <h3>Trip Planner</h3>
                                                       </div>
                                                       <form>
                                                            <select className="select ">
                                                                 <option value=" ">From(Location)</option>
                                                                 <option value={1}>car</option>
                                                                 <option value={2}>train</option>
                                                                 <option value={3}>bus</option>
                                                                 <option value={4}>air-plane</option>
                                                                 <option value={5}>ship</option>
                                                            </select>
                                                            <select className="select ">
                                                                 <option value=" ">Destination(location)</option>
                                                                 <option value={1}>car</option>
                                                                 <option value={2}>train</option>
                                                                 <option value={3}>bus</option>
                                                                 <option value={4}>air-plane</option>
                                                                 <option value={5}>ship</option>
                                                            </select>
                                                            <input id="quote " className="submit-quote " type="submit " defaultValue="Search " name="get " />
                                                       </form>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               <section id="fontSize">
                    <div className="section">
                         <HomeCount />
                         <div className="services">
                              <div className="container ">
                                   <div className="row ">
                                        <div className="col-xs-12 ">
                                             <div className="heading "> <span> Services</span>
                                                  <h2>Facilities &amp; Services</h2>
                                             </div>
                                        </div>
                                   </div>
                                   <div id="services-slides" className="services-slider ">
                                        <div className="slides-tab zoom ">
                                             <figure>
                                                  <a href="# ">
                                                       <img src="assets/images/goods-train.jpg " alt="test" />
                                                  </a>
                                             </figure>
                                             <div className="slides-text ">
                                                  <h4><a href="# ">INTERCITY BUSES
                                                       'SUTRA SEVA'</a>
                                                  </h4>
                                                  <p>BCLL is committed to provide consistently high quality of services &amp; to improve
                                                       the services through a process of teamwork for the utmost satisfaction of the
                                                       passengers &amp; to attain a position of pre-eminence in the Bus Transport sector
                                                       with a modern, reliable, high-quality public Intercity bus service in accordance
                                                       with international standards.</p> <a href="# " className="read-more ">read more
                                                       <span>&gt;</span></a>
                                             </div>
                                        </div>
                                        <div className="slides-tab zoom ">
                                             <figure>
                                                  <a href="# ">
                                                       <img src="assets/images/plane.jpg " alt="test" />
                                                  </a>
                                             </figure>
                                             <div className="slides-text ">
                                                  <h4><a href="# ">AUTOMATED FARE COLLECTION</a></h4>
                                                  <p>Automated Fare Collection (AFC) for Bhopal City Bus Services and Bus terminals
                                                       provide access to world class transportation system &amp; enable ease of transit
                                                       with real time check via web and mobile apps. Automated Fare Collection avoid
                                                       bunching, unfair ticket pricing, avoid route violation &amp; invalid traveling by
                                                       providing specific details on tickets.</p> <a href="# " className="read-more ">read
                                                            more <span>&gt;</span></a>
                                             </div>
                                        </div>
                                        <div className="slides-tab zoom ">
                                             <figure>
                                                  <a href="# ">
                                                       <img src="assets/images/yard.jpg " />
                                                  </a>
                                             </figure>
                                             <div className="slides-text ">
                                                  <h4><a href="# ">INTELLIGENT TRANSPORT SYSTEM</a></h4>
                                                  <p>Intelligent Transport System (ITS) allows monitoring and tracking of fleet of
                                                       buses. The Intelligent Transport System Project addresses the critical issue of
                                                       road congestion by offering state-of-art technologies and attractive,
                                                       convenient, comfortable, value added services to encourage the usage of bus
                                                       services against individual personal vehicles.</p> <a href="# " className="read-more ">read more <span>&gt;</span></a>
                                             </div>
                                        </div>
                                        <div className="slides-tab zoom ">
                                             <figure>
                                                  <a href="# ">
                                                       <img src="assets/images/bike.jpg " alt="test" />
                                                  </a>
                                             </figure>
                                             <div className="slides-text ">
                                                  <h4><a href="# ">SMART PUBLIC BIKE SHARING (PBS)</a></h4>
                                                  <p>Public Bike Sharing (PBS) has provided an ease in mobility to the people of
                                                       Bhopal by offering a Smart Bike Sharing System at low-cost has increased
                                                       convenience and mobility options. Public Bike Sharing is step towards
                                                       Eco-Friendly City &amp; it will help Bhopal in becoming one of the leading global
                                                       cities with cutting edge PBS technology.</p> <a href="# " className="read-more ">read more <span>&gt;</span></a>
                                             </div>
                                        </div>
                                        <div className="slides-tab zoom ">
                                             <figure>
                                                  <a href="# ">
                                                       <img src="assets/images/SMARTpass.jpg " />
                                                  </a>
                                             </figure>
                                             <div className="slides-text ">
                                                  <h4><a href="# ">MAHAPAUR SMART PASS</a></h4>
                                                  <p>Bhopal Municipal Corporation (BMC) and Bhopal City Link Limited (BCLL) have
                                                       introduced RF-ID based Smart Bus Passes for their esteemed commuters. This Smart
                                                       Pass allows commuters for Monthly Unlimited Traveling in any MyBus of Bhopal.
                                                       Subsidy of Mahapaur Smart Pass is been taken care by BMC based on Types of
                                                       Commuter.</p> <a href="# " className="read-more ">read more <span>&gt;</span></a>
                                             </div>
                                        </div>
                                        <div className="slides-tab zoom ">
                                             <figure>
                                                  <a href="# ">
                                                       <img src="assets/images/mybusserv.jpg " alt="test" />
                                                  </a>
                                             </figure>
                                             <div className="slides-text ">
                                                  <h4><a href="# ">MY BUS
                                                       SERVICES</a>
                                                  </h4>
                                                  <p>My Bus Service is been operated by Bhopal City Link Limited (BCLL) which contains
                                                       Evaluation, Maintenance, Rejuvenation of New Buses, Routes, Operation System
                                                       etc. to provide the public with a modern, reliable, high-quality Public Bus
                                                       Services in City without any hassle regarding before journey or on journey to
                                                       their destination.</p> <a href="# " className="read-more ">read more
                                                       <span>&gt;</span></a>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>

                         <div className="about ">
                              <div className="figure parallax " />
                              <div className="transport-king ">
                                   <div className="about-us ">
                                        <div className="description ">
                                             <div className="heading "> <span>LITTLE ABOUT US</span>
                                                  <h3>ABOUT BCLL</h3>
                                             </div>
                                             <p>BCLL has been successful in fulfilling the municipal responsibility of providing
                                                  Public Transport facility for the conveyance of public mandated under Sec 66 (S) of
                                                  Municipal Corporation Act. It started its operation n with a fleet of just 30 buses
                                                  in 2006, after receiving JnNURM Sanction, has grown to 225 buses comprising AC and
                                                  Non AC Low Floor Buses, plying on 12 different approved routes of Bhopal city
                                                  including BRTS route. The current daily ridership is around 1.25 Lacs passenger.</p>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div className="about-section homepage-6 ">
                              <div className="container ">
                                   <div className="row ">
                                        <div className="col-s-12 about-wrap ">
                                             <div className="about-figure ">
                                                  <figure className="fig-design ">
                                                       <div className="video-link ">
                                                            <a href="https://youtu.be/tXl4-BjzEVY " data-fancybox className="inside animate-element delay6 fadeIn " style={{ backgroundImage: 'url(img/pic5.jpg)' }}>
                                                                 <img src="assets/images/maxresdefault.jpg" alt="test" />
                                                                 <span className="hover-overlay " />
                                                                 <div className="center-icon "><i className="fa fa-play " />
                                                                 </div>
                                                            </a>
                                                       </div>
                                                  </figure>
                                             </div>
                                             <div className="about-text ">
                                                  <div className="heading "> <span>LITTLE ABOUT US</span>
                                                       <h3>WELCOME TO A PERFECT URBAN TRANSIT SYSTEM</h3>
                                                  </div>
                                                  <p>Watch &amp; View, How development from urban transit system has changed the face of
                                                       Bhopal you haven't seen before.</p>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div className="query ">
                              <div className="container ">
                                   <div className="row ">
                                        <div className="col-xs-12 col-sm-10 ">
                                             <h5>Robust Urban Development &amp; Transmutation</h5>
                                             <p>BCLL has been successful in fulfilling the municipal responsibility of providing
                                                  Modern Urban Public facilities for the conveyance to citizen of Bhopal.</p>
                                        </div>
                                        <div className="col-xs-12 col-sm-2 "> <a href="# " className="contact-us button ">Read About
                                             BCLL</a>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
               <Footer />
          </div>
     );
}
export default Home;