import React from 'react';

import Image from 'next/image';

const See: React.FC = () => {
  return (
    <div className="content-wrapper flex flex-col-reverse gap-4 max-md:items-center md:flex-row">
      <div className="flex-1 text-center text-3xl font-semibold md:text-left md:text-4xl lg:text-6xl">
        <p>I see differently,</p>
        <p>people don't see </p>
        <p>what i see</p>
      </div>
      <Image
        src={'/images/photo/see.jpg'}
        alt="sandy walk"
        width={350}
        height={130}
        className="h-auto w-64 lg:w-96"
      />
    </div>
  );
};

export default See;
