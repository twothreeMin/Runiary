import styled from 'styled-components';

import { useEffect, useState } from 'react';
import { RuniaryHeader } from './components/runiaryHeader';
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
  const localData = JSON.parse(localStorage.getItem('runiary'));
  const [runData, setRunData] = useState([...localData]);
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
    <Runiary>
      <RuniaryHeader />
      <RunItemFormModal
        onAddingRunItem={onAddingRunItem}
        onClickCloseModal={onClickCloseModal}
        openModal={openModal}
      />
      <RunItemButton onClickOpenModal={onClickOpenModal} />
      <RunItem runInfoList={runData} />
    </Runiary>
  );
};

export default App;
