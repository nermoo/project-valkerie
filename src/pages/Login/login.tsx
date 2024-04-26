import React,{ useState } from 'react'
import styles from './login.module.less'

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <div className={styles.counterCrd}>
    <button onClick={() => setCount((count) => count + 1)}>
      counteeeee {count}
      this is homepage
    </button>
  </div>
  )
}

export default Counter;