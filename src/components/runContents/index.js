import { useEffect, useState } from 'react';
import { AddRunItem } from './addRunItem';
import { RunItem } from './runItem';

const initLocalData = () => {
  if (!localStorage.getItem('runiary'))
    localStorage.setItem('runiary', JSON.stringify([]));
};

const getPace = ({ runTime, distance }) => {
  return (
    Math.round(
      ((Number(runTime.hour) * 60 +
        Number(runTime.min) +
        Number(runTime.sec) / 60) /
        distance +
        Number.EPSILON) *
        100,
    ) / 100
  ).toString();
};

export const RunContents = () => {
  initLocalData();
  const [runData, setRunData] = useState(
    JSON.parse(localStorage.getItem('runiary')),
  );

  useEffect(() => {
    localStorage.setItem('runiary', JSON.stringify(runData));
  }, [runData]);

  const appendRunItem = (runningData) => {
    const newRunData = {
      ...runningData,
      date: new Date().toLocaleDateString('ko-KR'),
      pace: getPace(runningData),
      id: Math.random().toString(),
    };
    setRunData([newRunData, ...runData]);
  };

  return (
    <>
      <AddRunItem appendRunItem={appendRunItem} />
      <RunItem runInfoList={runData} />
    </>
  );
};
