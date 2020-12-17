import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/about/Hero";
import Masonry from "../sections/about/Masonry";
import Content from "../sections/about/Content";
// import Team from "../sections/about/Team";
// import Stats from "../sections/about/Stats";

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
        <Masonry />
        <Content />
        {/* <Stats /> */}
      </PageWrapper>
    </>
  );
};
export default PricingPage;
