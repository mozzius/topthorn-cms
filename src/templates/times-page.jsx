import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Layout, { Panel } from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';
import iFrameResize from 'iframe-resizer/js/iframeResizer.min.js';

export const TimesPageTemplate = ({ title, content, contentComponent }) => {
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
        src="https://www.myridinglife.com/RemoteLocationEventList.aspx?LocationID=2400&from=rl"
        width="100%"
        height={800}
        frameBorder={0}
        title="Topthorn Times Calender"
      />
    </Panel>
  );
};

TimesPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const TimesPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <TimesPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

TimesPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default TimesPage;

export const TimesPageQuery = graphql`
  query TimesPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
