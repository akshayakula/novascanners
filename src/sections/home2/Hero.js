import React from "react";
import { Link } from "gatsby";
import Modal from "../../components/ModalVideo/Modal";

import imgSBR from "../../assets/image/home-2/png/round-shape-blue.png";
import imgBP from "../../assets/image/home-2/png/dot-pattern-blue.png";
//import imageHome from "../../assets/image/inner-page/jpg/houseimg4.jpg";
import imgH from "../../assets/image/home-2/png/houseimg4.jpg";
import imgH2 from "../../assets/image/home-2/png/verticalMP2.png";

const Hero = ({ className, ...rest }) => {
  

  return (
    <>
      <div className={className} {...rest}>
        <div className="container">
          <div className="row justify-content-center">
            {/* <!-- Hero Content --> */}
            <div
              className="col-xl-5 col-lg-6 col-md-8 col-xs-10 order-2 order-lg-1"
              data-aos="fade-right"
              data-aos-delay="500"
            >
              <div className="pr-lg-10 pr-xl-0 pt-0 pt-lg-0 pb-13 pb-lg-0">
                <h1 className="font-size-12 mb-8">
                  Create a 3D virtual home tour.
                </h1>
                <p className="font-size-7 mb-0 heading-default-color">
                  We can capture your property's unique experience.{" "}
                  {/* <br className="d-none d-md-block" /> into the most popular
                  tech teams. */}
                </p>
                <div className=" pt-5 pt-lg-10">
                  <Link to={"/contact"} className="btn btn-dodger-blue-2 rounded-5">
                    Schedule a scan
                  </Link>
                  <span className="d-block pt-5 pt-lg-9 heading-default-color">
                    Still confused? 
                    <Modal className="ml-2">Check out this short video</Modal>
                  </span>
                </div>
              </div>
            </div>
            {/* <!-- End Hero Content --> */}
            {/* <!-- l2-hero-image-group --> */}
            <div
              className="col-xl-7 col-lg-6 col-md-7 order-1 order-lg-2"
              data-aos="fade-left"
              data-aos-delay="800"
            >
              <div className="l2-hero-image-group mt-5 mt-lg-0">
                <div className="img-1">
                  <img src={imgSBR} alt="" />
                </div>
                <div className="img-2">
                  <img src={imgBP} alt="" />
                </div>
                <div className="img-3">
                  <img src={imgH} alt="" />
                </div>
                <div className="img-4">
                  <img src={imgH2} alt="" />
                </div>
                {/* <!-- Image Group Content --> */}
                {/* <div className="img-group-content bg-white absolute-center shadow-4 max-w-193">
                  <div className="seciton-body">
                    <div className="mb-4">
                      <h5 className="font-size-6 font-weight-medium mb-0 line-height-reset text-dark-cloud">
                        11111 Home Dr, Herndon, VA 20171
                      </h5>
                      <p className="font-size-3 text-stone">
                        11:15am, Dec 15, Sunday
                      </p>
                    </div>
                    <h6 className="font-size-3 text-stone">Agenda:</h6>
                    <ul className="font-size-3 text-dark-cloud">
                      <li>3D Virtual Tour Scan</li>
                      <li>Professional Photography</li>
                      <li>2D Schematic</li>
                    </ul>
                  </div>
                  <div className="d-flex align-items-center w-100">
                    <Link to={"#"} className="btn-buttercup w-50 text-white">
                      <i className="fa fa-calendar font-size-3 mr-1"></i>
                      Reschedule
                    </Link>
                    <Link to={"#"} className="btn-red w-50">
                      <i className="fa fa-times font-size-3 mr-1"></i> Cancel
                    </Link>
                  </div>
                </div> */}
                {/* <!-- End Image Group Content --> */}
              </div>
            </div>
            {/* <!-- End l2-hero-image-group --> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
