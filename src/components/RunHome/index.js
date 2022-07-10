import { RunDataContextProvider } from '../../store/rundata-context';
import { AddRunItem } from './AddRunItem';
import { RunItemList } from './RunItemsList';

const initLocalData = () => {
  if (!localStorage.getItem('runiary'))
    localStorage.setItem('runiary', JSON.stringify([]));
};

export const RunHome = () => {
  initLocalData();

  return (
    <RunDataContextProvider>
      <AddRunItem />
      <RunItemList />
    </RunDataContextProvider>
  );
};
