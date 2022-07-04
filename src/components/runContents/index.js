import { useEffect, useState } from 'react';
import { AddRunItem } from './addRunItem';
import { RunItem } from './runItem';

const initLocalData = () => {
  if (!localStorage.getItem('runiary'))
    localStorage.setItem('runiary', JSON.stringify([]));
};

export const RunContents = () => {
  initLocalData();
  const [runData, setRunData] = useState(
    JSON.parse(localStorage.getItem('runiary')),
  );

  useEffect(() => {
    localStorage.setItem('runiary', JSON.stringify(runData));
  }, [runData]);

  const appendRunItem = (newRunData) => {
    setRunData([newRunData, ...runData]);
  };

  return (
    <>
      <AddRunItem appendRunItem={appendRunItem} />
      <RunItem runInfoList={runData} />
    </>
  );
};
