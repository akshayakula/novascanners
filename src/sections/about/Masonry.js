import React from "react";

import img1 from "../../assets/image/inner-page/jpg/houseimg4.jpg";
import img2 from "../../assets/image/inner-page/jpg/houseimg5.jpg";
import img3 from "../../assets/image/inner-page/jpg/scanimg2.jpg";
import img4 from "../../assets/image/inner-page/jpg/homeimg1.jpg";
import img5 from "../../assets/image/inner-page/jpg/mpro2.jpg";
import img6 from "../../assets/image/inner-page/jpg/homeimg3.jpg";

const Masonry = () => {
  return (
    <div className="pb-12 pb-md-16 pb-lg-24">
      <div className="masonary-gallery-wrapper">
        <div className="big-image">
          <div
            className="single-image"
            data-aos="zoom-in"
            data-aos-duration={100}
            data-aos-delay={500}
          >
            <span
              css={`
                background-image: url(${img1});
              `}
            />
          </div>
        </div>
        <div className="small-images">
          <div
            className="single-image"
            data-aos="zoom-in"
            data-aos-duration={300}
            data-aos-delay={500}
          >
            <span
              css={`
                background-image: url(${img2});
              `}
            />
          </div>
          <div
            className="single-image"
            data-aos="zoom-in"
            data-aos-duration={600}
            data-aos-delay={500}
          >
            <span
              css={`
                background-image: url(${img3});
              `}
            />
          </div>
          <div
            className="single-image"
            data-aos="zoom-in"
            data-aos-duration={900}
            data-aos-delay={500}
          >
            <span
              css={`
                background-image: url(${img4});
              `}
            />
          </div>
          <div
            className="single-image"
            data-aos="zoom-in"
            data-aos-duration={1200}
            data-aos-delay={500}
          >
            <span
              css={`
                background-image: url(${img5});
              `}
            />
          </div>
          <div
            className="single-image"
            data-aos="zoom-in"
            data-aos-duration={1500}
            data-aos-delay={500}
          >
            <span
              css={`
                background-image: url(${img6});
              `}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Masonry;
