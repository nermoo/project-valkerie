import React,{ useState } from 'react'
import AppLayout from '../../layout/appLayout';
import ImgCarousel from './../../components/carousel/carousel';

import styles from './homepage.module.less'

const HomePage: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <AppLayout>
      <ImgCarousel/>
    </AppLayout>
  )
}

export default HomePage;