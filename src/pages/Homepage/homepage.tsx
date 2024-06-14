import React,{ useState } from 'react'
import AppLayout from '../../layout/appLayout';

import styles from './homepage.module.less'

const HomePage: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <AppLayout>
      <div className={styles.counterCrd}>
        <button className='text-3xl' onClick={() => setCount((count) => count + 1)}>
          count {count}
        </button>
      </div>
    </AppLayout>
  )
}

export default HomePage;