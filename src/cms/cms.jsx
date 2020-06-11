import React from 'react';

import CMS from 'netlify-cms-app';
import uploadcare from 'netlify-cms-media-library-uploadcare';
import cloudinary from 'netlify-cms-media-library-cloudinary';

import IndexPagePreview from './preview-templates/IndexPagePreview';
import AboutPagePreview from './preview-templates/AboutPagePreview';
import EventsPagePreview from './preview-templates/EventsPagePreview';
import HirePagePreview from './preview-templates/HirePagePreview';
import ResultsPagePreview from './preview-templates/ResultsPagePreview';
import TimesPagePreview from './preview-templates/TimesPagePreview';
import ContactPagePreview from './preview-templates/ContactPagePreview';
import PhotosPagePreview from './preview-templates/PhotosPagePreview';

import CSSInjector from './CSSInjector';

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('index', (props) => (
  <CSSInjector>
    <IndexPagePreview {...props} />
  </CSSInjector>
));

CMS.registerPreviewTemplate('about', (props) => (
  <CSSInjector>
    <AboutPagePreview {...props} />
  </CSSInjector>
));

CMS.registerPreviewTemplate('events', (props) => (
  <CSSInjector>
    <EventsPagePreview {...props} />
  </CSSInjector>
));

CMS.registerPreviewTemplate('hire', (props) => (
  <CSSInjector>
    <HirePagePreview {...props} />
  </CSSInjector>
));

CMS.registerPreviewTemplate('results', (props) => (
  <CSSInjector>
    <ResultsPagePreview {...props} />
  </CSSInjector>
));

CMS.registerPreviewTemplate('times', (props) => (
  <CSSInjector>
    <TimesPagePreview {...props} />
  </CSSInjector>
));

CMS.registerPreviewTemplate('contact', (props) => (
  <CSSInjector>
    <ContactPagePreview {...props} />
  </CSSInjector>
));

CMS.registerPreviewTemplate('photos', (props) => (
  <CSSInjector>
    <PhotosPagePreview {...props} />
  </CSSInjector>
));
