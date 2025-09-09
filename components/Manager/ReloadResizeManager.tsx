'use client';

import { useEffect, useRef } from 'react';

const ReloadResizeManager = () => {
  const initialSizeRef = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Save the initial size
    initialSizeRef.current = window.innerWidth;

    const handleResize = () => {
      if (
        initialSizeRef.current !== null &&
        window.innerWidth !== initialSizeRef.current
      ) {
        window.location.reload();
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return null;
};

export default ReloadResizeManager;
