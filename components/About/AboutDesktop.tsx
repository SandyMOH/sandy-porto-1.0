'use client';

import React, { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';

import Description from './components/Description';
import Circle from './components/Circle';
import Run from './components/Run';
import Triangle from './components/Triangle';

export default function HorizontalScroll() {
  const component = useRef<HTMLDivElement>(null);
  const wrapper = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Observe when component enters viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // run once
        }
      },
      { threshold: 0.1 }
    );

    if (component.current) {
      observer.observe(component.current);
    }

    return () => observer.disconnect();
  }, []);

  // Run GSAP only after visible
  useEffect(() => {
    if (!isVisible || !wrapper.current) return;

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
  }, [isVisible]);

  return (
    <div
      ref={component}
      className="max-xl2:hidden h-screen w-full overflow-x-hidden"
    >
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
  );
}
