function Footer(){
     return(
          <footer id="footer">
                    <div className="footer clearfix">
                         <div className="container">
                              <div className="row">
                                   <div className="col-xs-12 col-sm-4">
                                        <div className="quick-links">
                                             <h5>QUICK LINKS</h5>
                                        </div>
                                        <div className="quick-list">
                                             <ul>
                                                  <li> <a href="#">Home</a>
                                                  </li>
                                                  <li> <a href="#">Contact</a>
                                                  </li>
                                                  <li> <a href="#">Career</a>
                                                  </li>
                                                  <li> <a href="#">News</a>
                                                  </li>
                                             </ul>
                                        </div>
                                        <div className="quick-list">
                                             <ul>
                                                  <li> <a href="#">F.A.Q</a>
                                                  </li>
                                                  <li> <a href="#">Brief Overview of BCLL</a>
                                                  </li>
                                                  <li> <a href="#">Intercity Buses</a>
                                                  </li>
                                             </ul>
                                        </div>
                                   </div>
                                   <div className="col-xs-12 col-sm-4">
                                        <div className="our-address">
                                             <h5>contact us</h5>
                                             <div className="address">
                                                  <h6>Bhopal City Link Limited (BCLL)</h6>
                                                  <address>
                                                       Bhopal City Link Limited (BCLL), “B” wing, IInd Floor Kushabhau Thakre ISBT
                                                       Campus Near Chetak Bridge Bhopal (M.P.)
                                                  </address>
                                                  <div className="phone"> <span>phone : <a href="tel:5917890123 ">975-239-9966</a></span>
                                                       <span>email : <a href="mail.html ">bcll_bpl@rediffmail.com</a></span>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                                   <div className="col-xs-12 col-sm-4 ">
                                        <div className="sign-up">
                                             <h5>newsletter signup</h5>
                                             <p>If you want receive our all weekly updates about new offers and discount, signup
                                                  below.</p>
                                             <form>
                                                  <input id="mail" type="text" placeholder="Email Address" name="email" />
                                                  
                                                  <button className="fa fa-paper-plane " />
                                             </form>
                                        </div>
                                   </div>
                              </div>
                              <div className="row custom-row">
                                   <div className="col-xs-12 col-sm-5">
                                        <div className="copyright"> <span>Copyright © Bhopal City Link Limited 'BCLL' 2021.</span>
                                        </div>
                                   </div>
                                   <div className="col-xs-12 col-sm-7 no-wrap-mobile">
                                        <div className="footer-nav">
                                             <ul>
                                                  <li> <a href="#">terms of use</a>
                                                  </li>
                                                  <li> <a href="#">legal desclaimer</a>
                                                  </li>
                                                  <li> <a href="#">privacy policy</a>
                                                  </li>
                                                  <li> <a href="#">support</a>
                                                  </li>
                                                  <li> <a href="#">sitemap</a>
                                                  </li>
                                             </ul>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </footer>
          
     );
}
export default Footer;