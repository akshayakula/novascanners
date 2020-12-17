import React from "react";

const Faq = () => {
  return (
    <div className="pb-13 pb-md-18 pb-lg-25">
      <div className="container">
        {/* Section Title */}
        <div className="row justify-content-center">
          <div className="col-xl-8 col-lg-9">
            <div className="text-center mb-13 mb-lg-19">
              <h2 className="font-size-9 mb-0">Frequently Asked Question</h2>
            </div>
          </div>
        </div>
        {/* End Section Title */}
        {/* Faqs */}
        {/* Faqs */}
        <div className="row justify-content-center">
          {/* Single Faq */}
          <div className="col-lg-6 col-md-10">
            <div
              className="d-flex mb-10 mb-lg-17"
              data-aos="fade-up"
              data-aos-duration={300}
            >
              <div className="mr-6">
                <div className="bg-light-orange circle-28 text-white mt-1">
                  <i className="fa fa-question" />
                </div>
              </div>
              <div className="">
                <h4 className="font-size-7 mb-7">
                  Do you offer any refunds?
                </h4>
                <p className="font-size-5 pr-md-10 pr-lg-0 mb-0">
                  We offer a full refund to anyone who is not fully satisfied with our service at any time. Choosing us as your partner
                  is worry-free and our goal is your satisfaction.
                </p>
              </div>
            </div>
          </div>
          {/* End Single Faq */}
          {/* Single Faq */}
          <div className="col-lg-6 col-md-10">
            <div
              className="d-flex mb-10 mb-lg-17"
              data-aos="fade-up"
              data-aos-duration={600}
            >
              <div className="mr-6">
                <div className="bg-light-orange circle-28 text-white mt-1">
                  <i className="fa fa-question" />
                </div>
              </div>
              <div className="">
                <h4 className="font-size-7 mb-7">
                  How will I communicate with you?
                </h4>
                <p className="font-size-5 pr-md-10 pr-lg-0 mb-0">
                  We will organize all appointments by e-mai(or text if preffered). Our staff will respond to all requests within 30 minutes
                  and 16 hours at the absolute longest.
                </p>
              </div>
            </div>
          </div>
          {/* End Single Faq */}
          {/* Single Faq */}
          <div className="col-lg-6 col-md-10">
            <div
              className="d-flex mb-10 mb-lg-17"
              data-aos="fade-up"
              data-aos-duration={300}
            >
              <div className="mr-6">
                <div className="bg-light-orange circle-28 text-white mt-1">
                  <i className="fa fa-question" />
                </div>
              </div>
              <div className="">
                <h4 className="font-size-7 mb-7">
                  How to contact with your support?
                </h4>
                <p className="font-size-5 pr-md-10 pr-lg-0 mb-0">
                  Just give us a call at the provided number or leave a message by text or email. We will promply process your request
                  and provide with all the assistance you would like.
                </p>
              </div>
            </div>
          </div>
          {/* End Single Faq */}
          {/* Single Faq */}
          <div className="col-lg-6 col-md-10">
            <div
              className="d-flex mb-10 mb-lg-17"
              data-aos="fade-up"
              data-aos-duration={600}
            >
              <div className="mr-6">
                <div className="bg-light-orange circle-28 text-white mt-1">
                  <i className="fa fa-question" />
                </div>
              </div>
              <div className="">
                <h4 className="font-size-7 mb-7">Will this help my listing?</h4>
                <p className="font-size-5 pr-md-10 pr-lg-0 mb-0">
                  Yes! Many studies and statistics highlight 3D tours and digital advertising as a strong factor to
                  a listing's buying interest. Our package as a whole will help put you ahead of the competition.
                </p>
              </div>
            </div>
          </div>
          {/* End Single Faq */}
        </div>
        {/* Button  */}
        <div
          className="text-center pt-lg-3 pb-lg-3"
          data-aos="fade-up"
          data-aos-duration={500}
        >
          <p className="font-size-6 mb-0">
            Still have a question about our service?
            <a className="text-blue-3 btn-link-with-underline ml-5" href="/#">
              Contact us
            </a>
          </p>
        </div>
        {/* Button End */}
      </div>
    </div>
  );
};

export default Faq;
