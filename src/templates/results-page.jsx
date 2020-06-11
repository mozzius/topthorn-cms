import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout, { Panel } from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import iFrameResize from 'iframe-resizer/js/iframeResizer.min.js';

export const ResultsPageTemplate = ({ title, content, contentComponent }) => {
  const iframeRef = useRef();

  useEffect(() => {
    iFrameResize({}, iframeRef.current);
  }, []);

  const PageContent = contentComponent || Content;

  return (
    <Panel>
      <h2>{title}</h2>
      <PageContent content={content} />
      <iframe
        ref={iframeRef}
        src="https://www.myridinglife.com/RemoteLocationEventResultsandtimes.aspx?locationid=2400&type=results"
        width="100%"
        height={800}
        frameBorder={0}
        title="Topthorn Results Calender"
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
