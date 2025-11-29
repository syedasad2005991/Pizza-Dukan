import React from 'react'

export default function Index2() {
  return (
    <>
    <main className="site-main page-spacing">
  {/* Photo Slider 1 */}
  <div className="photo-slider photo-slider-1 container-fluid no-padding">
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
            src="images/slider-2.jpg"
          />
          <div className="carousel-caption">
            <img
              src="images/slider-ic-1.png"
              alt="slider-ic"
              width={202}
              height={85}
            />
            <h3>Ideas are like pizza dough, made to be tossed around.</h3>
            <a href="#" title="Get Started" className="get-started">
              Get Started
            </a>
            <a href="#" title="Learn More" className="learn-more">
              Learn More
            </a>
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
            src="images/slider-2.jpg"
          />
          <div className="carousel-caption">
            <img
              src="images/slider-ic-1.png"
              alt="slider-ic"
              width={202}
              height={85}
            />
            <h3>Ideas are like pizza dough, made to be tossed around.</h3>
            <a href="#" title="Get Started" className="get-started">
              Get Started
            </a>
            <a href="#" title="Learn More" className="learn-more">
              Learn More
            </a>
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
          <i className="fa fa-angle-left" aria-hidden="true" />
        </a>
        <a
          className="right carousel-control"
          href="#main-carousel"
          role="button"
          data-slide="next"
        >
          <i className="fa fa-angle-right" aria-hidden="true" />
        </a>
      </div>
    </div>
    {/* Main Carousel /-  */}
  </div>
  {/* Photo Slider 1 /- */}
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
  <div
    id="order-section"
    className="order-section order-section-1 container-fluid no-padding"
  >
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
  {/* Gallery Section  */}
  <div className="gallery-section container-fluid no-padding">
    <div className="section-padding" />
    {/* Section Header */}
    <div className="section-header">
      <h3>Our Pizza Stuffs</h3>
      <h5>GALLERY</h5>
      <img
        src="images/section-seprator.png"
        alt="section-seprator"
        width={76}
        height={10}
      />
      <p>
        The one day when the lady met this fellow and they knew it was much more
        than a hunch the first mate and his Skipper too will do their
        comfortable
      </p>
    </div>
    {/* Section Header /- */}
    <ul className="portfolio-list no-left-padding">
      <li className="col-md-3 col-sm-4 col-xs-6 no-padding">
        <div className="content-image-block">
          <a href=".html#">
            <img
              src="images/gallery-1.jpg"
              alt="gallery"
              width={480}
              height={500}
            />
          </a>
          <div className="content-block-hover">
            <a href="#" title="Search">
              <i className="icon icon-Search" />
            </a>
            <a href="gallery-single.html" title="Link">
              <i className="icon icon-FullScreen" />
            </a>
            <h3>PIZZA MANIA</h3>
            <p>
              The one day when the lady met this fellow and they knew it was
              much more than a hunch
            </p>
          </div>
        </div>
      </li>
      <li className="col-md-6 col-sm-8 col-xs-6 no-padding wide">
        <div className="content-image-block">
          <a href=".html#">
            <img
              src="images/gallery-2.jpg"
              alt="gallery"
              width={960}
              height={500}
            />
          </a>
          <div className="content-block-hover">
            <a href="#" title="Search">
              <i className="icon icon-Search" />
            </a>
            <a href="gallery-single.html" title="Link">
              <i className="icon icon-FullScreen" />
            </a>
            <h3>PIZZA MANIA</h3>
            <p>
              The one day when the lady met this fellow and they knew it was
              much more than a hunch
            </p>
          </div>
        </div>
      </li>
      <li className="col-md-3 col-sm-4 col-xs-6 no-padding">
        <div className="content-image-block">
          <a href=".html#">
            <img
              src="images/gallery-3.jpg"
              alt="gallery"
              width={480}
              height={500}
            />
          </a>
          <div className="content-block-hover">
            <a href="#" title="Search">
              <i className="icon icon-Search" />
            </a>
            <a href="gallery-single.html" title="Link">
              <i className="icon icon-FullScreen" />
            </a>
            <h3>PIZZA MANIA</h3>
            <p>
              The one day when the lady met this fellow and they knew it was
              much more than a hunch
            </p>
          </div>
        </div>
      </li>
      <li className="col-md-3 col-sm-4 col-xs-6 no-padding">
        <div className="content-image-block">
          <a href=".html#">
            <img
              src="images/gallery-4.jpg"
              alt="gallery"
              width={480}
              height={500}
            />
          </a>
          <div className="content-block-hover">
            <a href="#" title="Search">
              <i className="icon icon-Search" />
            </a>
            <a href="gallery-single.html" title="Link">
              <i className="icon icon-FullScreen" />
            </a>
            <h3>PIZZA MANIA</h3>
            <p>
              The one day when the lady met this fellow and they knew it was
              much more than a hunch
            </p>
          </div>
        </div>
      </li>
      <li className="col-md-3 col-sm-4 col-xs-6 no-padding">
        <div className="content-image-block">
          <a href=".html#">
            <img
              src="images/gallery-5.jpg"
              alt="gallery"
              width={480}
              height={500}
            />
          </a>
          <div className="content-block-hover">
            <a href="#" title="Search">
              <i className="icon icon-Search" />
            </a>
            <a href="gallery-single.html" title="Link">
              <i className="icon icon-FullScreen" />
            </a>
            <h3>PIZZA MANIA</h3>
            <p>
              The one day when the lady met this fellow and they knew it was
              much more than a hunch
            </p>
          </div>
        </div>
      </li>
      <li className="col-md-6 col-sm-8 col-xs-6 no-padding wide">
        <div className="content-image-block">
          <a href=".html#">
            <img
              src="images/gallery-6.jpg"
              alt="gallery"
              width={960}
              height={500}
            />
          </a>
          <div className="content-block-hover">
            <a href="#" title="Search">
              <i className="icon icon-Search" />
            </a>
            <a href="gallery-single.html" title="Link">
              <i className="icon icon-FullScreen" />
            </a>
            <h3>PIZZA MANIA</h3>
            <p>
              The one day when the lady met this fellow and they knew it was
              much more than a hunch
            </p>
          </div>
        </div>
      </li>
    </ul>
  </div>
  {/* Gallery Section /- */}
  {/* Latest Blog */}
  <div className="latest-blog container-fluid no-padding">
    <div className="section-padding" />
    {/* Container */}
    <div className="container">
      {/* Section Header */}
      <div className="section-header">
        <h3>Fresh News</h3>
        <h5>blog</h5>
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
      <article className="type-post">
        <div className="col-md-6 col-sm-6 col-xs-6">
          <div className="entry-cover">
            <a title="Latest Blog" href="blog-post.html">
              <img
                width={600}
                height={310}
                alt="latest-blog"
                src="images/latest-blog-1.jpg"
              />
            </a>
          </div>
        </div>
        <div className="col-md-6 col-sm-6 col-xs-6 latest-box">
          <div className="latest-blog-content">
            <div className="post-date">
              <h5>07</h5>
              <span>apr</span>
            </div>
            <h3 className="entry-title">
              <a title="pizzamania flavours" href="blog-post.html">
                pizzamania flavours
              </a>
            </h3>
            <div className="entry-meta">
              <span>By</span>
              <a href="#">George WILLAMS</a>
              <a href="#">32 likes</a>
              <a href="#">13 Comments</a>
            </div>
          </div>
          <div className="entry-content">
            <p>
              The one day when the lady met this fellow and they knew it was
              much more than a hunch the first mate and his Skipper too will do
              their comfortable all of them had hair of gold like their mother
              the youngest one in curls knight Rider a shadowy flight into the
              dangerous world of a man who does not exist now were up in the big
              leagues getting our turn at bat.
            </p>
          </div>
          <a href="#" title="Read More" className="read-more">
            Read More
          </a>
        </div>
      </article>
      <article className="type-post">
        <div className="col-md-6 col-sm-6 col-xs-6 latest-box">
          <div className="latest-blog-content">
            <div className="post-date">
              <h5>15</h5>
              <span>may</span>
            </div>
            <h3 className="entry-title">
              <a title="dream celebration" href="blog-post.html">
                dream celebration
              </a>
            </h3>
            <div className="entry-meta">
              <span>By</span>
              <a href="#">George WILLAMS</a>
              <a href="#">23 likes</a>
              <a href="#">20 Comments</a>
            </div>
          </div>
          <div className="entry-content">
            <p>
              The one day when the lady met this fellow and they knew it was
              much more than a hunch the first mate and his Skipper too will do
              their comfortable all of them had hair of gold like their mother
              the youngest one in curls knight Rider a shadowy flight into the
              dangerous world of a man who does not exist now were up in the big
              leagues getting our turn at bat.
            </p>
          </div>
          <a href="#" title="Read More" className="read-more">
            Read More
          </a>
        </div>
        <div className="col-md-6 col-sm-6 col-xs-6">
          <div className="entry-cover">
            <a title="Latest Blog" href="blog-post.html">
              <img
                width={600}
                height={310}
                alt="latest-blog"
                src="images/latest-blog-2.jpg"
              />
            </a>
          </div>
        </div>
      </article>
    </div>
    {/* Container /- */}
    <div className="section-padding" />
  </div>
  {/* Latest Blog /- */}
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
