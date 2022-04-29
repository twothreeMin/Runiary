import './Runiary.css';

import { RunItemButton } from './RunItemButton';
import { RunItems } from './RunItems';

export const Runiary = () => {
  const dummyRunInfoList = [
    {
      id: 1,
      date: '2022.04.25',
      distance: 4,
      time: '22:32',
      pace: '05:50',
      condition: '😆',
      feeling: '오늘은 너무 가벼웠다.',
    },
    {
      id: 2,
      date: '2022.04.24',
      distance: 1,
      time: '05:11',
      pace: '05:11',
      condition: '😆',
      feeling: 'good!',
    },
    {
      id: 3,
      date: '2022.04.23',
      distance: 3,
      time: '15:50',
      pace: '05:40',
      condition: '🥵',
      feeling:
        '초반에 컨디션 좋은줄 알고 무리한 페이스로 달리다가 결국 뒤로가서 지쳐버림.',
    },
  ];

  return (
    <div className="Runiary">
      <RunItemButton date={123} distance="345" />
      <RunItems runInfoList={dummyRunInfoList} />
    </div>
  );
};
