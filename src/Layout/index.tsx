import React from 'react';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import styles from './styles.module.scss';

import Nav from '../components/Nav';

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

const Layout: React.FC = ({ children }) => {
  return (
    <AnimatePresence exitBeforeEnter>
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

export default Layout;
