"use client";
import React from "react";

const HeroSection = () => {
  return (
    <section
      className="cover-background full-screen bg-dark-gray ipad-top-space-margin position-relative section-dark md-h-auto"
      //   style={{ backgroundImage: 'url("hero-bg.jpg")' }}
    >
      <div className="overlay"></div>
      <div
        id="particles-style-01"
        className="h-100 position-absolute left-0px top-0 w-100"
        data-particle="true"
        data-particle-options='{"particles": {"number": {"value": 22,"density": {"enable": true,"value_area": 2000}},"color": {"value": ["#10ffff", "#0bb1ff", "#10ffff", "#0bb1ff"]},"shape": {"type": "edge","stroke":{"width":0,"color":"#000000"}},"opacity": {"value": 0.8,"random": false,"anim": {"enable": false,"speed": 1,"sync": false}},"size": {"value": 10,"random": true,"anim": {"enable": false,"sync": true}},"line_linked":{"enable":true,"distance":10,"color":"#ffffff","opacity":0.4,"width":1},"move": {"enable": true,"speed":1,"direction": "right","random": false,"straight": false}},"interactivity": {"detect_on": "canvas","events": {"onhover": {"enable": false,"mode": "repulse"},"onclick": {"enable": false,"mode": "push"},"resize": true}},"retina_detect": false}'
      />
      <div className="container h-100">
        <div className="row align-items-center justify-content-center h-100">
          <div className="col-xl-7 col-lg-8 col-md-10 text-white position-relative text-center text-lg-start">
            <div className="fs-70 sm-fs-60 xs-fs-60 fw-600 mb-20px ls-minus-4px overflow-hidden">
              <div
                className="d-inline-block"
                data-anime='{ "translateY": [100, 0], "easing": "easeOutCubic", "duration": 900 }'
              >
                {/* <span className="fs-50 sm-fs-40 xs-fs-30 fw-600 ls-minus-1px">
                    Power up business with{" "}
                  </span> */}
                <div
                  className="highlight-separator"
                  data-shadow-animation="true"
                  data-animation-delay={1500}
                >
                  Empower Your Business with Storekwil
                  <span>
                    <img src="highlight-separator.svg" alt="" />
                  </span>
                </div>
              </div>
            </div>
            <div className="fs-19 fw-300 mb-30px w-80 sm-w-100 opacity-6 d-block mx-auto mx-lg-0 overflow-hidden">
              {/* <span
                className="d-inline-block lh-32"
                data-anime='{ "translateY": [100, 0], "easing": "easeOutCubic", "duration": 900, "delay": 300 }'
              >
                One Unified Platform. Infinite Possibilities.
              </span> */}
              <span className="fancy-text-style-4">
                <span className="fs-25 xl-fs-25 lg-fs-25 md-fs-20 xs-fs-16 fs-500 mb-0 text-white fw-300  d-block">
                  <span
                    className="fw-600"
                    data-fancy-text='{ "effect": "slide", "direction": "right", "color": "white", "speed": 100, "string": ["Turn ambition into achievement with just a few clicks.", "Simplify your path from startup to star.", "The only platform you&apos;ll ever need to master the market"], "duration": 2500 }'
                  />
                </span>
              </span>
            </div>
            <div className="overflow-hidden pt-5px">
              {/* <div
                onClick={() => {
                  document
                    .getElementById("waitlist")
                    .scrollIntoView({ behavior: "smooth" });
                }}
                className="btn btn-extra-large background-yellow btn-rounded btn-box-shadow btn-switch-text d-inline-block me-15px xs-m-10px align-middle fw-600 scroll-smooth"
                data-anime='{ "translateY": [100, 0], "easing": "easeOutCubic", "duration": 900, "delay": 500 }'
              >
                <span>
                  <span
                    className="btn-double-text"
                    data-text="Join Our Waitlist"
                  >
                    Join Our Waitlist
                  </span>
                  <span>
                    <i className="feather icon-feather-arrow-right" />
                  </span>
                </span>
              </div> */}
              <button
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
              </button>

              {/* <div
              className="text-white fs-15 d-inline-block last-paragraph-no-margin align-middle"
              data-anime='{ "translateY": [100, 0], "easing": "easeOutCubic", "duration": 900, "delay": 700 }'
            >
              <p className="opacity-6 ls-minus-05px d-inline-block">
                Starting at only
              </p>
              <span className="fw-500 d-inline-block ">$2.78/mo*</span>
            </div> */}
            </div>
          </div>
          <div className="col-xl-5 col-lg-4">
            <div
              className="outside-box-right-7 position-relative"
              data-anime='{ "opacity": [0, 1], "translateY": [100, 0], "easing": "easeOutQuad", "duration": 1200, "delay": 200 }'
            >
              {/* <img className="w-100" src="globebg.png" alt="" /> */}
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
                        {/* <img className="opacity-25" src="/globebg.png" alt="" /> */}
                      </div>
                      <img
                        data-atropos-offset={3}
                        className=" position-relative z-index-9 lg-w-80 md-w-90 sm-w-100"
                        src="/globebg.webp"
                        alt=""
                        data-anime='{ "translateY": [50, 0], "rotateX": [10, 0], "perspective": [1000,1200], "scale": [1.1, 1], "opacity": [0,1], "duration": 800, "delay": 200, "staggervalue": 300, "easing": "easeOutQuad" }'
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* <img
                className="w-100 position-absolute left-minus-2px top-minus-5px animation-float"
                src="/images/demo-hosting-home-slider-02.webp"
                alt=""
              /> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
