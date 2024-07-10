import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { openModal, closeModal } from '@/redux/fetures/modalSlice';

const useModal = (modalName: string) => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.modals.models[modalName]);

  const handleOpen = () => {
    dispatch(openModal(modalName));

  };

  const handleClose = () => {
    dispatch(closeModal(modalName));
  };

  return {
    isOpen,
    open: handleOpen,
    close: handleClose,
  };
};

export default useModal;
