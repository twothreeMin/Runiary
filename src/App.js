import './App.css';
import Runiary from './components/Runiary';
import RunDiaryForm from './components/form/RunDiaryForm';

const App = () => {
  return (
    <div className="App">
      <RunDiaryForm />
      <Runiary />
    </div>
  );
};

export default App;
