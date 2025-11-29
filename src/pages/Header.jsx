import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    
      <>
  <header className="header-main container-fluid no-padding">
    {/* Container */}
    <div className="container">
      {/* Top Header  */}
      <div className="top-header container-fluid no-padding">
        <div className="row">
          <div className="col-md-5 col-sm-6 col-xs-5 our-contacts">
            <p>
              <i className="fa fa-phone" />
              <a href="tel:+1-92-456-7890" title="Phone" className="phone">
                Call at: <span>+1-92-456-7890</span>
              </a>
            </p>
            <p>
              <i className="fa fa-envelope-o" />
              <a
                href="mailto:info@pizzakitchen.com"
                title="info@pizzakitchen.com"
              >
                Mail at: info@pizzakitchen.com
              </a>
            </p>
          </div>
          <div className="col-md-2 col-sm-2 col-xs-12 logo-block">
            <a title="Logo" href="index.html" className="navbar-brand">
              <img src="images/logo.png" alt="logo" />
            </a>
          </div>
          <div className="col-md-5 col-sm-6 col-xs-7 header-social">
            <ul>
              <li>
                <a href="#" title="Facebook">
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a href="#" title="Twitter">
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li>
                <a href="#" title="Google">
                  <i className="fa fa-google-plus" />
                </a>
              </li>
              <li>
                <a href="#" title="Instagram">
                  <i className="fa fa-instagram" />
                </a>
              </li>
            </ul>
            <ul className="cart">
              <li>
                <a
                  aria-expanded="true"
                  aria-haspopup="true"
                  data-toggle="dropdown"
                  id="cart"
                  className="btn dropdown-toggle"
                  title="Order Online"
                  href="#"
                >
                  Order Online
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Top Header /- */}
      {/* Menu Block */}
      <div className="menu-block container-fluid no-padding">
        {/* Navigation */}
        <nav className="navbar ow-navigation">
          <div className="navbar-header">
            <button
              aria-controls="navbar"
              aria-expanded="false"
              data-target="#navbar"
              data-toggle="collapse"
              className="navbar-toggle collapsed"
              type="button"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a title="Logo1" href="index.html" className="navbar-brand logo-1">
              Pizza Kitchen
            </a>
          </div>
          <div className="navbar-collapse collapse" id="navbar">
            <ul className="nav navbar-nav">
              <li className="dropdown active">
                <a
                  href="index.html"
                  title="Pages"
                  className="dropdown-toggle"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Home
                </a>
                <i className="ddl-switch fa fa-angle-down" />
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/">
                      HomePage 1
                    </Link>
                  </li>
                  <li>
                    < Link title="/index2">
                      HomePage 2
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/about">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio">
                  Our Portfolio
                </Link>
              </li>
              <li className="dropdown">
                <a
                  aria-expanded="false"
                  aria-haspopup="true"
                  role="button"
                  className="dropdown-toggle"
                  title="Latest News"
                  href="blog.html"
                >
                  Our Blog
                </a>
                <i className="ddl-switch fa fa-angle-down" />
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/blog" >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link to="/blogpost">
                      Blog Post
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/booking">
                  Booking
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        {/* Navigation */}
      </div>
      {/* Menu Block /- */}
    </div>
    {/* Container /- */}
  </header>
  {/* Header Main /- */}
</>

    
  )
}
