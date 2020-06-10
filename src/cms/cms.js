import React from 'react';

import CMS from 'netlify-cms-app';
import uploadcare from 'netlify-cms-media-library-uploadcare';
import cloudinary from 'netlify-cms-media-library-cloudinary';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import ProductPagePreview from './preview-templates/ProductPagePreview';
import IndexPagePreview from './preview-templates/IndexPagePreview';

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

CMS.registerPreviewTemplate('products', (props) => (
  <CSSInjector>
    <ProductPagePreview {...props} />
  </CSSInjector>
));
