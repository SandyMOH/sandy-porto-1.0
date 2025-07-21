import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  const services = [
    'CREATIVE',
    'WEBSITES',
    'WEB APP',
    'MOBILE APP',
    'E-COMMERCE',
  ];

  return (
    <section className="container mx-auto h-screen px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex h-full">
        <div className="flex h-full w-fit flex-col justify-center text-right">
          <h6 className="font-handwriting text-3xl">
            I Code and Design just for you
          </h6>
          <h1 className="text-sandy">Sandy</h1>
          <div className="flex w-full justify-end gap-4">
            <div className="flex h-60 flex-col justify-end gap-1">
              {services.map((service, index) => (
                <h6 key={index} className="font-handwriting text-2xl font-bold">
                  {service}
                </h6>
              ))}
            </div>
            <h2 className="text-mo h-fit">Mo.</h2>
          </div>
        </div>
        <div className="flex h-full w-full items-center justify-center">
          <Image
            src="/images/hero/dummy.jpg"
            alt="Sandy Mo"
            width={450}
            height={500}
            className="shadow-[0px_0px_48px_16px_#FF6EC740]"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
