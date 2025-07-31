'use client';

import React from 'react';
import Image from 'next/image';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { CustomEase } from 'gsap/CustomEase';

import { addOverflowHidden } from '@/libs/utils';

const Sandy: React.FC = () => {
  useGSAP(() => {
    gsap.registerPlugin(CustomEase);
    if (!CustomEase.get('customBack')) {
      CustomEase.create(
        'customBack',
        'M0,0 C0,0 0.045,-0.015 0.065,-0.028 0.107,-0.056 0.199,-0.168 0.242,-0.185 0.259,-0.192 0.282,-0.189 0.295,-0.182 0.309,-0.175 0.335,-0.146 0.347,-0.126 0.362,-0.102 0.386,-0.04 0.397,-0.007 0.41,0.029 0.428,0.1 0.44,0.154 0.466,0.279 0.644,0.69 0.669,0.818 0.681,0.883 0.746,1.022 0.76,1.036 0.77,1.048 0.793,1.06 0.805,1.062 0.816,1.064 0.83,1.058 0.847,1.052 0.914,1.023 0.876,1.051 0.94,1.024 0.958,1.016 1,1 1,1 '
      );
    }
    // timelineS();
    // timelineA();
    // timelineND();
    // timelineY();
    timelineSandy();
  }, []);

  const timelineSandy = () => {
    const timelineSandy = gsap.timeline();

    timelineSandy
      .set('#a-circle', {
        opacity: 0,
      })
      .set(
        '#a-circle-2',
        {
          opacity: 0,
        },
        '<'
      )
      .set(
        '#a-text',
        {
          opacity: 0,
        },
        '<'
      )
      .from(
        '.sandy',
        {
          y: 100,
          opacity: 0,
          stagger: 0.15,
          duration: 1.25,
          ease: 'back.out(2.5)',
          onComplete: () => {
            addOverflowHidden('ASection');
          },
        },
        '<'
      )
      .set(
        '#a-circle',
        {
          y: 130,
          opacity: 1,
        },
        '>'
      )
      .set(
        '#a-circle-2',
        {
          y: -130,
          opacity: 1,
        },
        '>'
      )
      .set(
        '#a-text',
        {
          y: 230,
          opacity: 1,
        },
        '>'
      )
      .to(
        '#a-text',
        {
          y: 0,
          duration: 2,
          ease: 'back.inOut(2)',
        },
        '>+3'
      )
      .to(
        '#a-circle',
        {
          y: -130,
          duration: 2,
          ease: 'back.inOut(2)',
        },
        '<'
      )
      .to(
        '#a-circle-2',
        {
          y: -390,
          duration: 2,
          ease: 'back.inOut(2)',
        },
        '<'
      )
      .to(
        '#a-triangle',
        {
          y: -260,
          duration: 2,
          ease: 'back.inOut(2)',
        },
        '<'
      );
    // .to(
    //   '#a-triangle',
    //   {
    //     scale: 0,
    //     y: -100,
    //     duration: 2,
    //     ease: 'back.out(4)',
    //   },
    //   '>+1'
    // )
    // .from(
    //   '#a-circle',
    //   {
    //     y: 120,
    //     duration: 0.5,
    //     ease: 'linear',
    //   },
    //   '<'
    // )
    // .to(
    //   '#a-circle',
    //   {
    //     y: -120,
    //     duration: 0.5,
    //     ease: 'linear',
    //   },
    //   '>'
    // )
    // .from(
    //   '#a',
    //   {
    //     y: 150,
    //     duration: 0.58,
    //     ease: 'power3.Out',
    //   },
    //   '<'
    // );
  };

  const timelineS = () => {
    const timeLineS = gsap.timeline();
    timeLineS
      .from(
        '#s',
        {
          rotation: 1440,
          transformOrigin: 'center center',
          duration: 3,
          ease: 'power2.inOut',
        },
        0
      )
      .from(
        '#s',
        {
          opacity: 0,
          duration: 1,
          ease: 'power2.inOut',
        },
        0.5
      );
  };

  const timelineA = () => {
    const timelineGsap = gsap.timeline({ delay: 0.5 });
    timelineGsap
      .fromTo(
        '#a-triangle',
        {
          scale: '0',
        },
        {
          scale: '0.8',
          duration: 1,
          ease: 'back.out',
        }
      )
      .from(
        '#a-s',
        {
          y: 150,
          duration: 0.5,
          ease: 'power3.Out',
        },
        '>1'
      )
      .from(
        '#a-s',
        {
          opacity: 0,
          duration: 0.25,
          ease: 'power3.Out',
        },
        '<'
      )
      .to(
        '#a-triangle',
        {
          y: -130,
          opacity: 0,
          ease: 'power3.Out',
          duration: 0.5,
        },
        '<'
      )
      .to(
        '#a-s',
        {
          rotationY: 90,
          duration: 0.4,
          ease: 'power3.In',
        },
        '>1'
      )
      .from(
        '#a',
        {
          rotationY: -90,
          duration: 0.4,
          ease: 'power3.Out',
        },
        '>'
      );
  };

  const timelineND = () => {
    const timelineND = gsap.timeline({ delay: 1.5 });
    timelineND
      .fromTo(
        '#nd-circle',
        {
          scale: 0,
          x: 20,
          y: 10,
        },
        {
          scale: 1,
          duration: 1,
          ease: 'power2.out',
        }
      )
      .from(
        '#nd-circle',
        {
          rotate: -360,
          repeat: -1,
          duration: 1.5,
          ease: 'linear',
        },
        '<'
      )
      .from(
        '#n',
        {
          x: -105,
          duration: 1,
          ease: 'power3.Out',
        },
        '>'
      )
      .to(
        '#nd-circle',
        {
          x: 140,
          duration: 1,
          ease: 'power3.In',
        },
        '<'
      )
      .to(
        '#nd-circle',
        {
          y: 140,
          duration: 1,
          ease: 'power3.In',
        },
        '>+1'
      )
      .from(
        '#d',
        {
          y: 135,
          duration: 1.5,
          ease: CustomBounce.create('myBounce', {
            strength: 0.1,
            endAtStart: false,
            squash: 2,
            squashID: 'myBounce-squash',
          }),
        },
        '>'
      );
  };

  const timelineY = () => {
    const timelineY = gsap.timeline({ delay: 3 });
    timelineY
      .from('#y', {
        opacity: 0,
        duration: 0.5,
        ease: 'power4.out',
      })
      .fromTo(
        '#y',
        {
          rotate: -90,
        },
        {
          ease: 'bounce.out',
          duration: 2,
          rotate: 0,
        },
        '<'
      );
  };

  return (
    <div className="text-sandy-mobile md:text-sandy flex">
      <div id="s" className="sandy">
        S
      </div>
      <div id="ASection" className="relative h-fit w-full">
        <div id="a-text" className="a-section w-fit" style={{ opacity: 0 }}>
          a
        </div>
        {/* <span
          id="a-s"
          className="absolute top-0 left-0 flex w-full scale-x-110 items-center justify-center"
        >
          s
        </span> */}
        <div
          id="a-triangle"
          className="sandy a-section absolute top-0 left-0 flex h-full items-center justify-center"
        >
          <Image
            id="triangle"
            src="/images/shapes/triangle.svg"
            alt="Sandy"
            width={16}
            height={16}
            className="w-[1em]"
          ></Image>
        </div>
        <div
          id="a-circle"
          className="a-section absolute top-0 left-3 flex h-full items-center justify-center"
          style={{ opacity: 0 }}
        >
          <Image
            id="triangle"
            src="/images/shapes/circle.svg"
            alt="Sandy"
            width={16}
            height={16}
            className="w-[0.6em]"
          ></Image>
        </div>
        <div
          id="a-circle-2"
          className="a-section absolute top-0 left-3 flex h-full items-center justify-center"
          style={{ opacity: 0 }}
        >
          <Image
            id="triangle"
            src="/images/shapes/circle.svg"
            alt="Sandy"
            width={16}
            height={16}
            className="w-[0.6em]"
          ></Image>
        </div>
      </div>
      <div id="n" className="sandy">
        n
      </div>
      <div id="d" className="sandy">
        d
      </div>
      {/* <div className="relative flex h-fit items-center justify-center overflow-hidden">
        <div
          id="nd-circle"
          className="absolute top-0 left-0 flex h-full items-center justify-center"
        >
          <Image
            id="circle"
            src="/images/shapes/circle.svg"
            alt="Sandy"
            width={16}
            height={16}
            className="w-[0.5em]"
          ></Image>
        </div>
      </div> */}
      <div id="y" className="sandy">
        y
      </div>
    </div>
  );
};

export default Sandy;
