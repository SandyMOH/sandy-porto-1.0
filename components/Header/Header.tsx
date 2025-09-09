'use client';

import JakartaTime from './components/JakartaTime';
import Sandy from './components/Sandy';
import Menu from './components/Menu';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Header: React.FC = () => {
  useGSAP(() => {
    const timeline = gsap.timeline();

    timeline.to('#header', {
      y: 100,
      duration: 1.5,
      ease: 'power3.out',
      delay: 0.5,
    });
  }, []);

  return (
    <header id="header" className="fixed top-[-100px] left-0 z-50 w-full">
      <div className="mx-auto flex max-w-[2300px] items-start justify-between px-4 py-3 md:items-center md:text-lg">
        <JakartaTime />
        <Sandy />
        <Menu />
      </div>
    </header>
  );
};

export default Header;
