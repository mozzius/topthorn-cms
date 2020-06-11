import React from 'react';
import PropTypes from 'prop-types';
import { PhotosPageTemplate } from '../../templates/photos-page';

const PhotosPagePreview = ({ entry, widgetFor }) => (
  <PhotosPageTemplate
    title={entry.getIn(['data', 'title'])}
    button={entry.getIn(['data', 'button'])}
    content={widgetFor('body')}
    gallery={entry.getIn(['data', 'gallery'])}
  />
);

PhotosPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default PhotosPagePreview;
