import { useEffect, useState } from 'react';
import { AddRunItem } from './addRunItem';
import { RunItem } from './runItem';

const initLocalData = () => {
  if (!localStorage.getItem('runiary'))
    localStorage.setItem('runiary', JSON.stringify([]));
};

const getRunTime = (data) => {
  const timeSplit = data.time.split(':');
  const seconds = +timeSplit[0] * 60 + +timeSplit[1] + +timeSplit[2] / 60;
  const paceMinutes = seconds / data.distance;

  return (Math.round((paceMinutes + Number.EPSILON) * 100) / 100).toString();
};

export const RunContents = () => {
  initLocalData();
  const [runData, setRunData] = useState(
    JSON.parse(localStorage.getItem('runiary')),
  );

  useEffect(() => {
    localStorage.setItem('runiary', JSON.stringify(runData));
  }, [runData]);

  const onAddingRunItem = (runningData) => {
    console.log({ ...runningData });
    const date = new Date().toLocaleDateString('ko-KR');
    const pace = getRunTime(runningData);
    const newRunData = {
      ...runningData,
      date,
      pace,
      id: Math.random().toString(),
    };
    setRunData([newRunData, ...runData]);
  };

  return (
    <>
      <AddRunItem onAddingRunItem={onAddingRunItem} />
      <RunItem runInfoList={runData} />
    </>
  );
};
