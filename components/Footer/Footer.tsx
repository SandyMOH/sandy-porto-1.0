'use client';

import React from 'react';

import HoverChange from '@/components/ui/HoverChange';
import Planet from './Planet';

import { goToTop } from '@/libs/utils';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  const goTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };
  return (
    <footer className="container px-4 py-3">
      <div className="w-full p-8">
        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-[auto_1fr] md:gap-24">
          <div className="grid grid-cols-[auto_auto] gap-12 md:gap-24">
            <div>
              <h6 className="pb-2 text-xl font-semibold">Menu</h6>
              <ul className="flex flex-col gap-2">
                <li className="h-fit w-fit">
                  <HoverChange
                    firstText="Home"
                    secondText="Home"
                    onClick={goToTop}
                    className="w-fit text-lg"
                  />
                </li>
                <li className="h-fit w-fit">
                  <HoverChange
                    firstText="About"
                    secondText="About"
                    onClick={() => goTo('about')}
                    className="w-fit text-lg"
                  />
                </li>
              </ul>
            </div>
            {/* Column 2: Social */}
            <div>
              <h6 className="pb-2 text-xl font-semibold">Social</h6>
              <ul className="flex flex-col gap-2">
                  <li className="h-fit w-fit">
                    <HoverChange
                      firstText="LinkedIn"
                      secondText="LinkedIn"
                    link="https://github.com/SandyMOH"
                      className="w-fit text-lg"
                    />
                  </li>
                  <li className="h-fit w-fit">
                    <HoverChange
                      firstText="GitHub"
                      secondText="GitHub"
                    link="https://www.linkedin.com/in/sandy-mohammad-379ba111a/"
                      className="w-fit text-lg"
                    />
                  </li>
                  <li className="h-fit w-fit">
                    <HoverChange
                      firstText="Behance"
                      secondText="Behance"
                    link="https://www.behance.net/sandymoh"
                      className="w-fit text-lg"
                    />
                </li>
              </ul>
            </div>
          </div>
          {/* Column 3: Image */}
          <div className="order-last h-48 w-full rounded-lg md:order-none">
            <Planet />
          </div>
        </div>
      </div>
      <h6 className="text-center">© {year} Sandy Mo. All rights reserved.</h6>
    </footer>
  );
};

export default Footer;
