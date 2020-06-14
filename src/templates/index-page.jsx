import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import styled from '@emotion/styled';

import Layout, { Panel } from '../components/Layout';
import Blurbs from '../components/Blurbs';
import FullWidthImage, { HeroTitle } from '../components/FullWidthImage';
import Content, { HTMLContent } from '../components/Content';
import BigLink from '../components/BigLink';
import SignupForm from '../components/SignupForm';

const Icon = styled(FontAwesomeIcon)`
  height: 16px;
  margin-left: 10px;
`;

export const IndexPageTemplate = ({
  image,
  title,
  subtitle,
  content,
  contentComponent,
  blurbs,
  button,
  emailForm,
}) => {
  const PageContent = contentComponent || Content;
  return (
    <>
      <FullWidthImage
        image={
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        }
      >
        <HeroTitle>
          <h1>{title}</h1>
          <h3>{subtitle}</h3>
        </HeroTitle>
      </FullWidthImage>
      <Panel>
        <PageContent content={content} />
        <Blurbs items={blurbs} />
        <BigLink to="/events">
          {button}
          <Icon icon={faChevronRight} />
        </BigLink>
      </Panel>
      <SignupForm text={emailForm} />
    </>
  );
};

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  subtitle: PropTypes.string,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  blurbs: PropTypes.array,
  button: PropTypes.string,
  emailForm: PropTypes.string,
};

const IndexPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate
        contentComponent={HTMLContent}
        image={frontmatter.image}
        title={frontmatter.title}
        subtitle={frontmatter.subtitle}
        content={html}
        blurbs={frontmatter.blurbs}
        button={frontmatter.button}
        emailForm={frontmatter.emailForm}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      html
      frontmatter {
        title
        subtitle
        button
        emailForm
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        blurbs {
          image {
            childImageSharp {
              fluid(maxWidth: 420, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          title
          text
        }
      }
    }
  }
`;
