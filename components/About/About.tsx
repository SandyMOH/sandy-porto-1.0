'use client';

import React, { useState, useEffect } from 'react';
import { useMediaQuery } from '@/libs/hooks/useMediaQuery';

import AboutMobile from './AboutMobile';
import AboutDesktop from './AboutDesktop';

export default function About() {
  const [desktop, setDesktop] = useState(true);

  const isDesktop = useMediaQuery('(min-width: 1250px)');

  useEffect(() => {
    setDesktop(isDesktop);
  }, [isDesktop]);

  return (
    <section id="about">{desktop ? <AboutDesktop /> : <AboutMobile />}</section>
  );
}
