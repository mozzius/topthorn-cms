import React from 'react';
import PropTypes from 'prop-types';
import { HirePageTemplate } from '../../templates/Hire-page';

const HirePagePreview = ({ entry, widgetFor }) => (
  <HirePageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
);

HirePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default HirePagePreview;
