import React, { Component } from 'react';
import Header from './Header'
import Footer from './Footer';
class NotFound extends Component {
     render() {
          return (
               <div id="wrapper" className="homepage homepage-1">
                    <Header />
                    <section id="section">

                         <div class="section" id="fontSize">
                              <div class="amazing-features">
                                   <div class="container">
                                        <div class="row">

                                             <h1>Not Found</h1>
                                        </div>
                                   </div>
                              </div>


                         </div>

                    </section>

                    <Footer />
               </div>
          );
     }
}

export default NotFound;