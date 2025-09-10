'use client';

import React, { useRef } from 'react';
import { useResponsiveSvgConfig } from './useResponsiveSvgConfig';
import Image from 'next/image';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
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

  useGSAP(
    () => {
      const lines = gsap.utils.toArray<SVGPolylineElement>('polyline');

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

      const updatePolylinePoints = () => {
        lines.forEach((line) => {
          line.setAttribute('points', points.current);
        });
      };

      const obs = Observer.create({
        type: 'wheel,touch,scroll,pointer',
        onChangeY: ({ velocityY }) => {
          drift.current += velocityY * 0.0002;
          setPoints(velocityY * 0.0005);
          updatePolylinePoints();
        },
        tolerance: 10,
      });

      // 4. IMPORTANT: Return a cleanup function for the Observer
      return () => {
        obs.kill();
      };
    },
    { scope: mainRef } // 5. Scope the hook to the main element
  );

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
