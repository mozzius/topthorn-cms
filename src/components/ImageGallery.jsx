import React from 'react';
import PropTypes from 'prop-types';
import PreviewCompatibleImage from './PreviewCompatibleImage';
import styled from '@emotion/styled';

const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const Item = styled.div`
  box-sizing: border-box;
  padding: 15px;
  width: 50%;

  * {
    width: 100%;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;

const ImageGallery = ({ images }) => (
  <Container>
    {images.map((item) => (
      <Item key={item.text}>
        <PreviewCompatibleImage imageInfo={item} />
        {item.caption && <p>{item.caption}</p>}
      </Item>
    ))}
  </Container>
);

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      caption: PropTypes.string,
    })
  ),
};

export default ImageGallery;
