import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout, { Panel } from '../components/Layout';
import Blurbs from '../components/Blurbs';
import FullWidthImage, { HeroTitle } from '../components/FullWidthImage';
import Content, { HTMLContent } from '../components/Content';

export const IndexPageTemplate = ({
  image,
  title,
  subtitle,
  content,
  contentComponent,
  blurbs,
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
      </Panel>
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
              fluid(maxWidth: 240, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          title
          link
          text
        }
      }
    }
  }
`;
