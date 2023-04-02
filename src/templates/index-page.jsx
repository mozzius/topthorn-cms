import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import styled from '@emotion/styled';

import Layout, { Panel } from '../components/Layout';
import Blurbs from '../components/Blurbs';
import { HeroTitle } from '../components/FullWidthImage';
import Content, { HTMLContent } from '../components/Content';
import BigLink from '../components/BigLink';
import SignupForm from '../components/SignupForm';
import LiveEvent from '../components/LiveEvent';
import { GatsbyImage } from 'gatsby-plugin-image';

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
  event,
  link,
  expiry,
}) => {
  const PageContent = contentComponent || Content;
  return (
    <>
      <HeroTitle>
        <GatsbyImage image={image.childImageSharp.gatsbyImageData} alt="" />
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
      </HeroTitle>
      <LiveEvent event={event} link={link} expiry={expiry} />
      <Panel>
        <PageContent content={content} />
        <Blurbs items={blurbs} />
      </Panel>
      <Panel>
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
  event: PropTypes.string,
  expiry: PropTypes.string,
  link: PropTypes.string,
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
        event={frontmatter.event}
        expiry={frontmatter.expiry}
        link={frontmatter.eventLink}
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
            gatsbyImageData(quality: 100, layout: FULL_WIDTH)
          }
        }
        blurbs {
          image {
            childImageSharp {
              gatsbyImageData(width: 420, quality: 64, layout: CONSTRAINED)
            }
          }
          title
          text
        }
        event
        eventLink
        expiry
      }
    }
  }
`;
