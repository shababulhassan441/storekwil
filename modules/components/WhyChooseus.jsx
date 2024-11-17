import React from "react";

const WhyChooseus = () => {
  return (
    <section
      className="cover-background pt-5 xs-pt-8"
    //   style={{ backgroundImage: 'url("/images/demo-hosting-home-06.jpg")' }}
    >
      <div className="container">
        {/* <div className="row justify-content-center mb-3">
          <div
            className="col-lg-8 text-center"
            data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 900, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
          >
            <span className="text-base-color fw-600 mb-5px text-uppercase d-block">
              Our Capabilities
            </span>
            <h2 className="text-dark-gray fw-700 ls-minus-2px">
              Why Choose Storekwil
            </h2>
          </div>
        </div> */}
        <div
          className="row row-cols-1 row-cols-lg-4 row-cols-sm-2 g-5 justify-content-center"
          data-anime='{ "el": "childs",  "translateY": [0, 0], "perspective": [1200, 1200], "scale": [1.05, 1], "rotateX": [50, 0], "opacity": [0,1], "duration":600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
        >
          {/* start features box item */}
          <div className="col icon-with-text-style-07 transition-inner-all md-mb-30px">
            <div className="bg-white feature-box h-100 justify-content-start box-shadow-quadruple-large box-shadow-quadruple-large-hover text-start p-17 sm-p-14 border-radius-6px">
              <div className="feature-box-icon mb-30px">
                <img
                  src="demo-hosting-home-icon-02.svg"
                  className="h-50px"
                  alt=""
                />
              </div>
              <div className="feature-box-content">
                <span className="d-inline-block fw-600 text-dark-gray fs-18 ls-minus-05px">
                  Innovative Technology
                </span>
                <p className="mb-10px">
                  At Storekwil, we're pushing the boundaries of what a business
                  platform can do.
                </p>
                
              </div>
            </div>
          </div>
          {/* end features box item */}
          {/* start features box item */}
          <div className="col icon-with-text-style-07 transition-inner-all md-mb-30px">
            <div className="bg-white feature-box h-100 justify-content-start box-shadow-quadruple-large box-shadow-quadruple-large-hover text-start p-17 sm-p-14 border-radius-6px">
              <div className="feature-box-icon mb-30px">
                <img
                  src="demo-hosting-home-icon-03.svg"
                  className="h-50px"
                  alt=""
                />
              </div>
              <div className="feature-box-content">
                <span className="d-inline-block fw-600 text-dark-gray fs-18 ls-minus-05px">
                  All-in-One Platform
                </span>
                <p className="mb-10px">
                  Why juggle multiple tools when you can have everything in one
                  place
                </p>
                
              </div>
            </div>
          </div>
          {/* end features box item */}
          {/* start features box item */}
          <div className="col icon-with-text-style-07 transition-inner-all xs-mb-30px">
            <div className="bg-white feature-box h-100 justify-content-start box-shadow-quadruple-large box-shadow-quadruple-large-hover text-start p-17 sm-p-14 border-radius-6px">
              <div className="feature-box-icon mb-30px">
                <img
                  src="demo-hosting-home-icon-04.svg"
                  className="h-50px"
                  alt=""
                />
              </div>
              <div className="feature-box-content">
                <span className="d-inline-block fw-600 text-dark-gray fs-18 ls-minus-05px">
                  Global Reach, Local Touch
                </span>
                <p className="mb-10px">
                  Expand your business across borders without losing the local
                  appeal.
                </p>
                
              </div>
            </div>
          </div>
          {/* end features box item */}
          {/* start features box item */}
          <div className="col icon-with-text-style-07 transition-inner-all">
            <div className="bg-white feature-box h-100 justify-content-start box-shadow-quadruple-large box-shadow-quadruple-large-hover text-start p-17 sm-p-14 border-radius-6px">
              <div className="feature-box-icon mb-30px">
                <img
                  src="demo-hosting-home-icon-05.svg"
                  className="h-50px"
                  alt=""
                />
              </div>
              <div className="feature-box-content">
                <span className="d-inline-block fw-600 text-dark-gray fs-18 ls-minus-05px">
                  Unmatched Security
                </span>
                <p className="mb-10px">
                  Security is non-negotiable. At Storekwil, we protect your
                  business with top-tier
                </p>
                {/* <a
                    href="/about"
                    className="btn btn-link btn-hover-animation-switch btn-extra-large text-base-color text-uppercase-inherit"
                  >
                    <span>
                      <span className="btn-text">Learn more</span>
                      <span className="btn-icon">
                        <i className="feather icon-feather-arrow-right" />
                      </span>
                      <span className="btn-icon">
                        <i className="feather icon-feather-arrow-right" />
                      </span>
                    </span>
                  </a> */}
              </div>
            </div>
          </div>
          {/* end features box item */}
          {/* start features box item */}
          <div className="col icon-with-text-style-07 transition-inner-all">
            <div className="bg-white feature-box h-100 justify-content-start box-shadow-quadruple-large box-shadow-quadruple-large-hover text-start p-17 sm-p-14 border-radius-6px">
              <div className="feature-box-icon mb-30px">
                <img
                  src="demo-hosting-home-icon-05.svg"
                  className="h-50px"
                  alt=""
                />
              </div>
              <div className="feature-box-content">
                <span className="d-inline-block fw-600 text-dark-gray fs-18 ls-minus-05px">
                  Customisable Solutions
                </span>
                <p className="mb-10px">
                  Every business is unique, and Storekwil celebrates this.
                </p>
                {/* <a
                    href="/about"
                    className="btn btn-link btn-hover-animation-switch btn-extra-large text-base-color text-uppercase-inherit"
                  >
                    <span>
                      <span className="btn-text">Learn more</span>
                      <span className="btn-icon">
                        <i className="feather icon-feather-arrow-right" />
                      </span>
                      <span className="btn-icon">
                        <i className="feather icon-feather-arrow-right" />
                      </span>
                    </span>
                  </a> */}
              </div>
            </div>
          </div>
          {/* end features box item */}
          {/* start features box item */}
          <div className="col icon-with-text-style-07 transition-inner-all">
            <div className="bg-white feature-box h-100 justify-content-start box-shadow-quadruple-large box-shadow-quadruple-large-hover text-start p-17 sm-p-14 border-radius-6px">
              <div className="feature-box-icon mb-30px">
                <img
                  src="demo-hosting-home-icon-05.svg"
                  className="h-50px"
                  alt=""
                />
              </div>
              <div className="feature-box-content">
                <span className="d-inline-block fw-600 text-dark-gray fs-18 ls-minus-05px">
                  Dedicated Support
                </span>
                <p className="mb-10px">
                  Storekwil’s commitment to your success is reflected in our
                  exceptional customer support.
                </p>
                {/* <a
                    href="/about"
                    className="btn btn-link btn-hover-animation-switch btn-extra-large text-base-color text-uppercase-inherit"
                  >
                    <span>
                      <span className="btn-text">Learn more</span>
                      <span className="btn-icon">
                        <i className="feather icon-feather-arrow-right" />
                      </span>
                      <span className="btn-icon">
                        <i className="feather icon-feather-arrow-right" />
                      </span>
                    </span>
                  </a> */}
              </div>
            </div>
          </div>
          {/* end features box item */}
          {/* start features box item */}
          <div className="col icon-with-text-style-07 transition-inner-all">
            <div className="bg-white feature-box h-100 justify-content-start box-shadow-quadruple-large box-shadow-quadruple-large-hover text-start p-17 sm-p-14 border-radius-6px">
              <div className="feature-box-icon mb-30px">
                <img
                  src="demo-hosting-home-icon-05.svg"
                  className="h-50px"
                  alt=""
                />
              </div>
              <div className="feature-box-content">
                <span className="d-inline-block fw-600 text-dark-gray fs-18 ls-minus-05px">
                  Scalable Infrastructure
                </span>
                <p className="mb-10px">
                  Start small and grow big with Storekwil. Our scalable
                  infrastructure means that as your business expands
                </p>
                {/* <a
                    href="/about"
                    className="btn btn-link btn-hover-animation-switch btn-extra-large text-base-color text-uppercase-inherit"
                  >
                    <span>
                      <span className="btn-text">Learn more</span>
                      <span className="btn-icon">
                        <i className="feather icon-feather-arrow-right" />
                      </span>
                      <span className="btn-icon">
                        <i className="feather icon-feather-arrow-right" />
                      </span>
                    </span>
                  </a> */}
              </div>
            </div>
          </div>
          {/* end features box item */}
          {/* start features box item */}
          <div className="col icon-with-text-style-07 transition-inner-all">
            <div className="bg-white feature-box h-100 justify-content-start box-shadow-quadruple-large box-shadow-quadruple-large-hover text-start p-17 sm-p-14 border-radius-6px">
              <div className="feature-box-icon mb-30px">
                <img
                  src="demo-hosting-home-icon-05.svg"
                  className="h-50px"
                  alt=""
                />
              </div>
              <div className="feature-box-content">
                <span className="d-inline-block fw-600 text-dark-gray fs-18 ls-minus-05px">
                  Transparent Pricing
                </span>
                <p className="mb-10px">
                  No hidden fees. No surprises. With Storekwil it easy to plan
                  and budget for your business needs.
                </p>
                {/* <a
                    href="/about"
                    className="btn btn-link btn-hover-animation-switch btn-extra-large text-base-color text-uppercase-inherit"
                  >
                    <span>
                      <span className="btn-text">Learn more</span>
                      <span className="btn-icon">
                        <i className="feather icon-feather-arrow-right" />
                      </span>
                      <span className="btn-icon">
                        <i className="feather icon-feather-arrow-right" />
                      </span>
                    </span>
                  </a> */}
              </div>
            </div>
          </div>
          {/* end features box item */}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseus;
