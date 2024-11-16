import React from "react";

const WhyChooseHead = () => {
  return (
    <section className="pb-0 full-screen md-h-auto overflow-hidden position-relative">
      <img
        src="dots.png"
        className="position-absolute top-50px lg-top-120px left-0px lg-w-50 z-index-minus-2"
        data-bottom-top="transform: translateY(150px)"
        data-top-bottom="transform: translateY(-150px)"
        alt=""
      />
      <img
        src="dots.png"
        className="position-absolute top-0px right-0px lg-w-30 lg-bottom-0px z-index-minus-2"
        data-bottom-top="transform: translateY(150px)"
        data-top-bottom="transform: translateY(-150px)"
        alt=""
      />
      <div className="container h-100 position-relative">
        <div className="position-absolute top-150px left-150px animation-rotation d-none d-sm-block">
          <img
            className="lg-w-140px"
            src="float1.webp"
            data-bottom-top="transform: rotate(-50deg) translateY(-50px)"
            data-top-bottom="transform:rotate(10deg) translateY(50px)"
            alt=""
          />
        </div>
        <div className="position-absolute bottom-150px right-150px animation-rotation d-none d-sm-block">
          <img
            className="lg-w-120px"
            src="float3.webp"
            data-bottom-top="transform: rotate(-10deg) translateX(-80px)"
            data-top-bottom="transform:rotate(10deg) translateX(80px)"
            alt=""
          />
        </div>
        <div className="fs-400 position-absolute absolute-middle-center fw-600 text-nowrap ls-minus-10px text-extra-medium-gray opacity-3 z-index-minus-2">
          storekwil
        </div>
        <div className="row h-100 align-items-center justify-content-center">
          <div
            className="col-xl-5 col-lg-6 animation-float text-center text-lg-start"
            data-anime='{ "translate": [0, 0], "opacity": [0,1], "duration": 600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
          >
            <img
              src="float2.webp"
              className="md-w-70 z-index-3 position-relative"
              data-bottom-top="transform: translateX(-250px)"
              data-top-bottom="transform: translateX(250px)"
              alt=""
            />
          </div>

          <div className="marquees-text fs-160 ls-minus-5px fw-600 text-nowrap text-dark-gray position-absolute left-minus-150px z-index-minus-1">
            Why Choose Us
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseHead;
