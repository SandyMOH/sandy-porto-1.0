'use client';

import React, { useRef, useId } from 'react';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import Link from 'next/link';

const HEIGHT = 20;
const DURATION = 0.2;

interface HoverChangeProps {
  firstText: string;
  secondText: string;
  onClick?: () => void;
  className?: string;
  link?: string;
}

const HoverChange: React.FC<HoverChangeProps> = ({
  firstText,
  secondText,
  onClick = () => {},
  className,
  link,
}) => {
  const boxRef = useRef(null);
  let componetId = useId();
  let firstTexId = `nav-first-${componetId}`;
  let secondTextId = `nav-second-${componetId}`;

  useGSAP(() => {
    const boxElement = boxRef.current as HTMLElement | null;

    if (boxElement) {
      gsap.set(`#${secondTextId}`, {
        y: HEIGHT,
        opacity: 0,
      });

      const animation = gsap.to(`#${firstTexId}`, {
        y: -HEIGHT,
        opacity: 0,
        duration: DURATION,
        paused: true,
        ease: 'power1.inOut',
      });
      const animationMo = gsap.to(`#${secondTextId}`, {
        y: 0,
        opacity: 1,
        duration: DURATION,
        paused: true,
        ease: 'power1.inOut',
      });

      const handleMouseEnter = () => {
        animation.play();
        animationMo.play();
      };
      const handleMouseLeave = () => {
        animation.reverse();
        animationMo.reverse();
      };

      boxElement.addEventListener('mouseenter', handleMouseEnter);
      boxElement.addEventListener('mouseleave', handleMouseLeave);

      // Cleanup function to remove event listeners
      return () => {
        boxElement.removeEventListener('mouseenter', handleMouseEnter);
        boxElement.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);

  return (
    <>
      {link ? (
        <Link
          href={link}
          target="_blank"
          ref={boxRef}
          className={`${className} relative h-fit cursor-pointer overflow-hidden text-center`}
        >
          <div id={firstTexId} className="text-center">
            {firstText}
          </div>
          <div
            id={secondTextId}
            className="absolute top-0 left-0 w-full text-center"
          >
            {secondText}
          </div>
        </Link>
      ) : (
        <div
          ref={boxRef}
          className={`${className} relative h-fit cursor-pointer overflow-hidden text-center`}
          onClick={onClick}
        >
          <div id={firstTexId} className="text-center">
            {firstText}
          </div>
          <div
            id={secondTextId}
            className="absolute top-0 left-0 w-full text-center"
          >
            {secondText}
          </div>
        </div>
      )}
    </>
  );
};

export default HoverChange;
