'use client';

import React, { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';

interface PunchlineProps {
  delay: number;
}

const Punchline: React.FC<PunchlineProps> = ({ delay }) => {
  const [animationDelay, setAnimationDelay] = useState(delay);
  const punchlines = [
    'Currently fixing a bug I made',
    'Sleep or code, coffee decides',
    'Top 3 Dreamer',
    'I prefer to code in the morning',
  ];

  const firstPunchline = 'I code and design just for you';

  const [currentPunchline, setCurrentPunchline] = useState(firstPunchline);

  const availablePunchlines = useRef(
    punchlines.filter((p) => p !== firstPunchline)
  );

  const getNextPunchline = () => {
    if (availablePunchlines.current.length === 0) {
      availablePunchlines.current = [...punchlines, firstPunchline];
    }
    const randomIndex = Math.floor(
      Math.random() * availablePunchlines.current.length
    );
    return availablePunchlines.current.splice(randomIndex, 1)[0];
  };

  useGSAP(
    () => {
      gsap.registerPlugin(SplitText);
      const mySplitText = new SplitText('.punchline', { type: 'words' });
      const words = mySplitText.words;

      const timeline = gsap.timeline({
        delay: animationDelay,
      });

      timeline
        .from(words, {
          opacity: 0,
          y: 20,
          ease: 'back.out(2)',
          stagger: 0.1,
        })
        .to(
          words,
          {
            y: -20,
            opacity: 0,
            onComplete: () => {
              setCurrentPunchline(getNextPunchline());
              setAnimationDelay(0.5);
            },
          },
          '>3'
        );
    },
    { dependencies: [currentPunchline] }
  );

  return (
    <h6 className="punchline font-handwriting text-lg md:text-2xl lg:text-3xl">
      {currentPunchline}
    </h6>
  );
};

export default Punchline;
