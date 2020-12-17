import React from "react";
import { Link } from "gatsby";
import backgroundImage from "../../assets/image/home-2/jpg/DC2.jpg";

const Content3 = ({ className, ...rest }) => {
  return (
    <>
      <div
        className={className}
        {...rest}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div
                className="text-center pt-14 pb-15 py-lg-31 dark-mode-texts"
                data-aos="zoom-in"
                data-aos-delay="500"
              >
                <h2 className="font-size-11 mb-7">
                  Market your listing with our help and expertise.
                </h2>
                {/* <p className="font-size-5 line-height-28 px-md-10 px-lg-16 px-xl-25 mb-0">
                  Time is the most precious thing you have when bootstrapping.
                  You can't take time to ponder on design.
                </p> */}
                <Link className="btn btn-dodger-blue-2 rounded-5 mt-12" to={"/contact"}>
                  Schedule a scan 
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content3;
