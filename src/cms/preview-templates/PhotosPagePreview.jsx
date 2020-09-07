import React from 'react';
import PropTypes from 'prop-types';
import { PhotosPageTemplate } from '../../templates/photos-page';

const PhotosPagePreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(['data']).toJS();

  if (data) {
    return (
      <PhotosPageTemplate
        title={data.title}
        button={data.button}
        content={widgetFor('body')}
        gallery={data.gallery}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

PhotosPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default PhotosPagePreview;
