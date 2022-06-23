import { useEffect, useState } from 'react';
import { AddRunItem } from './addRunItem';
import { RunItem } from './runItem';

export const RunContents = () => {
  const [runData, setRunData] = useState(
    JSON.parse(localStorage.getItem('runiary')),
  );

  useEffect(() => {
    console.log('Update!');
    localStorage.setItem('runiary', JSON.stringify(runData));
  }, [runData]);

  const onAddingRunItem = (runningData) => {
    const timeSplit = runningData.time.split(':');
    const seconds = +timeSplit[0] * 60 + +timeSplit[1] + +timeSplit[2] / 60;
    const paceMinutes = seconds / runningData.distance;
    const pace = (
      Math.round((paceMinutes + Number.EPSILON) * 100) / 100
    ).toString();
    const newRunData = {
      ...runningData,
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
