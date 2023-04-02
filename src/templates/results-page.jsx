import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { css } from '@emotion/react';
import IframeResizer from 'iframe-resizer-react';

import Layout, { Panel } from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';

export const ResultsPageTemplate = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <Panel>
      <h2>{title}</h2>
      <PageContent content={content} />
      <IframeResizer
        log
        checkOrigin={false}
        autoResize
        heightCalculationMethod="max"
        title="Topthorn Events Calender"
        scrolling
        src="https://www.myridinglife.com/RemoteLocationEventResultsandtimes.aspx?locationid=2400&type=results"
        frameBorder={0}
        css={css`
          border: 1px solid #ddd;
          width: 1px;
          min-width: 100%;
          min-height: 50vh;
        `}
      />
    </Panel>
  );
};

ResultsPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const ResultsPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <ResultsPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

ResultsPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ResultsPage;

export const ResultsPageQuery = graphql`
  query ResultsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
