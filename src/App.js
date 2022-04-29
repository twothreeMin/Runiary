import './App.css';

// import { RuniaryForm } from './components/form/RunDiaryForm';
import { RuniaryHeader } from './components/header/RuniaryHeader';
import { Runiary } from './components/list/Runiary';
import { RuniaryForm } from './components/form/RuniaryForm';

const App = () => {
  return (
    <div className="App">
      <RuniaryHeader />
      <RuniaryForm />
      <Runiary />
    </div>
  );
};

export default App;
