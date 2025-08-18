'use client';

import React, { useEffect, useRef, useState } from 'react';

import Image from 'next/image';

// Since the build environment can't resolve the GSAP package, we will load it
// from a CDN. We declare these variables to let TypeScript know that 'gsap'
// and 'Observer' will be available globally on the 'window' object once loaded.
declare const gsap: any;
declare const Observer: any;

// Define the type for our custom CSS properties.
// This allows TypeScript to recognize '--i' as a valid style property.
interface PolylineStyle extends React.CSSProperties {
  '--i'?: number;
}

const ScrollWaves: React.FC = () => {
  // A ref to the main container element. We'll use this to scope our DOM queries.
  const mainRef = useRef<HTMLElement>(null);
  // State to track if the GSAP scripts have been successfully loaded.
  const [isGsapReady, setIsGsapReady] = useState(false);

  // Refs to manage animation state without causing re-renders
  const drift = useRef(0);
  const points = useRef<string>('');

  // Constants for the wave effect
  const width = 100; // Corresponds to the SVG viewBox width
  const freq = 20; // Frequency of the wave
  const damp = 60; // Damping factor for the wave amplitude

  // This effect runs once on component mount to load the required GSAP scripts.
  useEffect(() => {
    // Helper function to dynamically load a script from a URL.
    const loadScript = (src: string) => {
      return new Promise((resolve, reject) => {
        // Prevent loading the same script multiple times.
        if (document.querySelector(`script[src="${src}"]`)) {
          resolve(true);
          return;
        }
        const script = document.createElement('script');
        script.src = src;
        script.onload = () => resolve(true);
        script.onerror = reject;
        document.head.appendChild(script);
      });
    };

    // Chain the script loading promises. Load GSAP core first, then the Observer plugin.
    loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js')
      .then(() =>
        loadScript(
          'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/Observer.min.js'
        )
      )
      .then(() => {
        // Once both scripts are loaded, update the state to trigger the animation setup.
        setIsGsapReady(true);
      })
      .catch((error) => console.error('Failed to load GSAP scripts:', error));
  }, []); // The empty dependency array ensures this effect runs only once.

  // This effect runs only after the GSAP scripts are ready (isGsapReady becomes true).
  useEffect(() => {
    console.log(123, isGsapReady);
    if (!isGsapReady) return; // Don't run animation logic until GSAP is loaded.

    // Register the Observer plugin with GSAP.
    gsap.registerPlugin(Observer);

    // GSAP's utility function to convert a selector string into an array of elements.
    const lines = gsap.utils.toArray(
      mainRef.current?.querySelectorAll('polyline')
    );

    // --- Wave Calculation Logic ---
    const setPoints = (amp = 0) => {
      let x;
      let y;
      let step = 0;
      const newPoints = [];

      for (x = 0; x <= width; x++) {
        x < width / 2 ? step++ : step--;
        y = (step / damp) * amp * Math.sin(((x + drift.current) / damp) * freq);
        newPoints.push(x, y);
      }
      points.current = newPoints.join(' ');
    };

    // --- DOM Update Logic ---
    const updatePolylinePoints = () => {
      lines.forEach((line: any) => {
        line.setAttribute('points', points.current);
      });
    };

    // --- GSAP Observer Setup ---
    const obs = Observer.create({
      type: 'wheel,touch,scroll,pointer',
      onChangeY: ({ velocityY }) => {
        drift.current += velocityY * 0.0002;
        setPoints(velocityY * 0.0005);
        updatePolylinePoints();
      },
      tolerance: 10,
    });

    // --- Cleanup Function ---
    // This runs when the component unmounts. It's crucial for preventing memory leaks.
    return () => {
      obs.kill(); // Disable and clean up the Observer instance.
    };
  }, [isGsapReady]); // This dependency array ensures the effect re-runs if isGsapReady changes.

  return (
    <>
      <section ref={mainRef} className="relative grid place-items-center">
        <svg
          className="h-auto w-full overflow-visible [grid-area:1/1]"
          viewBox="0 0 100 50"
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <polyline
              key={`wave-${i}`}
              style={{ '--i': i + 1 } as PolylineStyle}
              points="0,0,100,0"
            />
          ))}
        </svg>

        <div className="z-10 [grid-area:1/1]">
          <Image
            src={'/images/photo/walk.jpg'}
            alt="sandy walk"
            width={350}
            height={130}
            className="h-auto w-48 md:w-72 lg:w-80 2xl:w-96"
          />
        </div>
      </section>
    </>
  );
};

export default ScrollWaves;
