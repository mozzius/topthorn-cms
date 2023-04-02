import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import Layout, { Panel } from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import Blurbs from '../components/Blurbs';

export const AboutPageTemplate = ({
  title,
  content,
  contentComponent,
  image,
  people,
}) => {
  const PageContent = contentComponent || Content;

  return (
    <>
      <Panel>
        <h2>{title}</h2>
        <PageContent content={content} />
        <Blurbs items={people} />
      </Panel>
      <Panel>
        <PreviewCompatibleImage imageInfo={{ image }} />
      </Panel>
    </>
  );
};

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  people: PropTypes.array,
};

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        image={post.frontmatter.image}
        people={post.frontmatter.people}
      />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`query AboutPage($id: String!) {
  markdownRemark(id: {eq: $id}) {
    html
    frontmatter {
      title
      people {
        image {
          childImageSharp {
            gatsbyImageData(width: 420, quality: 64, layout: CONSTRAINED)
          }
        }
        title
        text
        instagram
      }
      image {
        childImageSharp {
          gatsbyImageData(quality: 100, layout: FULL_WIDTH)
        }
      }
    }
  }
}`;
