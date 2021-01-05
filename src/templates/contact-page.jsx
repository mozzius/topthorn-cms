import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout, { Panel } from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import { css } from "@emotion/core";
import SignupForm from "../components/SignupForm";

export const ContactPageTemplate = ({
  title,
  content,
  contentComponent,
  emailForm,
}) => {
  const PageContent = contentComponent || Content;
  const map = css`
    width: 100%;
    height: 420px;
  `;

  return (
    <>
      <Panel>
        <h2>{title}</h2>
        <PageContent content={content} />
      </Panel>
      <div css={map}>
        <iframe
          title="Topthorn Location"
          width="100%"
          height="100%"
          frameBorder={0}
          css={{ border: 0 }}
          src={`https://www.google.com/maps/embed/v1/search?q=Topthorn%2C%20Stowmarket%2C%20UK&zoom=14&key=AIzaSyDEFlPKB5tKJ5MfMCQ_9PHAyDXE8nsVJsY`}
          allowFullScreen
        />
      </div>
      <SignupForm text={emailForm} />
    </>
  );
};

ContactPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  emailForm: PropTypes.string,
};

const ContactPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <ContactPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        emailForm={post.frontmatter.emailForm}
      />
    </Layout>
  );
};

ContactPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ContactPage;

export const ContactPageQuery = graphql`
  query ContactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        emailForm
      }
    }
  }
`;
