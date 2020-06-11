import React from 'react';
import PropTypes from 'prop-types';
import PreviewCompatibleImage from './PreviewCompatibleImage';
import styled from '@emotion/styled';

const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Item = styled.div`
  padding: 15px 0;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 500px) {
    flex-direction: column;
  }

  .side {
    &.image {
      flex-shrink: 0;
      width: 50%;
      max-width: 240px;
      display: inline-block;
      margin: 10px 15px 10px 0;

      img {
        width: 100%;
        height: auto;
      }

      @media (max-width: 500px) {
        margin: 0;
        width: 100%;
        max-width: unset;
      }
    }

    &.text {
      padding: 0 15px;
      flex-grow: 1;

      @media (max-width: 500px) {
        padding: 15px 0 0;
      }

      h3 {
        margin-top: 10px;
      }
    }
  }
`;

const Blurbs = ({ items }) => (
  <Container>
    {items.map((item) => (
      <Item key={item.text}>
        <div className="side image">
          <PreviewCompatibleImage imageInfo={item} />
        </div>
        <div className="side text">
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </div>
      </Item>
    ))}
  </Container>
);

Blurbs.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      title: PropTypes.string,
      text: PropTypes.string,
    })
  ),
};

export default Blurbs;
