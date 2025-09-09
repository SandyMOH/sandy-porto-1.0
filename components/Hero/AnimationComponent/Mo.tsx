'use client';

import React from 'react';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';

import { removeComponent } from '@/libs/utils';

const HEIGHT_GAP = 145;

const Mo: React.FC = () => {
  useGSAP(() => {
    const mo100 = new SplitText('#mo-100', { type: 'chars' });
    const mo100Chars = mo100.chars;

    const moText = new SplitText('#mo-text', { type: 'chars' });
    const moTextChars = moText.chars;

    const timeline = gsap.timeline();

    timeline
      .set('#mo-section', { autoAlpha: 1 })
      .set(mo100Chars, {
        y: HEIGHT_GAP,
      })
      .set(moTextChars, {
        y: HEIGHT_GAP,
      })
      .to(
        mo100Chars[0],
        {
          y: 0,
          duration: '1.5',
          ease: 'power3.out',
        },
        '<'
      )
      .to(
        mo100Chars[2],
        {
          y: -HEIGHT_GAP,
          duration: '2',
          ease: 'power3.inOut',
        },
        '>1'
      )
      .to(
        mo100Chars[1],
        {
          y: -HEIGHT_GAP,
          duration: '2',
          ease: 'power3.inOut',
        },
        '<+0.1'
      )
      .to(
        mo100Chars[0],
        {
          y: -HEIGHT_GAP,
          duration: '1',
          ease: 'power3.out',
        },
        '<1.11'
      )
      .to(
        moTextChars,
        {
          y: 0,
          duration: 1,
          ease: 'power2.out',
          stagger: {
            amount: 0.25,
            from: 'start',
            onComplete: () => {
              removeComponent('hide-component-mo');
            },
          },
        },
        '<'
      );
  }, []);

  return (
    <div
      id="mo-section"
      className="text-mo-mobile md:text-mo invisible relative h-fit w-fit overflow-hidden"
    >
      <h2 id="mo-text" className="h-fit w-full">
        Mo.
      </h2>
      <h2
        id="mo-100"
        className="hide-component-mo absolute top-0 left-0 flex h-fit w-full items-center justify-center overflow-hidden"
      >
        100
      </h2>
    </div>
  );
};

export default Mo;
