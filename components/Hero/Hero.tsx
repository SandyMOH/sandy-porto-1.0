import React from 'react';
import Image from 'next/image';

import Sandy from './AnimationComponent/Sandy';
import Mo from './AnimationComponent/Mo';
import Services from './AnimationComponent/Services';
import Punchline from './AnimationComponent/Punchline';

const Hero: React.FC = () => {
  const delay = 4.5;

  return (
    <section className="container mx-auto h-full px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex h-full items-center justify-center gap-4">
        <div className="flex w-fit flex-col justify-center text-right">
          <Punchline delay={delay} />
          <Sandy />
          <div className="flex w-full justify-end gap-4">
            <Services delay={delay} />
            <Mo />
          </div>
        </div>
        {/* <div className="hidden w-fit items-center justify-center md:flex">
          <Image
            src="/images/hero/dummy.jpg"
            alt="Sandy Mo"
            width={450}
            height={500}
            className="shadow-[0px_0px_48px_16px_#FF6EC740]"
          />
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
