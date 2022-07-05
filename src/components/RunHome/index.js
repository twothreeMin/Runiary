import { useEffect, useState } from 'react';
import { AddRunItem } from './AddRunItem';
import { RunItemList } from './RunItemsList';

const initLocalData = () => {
  if (!localStorage.getItem('runiary'))
    localStorage.setItem('runiary', JSON.stringify([]));
};

export const RunHome = () => {
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
      <RunItemList runInfoList={runData} />
    </>
  );
};
