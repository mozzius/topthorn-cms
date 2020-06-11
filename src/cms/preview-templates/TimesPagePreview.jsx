import React from 'react';
import PropTypes from 'prop-types';
import { TimesPageTemplate } from '../../templates/times-page';

const TimesPagePreview = ({ entry, widgetFor }) => (
  <TimesPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
);

TimesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default TimesPagePreview;
