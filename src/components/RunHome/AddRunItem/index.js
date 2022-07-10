import { ModalContextProvider } from '../../../store/modal-context';
import { Modal } from './Modal';
import { OpenModalButton } from './OpenModalButton';

const initLocalData = () =>
  localStorage.getItem('runiary') ||
  localStorage.setItem('runiary', JSON.stringify([]));

export const AddRunItem = () => {
  initLocalData();

  return (
    <ModalContextProvider>
      <Modal />
      <OpenModalButton />
    </ModalContextProvider>
  );
};
