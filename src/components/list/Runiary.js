import './Runiary.css';

import { RunItemButton } from './RunItemButton';
import { RunItem } from './RunItem';

const Runiary = () => {
  const dummyRunInfoList = [{
    date: '2022.04.25',
    distance: 4,
    time: '22:32',
    pace: '05:50',
    condition: '😆',
  },
  {
    date: '2022.04.24',
    distance: 1,
    time: '05:11',
    pace: '05:11',
    condition: '😆',
  },
  {
    date: '2022.04.23',
    distance: 3,
    time: '15:50',
    pace: '05:40',
    condition: '🥵',
  },
  ];

  return (
    <div className="Runiary">
      <RunItemButton />
      <RunItem runInfoList={dummyRunInfoList} />
    </div>
  );
};

export { Runiary };
