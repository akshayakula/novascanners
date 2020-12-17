import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/pricing/Hero";
import Pricing from "../sections/pricing/Pricing";
import Faq from "../sections/pricing/Faq";

const PricingPage = () => {
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
                Schedule a scan
              </Link>
            </>
          ),
          footerStyle: "style4",
        }}
      >
        <Hero />
        <Pricing />
        <Faq />
      </PageWrapper>
    </>
  );
};
export default PricingPage;
