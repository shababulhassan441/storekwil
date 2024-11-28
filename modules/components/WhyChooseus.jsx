import React from "react";

const WhyChooseus = ({ whyCards }) => {
  return (
    <section className="cover-background pt-5 xs-pt-8">
      <div className="container">
        <div
          className="row row-cols-1 row-cols-lg-3 row-cols-sm-2 g-5 justify-content-center"
          data-anime='{ "el": "childs",  "translateY": [0, 0], "perspective": [1200, 1200], "scale": [1.05, 1], "rotateX": [50, 0], "opacity": [0,1], "duration":600, "delay": 0, "staggervalue": 300, "easing": "easeOutQuad" }'
        >
          {whyCards?.map((card, index) => (
            <div key={index} className="col mb-30px ">
              <div
                style={{
                  height: "auto",
                }}
                className="box-shadow-extra-large h-100 box-shadow-extra-large-hover border-radius-8px overflow-hidden "
              >
                <div className="w-50 mx-auto">
                  <img src={card.icon || ""} alt="image" />
                </div>
                <div className="ps-12 pe-12 xl-ps-10 xl-pe-10 md-ps-7 md-pe-7 pt-0 pb-45px  last-paragraph-no-margin text-start">
                  <span className="d-inline-block text-black fs-20 mb-5px fw-semibold">
                    {card.title || ""}
                  </span>
                  <p className="textSmall">{card.description || ""}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseus;
