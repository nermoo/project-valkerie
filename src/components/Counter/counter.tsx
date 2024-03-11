import { useState } from 'react'
import styles from './counter.module.less'

const counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className={styles.counterCrd}>
    <button onClick={() => setCount((count) => count + 1)}>
      count {count}
    </button>
  </div>
  )
}

export default counter;