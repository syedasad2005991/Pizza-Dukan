import React from 'react'

export default function Portfolio() {
  return (
    <>
    <main className="site-main page-spacing">
  {/* Page Banner */}
  <div className="page-banner container-fluid no-padding">
    <div className="banner-content">
      <h3>Gallery</h3>
      <ol className="breadcrumb">
        <li>
          <a href="index.html" title="Home">
            Home
          </a>
        </li>
        <li className="active">Gallery</li>
      </ol>
    </div>
  </div>
  {/* Page Banner /- */}
  {/* Gallery Single Section */}
  <div className="gallery-single-section container-fluid no-padding">
    <div className="section-padding" />
    {/* Container */}
    <div className="container">
      <div className="flexslider gallery-details-full">
        <ul className="slides">
          <li>
            <img
              src="images/large-thumb.jpg"
              alt="large-thumb"
              width={1170}
              height={500}
            />
          </li>
          <li>
            <img
              src="images/large-thumb.jpg"
              alt="large-thumb"
              width={1170}
              height={500}
            />
          </li>
          <li>
            <img
              src="images/large-thumb.jpg"
              alt="large-thumb"
              width={1170}
              height={500}
            />
          </li>
          <li>
            <img
              src="images/large-thumb.jpg"
              alt="large-thumb"
              width={1170}
              height={500}
            />
          </li>
          <li>
            <img
              src="images/large-thumb.jpg"
              alt="large-thumb"
              width={1170}
              height={500}
            />
          </li>
        </ul>
      </div>
      <div className="flexslider gallery-details-thumb">
        <ul className="slides">
          <li>
            <img
              src="images/thumb-1.jpg"
              alt="thumb"
              width={230}
              height={190}
            />
          </li>
          <li>
            <img
              src="images/thumb-2.jpg"
              alt="thumb"
              width={230}
              height={190}
            />
          </li>
          <li>
            <img
              src="images/thumb-3.jpg"
              alt="thumb"
              width={230}
              height={190}
            />
          </li>
          <li>
            <img
              src="images/thumb-4.jpg"
              alt="thumb"
              width={230}
              height={190}
            />
          </li>
          <li>
            <img
              src="images/thumb-4.jpg"
              alt="thumb"
              width={230}
              height={190}
            />
          </li>
        </ul>
      </div>
      <div className="col-md-4 col-sm-5 col-xs-6">
        <div className="info-box">
          <h3>
            CREATED BY:<span>PizzaKitchen</span>
          </h3>
          <h3>
            DATE OF VIEW:<span>May 27, 2016</span>
          </h3>
          <h3>
            AUTHOR:<span>John Williams</span>
          </h3>
          <h3>
            RECEIPES:<span>Capsicum,Onion</span>
          </h3>
          <h3>
            INGREDIENTS:<span>Mixed Nature olives</span>
          </h3>
        </div>
      </div>
      <div className="col-md-8 col-sm-7 col-xs-6">
        <div className="info-content">
          <h3>information</h3>
          <img
            src="images/quote-ic-3.png"
            alt="quote-ic"
            width={35}
            height={8}
          />
          <p>
            The one day when the lady met this fellow and they knew it was much
            more than a hunch the first mate and his Skipper too will
            comfortable all of them had hair of gold like their mother the
            youngest curls knight rider shaowy flight dangerous world of a man
            who does not exist now were up in the big leagues getting our turn
            at bat the one day when the lady met this fellow and they knew it
            was much more than a hunch the first mate.
          </p>
          <p>
            A hunch the first mate and his Skipper too will do their comfortable
            all of them had hair of gold like their mother the youngest one in
            curls knight rider shaowy flight into the dangerous world of a man
            who does not exist.
          </p>
        </div>
      </div>
      <div className="gallery-info-content">
        <div className="col-md-6 col-sm-6 col-xs-6">
          <div className="info-content">
            <h3>DESCRIPTION</h3>
            <img
              src="images/quote-ic-3.png"
              alt="quote-ic"
              width={35}
              height={8}
            />
            <p>
              The one day when the lady met this fellow and they knew it was
              much more than a hunch the first mate and his Skipper too will do
              their comfortable all of them had hair of gold like their mother
              the youngest one in curls knight rider shaowy flight into the
              dangerous world of a man who does not exist now were up in the big
              leagues getting our turn at bat the one day when the lady met this
              fellow.
            </p>
          </div>
        </div>
        <div className="col-md-6 col-sm-6 col-xs-6">
          <div className="info-content">
            <h3>CONCLUSION</h3>
            <img
              src="images/quote-ic-3.png"
              alt="quote-ic"
              width={35}
              height={8}
            />
            <p>
              The one day when the lady met this fellow and they knew it was
              much more than a hunch the first mate and his Skipper too will do
              their comfortable all of them had hair of gold like their mother
              the youngest one in curls knight rider shaowy flight into the
              dangerous world of a man who does not exist now were up in the big
              leagues getting our turn at bat the one day when the lady met this
              fellow.
            </p>
          </div>
        </div>
      </div>
    </div>
    {/* Container /- */}
    <div className="section-padding" />
  </div>
  {/* Gallery Single Section /- */}
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
