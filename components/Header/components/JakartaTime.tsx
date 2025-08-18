'use client';

import { useEffect, useState } from 'react';

const JakartaTime: React.FC = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const options = {
        timeZone: 'Asia/Jakarta',
        hour: '2-digit' as const,
        minute: '2-digit' as const,
        hour12: true,
      };
      setTime(date.toLocaleTimeString('en-US', options));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-1 flex-col sm:flex-row sm:gap-2">
      <div>Jakarta</div>
      <div className="hidden md:block">|</div>
      <div>{time}</div>
    </div>
  );
};

export default JakartaTime;
