import './App.css';

// import { RuniaryForm } from './components/form/RunDiaryForm';
import { RuniaryHeader } from './components/header/RuniaryHeader';
import { Runiary } from './components/list/Runiary';

const App = () => {
  return (
    <div className="App">
      <RuniaryHeader />
      <Runiary />
    </div>
  );
};

export default App;
