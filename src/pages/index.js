import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";

import PageWrapper from "../components/PageWrapper";
import Pricing from "../sections/pricing/Pricing";
import Hero from "../sections/home2/Hero";
import Progress from "../sections/home2/Progress";
import Content2 from "../sections/home2/Content2";
import CTA from "../sections/home2/CTA";

const Home2 = () => {
  
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
                <Link to={"/contact"} className="btn btn btn-blue-3 header-btn-2 font-size-3 rounded-5">
                  Schecule a scan
                </Link>
            </>
          ),
          footerStyle: "style4",
        }}
      >
        <Hero className="pt-11 pt-lg-34 pb-8 pb-lg-33" />
        {/* <Counter className="pt-lg-5 pb-8 pb-lg-27" /> */}
        <Progress className="pb-lg-21 border-top border-default-color-1" />
        {/* <Content1 className="pb-10 pb-sm-5 pb-lg-14" /> */}
        <div
              className="text-center mb-10 mb-lg-23"
              data-aos="fade-up"
              data-aos-duration={500}
              data-aos-delay={500}
            >
              <h2 className="font-size-11 mb-7 center">Pricing &amp; Plans</h2>
        </div>  
        <Pricing />
        <Content2 className="pb-0 pb-lg-31" />
        {/* <Content3 className="pb-12 pb-lg-25" /> */}
        {/* <Testimonial className="pt-lg-19 pb-12 pb-lg-17" /> */}
        <CTA className="bg-images" />
      </PageWrapper>
    </>
  );
};
export default Home2;
