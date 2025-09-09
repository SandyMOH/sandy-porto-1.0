'use client';

import React from 'react';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface ButtonProps {
  className?: string;
  size?: 'small' | 'medium' | 'large';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  className,
  size = 'medium',
  children,
}) => {
  const onClick = () => {};

  const sizeStyles = {
    small: 'px-3 py-1 text-sm',
    medium: 'px-3 py-1 text-base', // text-base is usually the default
    large: 'px-4 py-3 text-lg',
  };

  return (
    <button
      className={`${className} text-pink group relative cursor-pointer rounded-full bg-gradient-to-r from-pink-400 via-pink-600 to-pink-400 p-[2px] transition-colors duration-300 hover:text-white`}
      onClick={onClick}
    >
      <span
        className={`${sizeStyles[size]} bg-background block rounded-full transition-colors duration-300 group-hover:bg-black`}
      >
        {children}
      </span>
    </button>
  );
};

export default Button;
