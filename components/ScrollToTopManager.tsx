'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const ScrollToTopManager = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
};

export default ScrollToTopManager;
