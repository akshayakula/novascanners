import React from "react";

// import imgC from "../../assets/image/inner-page/png/about-content-img-1.png";
import pfp from "../../assets/image/inner-page/jpg/pfp.jpg"
import imgDP from "../../assets/image/home-2/png/dot-pattern-black.png";

const Content = () => {
  return (
    <div className="pb-11 pb-md-15 pb-lg-27">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-5 col-lg-6 col-sm-9">
            <div
              className="text-center mb-13 mb-lg-16"
              data-aos="zoom-in"
              data-aos-duration={500}
            >
              <h2 className="font-size-10 mb-0 letter-spacing-n83">
                Create a virtual adventure
              </h2>
            </div>
          </div>
        </div>
        <div className="row align-items-center justify-content-center">
          {/* Right */}
          <div className="col-xl-5 col-lg-5 col-md-5 col-xs-10">
            <div className="about-content-image-group-1 mb-8 mb-lg-0">
              <div className="img-1">
                <img
                  className="w-100 rounded-10"
                  src={pfp}
                  alt=""
                  data-aos="fade-right"
                  data-aos-duration={600}
                />
                <div className="img-2 z-index-n1 mt-n13">
                  <img
                    className="w-100"
                    src={imgDP}
                    alt=""
                    data-aos="fade-right"
                    data-aos-duration={900}
                    data-aos-delay={300}
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Right */}
          {/* Left */}
          <div className="col-xl-6 col-lg-7 col-md-7 col-xs-10">
            <div
              className="mx-lg-14 mx-xl-14"
              data-aos="fade-left"
              data-aos-duration={600}
            >
              <p className="heading-default-color font-size-6 mb-4 mb-lg-9">
                It our goal at Novascanners to help your display your home in its truest form. We believe the virtual is unmatched
                in doing this, and would love to bring it to your property.
              </p>
              <p className="heading-default-color font-size-6 mb-5 mb-lg-13">
                Using our state-of-the-art 3D-scans gives properties the ability to sell themselves. People are able to fall
                in love with a property's energy before ever setting foot inside.{" "}
              </p>
              <div className="">
                <p className="font-size-3 line-height-20 mb-7 mr-xs-17 mr-md-11 mr-lg-18 mr-xl-20">
                  “I love capturing the spirit of a home, and seeing the effect it has on future home owners”
                </p>
                <h6 className="font-size-3 font-weight-medium">
                  Akshay Akula, Founder of Nova Scanners
                </h6>
              </div>
            </div>
          </div>
          {/* Left End */}
        </div>
      </div>
    </div>
  );
};

export default Content;
