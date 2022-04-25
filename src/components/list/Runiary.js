import './Runiary.css';

import { RunItemButton } from './RunItemButton';
import { RunItem } from './RunItem';

const Runiary = () => {
  return (
    <div className="Runiary">
      <RunItemButton />
      <RunItem />
    </div>
  );
};

export { Runiary };
