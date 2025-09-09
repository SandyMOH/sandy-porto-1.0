'use client';

import { useEffect } from 'react';

const ScrollToTopManager = () => {
  useEffect(() => {
    if (history.scrollRestoration) {
      history.scrollRestoration = 'manual';
    }
  }, []);

  return null;
};

export default ScrollToTopManager;
