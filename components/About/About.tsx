'use client';

import React from 'react';
import { useMediaQuery } from '@/libs/hooks/useMediaQuery';

import AboutMobile from './AboutMobile';
import AboutDesktop from './AboutDesktop';

export default function About() {
  const isDesktop = useMediaQuery('(min-width: 1250px)');

  return (
    <section id="about">
      {isDesktop ? <AboutDesktop /> : <AboutMobile />}
    </section>
  );
}
