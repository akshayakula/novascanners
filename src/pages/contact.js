import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import PageWrapper from "../components/PageWrapper";

const Contact = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Nova Scanners</title>
      </Helmet>
      <PageWrapper
        themeConfig={{
          headerClassName: "site-header--menu-center",
          headerButton: (
            <>
              <Link to={"/contact"}className="btn btn btn-blue-3 header-btn-2 font-size-3 rounded-5">
                Schedule a scan
              </Link>
            </>
          ),
          footerStyle: "style4",
        }}
      >
        <div className="min-height-100vh d-flex align-items-center pt-23 pt-md-26 pt-lg-30 pb-8 pb-md-12 pb-lg-23">
          <div className="container">
            {/* Section Title */}
            <div className="row justify-content-center">
              <div className="col-xl-12">
                <div
                  className="mb-10 mb-lg-18 text-center"
                  data-aos="fade-up"
                  data-aos-duration={300}
                  data-aos-once="true"
                >
                  <h2 className="font-size-11 mb-7">Contact us</h2>
                  <p className="font-size-7 mb-0">
                    Send us a message and we will reply you within 16 hours.
                  </p>
                </div>
              </div>
            </div>
            {/* End Section Title */}
            {/* Contact Form */}
            <div className="row justify-content-center">
              <div className="col-12">
                {/* contact details */}
                <div
                  className="top-contact-info bg-default-1 max-w-540 mx-auto py-10 px-13 rounded-10"
                  data-aos="fade-up"
                  data-aos-duration={600}
                  data-aos-once="true"
                >
                  <div className="row">
                    <div className="col-lg-6 mb-5 mb-lg-0">
                      <div className="border-md-right border-cornflower-blue">
                        <h4 className="font-size-5 text-default-color font-weight-normal mb-0">
                          Call us
                        </h4>
                        <a
                          className="font-size-7 font-weight-bold heading-default-color"
                          href="/#"
                        >
                          +1-571-386-9946
                        </a>
                      </div>
                    </div>
                    <div className="col-lg-6 mb-5 mb-lg-0">
                      <div className="pl-1 pr-3">
                        <h4 className="font-size-5 text-default-color font-weight-normal mb-0">
                          Email us
                        </h4>
                        <a
                          className="font-size-7 font-weight-bold heading-default-color"
                          href="/#"
                        >
                          akshayakula@vt.edu
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                {/* contact details */}
                <div className="pt-12 pb-10 max-w-536 mx-auto">
                  <form
                    name="contact"
                    
                    action="https://app.99inbound.com/api/e/gj7o7M71"
                    method="POST"
                    target="_blank"
                    
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    data-aos="fade-up"
                    data-aos-duration={1100}
                    data-aos-once="true"
                    actions
                  >
                    <input type="hidden" name="form-name" value="contact" />
                    {/* Company Name */}
                    <div className="form-group mb-7 position-relative">
                      <input
                        type="text"
                        name="name"
                        className="form-control form-control-lg bg-white rounded-5 text-dark-cloud text-placeholder-bali-gray pl-7 font-size-5 border-default-color"
                        placeholder="Full Name"
                        id="name"
                        required
                      />
                    </div>
                    {/* Email */}
                    <div className="form-group mb-7 position-relative">
                      <input
                        type="email"
                        name="email"
                        className="form-control form-control-lg bg-white rounded-5 text-dark-cloud text-placeholder-bali-gray pl-7 font-size-5 border-default-color"
                        placeholder="Email Address"
                        id="email"
                        required
                      />
                    </div>
                    {/* Company Name */}
                    <div className="form-group mb-7 position-relative">
                      <input
                        type="text"
                        name="house"
                        className="form-control form-control-lg bg-white rounded-5 text-dark-cloud text-placeholder-bali-gray pl-7 font-size-5 border-default-color"
                        placeholder="Scan Property Address"
                        id="house"
                        required
                      />
                    </div>
                    <div className="form-group mb-7 position-relative">
                      <input
                        type="text"
                        name="city"
                        className="form-control form-control-lg bg-white rounded-5 text-dark-cloud text-placeholder-bali-gray pl-7 font-size-5 border-default-color"
                        placeholder="City"
                        id="city"
                        required
                      />
                    </div>
                    <div className="form-group mb-7 position-relative">
                      <input
                        type="text"
                        name="state"
                        className="form-control form-control-lg bg-white rounded-5 text-dark-cloud text-placeholder-bali-gray pl-7 font-size-5 border-default-color"
                        placeholder="State"
                        id="state"
                        required
                      />
                    </div>
                    <div className="form-group mb-7 position-relative">
                      <input
                        type="text"
                        name="zip"
                        className="form-control form-control-lg bg-white rounded-5 text-dark-cloud text-placeholder-bali-gray pl-7 font-size-5 border-default-color"
                        placeholder="Zip Code"
                        id="zip"
                        required
                      />
                    </div>
                    {/* Company Name */}
                    <div class="form-group">
                      <label for="plan">Plan Selection</label>
                      <select class="form-control" name="plan" id="plan">
                        <option>Basic</option>
                        <option>Standard</option>
                        <option>Premium</option>
                      </select>
                    </div>
                    {/* <div className="form-check form-group mb-7 position-relative">
                      <input type="checkbox" id="basic" name="basic" value="Basic"></input>
                      <label for="basic"> Basic Package</label>
                      <br></br>
                      <input type="checkbox" id="standard" name="standard" value="Standard"></input>
                        <label for="basic"> Standard Package</label>
                        <br></br>
                      <input type="checkbox" id="vehicle3" name="premium" value="Premium"></input>
                        <label for="basic"> Premium Package</label>
                        <br></br>
                    </div> */}
                    {/* <div className="form-group mb-7 position-relative">
                      <textarea
                        name="message"
                        id="message"
                        placeholder="House Details"
                        className="form-control form-control-lg bg-white rounded-5 text-dark-cloud text-placeholder-bali-gray pl-7 pt-7 font-size-5 border-default-color"
                        defaultValue={""}
                        required
                      />s
                    </div> */}
                    <div className="button">
                      <button className="btn btn-blue-3 h-55 w-100 rounded-4">
                        Send
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
};
export default Contact;
