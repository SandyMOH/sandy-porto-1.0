import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Button from '../ui/Button';

const ContactMe: React.FC = () => {
  return (
    <section
      id="contact"
      className="content-wrapper flex min-h-[80vh] flex-col items-center justify-center gap-10 py-28 lg:min-h-screen"
    >
      <Image
        src="/images/photo/walk-hill.jpg"
        alt="sandy walk"
        width={350}
        height={130}
        className="h-auto w-56 lg:w-72"
      />
      <div className="flex flex-col items-center justify-center gap-6">
        <h2 className="text-center text-4xl lg:text-5xl">
          Let's Discuss Your Vision
        </h2>
        <Link href="mailto:sandymo.dev@gmail.com" target="_blank">
          <Button>Contact Me</Button>
        </Link>
      </div>
    </section>
  );
};

export default ContactMe;
