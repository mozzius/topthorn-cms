import React from 'react';
import PropTypes from 'prop-types';
import PreviewCompatibleImage from './PreviewCompatibleImage';
import styled from '@emotion/styled';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

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

      a {
        color: black;
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-top: 10px;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }

        h3 {
          margin: 0;
        }
      }
    }
  }
`;

const Icon = styled(FontAwesomeIcon)`
  height: 12px;
  margin-left: 5px;
`;

const Blurbs = ({ items }) => (
  <Container>
    {items.map((item) => (
      <Item key={item.text}>
        <div className="side image">
          <PreviewCompatibleImage imageInfo={item} />
        </div>
        <div className="side text">
          <Link to={item.link}>
            <h3>{item.title}</h3>
            <Icon icon={faChevronRight} />
          </Link>
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
      text: PropTypes.string,
    })
  ),
};

export default Blurbs;
