'use client';

import React, { useState, useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import { ScrambleTextPlugin } from 'gsap/ScrambleTextPlugin';

interface PunchlineProps {
  delay: number;
}

const Punchline: React.FC<PunchlineProps> = ({ delay }) => {
  const [animationDelay, setAnimationDelay] = useState(delay);

  gsap.registerPlugin(SplitText, ScrambleTextPlugin);

  const timeline = gsap.timeline({
    delay: animationDelay,
  });

  const firstPunchline = 'I code and design just for you';
  const punchlines = [
    'Currently fixing a bug I made',
    'Sleep or code, coffee decides',
    'Top 3 Dreamer',
    'I prefer to code in the morning',
  ];

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
      timeline.to('.punchline', {
        scrambleText: {
          text: currentPunchline,
          chars: 'nXEd>>86Gu7@',
          speed: 0.2,
        },
        duration: 2,
        onComplete: () => {
          setCurrentPunchline(getNextPunchline());
          setAnimationDelay(5);
        },
      });
    },
    { dependencies: [currentPunchline] }
  );

  return (
    <div className="relative h-[1em] max-w-full overflow-hidden pb-8">
      <h6 className="punchline font-handwriting absolute w-full text-right text-lg md:text-2xl lg:text-3xl"></h6>
    </div>
  );
};

export default Punchline;
