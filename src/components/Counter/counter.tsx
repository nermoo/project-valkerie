import React,{ useState } from 'react'
import styles from './counter.module.less'

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className={styles.counterCrd}>
    <button onClick={() => setCount((count) => count + 1)}>
      count {count}
    </button>
  </div>
  )
}

export default Counter;