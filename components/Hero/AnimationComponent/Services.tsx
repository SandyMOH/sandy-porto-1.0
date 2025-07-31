'use client';

import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Services: React.FC = () => {
  const services = [
    'CREATIVE',
    'WEBSITES',
    'WEB APP',
    'MOBILE APP',
    'E-COMMERCE',
  ];

  useGSAP(() => {
    const timeline = gsap.timeline({
      delay: 4.5,
    });

    timeline.from('.service-item', {
      opacity: 0,
      x: -20,
      ease: 'power3.out',
      stagger: 0.1,
    });
  }, []);

  return (
    <div className="flex h-40 flex-col justify-end gap-1 md:h-48 lg:h-60">
      {services.map((service, index) => (
        <h6
          key={index}
          className="service-item font-handwriting text-base font-bold md:text-xl lg:text-2xl"
        >
          {service}
        </h6>
      ))}
    </div>
  );
};

export default Services;
