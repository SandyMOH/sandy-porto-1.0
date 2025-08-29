'use client';

import React from 'react';
import Image from 'next/image';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

const Run: React.FC<{
  triggerRef?: React.RefObject<HTMLDivElement | null>;
}> = ({ triggerRef }) => {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const animation = gsap.fromTo(
      '#run-text',
      {
        x: 400, // starting position
      },
      {
        x: -400, // ending position
        ease: 'none',
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'top+=60% top',
          end: '+=300%',
          scrub: 1,
          markers: true,
        },
      }
    );

    // Cleanup function
    return () => {
      animation.kill();
    };
  }, [triggerRef]);

  return (
    <div className="content-wrapper relative flex items-center justify-center">
      <Image
        src={'/images/photo/run.jpg'}
        alt="sandy walk"
        width={350}
        height={130}
        className="hidden h-auto w-64 md:block lg:w-96"
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
