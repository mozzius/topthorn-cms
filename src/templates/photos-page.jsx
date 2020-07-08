import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import styled from '@emotion/styled';

import Layout, { Panel } from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import BigLink from '../components/BigLink';
import ImageGallery from '../components/ImageGallery';
import { css } from '@emotion/core';

const Icon = styled(FontAwesomeIcon)`
  height: 16px;
  margin-left: 10px;
`;

const BigLinkExternal = BigLink.withComponent('a');

export const PhotosPageTemplate = ({
  title,
  content,
  button,
  contentComponent,
  gallery,
}) => {
  const PageContent = contentComponent || Content;

  return (
    <Panel>
      <h2>{title}</h2>
      <PageContent content={content} />
      <BigLinkExternal
        css={css`
          margin: 30px 0;
        `}
        href="https://carolstreetphotography.pixieset.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {button}
        <Icon icon={faExternalLinkAlt} />
      </BigLinkExternal>
      <ImageGallery images={gallery} />
    </Panel>
  );
};

PhotosPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  button: PropTypes.string,
  contentComponent: PropTypes.func,
  gallery: PropTypes.array,
};

const PhotosPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <PhotosPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        button={post.frontmatter.button}
        content={post.html}
        gallery={post.frontmatter.gallery}
      />
    </Layout>
  );
};

PhotosPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default PhotosPage;

export const PhotosPageQuery = graphql`
  query PhotosPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        button
        gallery {
          image {
            childImageSharp {
              fluid(maxWidth: 500, quality: 64) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          caption
        }
      }
    }
  }
`;
