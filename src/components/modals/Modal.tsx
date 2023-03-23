import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import classes from './Modal.module.scss';
import { CloseModal } from '../icons';

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ children, isOpen, onClose }: ModalProps) => {
  const [modalRoot, setModalRoot] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = document.createElement('div');
    document.body.appendChild(root);
    setModalRoot(root);

    return () => {
      if (root) {
        document.body.removeChild(root);
      }
    };
  }, []);

  if (!modalRoot || !isOpen) {
    return null;
  }

  const modalContent = (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
      }}
    >
      <div>
        <div className={classes['button-container']}>
          <button
            className={classes['close-button']}
            aria-label='close modal'
            onClick={onClose}
          >
            <CloseModal />
          </button>
        </div>

        <div className={classes['modal-children']}>{children}</div>
      </div>
    </div>
  );

  return createPortal(modalContent, modalRoot);
};

export default Modal;
