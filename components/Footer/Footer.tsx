'use client';

import React from 'react';

import HoverChange from '@/components/ui/HoverChange';
import Button from '@/components/ui/Button';

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
                <li className="w-fit">
                  <li className="h-fit w-fit">
                    <HoverChange
                      firstText="LinkedIn"
                      secondText="LinkedIn"
                      onClick={goToTop}
                      className="w-fit text-lg"
                    />
                  </li>
                </li>
                <li className="w-fit">
                  <li className="h-fit w-fit">
                    <HoverChange
                      firstText="GitHub"
                      secondText="GitHub"
                      onClick={goToTop}
                      className="w-fit text-lg"
                    />
                  </li>
                </li>
                <li className="w-fit">
                  <li className="h-fit w-fit">
                    <HoverChange
                      firstText="Behance"
                      secondText="Behance"
                      onClick={goToTop}
                      className="w-fit text-lg"
                    />
                  </li>
                </li>
              </ul>
            </div>
          </div>
          {/* Column 3: Image */}
          <div className="order-last h-48 w-full rounded-lg bg-gray-300 md:order-none">
            {' '}
            {/* You can place an <img> tag here or use a background image */}
            {/* For example: */}
            {/* <img 
        src="https://via.placeholder.com/400x200" 
        alt="Placeholder" 
        className="w-full h-full object-cover rounded-lg"
      /> */}
          </div>
        </div>
      </div>
      <h6 className="text-center">© {year} Sandy Mo. All rights reserved.</h6>
    </footer>
  );
};

export default Footer;
