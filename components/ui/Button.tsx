'use client';

import { MouseEvent, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

const RoundButton = ({ children }: { children: React.ReactNode }) => {
  const xTo = useRef<gsap.QuickToFunc | null>(null);
  const yTo = useRef<gsap.QuickToFunc | null>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const divRef = useRef<HTMLDivElement>(null);

  const getXY = (e: MouseEvent) => {
    // Add this check
    if (!buttonRef.current) {
      return { x: 0, y: 0 }; // Return a default value
    }

    // Now TypeScript knows buttonRef.current is not null below this line
    const { left, top, width, height } =
      buttonRef.current.getBoundingClientRect();

    const xTransformer = gsap.utils.pipe(
      gsap.utils.mapRange(0, width, 0, 140),
      gsap.utils.clamp(0, 200)
    );

    const yTransformer = gsap.utils.pipe(
      gsap.utils.mapRange(0, height, 0, 50),
      gsap.utils.clamp(0, 50)
    );

    return {
      x: xTransformer(e.clientX - left),
      y: yTransformer(e.clientY - top),
    };
  };

  const { contextSafe } = useGSAP(
    () => {
      // Add a guard clause here too
      if (!divRef.current || !buttonRef.current) {
        return;
      }

      xTo.current = gsap.quickTo(divRef.current, 'x', {
        duration: 0.0000001,
      });

      yTo.current = gsap.quickTo(divRef.current, 'y', { duration: 0.01 });

      if (!xTo.current || !yTo.current) {
        return;
      }

      gsap.set(divRef.current, {
        scale: 0,
        xPercent: -50,
        yPercent: -50,
      });
    },
    { scope: buttonRef } // The scope is correct
  );

  const handleMouseEnter = contextSafe(() => {
    gsap.to(divRef.current, {
      scale: 1.3,
      duration: 0.4,
      ease: 'power2.out',
    });
  });
  const handleMouseLeave = contextSafe(() => {
    gsap.killTweensOf(divRef.current);
    gsap.to(divRef.current, {
      scale: 0,
      duration: 0.3,
      ease: 'power2.out',
    });
  });
  const handleMouseMove = contextSafe((e: React.MouseEvent) => {
    const { x, y } = getXY(e);
    if (xTo.current && yTo.current) {
      xTo.current(x);
      yTo.current(y);
    }
  });
  return (
    <button
      ref={buttonRef}
      className="border-pink text-pink hover:text-background hover:border-background relative z-0 cursor-pointer overflow-hidden rounded-3xl border-2 border-solid px-5 py-2"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <div
        ref={divRef}
        className="wrapperButton from-pink via-dark-pink to-pink pointer-events-none absolute top-0 left-0 -z-10 h-[150px] w-[200px] rounded-[50%] bg-gradient-to-r"
      ></div>
      <span className="z-10 text-lg">{children}</span>
    </button>
  );
};

export default RoundButton;
