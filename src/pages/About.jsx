import React from 'react'

export default function About() {
  return (
    <>
    <main className="site-main page-spacing">
  {/* Page Banner */}
  <div className="page-banner container-fluid no-padding">
    <div className="banner-content">
      <h3>About Us</h3>
      <ol className="breadcrumb">
        <li>
          <a href="index.html" title="Home">
            Home
          </a>
        </li>
        <li className="active">About Us</li>
      </ol>
    </div>
  </div>
  {/* Page Banner /- */}
  {/* About Section */}
  <div className="about-section container-fluid no-padding">
    {/* Container */}
    <div className="container">
      <div className="col-md-5 col-sm-5 col-xs-6 about-img about-img-1">
        <img src="images/about-2.png" alt="about" width={646} height={646} />
      </div>
      <div className="col-md-7 col-sm-7 col-xs-6 about-content">
        {/* Section Header */}
        <div className="section-header left-header">
          <h3>Welcome to PizzaKitchen</h3>
          <h5>About Us</h5>
          <img
            src="images/section-seprator.png"
            alt="section-seprator"
            width={76}
            height={10}
          />
        </div>
        {/* Section Header /- */}
        <div className="about-box">
          <p>
            The one day when the lady met this fellow and they knew it was much
            more than a hunch the first mate and his Skipper too will do their
            comfortable its like a kind of torture to have to watch the show the
            ship set ground on the shore of this uncharted desert isle with too
            the millionaire and his wife If you have a problem if no one else
            can help can hire Gilligan the Skipper.
          </p>
          <p>
            The one day when the lady met this fellow and they knew it was much
            more than a hunch the first mate and his Skipper too will do their
            comfortable.
          </p>
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
          <a href="#" title="View More" className="view-more">
            View More
          </a>
        </div>
      </div>
    </div>
    {/* Container /- */}
  </div>
  {/* About Section /- */}
  {/* Testimonial Section */}
  <div className="testimonial-section container-fluid no-padding">
    <div className="section-padding" />
    {/* Container */}
    <div className="container">
      {/* Main Carousel */}
      <div
        id="main-carousel1"
        className="carousel slide carousel-fade"
        data-ride="carousel"
      >
        <div role="listbox" className="carousel-inner">
          <div className="item active">
            <div className="testimonial-content">
              <img
                src="images/testi-author.jpg"
                alt="testi-author"
                width={150}
                height={170}
              />
              <div className="testi-box">
                <p>
                  The one day when the lady met this fellow and they knew it was
                  much more than a hunch the first mate and his Skipper too will
                  do their comforta
                </p>
                <h3>MARK DEO</h3>
                <h5> Founder,Timeday</h5>
                <span>
                  <i className="fa fa-quote-left" aria-hidden="true" />
                </span>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="testimonial-content">
              <img
                src="images/testi-author.jpg"
                alt="testi-author"
                width={150}
                height={170}
              />
              <div className="testi-box">
                <p>
                  The one day when the lady met this fellow and they knew it was
                  much more than a hunch the first mate and his Skipper too will
                  do their comforta
                </p>
                <h3>MARK DEO</h3>
                <h5> Founder,Timeday</h5>
                <span>
                  <i className="fa fa-quote-left" aria-hidden="true" />
                </span>
              </div>
            </div>
          </div>
          <a
            className="left carousel-control"
            href="#main-carousel1"
            role="button"
            data-slide="prev"
          >
            <i className="fa fa-angle-left" aria-hidden="true" />
          </a>
          <a
            className="right carousel-control"
            href="#main-carousel1"
            role="button"
            data-slide="next"
          >
            <i className="fa fa-angle-right" aria-hidden="true" />
          </a>
        </div>
      </div>
      {/* Main Carousel /-  */}
    </div>
    {/* Container /- */}
    <div className="section-padding" />
  </div>
  {/* Testimonial Section /- */}
  {/* Team Section */}
  <div className="team-section container-fluid no-padding">
    <div className="section-padding" />
    {/* Container */}
    <div className="container">
      {/* Section Header */}
      <div className="section-header">
        <h3>Our Spicy Creature</h3>
        <h5>features</h5>
        <img
          src="images/section-seprator.png"
          alt="section-seprator"
          width={76}
          height={10}
        />
        <p>
          The one day when the lady met this fellow and they knew it was much
          more than a hunch the first mate and his Skipper too will do their
          comfortable.
        </p>
      </div>
      {/* Section Header /- */}
      <div className="col-md-4 col-sm-6 col-xs-6">
        <img src="images/team-1.png" alt="team" width={426} height={565} />
        <div className="team-hover-box">
          <i className="fa fa-envelope-o" aria-hidden="true" />
          <h3>maria luis</h3>
          <h5>chief cook</h5>
          <ul>
            <li>
              <a href="#" title="Facebook">
                <i className="fa fa-facebook" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="#" title="Twitter">
                <i className="fa fa-twitter" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="#" title="Google">
                <i className="fa fa-google-plus" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="#" title="Instagram">
                <i className="fa fa-instagram" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-md-4 col-sm-6 col-xs-6">
        <img src="images/team-2.png" alt="team" width={426} height={565} />
        <div className="team-hover-box">
          <i className="fa fa-envelope-o" aria-hidden="true" />
          <h3>maria luis</h3>
          <h5>chief cook</h5>
          <ul>
            <li>
              <a href="#" title="Facebook">
                <i className="fa fa-facebook" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="#" title="Twitter">
                <i className="fa fa-twitter" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="#" title="Google">
                <i className="fa fa-google-plus" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="#" title="Instagram">
                <i className="fa fa-instagram" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-md-4 col-sm-6 col-xs-6">
        <img src="images/team-3.png" alt="team" width={426} height={565} />
        <div className="team-hover-box">
          <i className="fa fa-envelope-o" aria-hidden="true" />
          <h3>maria luis</h3>
          <h5>chief cook</h5>
          <ul>
            <li>
              <a href="#" title="Facebook">
                <i className="fa fa-facebook" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="#" title="Twitter">
                <i className="fa fa-twitter" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="#" title="Google">
                <i className="fa fa-google-plus" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="#" title="Instagram">
                <i className="fa fa-instagram" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    {/* Container /- */}
  </div>
  {/* Team Section /- */}
  {/* Clients */}
  <div className="clients container-fluid no-padding">
    <div className="section-padding" />
    <div className="container">
      <div className="clients-carousel">
        <div className="col-md-12 item">
          <a href="#" title="client">
            <img src="images/clients-1.png" alt="clients-1" />
          </a>
        </div>
        <div className="col-md-12 item">
          <a href="#" title="client">
            <img src="images/clients-2.png" alt="clients-2" />
          </a>
        </div>
        <div className="col-md-12 item">
          <a href="#" title="client">
            <img src="images/clients-3.png" alt="clients-3" />
          </a>
        </div>
        <div className="col-md-12 item">
          <a href="#" title="client">
            <img src="images/clients-4.png" alt="clients-4" />
          </a>
        </div>
        <div className="col-md-12 item">
          <a href="#" title="client">
            <img src="images/clients-5.png" alt="clients-5" />
          </a>
        </div>
      </div>
    </div>
    {/* Container /- */}
    <div className="section-padding" />
  </div>
  {/* Client /- */}
  {/* Order Section 1 */}
  <div className="order-section order-section-1 container-fluid no-padding">
    <div className="col-md-7 col-sm-7 col-xs-12 order-left">
      <div className="img-box">
        <img src="images/order-man.png" alt="order-man" />
        <div className="order-box">
          <div className="order-title">
            <h3>fill the order</h3>
          </div>
          <form className="order-form">
            <div className="form-group">
              <input
                type="text"
                required=""
                placeholder="Your Name *"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                required=""
                placeholder="Your EMail *"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                required=""
                placeholder="Your Phone Number *"
                className="form-control"
              />
            </div>
            <div className="form-group">
              <select>
                <option>SELECT YOUR FLAVOURS</option>
                <option>SELECT YOUR FLAVOURS</option>
                <option>SELECT YOUR FLAVOURS</option>
                <option>SELECT YOUR FLAVOURS</option>
              </select>
            </div>
            <div className="form-group">
              <textarea
                placeholder="Your Address *"
                rows={6}
                className="form-control"
                defaultValue={""}
              />
            </div>
            <input
              type="submit"
              title="Order Now"
              defaultValue="Order Now"
              name="Order Now"
            />
          </form>
        </div>
      </div>
    </div>
    <div className="col-md-5 col-sm-5 col-xs-12 order-right-content counter-section">
      {/* Section Header */}
      <div className="section-header">
        <h3>Our Fun Facts</h3>
        <img
          src="images/section-seprator-1.png"
          alt="section-seprator"
          width={76}
          height={10}
        />
        <p>
          The one day when the lady met this fellow and they knew it was much
          more than a hunch the first mate and his Skipper too will do their
          comfortable.
        </p>
      </div>
      {/* Section Header /- */}
      <div className="col-md-6 col-sm-6 col-xs-12">
        <div className="counter-box">
          <i className="icon icon-TeaMug" aria-hidden="true" />
          <h3>
            <span
              className="count"
              id="statistics_count-1"
              data-statistics_percent={825}
            >
              {" "}
              &nbsp;
            </span>
          </h3>
          <p>COFFEE CUPS</p>
        </div>
      </div>
      <div className="col-md-6 col-sm-6 col-xs-12">
        <div className="counter-box">
          <i className="icon icon-User" aria-hidden="true" />
          <h3>
            <span
              className="count"
              id="statistics_count-2"
              data-statistics_percent={1500}
            >
              &nbsp;
            </span>
          </h3>
          <p>Happy Clients</p>
        </div>
      </div>
      <div className="col-md-6 col-sm-6 col-xs-12">
        <div className="counter-box">
          <i className="icon icon-Cup" aria-hidden="true" />
          <h3>
            <span
              className="count"
              id="statistics_count-3"
              data-statistics_percent={20}
            >
              &nbsp;
            </span>
          </h3>
          <p>AWARDS</p>
        </div>
      </div>
      <div className="col-md-6 col-sm-6 col-xs-12">
        <div className="counter-box">
          <i className="icon icon-House" aria-hidden="true" />
          <h3>
            <span
              className="count"
              id="statistics_count-4"
              data-statistics_percent={75}
            >
              &nbsp;
            </span>
          </h3>
          <p>BRANCHES</p>
        </div>
      </div>
    </div>
  </div>
  {/* Order Section 1 /- */}
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
