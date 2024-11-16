"use client"
import React from "react";

const Introdcution = () => {
  return (
    <section className="overflow-hidden">
      <div className="container">
        <div className="row align-items-center justify-content-center mb-6 sm-mb-50px position-relative">
          <div
            className="col-lg-6 col-md-10 position-relative md-mb-30px"
            data-anime='{ "effect": "slide", "color": "#ffffff", "direction":"lr", "easing": "easeOutQuad", "delay":50}'
          >
            {/* <img
                className="w-100"
                src="/images/SAP-Business-One-Core.webp"
                data-bottom-top="transform: translateY(-50px)"
                data-top-bottom="transform: translateY(50px)"
                alt=""
              /> */}

            <div className="container h-100 position-relative">
              <div className="row align-items-center justify-content-center text-center h-100">
                <div
                  className="col-md-12 position-relative atropos transform-3d"
                  data-atropos=""
                >
                  <div className="atropos-scale">
                    <div className="atropos-rotate">
                      <div className="atropos-inner text-center">
                        <div
                          data-atropos-offset={-8}
                          className="position-absolute left-0px right-0px top-100px lg-top-50px mx-auto"
                          data-anime='{ "scale":[1.2,1], "opacity": [0,1], "duration": 500, "delay": 0, "staggervalue": 200, "easing": "easeOutQuad" }'
                        >
                          <img
                            className=""
                            src="/dots.png"
                            alt=""
                          />
                        </div>
                        <img
                          data-atropos-offset={3}
                          className=" position-relative z-index-9 lg-w-80 md-w-90 sm-w-100"
                          src="/intro7.png"
                          alt=""
                          data-anime='{ "translateY": [50, 0], "rotateX": [10, 0], "perspective": [1000,1200], "scale": [1.1, 1], "opacity": [0,1], "duration": 800, "delay": 200, "staggervalue": 300, "easing": "easeOutQuad" }'
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-lg-5 offset-lg-1 last-paragraph-no-margin"
            data-anime='{ "el": "childs", "opacity": [0, 1], "rotateY": [-90, 0], "rotateZ": [-10, 0], "translateY": [80, 0], "translateZ": [50, 0], "staggervalue": 200, "duration": 900, "delay": 300, "easing": "easeOutCirc" }'
          >
            <span className="text-base-color fw-600 mb-15px text-uppercase d-block">
              Storekwil Business One
            </span>
            <h2 className="fw-600 text-dark-gray w-90 lg-w-100 text-dark-gray fw-700 ls-minus-2px">
              Introduction:
            </h2>
            <p className="w-90 sm-w-100">
              Experience the future of business management today. Our
              comprehensive platform provides everything from website building
              to global banking facilities, all designed to streamline your
              operations and empower your growth. Join our waitlist today and be
              among the first to experience the power of unified business
              solutions.
            </p>
            <ul className="p-0 mb-25px mt-15px list-style-01 w-90 lg-w-100">
              <li className="border-color-extra-medium-gray fw-600 text-dark-gray d-flex align-items-center pt-15px pb-15px">
                <div className="feature-box-icon feature-box-icon-rounded w-35px h-35px rounded-circle bg-solitude-blue me-10px text-center d-flex align-items-center justify-content-center flex-shrink-0">
                  <i className="fa-solid fa-check fs-13 text-base-color" />
                </div>
                Whether you're launching your first online store
              </li>
              <li className="border-color-extra-medium-gray fw-600 text-dark-gray d-flex align-items-center pt-15px pb-15px">
                <div className="feature-box-icon feature-box-icon-rounded w-35px h-35px rounded-circle bg-solitude-blue me-10px text-center d-flex align-items-center justify-content-center flex-shrink-0">
                  <i className="fa-solid fa-check fs-13 text-base-color" />
                </div>
                looking to scale an established brand
              </li>
              <li className="border-color-extra-medium-gray fw-600 text-dark-gray d-flex align-items-center pt-15px pb-15px">
                <div className="feature-box-icon feature-box-icon-rounded w-35px h-35px rounded-circle bg-solitude-blue me-10px text-center d-flex align-items-center justify-content-center flex-shrink-0">
                  <i className="fa-solid fa-check fs-13 text-base-color" />
                </div>
                so you can focus on what you do best.
              </li>
            </ul>
            {/* <a
              href="#waitlist"
              className="btn btn-large btn-dark-gray btn-box-shadow btn-rounded btn-switch-text"
            >
              <span>
                <span className="btn-double-text" data-text="Join Waitlist">
                  Join Waitlist
                </span>
                <span>
                  <i className="feather icon-feather-arrow-right" />
                </span>
              </span>
            </a> */}
            <div
              onClick={() => {
                document
                  .getElementById("waitlist")
                  .scrollIntoView({ behavior: "smooth" });
              }}
              class="btn btn-gradient-fast-blue-purple btn-switch-text btn-large left-icon btn-round-edge submit text-transform-none"
            >
              <span>
                <span>
                  <i class="bi bi-calendar-check"></i>
                </span>
                <span class="btn-double-text" data-text="Join Our Waitlist">
                  Join Our Waitlist
                </span>
              </span>
            </div>
          </div>
        </div>
        <div
          className="row align-items-center justify-content-center border border-color-extra-medium-gray border-radius-100px md-border-radius-6px p-50px lg-p-20px m-0 box-shadow-quadruple-large"
          data-bottom-top="transform:scale(1.1, 1.1) translateY(30px);"
          data-top-bottom="transform:scale(1, 1) translateY(-30px);"
        >
          {/* start process step item */}
          <div className="col-lg-4 col-md-6 process-step-style-07 position-relative md-mb-30px">
            <div className="process-step-item d-flex align-items-center">
              <div className="process-step-icon-wrap position-relative">
                <div className="process-step-icon d-flex justify-content-center align-items-center mx-auto rounded-circle h-60px w-60px  fs-17 fw-500">
                  <img src="images/problem.svg" className="h-50px" alt="" />
                </div>
              </div>
              <div className="process-content ps-20px last-paragraph-no-margin">
                <span className="d-block fw-600 text-dark-gray fs-17 ls-minus-05px alt-font">
                  "Simplify your path from startup to star"
                </span>
                {/* <p>Lorem ipsum simply printing</p> */}
              </div>
            </div>
          </div>
          {/* end process step item */}
          {/* start process step item */}
          <div className="col-lg-4 col-md-6 process-step-style-07 position-relative md-mb-30px">
            <div className="process-step-item d-flex align-items-center">
              <div className="process-step-icon-wrap position-relative">
                <div className="process-step-icon d-flex justify-content-center align-items-center mx-auto rounded-circle h-60px w-60px  fs-17 fw-500">
                  <img src="images/solution.svg" className="h-50px" alt="" />
                </div>
              </div>
              <div className="process-content ps-20px last-paragraph-no-margin">
                <span className="d-block fw-600 text-dark-gray fs-17 ls-minus-05px alt-font">
                  "Step into the future of business management."
                </span>
                {/* <p>Lorem ipsum simply printing</p> */}
              </div>
            </div>
          </div>
          {/* end process step item */}
          {/* start process step item */}
          <div className="col-lg-4 col-md-6 process-step-style-07 position-relative">
            <div className="process-step-item d-flex align-items-center">
              <div className="process-step-icon-wrap position-relative">
                <div className="process-step-icon d-flex justify-content-center align-items-center mx-auto rounded-circle h-60px w-60px  fs-17 fw-500">
                  <img src="images/growth.svg" className="h-50px" alt="" />
                </div>
              </div>
              <div className="process-content ps-20px last-paragraph-no-margin">
                <span className="d-block fw-600 text-dark-gray fs-17 ls-minus-05px alt-font">
                  "Lead the market. Leave the complexity to us"
                </span>
                {/* <p>Lorem ipsum simply printing</p> */}
              </div>
            </div>
          </div>
          {/* end process step item */}
        </div>
      </div>
    </section>
  );
};

export default Introdcution;
