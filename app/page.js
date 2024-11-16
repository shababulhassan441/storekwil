import StickyElements from "@/modules/components/layout/StickyElements";
import WaitlistForm from "@/modules/components/WaitlistForm";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* start banner */}
      <section
        className="cover-background full-screen bg-dark-gray ipad-top-space-margin position-relative section-dark md-h-auto"
        style={{ backgroundImage: 'url("images/demo-hosting-home-bg.jpg")' }}
      >
        <div
          id="particles-style-01"
          className="h-100 position-absolute left-0px top-0 w-100"
          data-particle="true"
          data-particle-options='{"particles": {"number": {"value": 12,"density": {"enable": true,"value_area": 2000}},"color": {"value": ["#ed00a8", "#ed00a8", "#ed00a8", "#ed00a8"]},"shape": {"type": "edge","stroke":{"width":0,"color":"#000000"}},"opacity": {"value": 0.8,"random": false,"anim": {"enable": false,"speed": 1,"sync": false}},"size": {"value": 5,"random": true,"anim": {"enable": false,"sync": true}},"line_linked":{"enable":false,"distance":0,"color":"#ffffff","opacity":0.4,"width":1},"move": {"enable": true,"speed":1,"direction": "right","random": false,"straight": false}},"interactivity": {"detect_on": "canvas","events": {"onhover": {"enable": false,"mode": "repulse"},"onclick": {"enable": false,"mode": "push"},"resize": true}},"retina_detect": false}'
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
                <span
                  className="d-inline-block lh-32"
                  data-anime='{ "translateY": [100, 0], "easing": "easeOutCubic", "duration": 900, "delay": 300 }'
                >
                  One Unified Platform. Infinite Possibilities.
                </span>
              </div>
              <div className="overflow-hidden pt-5px">
                <a
                  href="/"
                  className="btn btn-extra-large btn-yellow btn-rounded btn-box-shadow btn-switch-text d-inline-block me-15px xs-m-10px align-middle fw-600"
                  data-anime='{ "translateY": [100, 0], "easing": "easeOutCubic", "duration": 900, "delay": 500 }'
                >
                  <span>
                    <span className="btn-double-text" data-text="Join Our Waitlist">
                    Join Our Waitlist
                    </span>
                    <span>
                      <i className="feather icon-feather-arrow-right" />
                    </span>
                  </span>
                </a>
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
                <img
                  className="w-100"
                  src="/images/demo-hosting-home-slider-01.webp"
                  alt=""
                />
                <img
                  className="w-100 position-absolute left-minus-2px top-minus-5px animation-float"
                  src="/images/demo-hosting-home-slider-02.webp"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end banner */}
      {/* start section */}
      <section
        className="bg-very-light-gray pt-20px pb-20px sm-pt-40px"
        data-anime='{ "opacity": [0, 1], "translateY": [0, 0], "easing": "easeOutQuad", "duration": 1000,"staggervalue": 300, "delay": 600 }'
      >
        <div className="container overlap-section">
          <div className="row justify-content-center overlap-section border-radius-6px overflow-hidden g-0 box-shadow-extra-large">
            <div className="col-lg-9 text-center fw-600 fs-24 lg-fs-22 ls-minus-05px text-dark-gray bg-white p-30px md-p-20px">
              <a
                href="/"
                className="fw-700 text-base-color text-decoration-line-bottom-medium"
              >
                Be first in line
              </a>{" "}
               for business success—join our waitlist today!
            </div>
            <div className="col-lg-3 text-center bg-yellow pt-30px pb-30px md-p-20px">
              <a
                href="/"
                className="fw-700 text-dark-gray text-dark-gray-hover fs-24 lg-fs-20 ls-minus-05px"
              >
                Lets Go
                <i className="feather icon-feather-arrow-right ms-5px" />
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* end section */}
      {/* start section */}
      <section
        className="cover-background pt-5 xs-pt-8"
        style={{ backgroundImage: 'url("/images/demo-hosting-home-06.jpg")' }}
      >
        <div className="container">
          <div className="row justify-content-center mb-3">
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
          </div>
          <div
            className="row row-cols-1 row-cols-lg-4 row-cols-sm-2 g-5 justify-content-center"
            data-anime='{ "el": "childs",  "translateY": [0, 0], "perspective": [1200, 1200], "scale": [1.05, 1], "rotateX": [50, 0], "opacity": [0,1], "duration":600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
          >
            {/* start features box item */}
            <div className="col icon-with-text-style-07 transition-inner-all md-mb-30px">
              <div className="bg-white feature-box h-100 justify-content-start box-shadow-quadruple-large box-shadow-quadruple-large-hover text-start p-17 sm-p-14 border-radius-6px">
                <div className="feature-box-icon mb-30px">
                  <img
                    src="images/demo-hosting-home-icon-02.svg"
                    className="h-50px"
                    alt=""
                  />
                </div>
                <div className="feature-box-content">
                  <span className="d-inline-block fw-600 text-dark-gray fs-18 ls-minus-05px">
                    Innovative Technology
                  </span>
                  <p className="mb-10px">
                    At Storekwil, we're pushing the boundaries of what a
                    business platform can do.
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
            <div className="col icon-with-text-style-07 transition-inner-all md-mb-30px">
              <div className="bg-white feature-box h-100 justify-content-start box-shadow-quadruple-large box-shadow-quadruple-large-hover text-start p-17 sm-p-14 border-radius-6px">
                <div className="feature-box-icon mb-30px">
                  <img
                    src="images/demo-hosting-home-icon-03.svg"
                    className="h-50px"
                    alt=""
                  />
                </div>
                <div className="feature-box-content">
                  <span className="d-inline-block fw-600 text-dark-gray fs-18 ls-minus-05px">
                    All-in-One Platform
                  </span>
                  <p className="mb-10px">
                    Why juggle multiple tools when you can have everything in
                    one place
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
            <div className="col icon-with-text-style-07 transition-inner-all xs-mb-30px">
              <div className="bg-white feature-box h-100 justify-content-start box-shadow-quadruple-large box-shadow-quadruple-large-hover text-start p-17 sm-p-14 border-radius-6px">
                <div className="feature-box-icon mb-30px">
                  <img
                    src="images/demo-hosting-home-icon-04.svg"
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
                    src="images/demo-hosting-home-icon-05.svg"
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
                    src="images/demo-hosting-home-icon-05.svg"
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
                    src="images/demo-hosting-home-icon-05.svg"
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
                    src="images/demo-hosting-home-icon-05.svg"
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
                    src="images/demo-hosting-home-icon-05.svg"
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
      {/* end section */}
      {/* start section */}
      <section className="overflow-hidden">
        <div className="container">
          <div className="row align-items-center justify-content-center mb-6 sm-mb-50px position-relative">
            <div
              className="col-lg-6 col-md-10 position-relative md-mb-30px"
              data-anime='{ "effect": "slide", "color": "#ffffff", "direction":"lr", "easing": "easeOutQuad", "delay":50}'
            >
              <img
                className="w-100"
                src="/images/SAP-Business-One-Core.webp"
                data-bottom-top="transform: translateY(-50px)"
                data-top-bottom="transform: translateY(50px)"
                alt=""
              />
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
                operations and empower your growth. Join our waitlist today and
                be among the first to experience the power of unified business
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
              <a
                href="/"
                className="btn btn-large btn-dark-gray btn-box-shadow btn-rounded btn-switch-text"
              >
                <span>
                  <span className="btn-double-text" data-text="Get a Quote">
                    Get a Quote
                  </span>
                  <span>
                    <i className="feather icon-feather-arrow-right" />
                  </span>
                </span>
              </a>
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
      {/* end section */}
      {/* start section */}
      <section
        className="cover-background section-dark bg-midnight-dark-blue"
        style={{ backgroundImage: 'url("images/demo-hosting-home-02.png")' }}
        data-0-top="background-color:rgb(25,30,61);"
        data-center-bottom="background-color:rgb(14,16,29);"
      >
        <div className="container">
          <div className="row justify-content-center mb-3">
            <div
              className="col-lg-8 text-center"
              data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 900, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
            >
              <span className="text-white opacity-5 mb-5px text-uppercase d-block">
                What we offers
              </span>
              <h2 className="text-white fw-700 ls-minus-1px">Key Features</h2>
            </div>
          </div>
          <div
            className="row row-cols-1 row-cols-lg-4 row-cols-md-3 row-cols-sm-2 justify-content-center ps-8 pe-8 lg-px-0"
            data-anime='{ "el": "childs", "translateY": [30, 0], "scale":[0.8,1], "opacity": [0,1], "duration": 500, "delay": 0, "staggervalue": 200, "easing": "easeOutQuad" }'
          >
            {/* start features box item */}
            <div className="col icon-with-text-style-04 transition-inner-all mb-30px">
              <div className="feature-box hover-box h-100 transition light-hover border-radius-6px p-18 xs-p-12 last-paragraph-no-margin overflow-hidden border border-1 box-shadow-quadruple-large-hover border-color-transparent-white-light border-color-transparent-on-hover">
                <div className="feature-box-icon">
                  <i className="line-icon-Statistic icon-extra-large text-white mb-15px" />
                </div>
                <div className="feature-box-content">
                  <span className="d-inline-block text-white fw-500 lh-24">
                    Website Building
                    <br />
                    Made Simple
                  </span>
                </div>

                <div className="feature-box-overlay bg-white" />
              </div>
            </div>
            {/* end features box item */}
            {/* start features box item */}
            <div className="col icon-with-text-style-04 transition-inner-all mb-30px">
              <div className="feature-box hover-box h-100 transition light-hover border-radius-6px p-18 xs-p-12 last-paragraph-no-margin overflow-hidden border border-1 box-shadow-quadruple-large-hover border-color-transparent-white-light border-color-transparent-on-hover">
                <div className="feature-box-icon">
                  <i className="line-icon-Cloud icon-extra-large text-white mb-15px" />
                </div>
                <div className="feature-box-content">
                  <span className="d-inline-block text-white fw-500 lh-24">
                    Global Commerce
                    <br />
                    Unleashed
                  </span>
                </div>
                <div className="feature-box-overlay bg-white" />
              </div>
            </div>
            {/* end features box item */}
            {/* start features box item */}
            <div className="col icon-with-text-style-04 transition-inner-all mb-30px">
              <div className="feature-box hover-box h-100 transition light-hover border-radius-6px p-18 xs-p-12 last-paragraph-no-margin overflow-hidden border border-1 box-shadow-quadruple-large-hover border-color-transparent-white-light border-color-transparent-on-hover">
                <div className="feature-box-icon">
                  <i className="line-icon-Duplicate-Layer icon-extra-large text-white mb-15px" />
                </div>
                <div className="feature-box-content">
                  <span className="d-inline-block text-white fw-500 lh-24">
                    Office Without
                    <br />
                    Borders
                  </span>
                </div>
                <div className="feature-box-overlay bg-white" />
              </div>
            </div>
            {/* end features box item */}
            {/* start features box item */}
            <div className="col icon-with-text-style-04 transition-inner-all mb-30px">
              <div className="feature-box hover-box h-100 transition light-hover border-radius-6px p-18 xs-p-12 last-paragraph-no-margin overflow-hidden border border-1 box-shadow-quadruple-large-hover border-color-transparent-white-light border-color-transparent-on-hover">
                <div className="feature-box-icon">
                  <i className="line-icon-Globe icon-extra-large text-white mb-15px" />
                </div>
                <div className="feature-box-content">
                  <span className="d-inline-block text-white fw-500 lh-24">
                    Customer
                    <br />
                    Relationships
                  </span>
                </div>
                <div className="feature-box-overlay bg-white" />
              </div>
            </div>
            {/* end features box item */}
            {/* start features box item */}
            <div className="col icon-with-text-style-04 transition-inner-all md-mb-30px">
              <div className="feature-box hover-box h-100 transition light-hover border-radius-6px p-18 xs-p-12 last-paragraph-no-margin overflow-hidden border border-1 box-shadow-quadruple-large-hover border-color-transparent-white-light border-color-transparent-on-hover">
                <div className="feature-box-icon">
                  <i className="line-icon-Optimization icon-extra-large text-white mb-15px" />
                </div>
                <div className="feature-box-content">
                  <span className="d-inline-block text-white fw-500 lh-24">
                    Streamlined
                    <br />
                    Operations
                  </span>
                </div>
                <div className="feature-box-overlay bg-white" />
              </div>
            </div>
            {/* end features box item */}
            {/* start features box item */}
            <div className="col icon-with-text-style-04 transition-inner-all md-mb-30px">
              <div className="feature-box hover-box h-100 transition light-hover border-radius-6px p-18 xs-p-12 last-paragraph-no-margin overflow-hidden border border-1 box-shadow-quadruple-large-hover border-color-transparent-white-light border-color-transparent-on-hover">
                <div className="feature-box-icon">
                  <i className="line-icon-Target icon-extra-large text-white mb-15px" />
                </div>
                <div className="feature-box-content">
                  <span className="d-inline-block text-white fw-500 lh-24">
                    Prevent Fraud
                  </span>
                </div>
                <div className="feature-box-overlay bg-white" />
              </div>
            </div>
            {/* end features box item */}
            {/* start features box item */}
            <div className="col icon-with-text-style-04 transition-inner-all xs-mb-30px">
              <div className="feature-box hover-box h-100 transition light-hover border-radius-6px p-15 xs-p-12 last-paragraph-no-margin overflow-hidden border border-1 box-shadow-quadruple-large-hover border-color-transparent-white-light border-color-transparent-on-hover">
                <div className="feature-box-icon">
                  <i className="line-icon-Idea-3 icon-extra-large text-white mb-15px" />
                </div>
                <div className="feature-box-content">
                  <span className="d-inline-block text-white fw-500 lh-24">
                    Engage Customers
                    <br />
                    Everywhere
                  </span>
                </div>
                <div className="feature-box-overlay bg-white" />
              </div>
            </div>
            {/* end features box item */}
            {/* start features box item */}
            <div className="col icon-with-text-style-04 transition-inner-all">
              <div className="feature-box hover-box h-100 transition light-hover border-radius-6px p-18 xs-p-12 last-paragraph-no-margin overflow-hidden border border-1 box-shadow-quadruple-large-hover border-color-transparent-white-light border-color-transparent-on-hover">
                <div className="feature-box-icon">
                  <i className="line-icon-Consulting icon-extra-large text-white mb-15px" />
                </div>
                <div className="feature-box-content">
                  <span className="d-inline-block text-white fw-500 lh-24">
                    Elevate Your Sales
                  </span>
                </div>
                <div className="feature-box-overlay bg-white" />
              </div>
            </div>
            {/* end features box item */}
          </div>
          {/* <div className="row justify-content-center mt-6">
            <div
              className="col-auto icon-with-text-style-08 sm-mb-10px"
              data-anime='{ "translateX": [-50, 0], "opacity": [0,1], "duration": 900, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
            >
              <div className="feature-box feature-box-left-icon-middle">
                <div className="feature-box-icon me-10px">
                  <i className="bi bi-envelope icon-small text-yellow" />
                </div>
                <div className="feature-box-content">
                  <span className="alt-font text-white fs-18">
                    Looking for help?{" "}
                    <a
                      href="#"
                      className="text-decoration-line-bottom text-white fw-500"
                    >
                      Submit a ticket
                    </a>
                  </span>
                </div>
              </div>
            </div>
            <div
              className="col-auto icon-with-text-style-08"
              data-anime='{ "translateX": [50, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
            >
              <div className="feature-box feature-box-left-icon-middle">
                <div className="feature-box-icon me-10px">
                  <i className="bi bi-chat-dots icon-small text-yellow" />
                </div>
                <div className="feature-box-content">
                  <span className="alt-font text-white fs-18">
                    Keep in Touch.{" "}
                    <a
                      href="#"
                      className="text-decoration-line-bottom text-white fw-500"
                    >
                      Like us on Facebook
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>
      {/* end section */}

      {/* start section */}
      <section className="overflow-hidden">
        <div className="container">
          <div
            className="row align-items-center justify-content-center border-radius-8px p-4 xs-p-7 text-center text-lg-start g-0 cover-background"
            style={{
              backgroundImage: 'url("images/demo-hosting-home-03.jpg")',
            }}
            data-bottom-top="transform:scale(1.1, 1.1) translateY(30px);"
            data-top-bottom="transform:scale(1.0, 1.0) translateY(-30px);"
          >
            <div className="col-lg-6 col-md-9 md-mb-10px icon-with-text-style-08">
              <div className="feature-box feature-box-left-icon-middle overflow-hidden">
                <div className="feature-box-icon feature-box-icon-rounded w-100px h-100px rounded-circle border border-2 border-color-transparent-white-light me-30px xs-me-25px">
                  <img
                    src="images/demo-hosting-home-icon.svg"
                    className="w-50px h-50px"
                    alt=""
                  />
                </div>
                <div className="feature-box-content last-paragraph-no-margin">
                  <h5 className="d-inline-block fw-600 text-white mb-0">
                  Get a head start on success— waitlist members gain early entry!
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-6 text-center text-lg-end">
              {/* <div className="text-white d-inline-block last-paragraph-no-margin me-20px xs-m-10px">
                <p className="opacity-8 d-inline-block">Starting at only</p>
                <span className="fw-600 d-inline-block text-decoration-line-bottom">
                  $2.78 per month
                </span>
              </div> */}
              <a
                href="/"
                className="btn btn-medium btn-yellow btn-rounded fw-600 btn-switch-text btn-box-shadow"
              >
                <span>
                  <span className="btn-double-text" data-text="Join our waitlist">
                    Join our waitlist
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* end section */}
      {/* start section */}

      {/* end section */}
      {/* start section */}
      {/* <section className="overflow-hidden p-0">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div
              className="col-xl-5 col-lg-7 col-md-8 position-relative text-center text-xl-start lg-mb-15px"
              data-anime='{ "translateY": [0, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
            >
              <span className="text-base-color fw-600 mb-15px text-uppercase d-block">
                Client feedback
              </span>
              <h3 className="alt-font fw-700 ls-minus-1px text-dark-gray mb-20px mx-auto">
                What do people say about our services?
              </h3>
              <div className="d-block mb-30px fs-18 ls-minus-05px">
                See our 437 reviews on{" "}
                <a
                  href="#"
                  className="align-middle position-relative top-minus-2px"
                >
                  <img src="https://via.placeholder.com/112x28" alt="" />
                </a>
              </div>
              <div className="d-flex justify-content-center justify-content-xl-start">
         
                <div
                  className="slider-one-slide-prev-1 text-dark-gray swiper-button-prev slider-navigation-style-04 border border-1 border-color-extra-medium-gray"
                  tabIndex={0}
                  role="button"
                  aria-label="Previous slide"
                >
                  <i className="fa-solid fa-arrow-left" />
                </div>
                <div
                  className="slider-one-slide-next-1 text-dark-gray swiper-button-next slider-navigation-style-04 border border-1 border-color-extra-medium-gray"
                  tabIndex={0}
                  role="button"
                  aria-label="Next slide"
                >
                  <i className="fa-solid fa-arrow-right" />
                </div>
                
              </div>
            </div>
            <div
              className="col-xl-7 col-lg-10 overflow-hidden"
              data-anime='{ "translateY": [0, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
            >
              <div className="outside-box-right-15 xl-outside-box-right-20 sm-outside-box-right-0">
                <div
                  className="swiper slider-one-slide slider-shadow-right sm-slider-shadow-none magic-cursor overflow-visible ps-25px sm-p-0"
                  data-slider-options='{ "slidesPerView": 1, "spaceBetween": 40, "loop": true, "pagination": { "el": ".slider-one-slide-pagination", "clickable": true, "dynamicBullets": false }, "navigation": { "nextEl": ".slider-one-slide-next-1", "prevEl": ".slider-one-slide-prev-1" }, "autoplay": { "delay": 3000, "disableOnInteraction": false }, "keyboard": { "enabled": true, "onlyInViewport": true }, "breakpoints": { "992": { "slidesPerView": 2 }, "768": { "slidesPerView": 2 }, "320": { "slidesPerView": 1 } }, "effect": "slide" }'
                >
                  <div className="swiper-wrapper pt-30px pb-30px">
                    
                    <div className="swiper-slide review-style-06">
                      <div className="d-flex justify-content-center h-100 flex-column bg-white box-shadow-medium p-45px md-p-35px border-radius-6px last-paragraph-no-margin">
                        <div className="mb-20px d-flex align-items-center">
                          <img
                            className="rounded-circle w-90px h-90px me-20px"
                            src="https://via.placeholder.com/125x125"
                            alt=""
                          />
                          <div className="d-inline-block align-middle last-paragraph-no-margin">
                            <div className="alt-font text-dark-gray fw-600 fs-18">
                              Herman Miller
                            </div>
                            <p className="lh-24 d-block">Digital marketer</p>
                          </div>
                          <div className="border-radius-30px bg-yellow ps-15px pe-15px fs-14 fw-700 text-dark-gray d-inline-block align-middle ms-auto md-position-absolute md-right-15px md-top-15px">
                            <i className="fa-solid fa-star me-5px" />
                            5.0
                          </div>
                        </div>
                        <p>
                          We help our clients succeed by creating brand
                          identities, digital experiences, and print materials
                          that communicate.
                        </p>
                      </div>
                    </div>
                   
                    <div className="swiper-slide review-style-06">
                      <div className="d-flex justify-content-center h-100 flex-column bg-white box-shadow-medium p-45px md-p-35px border-radius-6px last-paragraph-no-margin">
                        <div className="mb-20px d-flex align-items-center">
                          <img
                            className="rounded-circle w-90px h-90px me-20px"
                            src="https://via.placeholder.com/125x125"
                            alt=""
                          />
                          <div className="d-inline-block align-middle last-paragraph-no-margin">
                            <div className="alt-font text-dark-gray fw-600 fs-18">
                              Alexander Harad
                            </div>
                            <p className="lh-24 d-block">Digital marketer</p>
                          </div>
                          <div className="border-radius-30px bg-yellow ps-15px pe-15px fs-14 fw-700 text-dark-gray d-inline-block align-middle ms-auto md-position-absolute md-right-15px md-top-15px">
                            <i className="fa-solid fa-star me-5px" />
                            4.5
                          </div>
                        </div>
                        <p>
                          They have provided superior quality of content
                          marketing services. Very satisfied by choosing them.
                          Thank you!
                        </p>
                      </div>
                    </div>
                   
                    <div className="swiper-slide review-style-06">
                      <div className="d-flex justify-content-center h-100 flex-column bg-white box-shadow-medium p-45px md-p-35px border-radius-6px last-paragraph-no-margin">
                        <div className="mb-20px d-flex align-items-center">
                          <img
                            className="rounded-circle w-90px h-90px me-20px"
                            src="https://via.placeholder.com/125x125"
                            alt=""
                          />
                          <div className="d-inline-block align-middle last-paragraph-no-margin">
                            <div className="alt-font text-dark-gray fw-600 fs-18">
                              Shoko Mugikura
                            </div>
                            <p className="lh-24 d-block">Digital marketer</p>
                          </div>
                          <div className="border-radius-30px bg-yellow ps-15px pe-15px fs-14 fw-700 text-dark-gray d-inline-block align-middle ms-auto md-position-absolute md-right-15px md-top-15px">
                            <i className="fa-solid fa-star me-5px" />
                            5.0
                          </div>
                        </div>
                        <p>
                          We help our clients succeed by creating brand
                          identities, digital experiences, and print materials
                          that communicate.
                        </p>
                      </div>
                    </div>
                    
                    <div className="swiper-slide review-style-06">
                      <div className="d-flex justify-content-center h-100 flex-column bg-white box-shadow-medium p-45px md-p-35px border-radius-6px last-paragraph-no-margin">
                        <div className="mb-20px d-flex align-items-center">
                          <img
                            className="rounded-circle w-90px h-90px me-20px"
                            src="https://via.placeholder.com/125x125"
                            alt=""
                          />
                          <div className="d-inline-block align-middle last-paragraph-no-margin">
                            <div className="alt-font text-dark-gray fw-600 fs-18">
                              Jacob Kalling
                            </div>
                            <p className="lh-24 d-block">Digital marketer</p>
                          </div>
                          <div className="border-radius-30px bg-yellow ps-15px pe-15px fs-14 fw-700 text-dark-gray d-inline-block align-middle ms-auto md-position-absolute md-right-15px md-top-15px">
                            <i className="fa-solid fa-star me-5px" />
                            5.0
                          </div>
                        </div>
                        <p>
                          We help our clients succeed by creating brand
                          identities, digital experiences, and print materials
                          that communicate.
                        </p>
                      </div>
                    </div>
                   
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* end section */}
      {/* start section */}

      <section className="overflow-hidden">
        <div className="container rounded-lg text-white "
        style={{ background: 'linear-gradient(to bottom right, #1b265f, #1a2a7f)'}} >
          <div className="row align-items-center py-5 px-3  justify-content-center mb-6 sm-mb-50px position-relative">
            <div
              className="col-lg-6 col-md-10 position-relative md-mb-30px"
              data-anime='{ "effect": "slide", "color": "#1c2663", "direction":"lr", "easing": "easeOutQuad", "delay":50}'
            >
              <div
                className="col-12 text-left mb-5"
                data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 100, "staggervalue": 300, "easing": "easeOutQuad" }'
              >
                <h2 className=" fw-700 ls-minus-1px">
                  Join Our Waitlist!
                </h2>
                <p className=" fw-600 mb-5px text-uppercase d-block">
                  Ready to revolutionise your business? Join our waitlist and be
                  the first to gain exclusive access to Storekwil.
                </p>
              </div>
            </div>

            <div
              className="col-lg-5 offset-lg-1 last-paragraph-no-margin"
              data-anime='{ "el": "childs", "opacity": [0, 1], "rotateY": [-90, 0], "rotateZ": [-10, 0], "translateY": [80, 0], "translateZ": [50, 0], "staggervalue": 200, "duration": 900, "delay": 300, "easing": "easeOutCirc" }'
            >
              <WaitlistForm />
            </div>
          </div>
        </div>
      </section>

      <StickyElements />
    </>
  );
}
