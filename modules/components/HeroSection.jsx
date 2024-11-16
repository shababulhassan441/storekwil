"use client"
import React from "react";


const HeroSection = () => {
  return (
    <section
      className="cover-background full-screen bg-dark-gray ipad-top-space-margin position-relative section-dark md-h-auto"
      style={{ backgroundImage: 'url("hero-bg.jpg")' }}
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
                    <img src="images/highlight-separator.svg" alt="" />
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
                    data-fancy-text='{ "effect": "slide", "direction": "right", "color": "#ffe400", "speed": 100, "string": ["Turn ambition into achievement with just a few clicks.", "Simplify your path from startup to star.", "The only platform you&apos;ll ever need to master the market"], "duration": 2500 }'
                  />
                </span>
              </span>
            </div>
            <div className="overflow-hidden pt-5px">
              <div
                onClick={() => {
                  document
                    .getElementById("waitlist")
                    .scrollIntoView({ behavior: "smooth" });
                }}
                className="btn btn-extra-large btn-yellow btn-rounded btn-box-shadow btn-switch-text d-inline-block me-15px xs-m-10px align-middle fw-600 scroll-smooth"
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
              </div>
              {/* <button
                class="btn btn-gradient-fast-blue-purple btn-switch-text btn-large left-icon btn-round-edge submit text-transform-none"
                type="submit"
              >
                <span>
                  <span>
                    <i class="bi bi-calendar-check"></i>
                  </span>
                  <span class="btn-double-text" data-text="Book appointment">
                    Book appointment
                  </span>
                </span>
              </button> */}

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
              {/* <img
                className="w-100"
                src="/images/demo-hosting-home-slider-01.webp"
                alt=""
              />
              <img
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
