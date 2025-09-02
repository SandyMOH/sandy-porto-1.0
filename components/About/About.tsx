'use client';

import React from 'react';

import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Description from './components/Description';
import Circle from './components/Circle';
import Run from './components/Run';
import Triangle from './components/Triangle';

export default function HorizontalScroll() {
  const component = useRef<HTMLDivElement>(null);
  const wrapper = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let ctx = gsap.context(() => {
      gsap.to(wrapper.current, {
        x: () =>
          -(
            wrapper.current!.scrollWidth - document.documentElement.clientWidth
          ) + 'px',
        ease: 'none',
        scrollTrigger: {
          trigger: component.current,
          pin: true,
          scrub: 1,
          end: () => '+=' + wrapper.current!.offsetWidth,
          markers: false,
        },
      });
    }, component);

    return () => ctx.revert();
  }, []);

  return (
    <div>
      <div ref={component} className="h-screen w-full overflow-x-hidden">
        <div ref={wrapper} className="flex h-full flex-nowrap">
          <div className="section flex h-full w-full min-w-screen items-center justify-center">
            <Description />
          </div>
          <div className="section flex h-full w-full min-w-[60vw] items-center justify-center 2xl:min-w-[40vw]">
            <Circle triggerRef={wrapper} />
          </div>
          <div className="section flex h-full w-full min-w-[60vw] items-center justify-center 2xl:min-w-[40vw]">
            <Run triggerRef={wrapper} />
          </div>
          <div className="section flex h-full w-full min-w-screen items-center justify-center">
            <Triangle />
          </div>
        </div>
      </div>

      <div className="flex h-screen items-center justify-center bg-neutral-100">
        <h1 className="text-4xl font-bold">Vertical Scrolling Resumes</h1>
      </div>
    </div>
  );
}

{
  /* <section
        id="about"
        ref={component}
        className="min-h-screen overflow-hidden py-20"
      >
        <h2 className="content-wrapper text-5xl font-bold md:text-6xl">
          About Me
        </h2>
        <div ref={track} className="flex h-full items-center">
          <div className="min-w-screen">
            <Description />
          </div>
          <div className="min-w-[60vw] 2xl:min-w-[40vw]">
            <Circle triggerRef={track} />
          </div>
          <div className="min-w-[60vw] 2xl:min-w-[40vw]">
            <Run triggerRef={track} />
          </div>
          <div className="h-full w-full min-w-screen">
            <Triangle />
          </div>
        </div>
      </section> */
}
