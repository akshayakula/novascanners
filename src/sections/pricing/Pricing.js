import { Link } from "gatsby";
import React from "react";

const Pricing = () => {
  return (
    <div className="pb-5 pb-md-11 pb-lg-19">
      <div className="container">
        <div className="row justify-content-center">
          {/* Single Table */}
          <div className="col-xl-4 col-lg-5 col-md-6 col-sm-8">
            <div
              className="border rounded-10 text-center px-7 px-lg-16 pt-10 pb-13 gr-hover-2 mb-9"
              data-aos="fade-up"
              data-aos-duration={300}
              data-aos-once="true"
            >
              <p className="text-dodger-blue-1 font-size-5 mb-9">Basic</p>
              <h2 className="font-size-11 mb-1">$250</h2>
              <span className="font-size-5 mb-2">3D Virtual Tour</span>
              <ul className="list-unstyled font-size-5 line-height-50 heading-default-color pt-8">
                <li className="mb-7">High Definition Virtual Tour</li>
                <li className="mb-7 text-stone">
                  <del>Professional Photography</del>
                </li>
                <li className="mb-7">360 Front Photo</li>
                <li className="mb-7 text-stone">
                  <del>2D Schematic</del>
                </li>
              </ul>
              <div className="pt-7 pt-lg-17">
                <Link className="btn btn-blue-3 btn-2 rounded-5" to={"/contact"}>
                  Schedule
                </Link>
              </div>
            </div>
          </div>
          {/* End Single Table */}
          {/* Single Table */}
          <div className="col-xl-4 col-lg-5 col-md-6 col-sm-8">
            <div
              className="border rounded-10 text-center px-7 px-lg-16 pt-10 pb-13 gr-hover-2 mb-9"
              data-aos="fade-up"
              data-aos-duration={600}
              data-aos-once="true"
            >
              <p className="text-dodger-blue-1 font-size-5 mb-9">Standard</p>
              <h2 className="font-size-11 mb-1">$350</h2>
              <span className="font-size-5 mb-2">Digital Listing Package</span>
              <ul className="list-unstyled font-size-5 line-height-50 heading-default-color pt-8">
                <li className="mb-7">High Definition Virtual Tour</li>
                <li className="mb-7">
                  Professional Photography
                </li>
                <li className="mb-7">360 Front Photo</li>
                <li className="mb-7 text-stone">
                  <del>2D Schematic</del>
                </li>
              </ul>
              <div className="pt-7 pt-lg-17">
                <Link className="btn btn-blue-3 btn-2 rounded-5" to={"/contact"}>
                  Schedule
                </Link>
              </div>
            </div>
          </div>
          {/* End Single Table */}
          {/* Single Table */}
          <div className="col-xl-4 col-lg-5 col-md-6 col-sm-8">
            <div
              className="border rounded-10 text-center px-7 px-lg-16 pt-10 pb-13 gr-hover-2 mb-9"
              data-aos="fade-up"
              data-aos-duration={900}
              data-aos-once="true"
            >
              <p className="text-dodger-blue-1 font-size-5 mb-9">Premium</p>
              <h2 className="font-size-11 mb-1">$400</h2>
              <span className="font-size-5 mb-2">Ultimate Listing Package</span>
              <ul className="list-unstyled font-size-5 line-height-50 heading-default-color pt-8">
                <li className="mb-7">High Definition Virtual Tour</li>
                <li className="mb-7">
                  Professional Photography
                </li>
                <li className="mb-7">360 Front Photo</li>
                <li className="mb-7">
                  2D Schematic
                </li>
              </ul>
              <div className="pt-7 pt-lg-17">
                <Link className="btn btn-blue-3 btn-2 rounded-5" to={"/contact"}>
                  Schedule
                </Link>
              </div>
            </div>
          </div>
          {/* End Single Table */}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
