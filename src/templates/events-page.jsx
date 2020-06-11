import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { css } from '@emotion/core';
import IframeResizer from 'iframe-resizer-react';

import Layout, { Panel } from '../components/Layout';
import Content, { HTMLContent } from '../components/Content';

export const EventsPageTemplate = ({ title, content, contentComponent }) => {
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
        src="https://www.myridinglife.com/RemoteLocationEventList.aspx?LocationID=2400&from=rl"
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

EventsPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const EventsPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <EventsPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

EventsPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default EventsPage;

export const EventsPageQuery = graphql`
  query EventsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`;
