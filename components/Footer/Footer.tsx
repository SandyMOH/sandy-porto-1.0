'use client';

import React from 'react';
import LinkText from '@/components/ui/LinkText';

import HoverChange from '@/components/ui/HoverChange';
import Planet from './Planet';

import { goToTop, goTo } from '@/libs/utils';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full">
      <div className="mx-auto max-w-[2300px] px-4 py-3">
        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-[auto_1fr] md:gap-24">
          <div className="grid grid-cols-[auto_auto] gap-12 md:gap-24">
            <div>
              <h6 className="pb-2 text-lg font-semibold md:text-xl">Menu</h6>
              <ul className="flex flex-col gap-2">
                <li className="h-fit w-fit">
                  <HoverChange
                    firstText="Home"
                    secondText="Home"
                    onClick={goToTop}
                    className="w-fit md:text-lg"
                  />
                </li>
                <li className="h-fit w-fit">
                  <HoverChange
                    firstText="About"
                    secondText="About"
                    onClick={() => goTo('about')}
                    className="w-fit md:text-lg"
                  />
                </li>
                <li className="h-fit w-fit">
                  <HoverChange
                    firstText="Contact"
                    secondText="Contact"
                    onClick={() => goTo('contact', 'center')}
                    className="w-fit md:text-lg"
                  />
                </li>
              </ul>
            </div>
            <div>
              <h6 className="pb-2 text-xl font-semibold">Social</h6>
              <ul className="flex flex-col gap-2">
                <li className="h-fit w-fit">
                  <HoverChange
                    firstText="LinkedIn"
                    secondText="LinkedIn"
                    link="https://github.com/SandyMOH"
                    className="w-fit md:text-lg"
                  />
                </li>
                <li className="h-fit w-fit">
                  <HoverChange
                    firstText="GitHub"
                    secondText="GitHub"
                    link="https://www.linkedin.com/in/sandy-mohammad-379ba111a/"
                    className="w-fit md:text-lg"
                  />
                </li>
                <li className="h-fit w-fit">
                  <HoverChange
                    firstText="Behance"
                    secondText="Behance"
                    link="https://www.behance.net/sandymoh"
                    className="w-fit md:text-lg"
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

        {/* <h6 className="mt-6 text-center md:text-lg">
          © {year} Sandy Mo. All rights reserved.
        </h6> */}
        <div className="mt-6 flex flex-col max-md:gap-8 max-md:text-center md:flex-row md:items-center md:justify-between md:text-lg">
          <div className="flex flex-col items-center md:items-start">
            <h6>Based in Indonesia Working worldwide</h6>

            <LinkText href="mailto:sandymo.dev@gmail.com">
              sandymo.dev@gmail.com
            </LinkText>
          </div>
          <h6 className="">© {year} Sandy Mo. All rights reserved.</h6>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
