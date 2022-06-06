import styled from 'styled-components';

import { useState } from 'react';
import { RuniaryHeader } from './components/header/runiaryHeader';
import { RunItemButton } from './components/list/runItemButton';
import { RunItem } from './components/list/runItem';
import { RunItemFormModal } from './components/modal';

const Runiary = styled.div`
  & {
    text-align: center;
    padding: 40px 230px;
  }

  @media screen and (max-width: 1024px) {
    & {
      padding: 40px 10px;
    }
  }
`;

const App = () => {
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);

  const onAddingRunItem = (runData) => {
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
    <Runiary>
      <RuniaryHeader />
      <RunItemFormModal
        onAddingRunItem={onAddingRunItem}
        onClickCloseModal={onClickCloseModal}
        openModal={open}
      />
      <RunItemButton onClickOpenModal={onClickOpenModal} />
      <RunItem runInfoList={data} />
    </Runiary>
  );
};

export default App;
