import React from 'react'
import AppLayout from '../../layout/appLayout';
import ImgCarousel from './../../components/carousel/carousel';

// import styles from './homepage.module.less'

const HomePage: React.FC = () => {

  return (
    <AppLayout>
      <ImgCarousel/>
    </AppLayout>
  )
}

export default HomePage;