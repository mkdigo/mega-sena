import React from 'react';
// import { Link } from 'react-router-dom';
import { motion, Variants } from 'framer-motion';

import logoPng from '../../images/mega-sena-logo.png';
import styles from './styles.module.scss';

const navAnimation: Variants = {
  initial: {
    opacity: 0,
    y: '-100%',
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      y: {
        duration: 1,
      },
    },
  },
};

const Nav: React.FC = () => {
  return (
    <motion.header
      className={styles.nav}
      variants={navAnimation}
      initial='initial'
      animate='animate'
    >
      <div className={styles.container}>
        <img src={logoPng} alt='Mega Sena' />
        {/* <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/'>History</Link>
            </li>
            <li>
              <Link to='/'>About</Link>
            </li>
          </ul>
        </nav> */}
      </div>
    </motion.header>
  );
};

export default Nav;
