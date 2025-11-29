import React from 'react'

export default function Index() {
  return (
    <>
    <main className="site-main page-spacing">
  {/* Photo Slider */}
  <div className="photo-slider container-fluid no-padding">
    {/* Main Carousel */}
    <div
      id="main-carousel"
      className="carousel slide carousel-fade"
      data-ride="carousel"
    >
      <div role="listbox" className="carousel-inner">
        <div className="item active">
          <img
            width={1920}
            height={960}
            alt="slider"
            src="images/slider-1.jpg"
          />
          <div className="carousel-caption">
            <img
              src="images/slider-ic.png"
              alt="slider-ic"
              width={131}
              height={129}
            />
            <h3>Pizza makes me think that anything is possible</h3>
            <img
              src="images/section-seprator-1.png"
              alt="section-seprator"
              width={76}
              height={10}
            />
            <p>
              The one day when the lady met this fellow and they knew it was
              much more than a hunch the first mate and his Skipper too will do
              their comfortable knew it hunch the first mate.
            </p>
          </div>
          <span className="goto-next">
            <a href="#order-section">
              <i className="fa fa-arrow-down bounce" aria-hidden="true" />
              scroll down
            </a>
          </span>
        </div>
        <div className="item">
          <img
            width={1920}
            height={960}
            alt="slider"
            src="images/slider-1.jpg"
          />
          <div className="carousel-caption">
            <img
              src="images/slider-ic.png"
              alt="slider-ic"
              width={131}
              height={129}
            />
            <h3>Pizza makes me think that anything is possible</h3>
            <img
              src="images/section-seprator-1.png"
              alt="section-seprator"
              width={76}
              height={10}
            />
            <p>
              The one day when the lady met this fellow and they knew it was
              much more than a hunch the first mate and his Skipper too will do
              their comfortable knew it hunch the first mate.
            </p>
          </div>
          <span className="goto-next">
            <a href="#order-section">
              <i className="fa fa-arrow-down bounce" aria-hidden="true" />
              scroll down
            </a>
          </span>
        </div>
        <a
          className="left carousel-control"
          href="#main-carousel"
          role="button"
          data-slide="prev"
        >
          <i className="fa fa-caret-left" aria-hidden="true" />
        </a>
        <a
          className="right carousel-control"
          href="#main-carousel"
          role="button"
          data-slide="next"
        >
          <i className="fa fa-caret-right" aria-hidden="true" />
        </a>
      </div>
    </div>
    {/* Main Carousel /-  */}
  </div>
  {/* Photo Slider /- */}
  {/* Features Section */}
  <div
    id="features-section"
    className="features-section container-fluid no-padding"
  >
    <div className="section-padding" />
    <div className="top-image">
      <img src="images/features-top-img.png" alt="features-top-img" />
    </div>
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
      </div>
      {/* Section Header /- */}
      <div className="col-md-4 col-xs-6 col-xs-6">
        <div className="features-content">
          <img
            src="images/features-ic-1.png"
            alt="features-ic"
            width={89}
            height={106}
          />
          <h3>delicious receipe</h3>
          <p>
            The one day when the lady met this fellow and they knew it was much
            more than a hunch the first mate and his Skipper.
          </p>
          <a href="#" title="Read More">
            Read More
          </a>
        </div>
      </div>
      <div className="col-md-4 col-xs-6 col-xs-6">
        <div className="features-content">
          <img
            src="images/features-ic-2.png"
            alt="features-ic"
            width={105}
            height={90}
          />
          <h3>global flavours</h3>
          <p>
            The one day when the lady met this fellow and they knew it was much
            more than a hunch the first mate and his Skipper.
          </p>
          <a href="#" title="Read More">
            Read More
          </a>
        </div>
      </div>
      <div className="col-md-4 col-xs-6 col-xs-6">
        <div className="features-content">
          <img
            src="images/features-ic-3.png"
            alt="features-ic"
            width={91}
            height={106}
          />
          <h3>delightful taste</h3>
          <p>
            The one day when the lady met this fellow and they knew it was much
            more than a hunch the first mate and his Skipper.
          </p>
          <a href="#" title="Read More">
            Read More
          </a>
        </div>
      </div>
    </div>
    {/* Container /- */}
    <div className="bottom-image">
      <img src="images/features-bottom-img.png" alt="features-bottom-img" />
    </div>
    <div className="section-padding" />
  </div>
  {/* Features Section /- */}
  {/* Order Section 2 */}
  <div
    id="order-section"
    className="order-section order-section-2 container-fluid no-padding"
  >
    {/* Container */}
    <div className="container">
      <div className="col-md-5 col-sm-5 col-xs-12 order-right-content">
        {/* Section Header */}
        <div className="section-header left-heder">
          <h3>Make Your Order</h3>
          <h5>BOOK ONLINE</h5>
          <img
            src="images/section-seprator-1.png"
            alt="section-seprator"
            width={76}
            height={10}
          />
          <p>
            The one day when the lady met this fellow and they knew it was much
            more than a hunch the first mate and his Skipper too will do their
            comfortable knew it was much more than a hunch the first mate.
          </p>
        </div>
        {/* Section Header /- */}
        <div className="call-us">
          <h5>any quries? call at</h5>
          <p>
            <a href="tel:+1-92-345-7890" title="+1-92-345-7890">
              <i className="fa fa-phone" aria-hidden="true" />
              +1-92-345-7890
            </a>
          </p>
        </div>
        <h3 className="delivery-heading">
          <span>*</span>free delivery within 10km distance
        </h3>
      </div>
      <div className="col-md-7 col-sm-7 col-xs-12 order-left">
        <div className="img-box">
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
    </div>
    {/* Container /- */}
    <div className="section-padding" />
  </div>
  {/* Order Section 2 */}
  {/* About Section */}
  <div className="about-section container-fluid no-padding">
    {/* Container */}
    <div className="container">
      <div className="col-md-5 col-sm-5 col-xs-6 about-img">
        <img src="images/about-1.png" alt="about" width={597} height={965} />
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
  {/* Quotes Section */}
  <div className="quotes-section container-fluid no-padding">
    <div className="section-padding" />
    {/* Container */}
    <div className="container">
      <div className="quotes-content">
        <h3>Everybody likes Pizza! It's a Quick and Easy Clean-Up Meal.</h3>
        <img src="images/quote-ic-1.png" alt="quote-ic" />
        <h5>Buddy Valastro</h5>
        <img src="images/quote-ic-2.png" alt="quote-ic" />
      </div>
    </div>
    {/* Container /- */}
    <div className="section-padding" />
  </div>
  {/* Quotes Section /- */}
  {/* Menu Section */}
  <div className="menu-section container-fluid no-padding">
    <div className="section-padding" />
    {/* Container */}
    <div className="container">
      {/* Section Header */}
      <div className="section-header">
        <h3>Fresh From PizzaKitchen</h3>
        <h5>OUR MENU</h5>
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
      <div className="menu-details-tab">
        {/* Nav tabs */}
        <ul className="col-md-12 no-padding nav nav-tabs" role="tablist">
          <li className="col-md-6 col-sm-6 col-xs-6" role="presentation">
            <div className="col-md-6 col-sm-6 col-xs-4">
              <a href="#mexicangreenwave" role="tab" data-toggle="tab">
                <span>
                  <img src="images/menu-flv-1.png" alt="menu-flv" />
                </span>
                <i>
                  <img src="images/flavour-1.png" alt="flavour" />
                </i>
                Mexican Green Wave
              </a>
            </div>
          </li>
          <li className="col-md-6 col-sm-6 col-xs-6" role="presentation">
            <div className="col-md-6 col-sm-6 col-xs-4">
              <a href="#meatzaapizza" role="tab" data-toggle="tab">
                <span>
                  <img src="images/menu-flv-2.png" alt="menu-flv" />
                </span>
                <i>
                  <img src="images/flavour-2.png" alt="flavour" />
                </i>
                Meatzaa Pizza
              </a>
            </div>
          </li>
          <li className="col-md-6 col-sm-6 col-xs-6 active" role="presentation">
            <div className="col-md-6 col-sm-6 col-xs-4">
              <a href="#margheritapizza" role="tab" data-toggle="tab">
                <span>
                  <img src="images/menu-flv-3.png" alt="menu-flv" />
                </span>
                <i>
                  <img src="images/flavour-4.png" alt="flavour" />
                </i>
                Margherita Pizza
              </a>
            </div>
          </li>
          <li className="col-md-6 col-sm-6 col-xs-6" role="presentation">
            <div className="col-md-6 col-sm-6 col-xs-4">
              <a href="#cheeseandpepperoni" role="tab" data-toggle="tab">
                <span>
                  <img src="images/menu-flv-4.png" alt="menu-flv" />
                </span>
                <i>
                  <img src="images/flavour-5.png" alt="flavour" />
                </i>
                Cheese and Pepperoni
              </a>
            </div>
          </li>
          <li className="col-md-6 col-sm-6 col-xs-6" role="presentation">
            <div className="col-md-6 col-sm-6 col-xs-4">
              <a href="#doublecheesepizza" role="tab" data-toggle="tab">
                <span>
                  <img src="images/menu-flv-5.png" alt="menu-flv" />
                </span>
                <i>
                  <img src="images/flavour-7.png" alt="flavour" />
                </i>
                Double Cheese Pizza
              </a>
            </div>
          </li>
          <li className="col-md-6 col-sm-6 col-xs-6" role="presentation">
            <div className="col-md-6 col-sm-6 col-xs-4">
              <a href="#goldenchickendelight" role="tab" data-toggle="tab">
                <span>
                  <img src="images/menu-flv-6.png" alt="menu-flv" />
                </span>
                <i>
                  <img src="images/flavour-8.png" alt="flavour" />
                </i>
                Golden Chicken Delight
              </a>
            </div>
          </li>
        </ul>
        {/* Tab panes */}
        <div className="tab-content col-md-6 col-sm-6 col-xs-12 menu-center">
          <div role="tabpanel" className="tab-pane" id="mexicangreenwave">
            <div className="menu-content-box">
              <img
                src="images/menu-flavour.png"
                alt="menu-flavour"
                width={479}
                height={266}
              />
              <h3>mexicangreenwave</h3>
              <h5>
                Price: <span>$45</span>
              </h5>
              <a href="#" title="Buy Now" className="buy-now">
                Buy Now
              </a>
            </div>
          </div>
          <div role="tabpanel" className="tab-pane" id="meatzaapizza">
            <div className="menu-content-box">
              <img
                src="images/menu-flavour.png"
                alt="menu-flavour"
                width={479}
                height={266}
              />
              <h3>meatzaapizza</h3>
              <h5>
                Price: <span>$45</span>
              </h5>
              <a href="#" title="Buy Now" className="buy-now">
                Buy Now
              </a>
            </div>
          </div>
          <div role="tabpanel" className="tab-pane active" id="margheritapizza">
            <div className="menu-content-box">
              <img
                src="images/menu-flavour.png"
                alt="menu-flavour"
                width={479}
                height={266}
              />
              <h3>margheritapizza</h3>
              <h5>
                Price: <span>$45</span>
              </h5>
              <a href="#" title="Buy Now" className="buy-now">
                Buy Now
              </a>
            </div>
          </div>
          <div role="tabpanel" className="tab-pane" id="cheeseandpepperoni">
            <div className="menu-content-box">
              <img
                src="images/menu-flavour.png"
                alt="menu-flavour"
                width={479}
                height={266}
              />
              <h3>cheeseandpepperoni</h3>
              <h5>
                Price: <span>$45</span>
              </h5>
              <a href="#" title="Buy Now" className="buy-now">
                Buy Now
              </a>
            </div>
          </div>
          <div role="tabpanel" className="tab-pane" id="doublecheesepizza">
            <div className="menu-content-box">
              <img
                src="images/menu-flavour.png"
                alt="menu-flavour"
                width={479}
                height={266}
              />
              <h3>Double Cheese Pizza</h3>
              <h5>
                Price: <span>$45</span>
              </h5>
              <a href="#" title="Buy Now" className="buy-now">
                Buy Now
              </a>
            </div>
          </div>
          <div role="tabpanel" className="tab-pane" id="goldenchickendelight">
            <div className="menu-content-box">
              <img
                src="images/menu-flavour.png"
                alt="menu-flavour"
                width={479}
                height={266}
              />
              <h3>goldenchickendelight</h3>
              <h5>
                Price: <span>$45</span>
              </h5>
              <a href="#" title="Buy Now" className="buy-now">
                Buy Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Container /- */}
    <div className="section-padding" />
  </div>
  {/* Menu Section /- */}
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
