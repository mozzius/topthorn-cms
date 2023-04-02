import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage } from "gatsby-plugin-image";
import { css } from '@emotion/react';

const PreviewCompatibleImage = ({ imageInfo }) => {
  const imageStyle = css`
    border-radius: 5px;
    width: 100%;
  `;

  const { alt = '', childImageSharp, image } = imageInfo;

  if (!!image && !!image.childImageSharp) {
    return <GatsbyImage image={image.childImageSharp.gatsbyImageData} css={imageStyle} alt={alt} />;
  }

  if (!!childImageSharp) {
    return <GatsbyImage image={childImageSharp.gatsbyImageData} css={imageStyle} alt={alt} />;
  }

  if (!!image && typeof image === 'string')
    return <img css={imageStyle} src={image} alt={alt} />;

  return null;
};

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object,
  }).isRequired,
};

export default PreviewCompatibleImage;
