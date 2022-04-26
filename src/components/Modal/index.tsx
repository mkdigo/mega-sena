import React, { useContext } from 'react';
import { motion, Variants, AnimatePresence } from 'framer-motion';

import { AppContext } from '../../contexts/AppProvider';
import styles from './styles.module.scss';

const modalAnimation: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
  exit: {
    opacity: 0,
  },
};

const Modal: React.FC = ({ children }) => {
  const { modalActived, setModalActived } = useContext(AppContext);

  const handleClose = () => {
    setModalActived(false);
  };

  return (
    <AnimatePresence exitBeforeEnter>
      {modalActived && (
        <motion.section
          className={styles.modal}
          variants={modalAnimation}
          initial='initial'
          animate='animate'
          exit='exit'
          onClick={handleClose}
        >
          <div
            className={styles.container}
            onClick={(event) => event.stopPropagation()}
          >
            {children}
          </div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Modal;
