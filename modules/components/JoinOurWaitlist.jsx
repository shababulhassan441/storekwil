import React from "react";

const JoinOurWaitlist = () => {
  return (
    <section id="waitlist" className="position-relative bg-very-light-gray">
      <div
        className="container"
        data-anime='{ "el": "childs", "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
      >
        <div className="row mb-3">
          <div className="col text-center">
            <h2 className="fw-700 alt-font text-dark-gray ls-minus-2px">
              Join Our WaitList
            </h2>
            <p className="fs-5">
              Ready to revolutionise your business? <br /> Join our waitlist and
              be the first to gain exclusive access to Storekwil.
            </p>
          </div>
        </div>
        <div className="row align-items-center justify-content-center position-relative z-index-1">
          <div className="col-xl-10 col-lg-12">
            {/* start contact form */}
            <form
              action="email-templates/contact-form.php"
              method="post"
              className="row contact-form-style-02"
            >
              <div className="col-md-6 mb-30px">
                <input
                  className="input-name border-radius-4px border-color-white box-shadow-double-large form-control required"
                  type="text"
                  name="name"
                  placeholder="First Name"
                />
              </div>
              <div className="col-md-6 mb-30px">
                <input
                  className="border-radius-4px border-color-white box-shadow-double-large form-control required"
                  type="text"
                  name="lastname"
                  placeholder="Last Name"
                />
              </div>
              <div className="col-md-6 mb-30px">
                <input
                  className="border-radius-4px border-color-white box-shadow-double-large form-control required"
                  type="email"
                  name="email"
                  placeholder="Email"
                />
              </div>
              <div className="col-md-6 mb-30px">
                <input
                  className="border-radius-4px border-color-white box-shadow-double-large form-control required"
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                />
              </div>
              <div className="col-md-12 mb-30px">
                <input
                  className="border-radius-4px border-color-white box-shadow-double-large form-control required"
                  type="text"
                  name="company"
                  placeholder="Company"
                />
              </div>
              <div className="col-md-12 mb-30px ">
                <div className="select">
                  <select
                    className="form-control border-radius-4px border-color-white box-shadow-double-large"
                    name="select"
                    aria-label="select-doctor"
                  >
                    <option value="">Select Country</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Australia">Australia</option>
                    <option value="Germany">Germany</option>
                    <option value="France">France</option>
                    <option value="Italy">Italy</option>
                  </select>
                </div>
              </div>
              <div className="col-xl-6 col-md-7">
                <p className="mb-0 fs-14 lh-26 text-center text-md-start w-90 md-w-100 agreementcheck">
                  <input type="checkbox" />
                  <span>
                    {" "}
                    By clicking this box you agree to our Privacy Policy
                  </span>
                </p>
              </div>
              <div className="col-xl-6 col-md-5 text-center text-md-end sm-mt-20px">
                <input type="hidden" name="redirect" defaultValue="" />
                <button
                  className="btn btn-gradient-fast-blue-purple btn-switch-text btn-large left-icon btn-round-edge submit text-transform-none"
                  type="submit"
                >
                  <span>
                    <span>
                      <i className="bi bi-calendar-check" />
                    </span>
                    <span className="btn-double-text" data-text="Sign Up">
                      Sign Up
                    </span>
                  </span>
                </button>
              </div>
              <div className="col-12">
                <div className="form-results mt-20px d-none" />
              </div>
            </form>
            {/* end contact form */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinOurWaitlist;
