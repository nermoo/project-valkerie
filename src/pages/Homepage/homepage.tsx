import React,{ useState } from 'react'
import Navbar from '../../components/Navbar/navbar';
import Counter from '../../components/Counter/counter';

import styles from './homepage.module.less'

const HomePage: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <>
    <Navbar/>
    <Counter/>
    <div className={styles.counterCrd}>
    <button className='text-3xl' onClick={() => setCount((count) => count + 1)}>
      count {count}
    </button>
  </div>
    </>
  )
}

export default HomePage;