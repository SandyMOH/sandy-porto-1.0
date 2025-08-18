'use client';

import React from 'react';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface ButtonProps {
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ className }) => {
  const onClick = () => {};

  return (
    <button
      className={`${className} text-pink group relative cursor-pointer rounded-full bg-gradient-to-r from-pink-400 via-pink-600 to-pink-400 p-[2px] transition-colors duration-300 hover:text-white`}
      onClick={onClick}
    >
      <span className="bg-background block rounded-full px-3 py-1 transition-colors duration-300 group-hover:bg-black">
        Button
      </span>
    </button>
  );
};

export default Button;
