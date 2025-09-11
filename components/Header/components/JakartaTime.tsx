'use client';

import { useEffect, useState } from 'react';

const JakartaTime: React.FC = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    // 1. Create a function to handle the time update
    const updateTime = () => {
      const date = new Date();
      const options = {
        timeZone: 'Asia/Jakarta',
        hour: '2-digit' as const,
        minute: '2-digit' as const,
        hour12: true,
      };
      setTime(date.toLocaleTimeString('en-US', options));
    };

    // 2. Call it once immediately on mount
    updateTime();

    // 3. Then, set the interval to call it every second
    const interval = setInterval(updateTime, 60000);

    // Cleanup function remains the same
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
