import React from 'react';
import PropTypes from 'prop-types';
import { ResultsPageTemplate } from '../../templates/results-page';

const ResultsPagePreview = ({ entry, widgetFor }) => (
  <ResultsPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
);

ResultsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default ResultsPagePreview;
