import React,{ useState } from 'react'
import Navbar from '../../components/Navbar/navbar';

import styles from './homepage.module.less'

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <>
    <Navbar/>
    <div className={styles.counterCrd}>
    <button onClick={() => setCount((count) => count + 1)}>
      count {count}
    </button>
  </div>
    </>
  )
}

export default Counter;