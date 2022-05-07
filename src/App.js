import './App.css';

// import { RuniaryForm } from './components/form/RunDiaryForm';
import { useState } from 'react';
import { RuniaryHeader } from './components/header/RuniaryHeader';
import { RunItemButton } from './components/list/RunItemButton';
import { RunItems } from './components/list/RunItems';
import { Modal } from './components/form/Modal';

// const dummyRunInfoList = [
//   {
//     id: 1,
//     date: '2022.04.25',
//     distance: 4,
//     time: '22:32',
//     pace: '05:50',
//     condition: '😆',
//     feeling: '오늘은 너무 가벼웠다.',
//   },
//   {
//     id: 2,
//     date: '2022.04.24',
//     distance: 1,
//     time: '05:11',
//     pace: '05:11',
//     condition: '😆',
//     feeling: 'good!',
//   },
//   {
//     id: 3,
//     date: '2022.04.23',
//     distance: 3,
//     time: '15:50',
//     pace: '05:40',
//     condition: '🥵',
//     feeling:
//       '초반에 컨디션 좋은줄 알고 무리한 페이스로 달리다가 결국 뒤로가서 지쳐버림.',
//   },
// ];
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
    };
    setData([newRunData, ...data]);
  };

  const onClickOpenModal = (openModal) => {
    setOpen(openModal);
  };

  return (
    <div className="App">
      <RuniaryHeader />
      <Modal onCreate={onCreate} openModal={open} />
      <RunItemButton onClickOpenModal={onClickOpenModal} />
      <RunItems runInfoList={data} />
    </div>
  );
};

export default App;
