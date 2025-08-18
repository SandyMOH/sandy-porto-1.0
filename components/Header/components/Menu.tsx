'use client';
import HoverChange from '@/components/ui/HoverChange';
import Button from '@/components/ui/Button';

import { goToTop } from '@/libs/utils';

const Menu: React.FC = () => {
  const goTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

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
            onClick={() => goTo('')}
            className="w-fit"
          />
        </li>
        <li>
          <a className="cursor-pointer md:hidden" onClick={() => goTo('')}>
            Get In Touch
          </a>
          <Button />
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
