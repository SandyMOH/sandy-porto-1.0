'use client';
import HoverChange from '../../ui/HoverChange';

import { goToTop } from '@/libs/utils';

const Sandy: React.FC = () => {
  return (
    <HoverChange
      firstText="Sandy Mo."
      secondText="Hello There"
      onClick={goToTop}
      className="w-24"
    />
  );
};

export default Sandy;
