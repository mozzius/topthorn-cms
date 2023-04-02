import React, { useMemo } from 'react';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';

const CSSInjector = ({ children }) => {
  const cache = useMemo(() => {
    const iframe = document.getElementsByTagName('iframe')[0];
    const iframeHead = iframe.contentDocument.head;
    return createCache({ container: iframeHead });
  }, []);

  return <CacheProvider value={cache}>{children}</CacheProvider>;
};

export default CSSInjector;
