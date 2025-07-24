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
    <section className="container mx-auto h-full px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex h-full items-center justify-center gap-4">
        <div className="flex w-fit flex-col justify-center text-right">
          <h6 className="font-handwriting text-lg md:text-2xl lg:text-3xl">
            I Code and Design just for you
          </h6>
          <h1 className="text-sandy-mobile md:text-sandy">Sandy</h1>
          <div className="flex w-full justify-end gap-4">
            <div className="flex h-40 flex-col justify-end gap-1 md:h-48 lg:h-60">
              {services.map((service, index) => (
                <h6
                  key={index}
                  className="font-handwriting text-base font-bold md:text-xl lg:text-2xl"
                >
                  {service}
                </h6>
              ))}
            </div>
            <h2 className="text-mo-mobile md:text-mo h-fit">Mo.</h2>
          </div>
        </div>
        <div className="hidden w-fit items-center justify-center md:flex">
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
