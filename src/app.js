import './app.css';

import { useState } from 'react';
import { RuniaryHeader } from './components/header/runiaryHeader';
import { RunItemButton } from './components/list/runItemButton';
import { RunItem } from './components/list/runItem';
import { RunItemFormModal } from './components/modal';

const App = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);

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
    console.log(open);
    setOpen(true);
  };

  const onClickCloseModal = () => {
    setOpen(false);
  };

  return (
    <div className="App">
      <RuniaryHeader />
      <RunItemFormModal
        onCreate={onCreate}
        onClickCloseModal={onClickCloseModal}
        openModal={open}
      />
      <RunItemButton onClickOpenModal={onClickOpenModal} />
      <RunItem runInfoList={data} />
    </div>
  );
};

export default App;
