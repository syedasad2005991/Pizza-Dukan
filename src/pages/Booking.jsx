import React from 'react'

export default function Booking() {
  return (
    <>
    <main className="site-main page-spacing">
  {/* Page Banner */}
  <div className="page-banner container-fluid no-padding">
    <div className="banner-content">
      <h3>Booking</h3>
      <ol className="breadcrumb">
        <li>
          <a href="index.html" title="Home">
            Home
          </a>
        </li>
        <li className="active">Booking</li>
      </ol>
    </div>
  </div>
  {/* Page Banner /- */}
  {/* Menu Section 1 */}
  <div className="menu-section-1 container-fluid no-padding">
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
      <h2 className="menu-heading">our pizza flavours</h2>
      <div className="pizza-flavour">
        <div className="col-md-4 col-sm-6 col-xs-6">
          <div className="menu-content">
            <i>
              <img src="images/flavour-1.png" alt="flavour" />
            </i>
            <h3>Mexican Green Wave</h3>
            <h5>
              Price: <span>$25</span>
            </h5>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 col-xs-6">
          <div className="menu-content">
            <i>
              <img src="images/flavour-2.png" alt="flavour" />
            </i>
            <h3>Meatzaa Pizza</h3>
            <h5>
              Price: <span>$55</span>
            </h5>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 col-xs-6">
          <div className="menu-content">
            <i>
              <img src="images/flavour-3.png" alt="flavour" />
            </i>
            <h3>Sicilian Pizza</h3>
            <h5>
              Price: <span>$85</span>
            </h5>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 col-xs-6">
          <div className="menu-content">
            <i>
              <img src="images/flavour-4.png" alt="flavour" />
            </i>
            <h3>Margherita Pizza</h3>
            <h5>
              Price: <span>$35</span>
            </h5>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 col-xs-6">
          <div className="menu-content">
            <i>
              <img src="images/flavour-5.png" alt="flavour" />
            </i>
            <h3>Cheese and Pepperoni</h3>
            <h5>
              Price: <span>$65</span>
            </h5>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 col-xs-6">
          <div className="menu-content">
            <i>
              <img src="images/flavour-6.png" alt="flavour" />
            </i>
            <h3>Gourmet Pizza</h3>
            <h5>
              Price: <span>$95</span>
            </h5>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 col-xs-6">
          <div className="menu-content">
            <i>
              <img src="images/flavour-7.png" alt="flavour" />
            </i>
            <h3>Double Cheese Pizza</h3>
            <h5>
              Price: <span>$45</span>
            </h5>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 col-xs-6">
          <div className="menu-content">
            <i>
              <img src="images/flavour-8.png" alt="flavour" />
            </i>
            <h3>Golden Chicken Delight</h3>
            <h5>
              Price: <span>$75</span>
            </h5>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 col-xs-6">
          <div className="menu-content">
            <i>
              <img src="images/flavour-9.png" alt="flavour" />
            </i>
            <h3>Neapolitan Pizza</h3>
            <h5>
              Price: <span>$105</span>
            </h5>
          </div>
        </div>
      </div>
      <h2 className="menu-heading">our soft drinks flavours</h2>
      <div className="pizza-flavour drinks-flavour">
        <div className="col-md-4 col-sm-6 col-xs-6">
          <div className="menu-content">
            <i>
              <img src="images/drink-flavour-1.png" alt="flavour" />
            </i>
            <h3>STRAWBERRY MIX</h3>
            <h5>
              Price: <span>$25</span>
            </h5>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 col-xs-6">
          <div className="menu-content">
            <i>
              <img src="images/drink-flavour-2.png" alt="flavour" />
            </i>
            <h3>BLUEBERRY FLAVOUR</h3>
            <h5>
              Price: <span>$55</span>
            </h5>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 col-xs-6">
          <div className="menu-content">
            <i>
              <img src="images/drink-flavour-3.png" alt="flavour" />
            </i>
            <h3>ORANGE MIX</h3>
            <h5>
              Price: <span>$85</span>
            </h5>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 col-xs-6">
          <div className="menu-content">
            <i>
              <img src="images/drink-flavour-4.png" alt="flavour" />
            </i>
            <h3>Vegetable Drink</h3>
            <h5>
              Price: <span>$35</span>
            </h5>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 col-xs-6">
          <div className="menu-content">
            <i>
              <img src="images/drink-flavour-5.png" alt="flavour" />
            </i>
            <h3>COKE WITH LEMON</h3>
            <h5>
              Price: <span>$65</span>
            </h5>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 col-xs-6">
          <div className="menu-content">
            <i>
              <img src="images/drink-flavour-6.png" alt="flavour" />
            </i>
            <h3>BERRYMIX SHAKE</h3>
            <h5>
              Price: <span>$95</span>
            </h5>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 col-xs-6">
          <div className="menu-content">
            <i>
              <img src="images/drink-flavour-7.png" alt="flavour" />
            </i>
            <h3>LEMON SHAKE</h3>
            <h5>
              Price: <span>$45</span>
            </h5>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 col-xs-6">
          <div className="menu-content">
            <i>
              <img src="images/drink-flavour-8.png" alt="flavour" />
            </i>
            <h3>Golden DELIGHT DRINK</h3>
            <h5>
              Price: <span>$75</span>
            </h5>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 col-xs-6">
          <div className="menu-content">
            <i>
              <img src="images/drink-flavour-9.png" alt="flavour" />
            </i>
            <h3>FRUIT MIX SHAKE</h3>
            <h5>
              Price: <span>$105</span>
            </h5>
          </div>
        </div>
      </div>
    </div>
    {/* Container /- */}
    <div className="section-padding" />
  </div>
  {/* Menu Section 1 /- */}
  {/* Order Section */}
  <div className="order-section container-fluid no-padding">
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
  </div>
  {/* Order Section /- */}
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
