import Topheader from './TopHeader';
import { Link } from 'react-router-dom';
function Header() {
     return (
     <header id="header" className="header">
          <Topheader/>
          <div className="main-header">
               <div className="container">
                    <div className="row">
                         <div className="col-xs-12 hidden-xs">
                              <div className="call-us">
                                   <ul>
                                        <li>
                                             <img src="assets/images/iphone.png"  alt="test" /> <span className="transport">CALL
                                                  <span />
                                                  US</span>
                                        </li>
                                        <li> <a href="tel:5917890123">975-239-9966
                                        </a>
                                        </li>
                                   </ul>
                              </div>
                         </div>
                         <div className="col-xs-12 col-sm-2">
                              <a href="index.html" className="logo">
                                   <img src="assets/images/logo.svg" alt="logo" />
                              </a>
                         </div>
                         <div className="col-xs-12 col-sm-10 custom-nav">
                              <nav>
                                   <div id="cssmenu">
                                        <ul className="navigation">
                                             <li className="active"> 
                                             <Link to="/">Home</Link>
                                             </li>
                                             <li> <a>about us <i className="fa fa-angle-down" aria-hidden="true" /></a>
                                                  <ul className="sub-menu">
                                                       <li className><a href="about-us.html">Brief Overview of BCLL</a>
                                                       </li>
                                                       <li><a href="brts.html">Bus Rapid Transit System (BRTS)</a>
                                                       </li>
                                                       <li><a href="awards.html">Awards</a>
                                                       </li>
                                                       <li><a>Board of Directors</a>
                                                       </li>
                                                       <li><a href=" #">World Bank GEF-5 Projects</a>
                                                       </li>
                                                  </ul>
                                             </li>
                                             <li> <a>services <i className="fa fa-angle-down" aria-hidden="true" /></a>
                                                  <ul className="sub-menu">
                                                       <li className="menu-has-children"> <a className="sf-with-ul">MyBus <i className="fa fa-angle-right" aria-hidden="true " /></a>
                                                            <ul className="sub-menu ">
                                                                 <li className="menu-has-children "> <a className="sf-with-ul">Mahapaur Smart Pass <i className="fa fa-angle-right " aria-hidden="true " /></a>
                                                                      <ul className="sub-menu ">
                                                                           <li><a href="start-registration.html">Start
                                                                                Registration</a>
                                                                           </li>
                                                                           <li><a>Point of Sale (PoS)</a>
                                                                           </li>
                                                                      </ul>
                                                                 </li>
                                                                 <li><a href="afcss.html">Automated Fare Collection (AFC) &amp;
                                                                      Surveillance Solution</a>
                                                                 </li>
                                                                 <li><a>Intelligent Transport System (ITS)</a>
                                                                 </li>
                                                            </ul>
                                                       </li>
                                                       <li><a>Intercity Buses</a>
                                                       </li>
                                                       <li><a>Public Bike Sharing</a>
                                                       </li>
                                                  </ul>
                                             </li>
                                             <li> <a href="time-scheduler.html">Time Scheduler</a>
                                             </li>
                                             <li> <a href="bus_routes.html">Route</a>
                                             </li>
                                             <li> <a>Tender</a>
                                             </li>
                                             <li> <a>Contact</a>
                                             </li>
                                             <li> <a>News</a>
                                             </li>
                                             <li> <a href="faq.html ">F.A.Q</a>
                                             </li>
                                             <li> <a>Career</a>
                                             </li>
                                        </ul>
                                   </div>
                              </nav>
                              <div className="nav-icon"> <span />
                                   <span />
                                   <span />
                              </div>
                         </div>
                         <div className="col-xs-12 col-sm-10 mobile_navbar">
                              <nav className="navbar navbar-expand-md navbar-light justify-content-between flex-wrap p-0">
                                   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu" aria-controls="menu" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="fa fa-list" />
                                   </button>
                                   <div className="collapse navbar-collapse" id="menu">
                                        <ul className="navbar-nav mx-auto">
                                             <li className="active">
                                                  <Link to="/">Home</Link>
                                             </li>
                                             <li className="dropdown">
                                                  <a className="dropdown-toggle" data-toggle="dropdown">about us
                                                       <span className="caret" />
                                                  </a>
                                                  <ul className="dropdown-menu" role="menu">
                                                       <li className><a href="about-us.html">Brief Overview of BCLL</a>
                                                       </li>
                                                       <li><a href="brts.html">Bus Rapid Transit System (BRTS)</a>
                                                       </li>
                                                       <li><a href="awards.html">Awards</a>
                                                       </li>
                                                       <li><a>Board of Directors</a>
                                                       </li>
                                                       <li><a href=" #">World Bank GEF-5 Projects</a>
                                                       </li>
                                                  </ul>
                                             </li>
                                             <li className="dropdown">
                                                  <a className="dropdown-toggle" data-toggle="dropdown">services
                                                       <span className="caret" />
                                                  </a>
                                                  <ul className="dropdown-menu" role="menu">
                                                       <li className="dropdown">
                                                            <a className="dropdown-toggle" data-toggle="dropdown"> MyBus
                                                                 <span className="caret" />
                                                            </a>
                                                            <ul className="dropdown-menu" role="menu">
                                                                 <li className="dropdown">
                                                                      <a className="dropdown-toggle" data-toggle="dropdown">
                                                                           Mahapaur Smart Pass
                                                                           <span className="caret" /> </a>
                                                                      <ul className="dropdown-menu" role="menu">
                                                                           <li>
                                                                                <a href="start-registration.html">Start Registration</a>
                                                                           </li>
                                                                           <li><a>Point of Sale (PoS)</a> </li>
                                                                      </ul>
                                                                 </li>
                                                                 <li><a href="afcss.html">Automated Fare Collection (AFC) &amp;
                                                                      Surveillance Solution</a>
                                                                 </li>
                                                                 <li><a>Intelligent Transport System (ITS)</a>
                                                                 </li>
                                                            </ul>
                                                       </li>
                                                       <li><a>Intercity Buses</a>
                                                       </li>
                                                       <li><a>Public Bike Sharing</a>
                                                       </li>
                                                  </ul>
                                             </li>
                                             <li> <a>Time Scheduler</a>
                                             </li>
                                             <li> <a>Route</a>
                                             </li>
                                             <li> <a>Tender</a>
                                             </li>
                                             <li> <a>Contact</a>
                                             </li>
                                             <li> <a>News</a>
                                             </li>
                                             <li> <a href="faq.html">F.A.Q</a>
                                             </li>
                                             <li> <a>Career</a>
                                             </li>
                                        </ul>
                                   </div>
                              </nav>
                         </div>
                    </div>
               </div>
          </div>
     </header>
     );
}

export default Header;