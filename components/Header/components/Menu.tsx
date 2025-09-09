'use client';
import HoverChange from '@/components/ui/HoverChange';
import Button from '@/components/ui/Button';

import { goToTop, goTo } from '@/libs/utils';

const Menu: React.FC = () => {
  return (
    <nav className="flex-1">
      <ul className="flex flex-col items-end justify-end gap-2 md:flex-row md:items-center md:gap-6">
        <li>
          <HoverChange
            firstText="Home"
            secondText="Home"
            onClick={goToTop}
            className="w-fit"
          />
        </li>
        <li>
          <HoverChange
            firstText="About"
            secondText="About"
            onClick={() => goTo('about')}
            className="w-fit"
          />
        </li>
        <li>
          <HoverChange
            firstText="Contact"
            secondText="Contact"
            onClick={() => goTo('contact', 'center')}
            className="w-fit"
          />
        </li>
        {/* <li>
          <a className="cursor-pointer md:hidden" onClick={() => goTo('')}>
            Get In Touch
          </a>
          <Button />
        </li> */}
      </ul>
    </nav>
  );
};

export default Menu;
