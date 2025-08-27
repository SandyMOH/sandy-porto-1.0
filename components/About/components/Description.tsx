import React from 'react';

import Image from 'next/image';

const Description: React.FC = () => {
  return (
    <div className="content-wrapper grid grid-cols-1 items-center gap-20 md:grid-cols-[max-content_1fr]">
      <Image
        src={'/images/photo/tunnel.jpg'}
        alt="sandy walk"
        width={350}
        height={130}
        className="hidden h-auto w-64 md:block lg:w-96"
      />
      <div className="flex flex-col gap-4 text-center text-lg leading-relaxed md:text-right lg:text-2xl">
        <p>
          I don't just build applications; I craft complete digital experiences.
          With 4 years of expertise spanning UI/UX design, full-stack
          development, and infrastructure, I manage projects from the first
          sketch to final deployment.
        </p>
        <p>
          My background in both corporate and freelance settings has taught me
          to merge creative vision with technical precision, resulting in
          solutions that are both beautiful and powerful. Let's create something
          exceptional together.
        </p>
      </div>
    </div>
  );
};

export default Description;
