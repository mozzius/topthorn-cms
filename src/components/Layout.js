import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";
import styled from "@emotion/styled";
import { css } from "@emotion/core";

const Centered = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Panel = styled.section`
  box-sizing: border-box;
  width: 100%;
  max-width: ${({ theme }) => theme.width};
  display: flex;
  flex-direction: column;
  padding: 30px 20px;
  flex-shrink: 0;
`;

const Layout = ({ title: pageTitle, children }) => {
  const { title, description } = useSiteMetadata();
  const titleContent = pageTitle ? `${title} | ${pageTitle}` : title;
  return (
    <Centered
      css={css`
        min-height: 100vh;
      `}
    >
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-icon-180x180.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <meta name="theme-color" content="#2f2d5f" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={titleContent} />
        <meta property="og:url" content="/" />
      </Helmet>
      <Navbar />
      <Centered>{children}</Centered>
      <Footer />
    </Centered>
  );
};

export default Layout;
