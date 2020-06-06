import React from "react";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import styled from "@emotion/styled";

const Columns = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const FeatureGrid = ({ gridItems }) => (
  <div className="columns is-multiline">
    {gridItems.map(item => (
      <div key={item.text} className="column is-6">
        <section className="section">
          <div className="has-text-centered">
            <div
              css={{
                width: "100%",
                maxWidth: "240px",
                display: "inline-block"
              }}
            >
              <PreviewCompatibleImage imageInfo={item} />
            </div>
          </div>
          <p>{item.text}</p>
        </section>
      </div>
    ))}
  </div>
);

FeatureGrid.propTypes = {
  gridItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
      text: PropTypes.string
    })
  )
};

export default FeatureGrid;
