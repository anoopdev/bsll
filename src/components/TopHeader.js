
function TopHeader(){
     return(
          <div className="primary-header">
               <div className="container">
                    <div className="row">
                         <div className="col-xs-12 col-sm-6 tophead">
                              <ul>
                                   <li><a className="skip-cont" href="#section">Skip to main content</a>
                                   </li>
                                   <li className="sizechanger">
                                        <ul>
                                             <li><a href="javascript:void(0);" title="Decrease font size" >-A</a>
                                             </li>
                                             <li><a href="javascript:void(0);" title="Reset font size" >A</a>
                                             </li>
                                             <li><a href="javascript:void(0);" title="Increase font size">+A</a>
                                             </li>
                                        </ul>
                                   </li>
                                   <li className="colorchanger">
                                        <ul>
                                             <li><a title="Normal Contrast" className="high-contrast light" href="javascript:void(0);"><strong>Theme</strong></a>
                                             </li>
                                             
                                        </ul>
                                   </li>
                              </ul>
                         </div>
                         <div className="col-xs-12 col-sm-6">
                              <div className="social-wrap clearfix"> <a href="#" className="request">Log In</a>
                                   <ul className="social">
                                        <li>
                                             <a href="#"> <i className="fa fa-facebook" />
                                             </a>
                                        </li>
                                        <li>
                                             <a href="#"> <i className="fa fa-twitter" />
                                             </a>
                                        </li>
                                        <li>
                                             <a href="#"> <i className="fa fa-google-plus" />
                                             </a>
                                        </li>
                                   </ul>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
          
     )
}

export default TopHeader;