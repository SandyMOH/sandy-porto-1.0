'use client';

import React, { useEffect, useRef } from 'react';
import { useResponsiveSvgConfig } from './useResponsiveSvgConfig';
import Image from 'next/image';

import gsap from 'gsap';
import { Observer } from 'gsap/Observer';

// Register plugin once globally
if (typeof window !== 'undefined' && gsap) {
  gsap.registerPlugin(Observer);
}

interface PolylineStyle extends React.CSSProperties {
  '--i'?: number;
}

const ScrollWaves: React.FC = () => {
  const mainRef = useRef<HTMLElement>(null);

  // Refs for animation state
  const drift = useRef(0);
  const points = useRef<string>('');

  const width = 100;
  const freq = 20;
  const damp = 60;

  const { lineCount, viewBox } = useResponsiveSvgConfig();

  useEffect(() => {
    if (!mainRef.current) return;

    const lines = gsap.utils.toArray<SVGPolylineElement>(
      mainRef.current.querySelectorAll('polyline')
    );

    // Wave calculation
    const setPoints = (amp = 0) => {
      let step = 0;
      const newPoints: number[] = [];

      for (let x = 0; x <= width; x++) {
        x < width / 2 ? step++ : step--;
        const y =
          (step / damp) * amp * Math.sin(((x + drift.current) / damp) * freq);
        newPoints.push(x, y);
      }
      points.current = newPoints.join(' ');
    };

    // Update DOM
    const updatePolylinePoints = () => {
      lines.forEach((line) => {
        line.setAttribute('points', points.current);
      });
    };

    // Observer setup
    const obs = Observer.create({
      type: 'wheel,touch,scroll,pointer',
      onChangeY: ({ velocityY }) => {
        drift.current += velocityY * 0.0002;
        setPoints(velocityY * 0.0005);
        updatePolylinePoints();
      },
      tolerance: 10,
    });

    return () => {
      obs.kill();
    };
  }, []);

  return (
    <section ref={mainRef} className="relative grid place-items-center">
      <svg
        className="h-auto w-full overflow-visible [grid-area:1/1]"
        viewBox={viewBox}
      >
        {Array.from({ length: lineCount }).map((_, i) => (
          <polyline
            key={`wave-${i}`}
            style={{ '--i': i + 1 } as PolylineStyle}
            points="0,0,100,0"
          />
        ))}
      </svg>

      <div className="z-10 [grid-area:1/1]">
        <Image
          src="/images/photo/walk.jpg"
          alt="sandy walk"
          width={350}
          height={130}
          className="h-auto w-56 md:w-80 lg:w-96"
        />
      </div>
    </section>
  );
};

export default ScrollWaves;
