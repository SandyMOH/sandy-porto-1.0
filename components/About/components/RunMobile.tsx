'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

import { gsap } from 'gsap';

const Run: React.FC = () => {
  const runRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: runRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1,
        markers: false,
      },
    });

    tl.fromTo('#run-text', { x: 400 }, { x: -400, ease: 'none' });

    tl.fromTo('#run-image', { x: -400 }, { x: 400, ease: 'none' }, '<');

    // Cleanup function
    return () => {
      tl.kill();
    };
  }, [runRef]);

  return (
    <div
      ref={runRef}
      className="content-wrapper relative flex h-fit w-screen items-center justify-center"
    >
      <Image
        id="run-image"
        src="/images/photo/run.jpg"
        alt="sandy run"
        width={350}
        height={130}
        className="h-auto w-64 lg:w-96"
      />
      <div id="run-text" className="absolute">
        <h3 className="text-3xl">I Like To Run</h3>
        <h6 className="font-handwriting text-right text-xl lg:text-2xl">
          long run suits my lifestyle
        </h6>
      </div>
    </div>
  );
};

export default Run;
