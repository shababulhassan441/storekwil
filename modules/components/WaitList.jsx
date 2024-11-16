import React from "react";
import WaitlistForm from "./WaitlistForm";

const WaitList = () => {
  return (
    <section  className="overflow-hidden">
      <div
        className="container rounded-lg text-white "
        style={{
          background: "linear-gradient(135deg, #df5e93, #62278d, #000f4c)",
          borderRadius:"12px",
        }}
      >
        <div className="row align-items-center py-5 px-3  justify-content-center mb-6 sm-mb-50px position-relative">
          <div
            className="col-lg-6 col-md-10 position-relative md-mb-30px"
            data-anime='{ "effect": "slide", "color": "#1c2663", "direction":"lr", "easing": "easeOutQuad", "delay":50}'
          >
            <div
              className="col-12 text-left mb-5"
              data-anime='{ "el": "childs", "translateY": [30, 0], "opacity": [0,1], "duration": 600, "delay": 100, "staggervalue": 300, "easing": "easeOutQuad" }'
            >
              <h2 className=" fw-700 ls-minus-1px">Join Our Waitlist!</h2>
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
  );
};

export default WaitList;
