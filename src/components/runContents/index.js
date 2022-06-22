import { useEffect, useState } from 'react';
import { RunItemButton } from './list/runItemButton';
import { RunItem } from './list/runItem';
import { RunItemFormModal } from './modal';

const initLocalData = () => {
  return (
    localStorage.getItem('runiary') ||
    localStorage.setItem('runiary', JSON.stringify([]))
  );
};

export const RunContents = () => {
  initLocalData();
  const [runData, setRunData] = useState(
    JSON.parse(localStorage.getItem('runiary')),
  );
  const [openModal, setOpenModal] = useState(false);

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

  const onClickOpenModal = () => {
    setOpenModal(true);
  };

  const onClickCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <RunItemFormModal
        onAddingRunItem={onAddingRunItem}
        onClickCloseModal={onClickCloseModal}
        openModal={openModal}
      />
      <RunItemButton onClickOpenModal={onClickOpenModal} />
      <RunItem runInfoList={runData} />
    </>
  );
};
