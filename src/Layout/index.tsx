import React from 'react';
import { AnimatePresence, motion, Variants } from 'framer-motion';

import { Nav } from '../components/Nav';

import styles from './styles.module.scss';

const layoutAnimation: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

type Props = {
  children: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <AnimatePresence mode='wait'>
      <motion.main
        className={styles.layout}
        variants={layoutAnimation}
        initial='initial'
        animate='animate'
      >
        <Nav />
        <div className={styles.container}>{children}</div>
      </motion.main>
    </AnimatePresence>
  );
};
