'use client';

import React, { useRef } from 'react';

import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

interface GradientCircleProps {
  circleId: string;
  rotate?: number;
  triggerRef: React.RefObject<HTMLDivElement | null>;
}

const GradientCircle: React.FC<GradientCircleProps> = ({
  circleId,
  rotate = 45,
  triggerRef,
}) => {
  const pathRef = useRef(null);
  useGSAP(
    () => {
      if (!triggerRef.current) return;

      gsap.to(`#${circleId}`, {
        scrollTrigger: {
          trigger: triggerRef.current,
          start: 'top top',
          end: '+=300%',
          scrub: 1,
          markers: false,
          invalidateOnRefresh: true,
        },
        ease: 'none',
        motionPath: {
          path: pathRef.current as unknown as SVGPathElement,
          align: pathRef.current as unknown as SVGPathElement,
          alignOrigin: [0.5, 0.5],
          autoRotate: true,
          start: 1,
          end: -1,
        },
      });
    },
    {
      dependencies: [triggerRef.current, pathRef.current],
      revertOnUpdate: true,
    }
  );

  return (
    <>
      <div className="relative grid place-items-center">
        <div className="flex h-fit w-fit [grid-area:1/1]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="150"
            height="150"
            viewBox="0 0 150 150"
            fill="none"
            id={circleId}
          >
            <g filter="url(#filter0_n_2111_670)">
              <circle
                cx="74.9346"
                cy="74.5654"
                r="74.5654"
                fill="url(#paint0_linear_2111_670)"
              />
            </g>
            <defs>
              <filter
                id="filter0_n_2111_670"
                x="0.369141"
                y="0"
                width="149.131"
                height="149.131"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="BackgroundImageFix"
                  result="shape"
                />
                <feTurbulence
                  type="fractalNoise"
                  baseFrequency="2 2"
                  stitchTiles="stitch"
                  numOctaves="3"
                  result="noise"
                  seed="4705"
                />
                <feColorMatrix
                  in="noise"
                  type="luminanceToAlpha"
                  result="alphaNoise"
                />
                <feComponentTransfer in="alphaNoise" result="coloredNoise1">
                  <feFuncA
                    type="discrete"
                    tableValues="1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 "
                  />
                </feComponentTransfer>
                <feComposite
                  operator="in"
                  in2="shape"
                  in="coloredNoise1"
                  result="noise1Clipped"
                />
                <feFlood
                  floodColor="rgba(0, 0, 0, 0.25)"
                  result="color1Flood"
                />
                <feComposite
                  operator="in"
                  in2="noise1Clipped"
                  in="color1Flood"
                  result="color1"
                />
                <feMerge result="effect1_noise_2111_670">
                  <feMergeNode in="shape" />
                  <feMergeNode in="color1" />
                </feMerge>
              </filter>
              <linearGradient
                id="paint0_linear_2111_670"
                x1="74.9346"
                y1="0"
                x2="74.9346"
                y2="149.131"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#FF6EC7" />
                <stop offset="1" stopColor="#994277" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="flex h-fit w-fit [grid-area:1/1]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="200"
            height="200"
            viewBox="0 0 200 200"
            style={{
              transform: `rotate(${rotate}deg)`,
              transformOrigin: '100px 100px',
            }}
          >
            <path
              ref={pathRef}
              d="M100,0 a100,100 0 1,1 0,200 a100,100 0 1,1 0,-200"
              fill="none"
            />
          </svg>
        </div>
      </div>
    </>
  );
};

const Circle: React.FC<{
  triggerRef: React.RefObject<HTMLDivElement | null>;
}> = ({ triggerRef }) => {
  return (
    <div className="relative grid h-96 w-full place-items-center items-center justify-center">
      <div className="[grid-area:1/1]">
        <GradientCircle
          circleId="circleOne"
          rotate={45}
          triggerRef={triggerRef}
        />
      </div>
      <div className="[grid-area:1/1]">
        <GradientCircle
          circleId="circleTwo"
          rotate={225}
          triggerRef={triggerRef}
        />
      </div>
    </div>
  );
};

export default Circle;
