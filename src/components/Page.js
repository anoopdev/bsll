const Page = () => {
     return(
     <>
      <div className="banner spacetop" >
      <div className="banner-text">
          <div className="container">
              <div className="row">
                  <div className="col-xs-12">
                      <a href="#" className="shipping">ground shipping</a>
                      <h1>about us</h1>
                  </div>
              </div>
          </div>
      </div>
  </div>
     <section id="section">
  {/*Section box starts Here */}
  <div className="section" id="fontSize">
    <div className="amazing-features">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-4 left-spacer">
            <div className="about-figure">
              <figure className="fig-design">
                <a href="#"> <img alt src="assets/images/about.jpg" /> </a>
              </figure>
            </div>
          </div>
          <div className="col-xs-12 col-sm-8">
            <div className="amazing-text about-blog">
              <div className="heading">
                <span>amazing features</span>
                <h3>about us</h3>
              </div>
              <p>
                BCLL is a <b>Special Purpose Vehicle (SPV)</b> majorly owned company of Bhopal
                Municipal Corporation (BMC), incorporated in 2006 to provide an organized
                dimension to public transportation in
                Bhopal. The Present Operational Bus Services by Bhopal City Link Limited headed
                under the chairpersonship of Mayor of Bhopal, Commissioner BMC as Managing
                Director and dedicated Chief executive
                officer of the company which is successfully operating public transport in the
                city of Bhopal.
              </p>
              <p>
                BCLL has been successful in fulfilling the municipal responsibility of providing
                Public Transport facility for the conveyance of public mandated under Sec 66 (S)
                of Municipal Corporation Act. It
                started its operation n with a fleet of just 30 buses in 2006, after receiving
                JnNURM Sanction, has grown to 225 buses comprising AC and Non AC Low Floor
                Buses, plying on 12 different approved
                routes of Bhopal city including BRTS route. The current daily ridership is
                around 1.25 Lacs passenger.
              </p>
              <p>
                Bhopal Bus Operation is one of the successful models in INDIA and has received
                the UMI award in 2011 and 2014 for the <b>“Best practices in PPP
                  initiatives”</b> and Best Urban Mass Transit Project
                respectively. Bhopal City Link Limited has also received the HUDCO award for the
                <b>“Best Practices to Improve the Living Environment” </b>in the year 2013-14
                under the category of urban transport
                for Bhopal City Bus Operation and SKOCH award in year 2014 for <b>“Integration
                  of City Bus Operation with Bus Rapid Transit System of Bhopal</b>”
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="query">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-10">
            <h5>Robust Urban Development &amp; Transmutation</h5>
            <p>
              BCLL has been successful in fulfilling the municipal responsibility of providing
              Modern Urban Public facilities for the conveyance to citizen of Bhopal.
            </p>
          </div>
          <div className="col-xs-12 col-sm-2">
            <a href="#" className="contact-us button">Read About BCLL</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*Section box ends Here */}
</section>
</>
 );
}
export default Page;