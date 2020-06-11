import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import styled from '@emotion/styled';

import Layout, { Panel } from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import { BigLinkExternal } from '../components/BigLink';

const Icon = styled(FontAwesomeIcon)`
  height: 16px;
  margin-left: 10px;
`;

export const PhotosPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <Panel>
      <h2>{title}</h2>
      <PageContent content={content} />
      <BigLinkExternal
        href="https://carolstreetphotography.pixieset.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Carol Street Photography
        <Icon icon={faExternalLinkAlt} />
      </BigLinkExternal>
    </Panel>
  );
};

PhotosPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const PhotosPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <PhotosPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
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
      }
    }
  }
`;
