'use client';

import React, { useRef } from 'react';
import Link from 'next/link'; // 1. Import the Link component
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { GoArrowUpRight } from 'react-icons/go';

interface LinkTextProps {
  children: React.ReactNode;
  href?: string;
}

const LinkText: React.FC<LinkTextProps> = ({ children, href = '#' }) => {
  const containerRef = useRef(null);
  const timeline = useRef<gsap.core.Timeline | null>(null);

  const { contextSafe } = useGSAP({ scope: containerRef });

  useGSAP(
    () => {
      timeline.current = gsap.timeline({ paused: true }).to('.link-content', {
        x: 0,
        duration: 0.2,
        ease: 'power1.inOut',
      });
    },
    { scope: containerRef }
  );

  const onEnter = contextSafe(() => {
    timeline.current?.play();
  });

  const onLeave = contextSafe(() => {
    timeline.current?.reverse();
  });

  return (
    // 2. Replace the 'a' tag with 'Link' for client-side navigation
    <Link
      href={href}
      ref={containerRef}
      className="inline-block w-fit cursor-pointer overflow-x-hidden"
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      <div className="link-content flex -translate-x-4 items-center">
        <GoArrowUpRight className="size-4" />
        <span>{children}</span>
      </div>
    </Link>
  );
};

export default LinkText;
