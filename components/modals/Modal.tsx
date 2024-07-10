
import { closeModal } from "@/redux/fetures/modalSlice";
import { CloseModalButton } from "../common/buttons";
import styles from "./Modal.module.css";
import {useModal} from "@/hooks";

interface ModalProps {
  modalName: string;
  children: React.ReactNode;
}

export default function Modal({ modalName, children }: ModalProps) {
    const {isOpen, close} = useModal(modalName)

  if (!isOpen) {
    return null;
  }

  return (

    <>
      <div
        aria-hidden="true"
        className={`${styles.modalOverlay} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
      >
        <div className={`${styles.modalBody}`}>
          <CloseModalButton closeModal={close} />

          {children}
        </div>
      </div>
    </>
  );
}
