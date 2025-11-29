import React from 'react'

export default function Footer() {
  return (
    <div>
      <>
      <>
  {/* Footer Main */}
  <footer id="footer-main" className="footer-main container-fluid no-padding">
    <div className="section-padding" />
    {/* Container */}
    <div className="container">
      {/* Widget About */}
      <aside className="col-md-3 col-sm-6 col-xs-6 ftr-widget about-widget">
        <a title="Logo" href="index.html" className="navbar-brand">
          <img src="images/logo.png" alt="logo" />
        </a>
        <p>
          The one day when the lady met this fellow and they knew it was much
          more than a hunch the first mate and his Skipper too will do their
          comfortable.
        </p>
        <a href="#" title="Locate Us" className="locate-us">
          Locate Us
        </a>
      </aside>
      {/* Widget About /- */}
      {/* Widget Hours */}
      <aside className="col-md-3 col-sm-6 col-xs-6 ftr-widget hours-widget">
        <h3>working hours</h3>
        <img src="images/quote-ic-3.png" alt="quote-ic" />
        <ul>
          <li>
            <a href="#">MON : 9.30AM to 10.30PM</a>
          </li>
          <li>
            <a href="#">Tue : 9.30AM to 10.30PM</a>
          </li>
          <li>
            <a href="#">Wed : 9.30AM to 10.30PM</a>
          </li>
          <li>
            <a href="#">Thu : 9.30AM to 10.30PM</a>
          </li>
          <li>
            <a href="#">Fri : 9.30AM to 10.30PM</a>
          </li>
          <li className="active">
            <a href="#">Sat : Closed</a>
          </li>
          <li>
            <a href="#">Sun : 9.30AM to 10.30PM</a>
          </li>
        </ul>
      </aside>
      {/* Widget Hours /- */}
      {/* Widget Links */}
      <aside className="col-md-2 col-sm-6 col-xs-6 ftr-widget hours-widget link-widget">
        <h3>Quick links</h3>
        <img src="images/quote-ic-3.png" alt="quote-ic" />
        <ul>
          <li>
            <a href="about.html" title="About Us">
              About Us
            </a>
          </li>
          <li>
            <a href="index.html" title="Features">
              Features
            </a>
          </li>
          <li>
            <a href="services.html" title="Services">
              Services
            </a>
          </li>
          <li>
            <a href="gallery-single.html" title="Portfolio">
              Portfolio
            </a>
          </li>
          <li>
            <a href="contact-us.html" title="Sitemap">
              Sitemap
            </a>
          </li>
          <li>
            <a href="blog.html" title="Blog">
              Blog
            </a>
          </li>
          <li>
            <a href="contact-us.html" title="Contact Us">
              Contact Us
            </a>
          </li>
        </ul>
      </aside>
      {/* Widget Links /- */}
      {/* Widget Contact */}
      <aside className="col-md-4 col-sm-6 col-xs-6 ftr-widget contact-widget">
        <h3>Contact Info</h3>
        <img src="images/quote-ic-3.png" alt="quote-ic" />
        <div className="contact-info">
          <p>
            <span>Address:</span>323A,Olive Palace, Washington DC, USA.
          </p>
          <p>
            <span>Phone no:</span>
            <a href="tel:+1992746789" title="+1-99-274-6789">
              +1-99-274-6789
            </a>
          </p>
          <p>
            <a href="tel:+1773456780" title="+1-77-345-6780">
              +1-77-345-6780
            </a>
          </p>
          <ul>
            <li>
              <a href="#" title="Facebbok">
                <i className="fa fa-facebook" />
              </a>
            </li>
            <li>
              <a href="#" title="Twitter">
                <i className="fa fa-twitter" />
              </a>
            </li>
            <li>
              <a href="#" title="Instagram">
                <i className="fa fa-instagram" />
              </a>
            </li>
          </ul>
        </div>
      </aside>
      {/* Widget Contact /- */}
      <div className="bottom-footer">
        <p>© Copyrights PizzaKitchen 2016. All Rights Reserved</p>
        <div className="terms-policy">
          <a href="#">Terms &amp; Condtions</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </div>
    {/* Container /- */}
  </footer>
</>

      </>
    </div>
  )
}
