import React from 'react';

import Description from './components/Description';
import Circle from './components/CircleMobile';
import Run from './components/RunMobile';
import Triangle from './components/Triangle';

const AboutMobile: React.FC = () => {
  return (
    <section className="xl2:hidden flex flex-col gap-8 py-8">
      <Description />
      <Circle />
      <Run />
      <div className="min-w-screen">
        <Triangle />
      </div>
    </section>
  );
};

export default AboutMobile;
