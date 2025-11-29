import React from 'react'

export default function Contact() {
  return (
    <>
    <main className="site-main page-spacing">
  {/* Page Banner */}
  <div className="page-banner container-fluid no-padding">
    <div className="banner-content">
      <h3>Contact Us</h3>
      <ol className="breadcrumb">
        <li>
          <a href="index.html" title="Home">
            Home
          </a>
        </li>
        <li className="active">Contact Us</li>
      </ol>
    </div>
  </div>
  {/* Page Banner /- */}
  {/* Contact Us */}
  <div className="contact-us container-fluid no-padding">
    <div className="section-padding" />
    {/* Container */}
    <div className="container">
      {/* Section Header */}
      <div className="section-header">
        <h3>Keep in Touch with us</h3>
        <h5>contactus</h5>
        <img
          src="images/section-seprator.png"
          alt="section-seprator"
          width={76}
          height={10}
        />
        <p>
          The one day when the lady met this fellow and they knew it was much
          more than a hunch the first mate and his Skipper too will do their
          comfortable
        </p>
      </div>
      {/* Section Header /- */}
      <div className="col-md-5 col-sm-6 col-xs-6">
        <div className="contact-content">
          <i className="icon icon-House" />
          <h3>visit Us</h3>
          <p>120A Kings Town, New Orleans,United States.</p>
        </div>
        <div className="contact-content">
          <i className="icon icon-Mail" />
          <h3>Email Us</h3>
          <p>
            <a
              href="mailto:info@pizzakitchen.com"
              title="info@pizzakitchen.com"
            >
              info@pizzakitchen.com
            </a>
          </p>
          <p>
            <a
              href="mailto:support@pizzakitchen.com"
              title="support@pizzakitchen.com"
            >
              support@pizzakitchen.com
            </a>
          </p>
        </div>
        <div className="contact-content">
          <i className="icon icon-Phone2" />
          <h3>Call Us</h3>
          <p>
            <a href="tel:+1-99-274-6789" title="+1-99-274-6789">
              +1-99-274-6789
            </a>
          </p>
          <p>
            <a href="tel:+1-77-345-6780" title="+1-77-345-6780">
              +1-77-345-6780
            </a>
          </p>
        </div>
      </div>
      <div className="col-md-7 col-sm-6 col-xs-6">
        <form className="contact-form">
          <div className="form-group">
            <input
              type="text"
              required=""
              placeholder="Your Name *"
              id="input_name"
              className="form-control"
              name="contact-name"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              required=""
              placeholder="Your E-mail *"
              id="input_email"
              className="form-control"
              name="contact-email"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              required=""
              placeholder="Your Phone Number *"
              id="input_phone"
              className="form-control"
              name="contact-phone"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              required=""
              placeholder="Subject"
              id="input_subject"
              className="form-control"
              name="contact-subject"
            />
          </div>
          <div className="form-group">
            <textarea
              placeholder="Message"
              id="textarea_message"
              name="contact-message"
              rows={5}
              className="form-control"
              defaultValue={""}
            />
          </div>
          <div className="form-group">
            <input
              type="submit"
              name="post"
              id="btn_submit"
              defaultValue="Send"
              title="Send"
            />
          </div>
          <div className="alert-msg" id="alert-msg" />
        </form>
      </div>
    </div>
    {/* Container /- */}
    <div className="section-padding" />
    <div className="section-padding" />
    {/* Map Section */}
    <div className="map container-fluid no-padding">
      <div
        className="map-canvas"
        id="map-canvas-contact"
        data-lat="30.006442"
        data-lng="-90.072290"
        data-string="120A Kings Town, New Orleans,United States."
        data-zoom={10}
      />
    </div>
    {/*  Map Section /- */}
  </div>
  {/* Contact Us /- */}
  {/* Subscribe Section */}
  <div className="subscribe-section container-fluid no-padding">
    {/* Container */}
    <div className="container">
      <div className="subscribe-content">
        <h3>SIGNUP TO OUR NEWSLETTER</h3>
        <div className=" col-md-6 col-sm-8 col-xs-10 input-group">
          <input
            type="text"
            placeholder="Enter Your Email"
            className="form-control"
          />
          <span className="input-group-btn">
            <button type="button" title="Sign Up" className="btn btn-default">
              Subcribe
            </button>
          </span>
        </div>
        {/* /input-group */}
      </div>
    </div>
    {/* Container /- */}
  </div>
  {/* Subscribe Section /- */}
</main>

    </>
  )
}
