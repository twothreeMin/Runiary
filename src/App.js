import './App.css';

import { useState } from 'react';
import { RuniaryHeader } from './components/header/RuniaryHeader';
import { RunItemButton } from './components/list/RunItemButton';
import { RunItems } from './components/list/RunItems';
import { Modal } from './components/form/Modal';

const App = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState();

  const onCreate = (runData) => {
    const timeSplit = runData.time.split(':');
    const seconds = +timeSplit[0] * 60 + +timeSplit[1] + +timeSplit[2] / 60;
    const paceMinutes = seconds / runData.distance;
    const pace = (
      Math.round((paceMinutes + Number.EPSILON) * 100) / 100
    ).toString();
    const newRunData = {
      ...runData,
      pace,
      id: Math.random().toString(),
    };
    setData([newRunData, ...data]);
  };

  const onClickOpenModal = () => {
    setOpen(true);
  };

  const onClickCloseModal = () => {
    setOpen(false);
  };

  return (
    <div className="App">
      <RuniaryHeader />
      <Modal
        onCreate={onCreate}
        onClickCloseModal={onClickCloseModal}
        openModal={open}
      />
      <RunItemButton onClickOpenModal={onClickOpenModal} />
      <RunItems runInfoList={data} />
    </div>
  );
};

export default App;
