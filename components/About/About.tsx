'use client';

import React from 'react';

import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Description from './components/Description';
import Circle from './components/Circle';
import See from './components/See';

const About: React.FC = () => {
  gsap.registerPlugin(ScrollTrigger);
  const component = useRef(null);
  const track = useRef(null);

  useGSAP(() => {
    let ctx = gsap.context(() => {
      // The animation for the track
      gsap.to(track.current, {
        // We calculate the total distance to move the track horizontally.
        // It's the full width of the track minus the width of the viewport.
        x: () =>
          -(track.current.scrollWidth - document.documentElement.clientWidth) +
          'px',
        ease: 'none', // Linear movement
        scrollTrigger: {
          trigger: component.current, // The container is the trigger
          start: 'top top', // Pin when the top of the container hits the top of the viewport
          end: () =>
            '+=' +
            (track.current.scrollWidth - document.documentElement.clientWidth),
          scrub: 1, // Smoothly link the animation to the scrollbar
          pin: true, // Pin the container while the animation is active
          markers: true, // Set to true for debugging
          invalidateOnRefresh: true, // Recalculate values on resize
        },
      });
    }, component);

    return () => ctx.revert();
  }, []);

  return (
    <section
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
        <div className="min-w-screen">
          <Circle scrollerRef={track} />
        </div>
        <div className="min-w-screen">
          <See />
        </div>
      </div>
    </section>
  );
};

export default About;
