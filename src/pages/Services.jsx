import React from 'react'

export default function Services() {
  return (
    <>
    <main className="site-main page-spacing">
  {/* Page Banner */}
  <div className="page-banner container-fluid no-padding">
    <div className="banner-content">
      <h3>Services</h3>
      <ol className="breadcrumb">
        <li>
          <a href="index.html" title="Home">
            Home
          </a>
        </li>
        <li className="active">Services</li>
      </ol>
    </div>
  </div>
  {/* Page Banner /- */}
  {/* Services Section */}
  <div className="services-section container-fluid no-padding">
    <div className="section-padding" />
    {/* Container */}
    <div className="container">
      {/* Section Header */}
      <div className="section-header">
        <h3>Our Friendly Care</h3>
        <h5>SERVICES</h5>
        <img
          src="images/section-seprator.png"
          alt="section-seprator"
          width={76}
          height={10}
        />
      </div>
      {/* Section Header /- */}
      <div className="col-md-3 col-sm-6 services-content-left">
        <div className="services-box">
          <i className="icon icon-User" />
          <h3>SMILING SERVICES</h3>
          <p>
            The one day when lady met fellow and they knew it was much more than
            a hunch the first mate and his Skipper.
          </p>
        </div>
        <div className="services-box">
          <i className="icon icon-Icecream2" />
          <h3>BEST QUALITY</h3>
          <p>
            The one day when lady met fellow and they knew it was much more than
            a hunch the first mate and his Skipper.
          </p>
        </div>
        <div className="services-box">
          <i className="icon icon-Layers" />
          <h3>GLOBAL FLAVOURS</h3>
          <p>
            The one day when lady met fellow and they knew it was much more than
            a hunch the first mate and his Skipper.
          </p>
        </div>
      </div>
      <div className="col-md-3 col-sm-6 services-content-right">
        <div className="services-box">
          <i className="icon icon-Planet" />
          <h3>GREAT ATMOSHPERE</h3>
          <p>
            The one day when lady met fellow and they knew it was much more than
            a hunch the first mate and his Skipper.
          </p>
        </div>
        <div className="services-box">
          <i className="icon icon-Pizza" />
          <h3>FRESHLY MADE</h3>
          <p>
            The one day when lady met fellow and they knew it was much more than
            a hunch the first mate and his Skipper.
          </p>
        </div>
        <div className="services-box">
          <i className="icon icon-Drop" />
          <h3>NATURAL INGREDIENTS</h3>
          <p>
            The one day when lady met fellow and they knew it was much more than
            a hunch the first mate and his Skipper.
          </p>
        </div>
      </div>
      <div className="col-md-6 col-sm-12 services-content-center">
        <img
          src="images/services.png"
          alt="services"
          width={549}
          height={516}
        />
      </div>
    </div>
    {/* Container /- */}
    <div className="section-padding" />
  </div>
  {/* Services Section */}
  {/* Delivery Section */}
  <div className="delivery-section container-fluid no-padding">
    {/* Container */}
    <div className="container">
      <div className="col-md-5 col-sm-5 col-xs-5 delivery-img">
        <img
          src="images/delivery.png"
          alt="delivery"
          width={295}
          height={372}
        />
      </div>
      <div className="col-md-7 col-sm-7 col-xs-7 delivery-content">
        {/* Section Header */}
        <div className="section-header left-header">
          <h3>Door Step Delivery</h3>
          <img
            src="images/quote-ic-3.png"
            alt="quote-ic"
            width={35}
            height={8}
          />
          <p>
            The one day when the lady met this fellow and they knew it was much
            more than a hunch the first mate and his Skipper too will do their
            comfortable.
          </p>
        </div>
        {/* Section Header /- */}
        <div className="delivery-contact">
          <a href="#" title="Order Online" className="order-online">
            Order Online
          </a>
          <p>
            <span>(Or)</span>order through one call:{" "}
            <a href="tel:+1-92-567-7890" title="+1-92-567-7890">
              +1-92-567-7890
            </a>
          </p>
        </div>
      </div>
    </div>
    {/* Container /- */}
  </div>
  {/* Delivery Section */}
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
  {/* Process Section */}
  <div className="process-section container-fluid no-padding">
    <div className="section-padding" />
    <div className="process-top-image">
      <img src="images/process-top-img.png" alt="process-top-img" />
    </div>
    {/* Container */}
    <div className="container">
      {/* Section Header */}
      <div className="section-header">
        <h3>Our Baking Theory</h3>
        <h5>Process</h5>
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
      <div className="row">
        <div className="col-md-12 col-sm-12 col-xs-12 no-padding process-box">
          <div className="col-md-8 col-sm-12 col-xs-12">
            <div className="col-md-8 col-sm-8 col-xs-7">
              <img src="images/process-1.png" alt="process" />
              <span />
            </div>
            <div className="col-md-4 col-sm-4 col-xs-5">
              <div className="process-content">
                <h3>cheese</h3>
                <p>The one day when the lady met this fellow</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12 col-sm-12 col-xs-12 no-padding process-box">
          <div className="col-md-8 col-sm-12 col-xs-12">
            <div className="col-md-8 col-sm-8 col-xs-7">
              <img src="images/process-2.png" alt="process" />
              <span />
            </div>
            <div className="col-md-4 col-sm-4 col-xs-5">
              <div className="process-content">
                <h3>cheese</h3>
                <p>The one day when the lady met this fellow</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12 col-sm-12 col-xs-12 no-padding process-box">
          <div className="col-md-8 col-sm-12 col-xs-12">
            <div className="col-md-8 col-sm-8 col-xs-7">
              <img src="images/process-3.png" alt="process" />
              <span />
            </div>
            <div className="col-md-4 col-sm-4 col-xs-5">
              <div className="process-content">
                <h3>cheese</h3>
                <p>The one day when the lady met this fellow</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12 col-sm-12 col-xs-12 no-padding process-box">
          <div className="col-md-8 col-sm-12 col-xs-12">
            <div className="col-md-8 col-sm-8 col-xs-7">
              <img src="images/process-4.png" alt="process" />
              <span />
            </div>
            <div className="col-md-4 col-sm-4 col-xs-5">
              <div className="process-content">
                <h3>cheese</h3>
                <p>The one day when the lady met this fellow</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12 col-sm-12 col-xs-12 no-padding process-box">
          <div className="col-md-8 col-sm-12 col-xs-12">
            <div className="col-md-8 col-sm-8 col-xs-7">
              <img src="images/process-5.png" alt="process" />
              <span />
            </div>
            <div className="col-md-4 col-sm-4 col-xs-5">
              <div className="process-content">
                <h3>cheese</h3>
                <p>The one day when the lady met this fellow</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12 col-sm-12 col-xs-12 no-padding process-box">
          <div className="col-md-8 col-sm-12 col-xs-12">
            <div className="col-md-8 col-sm-8 col-xs-7">
              <img src="images/process-6.png" alt="process" />
              <span />
            </div>
            <div className="col-md-4 col-sm-4 col-xs-5">
              <div className="process-content">
                <h3>cheese</h3>
                <p>The one day when the lady met this fellow</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12 col-sm-12 col-xs-12 no-padding process-box">
          <div className="col-md-8 col-sm-12 col-xs-12">
            <div className="col-md-8 col-sm-8 col-xs-7">
              <img src="images/process-7.png" alt="process" />
              <span />
            </div>
            <div className="col-md-4 col-sm-4 col-xs-5">
              <div className="process-content">
                <h3>cheese</h3>
                <p>The one day when the lady met this fellow</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12 col-sm-12 col-xs-12 no-padding process-box">
          <div className="col-md-8 col-sm-12 col-xs-12">
            <div className="col-md-8 col-sm-8 col-xs-7">
              <img src="images/process-8.png" alt="process" />
              <span />
            </div>
            <div className="col-md-4 col-sm-4 col-xs-5">
              <div className="process-content">
                <h3>cheese</h3>
                <p>The one day when the lady met this fellow</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Container /- */}
    <div className="process-bottom-image">
      <img src="images/process-bottom-img.png" alt="process-bottom-img" />
    </div>
    <div className="section-padding" />
  </div>
  {/* Process Section /- */}
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
