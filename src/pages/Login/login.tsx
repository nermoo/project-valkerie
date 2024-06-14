import React,{ useState } from 'react'
import AppLayout from '../../layout/appLayout';
import styles from './login.module.less'

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <AppLayout>
      <div className={styles.counterCrd}>
        <button onClick={() => setCount((count) => count + 1)}>
          counteeeee {count}
          this is homepage
        </button>
      </div>
    </AppLayout>
  )
}

export default Counter;