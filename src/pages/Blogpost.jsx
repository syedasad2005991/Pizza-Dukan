import React from 'react'

export default function Blogpost() {
  return (
    <>
    <main className="site-main page-spacing">
  {/* Page Banner */}
  <div className="page-banner container-fluid no-padding">
    <div className="banner-content">
      <h3>Blog</h3>
      <ol className="breadcrumb">
        <li>
          <a href="index.html" title="Home">
            Home
          </a>
        </li>
        <li className="active">Blog</li>
      </ol>
    </div>
  </div>
  {/* Page Banner /- */}
  {/* Blog Post */}
  <div className="latest-blog blog-section blog-post container-fluid no-padding">
    <div className="section-padding" />
    {/* Container */}
    <div className="container">
      {/* Content Area */}
      <div className="content-area col-md-8 col-sm-7 col-xs-12">
        <article className="type-post">
          <div className="entry-cover">
            <a title="Latest Blog" href="blog-post.html">
              <img
                width={760}
                height={350}
                alt="latest-blog"
                src="images/blog-1.jpg"
              />
            </a>
          </div>
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
              <a href="#">25 likes</a>
              <a href="#">20 Comments</a>
            </div>
          </div>
          <div className="entry-content">
            <p>
              The one day when the lady met this fellow and they knew it was
              much more than a hunch the first mate and his Skipper too will do
              their comfortable all of them had hair of gold like their mother
              the youngest one in curls knight Rider a shadowy flight into the
              dangerous world of a man who does not exist a shadowy flight into
              the dangerous world of a man who does not exist now were up in the
              big leagues getting our turn at bat they call him Flipper Flipper
              faster than lightning no one you see is smarter that is the way we
              all became the Brady Bunch.
            </p>
            <p>
              The youngest one in curls knight Rider a shadowy flight into the
              dangerous world of a man who does not exist a shadowy flight into
              the dangerous world of a man who does not exist now were up in the
              big leagues
            </p>
            <blockquote>
              " A shadowy flight into the dangerous world of a man who does not
              exist a shadowy flight into the dangerous world of a man who does
              not exist now were up in the big leagues "
            </blockquote>
            <p>
              They knew it was much more than a hunch the first mate and his
              Skipper too will do their comfortable all of them had hair of gold
              like their mother the youngest one in curls knight Rider a shadowy
              flight into the dangerous world of a man who does not exist a
              shadowy flight into the dangerous world of a man who does not
              exist now were up in the big leagues getting our turn at bat they
              call him flipper flipper faster than lightning no one you see is
              smarter that is the way we all became the Brady Bunch.
            </p>
            <div className="tags-social">
              <div className="tags">
                <h3 className="tags-social-heading">Tags:</h3>
                <a href="#">PizzaMania,</a>
                <a href="#">Meatzaa,</a>
                <a href="#">Chease Pepperoni</a>
              </div>
              <div className="social-share pull-right">
                <h3 className="tags-social-heading">Shares:</h3>
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
                    <a href="#" title="Instagram">
                      <i className="fa fa-instagram" aria-hidden="true" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </article>
        <div className="comment-section">
          <div className="section-heading">
            <h3>Comments (3)</h3>
          </div>
          <ul className="media-list">
            <li className="media">
              <div className="media-left">
                <a href="#" title="Peter Hein">
                  <img
                    src="images/avtar-1.jpg"
                    alt="comment"
                    width={70}
                    height={70}
                  />
                </a>
              </div>
              <div className="media-body">
                <div className="media-content">
                  <h4 className="media-heading">david bechkam</h4>
                  <a href="#" title="Reply">
                    <i className="fa fa-reply-all" aria-hidden="true" />
                    Reply
                  </a>
                  <span>20 January 2016 at 11:30 am</span>
                  <p>
                    The youngest one in curls knight Rider a shadowy flight into
                    the dangerous world of a man who does not exist a shadowy
                    flight into the dangerous world of a man who does not exist
                    leagues.
                  </p>
                </div>
              </div>
            </li>
            <li className="media media-even">
              <div className="media-left">
                <a href="#" title="William Stark">
                  <img
                    src="images/avtar-2.jpg"
                    alt="comment"
                    width={70}
                    height={70}
                  />
                </a>
              </div>
              <div className="media-body">
                <div className="media-content">
                  <h4 className="media-heading">JOE AUGUZ</h4>
                  <a href="#" title="Reply">
                    <i className="fa fa-reply-all" aria-hidden="true" />
                    Reply
                  </a>
                  <span>05 February 2016 at 10:00 am</span>
                  <p>
                    The youngest one in curls knight Rider a shadowy flight into
                    the dangerous world of a man who does not exist a shadowy
                    flight into the dangerous.
                  </p>
                </div>
              </div>
            </li>
            <li className="media">
              <div className="media-left">
                <a href="#" title="Andrew Smith">
                  <img
                    src="images/avtar-3.jpg"
                    alt="comment"
                    width={70}
                    height={70}
                  />
                </a>
              </div>
              <div className="media-body">
                <div className="media-content">
                  <h4 className="media-heading">JAIMUN JAMES</h4>
                  <a href="#" title="Reply">
                    <i className="fa fa-reply-all" aria-hidden="true" />
                    Reply
                  </a>
                  <span>15 March 2016 at 01:40 pm</span>
                  <p>
                    The youngest one in curls knight Rider a shadowy flight into
                    the dangerous world of a man who does not exist a shadowy
                    flight into the dangerous world of a man who does not exist
                    leagues.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="comment-form">
          <div className="section-heading">
            <h3>POST YOUR COMMENTS</h3>
          </div>
          <form className="row">
            <div className="form-group col-md-6">
              <input
                type="text"
                required=""
                placeholder="Name *"
                className="form-control"
              />
            </div>
            <div className="form-group col-md-6">
              <input
                type="text"
                required=""
                placeholder="EMail *"
                className="form-control"
              />
            </div>
            <div className="form-group col-md-12">
              <textarea
                placeholder="Message"
                rows={6}
                className="form-control"
                defaultValue={""}
              />
            </div>
            <input
              type="submit"
              title="Submit"
              defaultValue="Submit"
              name="Submit"
            />
          </form>
        </div>
      </div>
      {/* Content Area /- */}
      <div className="col-md-4 col-sm-5 col-xs-12 widget-area">
        {/* Widget Search */}
        <aside className="widget widget-search">
          <h3 className="widget-title">Search keywords</h3>
          <img src="images/quote-ic-3.png" alt="quote-ic" />
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search here..."
            />
            <span className="input-group-btn">
              <button className="btn btn-search" title="Search" type="button">
                <i className="icon icon-Search" />
              </button>
            </span>
          </div>
        </aside>
        {/* Widget Search /- */}
        {/* Widget Categories */}
        <aside className="widget widget-categories">
          <h3 className="widget-title">Categories</h3>
          <img src="images/quote-ic-3.png" alt="quote-ic" />
          <ul>
            <li>
              <a href="#" title="Mexican Green Wave">
                Mexican Green Wave
              </a>
            </li>
            <li>
              <a href="#" title="Margherita Pizza">
                Margherita Pizza
              </a>
            </li>
            <li>
              <a href="#" title="Double Cheese Pizza">
                Double Cheese Pizza
              </a>
            </li>
            <li>
              <a href="#" title="Meatzaa Pizza">
                Meatzaa Pizza
              </a>
            </li>
            <li>
              <a href="#" title="Cheese and Pepperoni">
                Cheese and Pepperoni
              </a>
            </li>
            <li>
              <a href="#" title="Golden Chicken Delight">
                Golden Chicken Delight
              </a>
            </li>
          </ul>
        </aside>
        {/* Widget Categories /-  */}
        {/* Widget Latest Post */}
        <aside className="widget widget-latestposts">
          <h3 className="widget-title">Recent Post</h3>
          <img src="images/quote-ic-3.png" alt="quote-ic" />
          <div className="latest-content">
            <a href="blog-post.html" title="Recent Posts">
              <i>
                <img
                  width={70}
                  height={70}
                  alt="thumb"
                  src="images/latest-post-1.jpg"
                />
              </i>
            </a>
            <h3>
              <a
                title="The one day when the lady met this fellow than a hunch."
                href="blog-post.html"
              >
                The one day when the lady met this fellow than a hunch.
              </a>
            </h3>
            <span>By</span>
            <p>Leo Guard </p> <p>April 25,2016</p>
          </div>
          <div className="latest-content">
            <a href="blog-post.html" title="Recent Posts">
              <i>
                <img
                  width={70}
                  height={70}
                  alt="thumb"
                  src="images/latest-post-2.jpg"
                />
              </i>
            </a>
            <h3>
              <a
                title="This is what we call the shown Muppet Show"
                href="blog-post.html"
              >
                This is what we call the shown Muppet Show
              </a>
            </h3>
            <span>By</span>
            <p>Matt Finch</p> <p>March 05,2016</p>
          </div>
          <div className="latest-content">
            <a href="blog-post.html" title="Recent Posts">
              <i>
                <img
                  width={70}
                  height={70}
                  alt="thumb"
                  src="images/latest-post-3.jpg"
                />
              </i>
            </a>
            <h3>
              <a
                title="These Happy Days are yours and mine Happy Days."
                href="blog-post.html"
              >
                These Happy Days are yours and mine Happy Days.
              </a>
            </h3>
            <span>By</span>
            <p>Leo Guard </p> <p>May 17,2016</p>
          </div>
        </aside>
        {/* Widget Latest Post /-  */}
        {/* Widget Video */}
        <aside className="widget widget-video">
          <h3 className="widget-title">video widgets</h3>
          <img src="images/quote-ic-3.png" alt="quote-ic" />
          <div className="video-section">
            <div className="video-section-content">
              <img
                width={290}
                height={210}
                alt="video-post"
                src="images/video-post.jpg"
              />
              <a href="https://vimeo.com/45830194" className="popup-vimeo">
                <i className="icon icon-Play" />
              </a>
            </div>
          </div>
        </aside>
        {/* Widget Video /- */}
        {/* Widget Archives */}
        <aside className="widget widget-categories">
          <h3 className="widget-title">archives</h3>
          <img src="images/quote-ic-3.png" alt="quote-ic" />
          <ul>
            <li>
              <a href="#" title="December 2015">
                December 2015
              </a>
            </li>
            <li>
              <a href="#" title="January 2016">
                January 2016
              </a>
            </li>
            <li>
              <a href="#" title="February 2016">
                February 2016
              </a>
            </li>
            <li>
              <a href="#" title="March 2016">
                March 2016
              </a>
            </li>
            <li>
              <a href="#" title="April 2016">
                April 2016
              </a>
            </li>
            <li>
              <a href="#" title="May 2016">
                May 2016
              </a>
            </li>
          </ul>
        </aside>
        {/* Widget Archives /-  */}
      </div>
    </div>
    {/* Container /- */}
    <div className="section-padding" />
  </div>
  {/* Blog Post /- */}
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
