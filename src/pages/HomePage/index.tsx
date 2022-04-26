import React, { useState, useEffect, useContext } from 'react';
import { motion, Variants } from 'framer-motion';
import Layout from '../../Layout';

import styles from './styles.module.scss';
import Modal from '../../components/Modal';
import { AppContext } from '../../contexts/AppProvider';

const totalOfNumbers = 60;
const selectedNumbersLength = 6;

const buttonAnimation: Variants = {
  animate: {
    x: [-3, 3, -3, 3, 0, 0, 0, 0],
    transition: {
      repeat: Infinity,
      repeatType: 'reverse',
      duration: 2,
    },
  },
};

const HomePage: React.FC = () => {
  const { setModalActived } = useContext(AppContext);
  const [resultNumbers, setResultNumbers] = useState<number[]>([]);
  const [numbers, setNumbers] = useState<number[]>([]);
  const [selectedNumbers, setSelectedNumbers] = useState<number[]>([]);
  const [modalText, setModalText] = useState<string>('');

  useEffect(() => {
    const generateCardNumbers: number[] = [];

    for (let i = 1; i <= totalOfNumbers; i++) {
      generateCardNumbers.push(i);
    }
    setNumbers(generateCardNumbers);
  }, []);

  const handleSelectNumber = (number: number): void => {
    const newSelectedNumbers: number[] = [...selectedNumbers];
    const foundIndex: number = selectedNumbers.indexOf(number);

    if (foundIndex === -1) {
      if (selectedNumbers.length < selectedNumbersLength) {
        newSelectedNumbers.push(number);
      }
    } else {
      newSelectedNumbers.splice(foundIndex, 1);
    }

    setSelectedNumbers(newSelectedNumbers.sort((a, b) => a - b));
  };

  const drawNumbers = (): number[] => {
    let numbers: number[] = [];

    while (numbers.length < 6) {
      const number = Math.floor(Math.random() * 60 + 1);
      if (numbers.indexOf(number) === -1) numbers.push(number);
    }

    return numbers.sort((a, b) => a - b);
  };

  const handleSubmit = (): void => {
    const drawnNumbers: number[] = drawNumbers();
    setResultNumbers(drawnNumbers);

    let points: number = 0;

    if (selectedNumbers.length < selectedNumbersLength) {
      alert(`Você não selecionou os ${selectedNumbersLength} números!`);
      return;
    }

    selectedNumbers.forEach((number) => {
      if (drawnNumbers.indexOf(number) !== -1) points++;
    });

    if (points >= drawnNumbers.length)
      setModalText('Ganhouuuu!!! Tu é rabudo mesmo heim.');
    else setModalText('Que pena, tente novamente.');
    setModalActived(true);
  };

  return (
    <Layout>
      <section className={styles.container}>
        <h1>Show da Mega-Sena. Só aqui você pode ganhar muito dinheiro!</h1>

        <div className={styles.card}>
          <h2>Cartela da Sorte</h2>

          <p>Selecione {selectedNumbersLength} números.</p>

          <ul>
            {numbers.map((number) => (
              <motion.li
                key={number}
                className={`${
                  selectedNumbers.indexOf(number) !== -1 ? styles.selected : ''
                } ${
                  selectedNumbers.length < selectedNumbersLength
                    ? styles.enabled
                    : ''
                }`}
                onClick={() => handleSelectNumber(number)}
                animate={{
                  background:
                    selectedNumbers.indexOf(number) !== -1
                      ? '#ffb703'
                      : '#f5f5f5',
                  fontSize:
                    selectedNumbers.indexOf(number) !== -1 ? '1.4rem' : '1rem',
                }}
                whileHover={{
                  background:
                    selectedNumbers.indexOf(number) !== -1
                      ? '#ffb703'
                      : selectedNumbers.length < selectedNumbersLength
                      ? '#ccc'
                      : '#f5f5f5',
                }}
              >
                {number}
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.button
          className={styles.submitButton}
          onClick={handleSubmit}
          variants={buttonAnimation}
          animate='animate'
        >
          Iniciar Sorteio
        </motion.button>
      </section>

      <Modal>
        <h2>Resultado</h2>
        <div>Meus números:</div>
        <div>
          <ul className={styles.numbers}>
            {selectedNumbers.map((number, index) => (
              <li key={`number${index}`}>{number}</li>
            ))}
          </ul>
        </div>
        <div>Números sorteados:</div>
        <div>
          <ul className={styles.numbers}>
            {resultNumbers.map((number, index) => (
              <motion.li
                key={`Result${index}`}
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                  scale: [0.5, 1.5, 1],
                  background:
                    selectedNumbers.indexOf(number) !== -1
                      ? '#009e4c'
                      : '#f5f5f5',
                }}
                transition={{
                  duration: 0.3,
                  delay: 1 * index,
                }}
              >
                {number}
              </motion.li>
            ))}
          </ul>
        </div>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: resultNumbers.length,
          }}
        >
          {modalText}
        </motion.div>
        <div>
          <button
            className='btn-primary'
            onClick={() => setModalActived(false)}
          >
            Fechar
          </button>
        </div>
      </Modal>
    </Layout>
  );
};

export default HomePage;
