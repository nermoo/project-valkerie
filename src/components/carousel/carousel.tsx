import React from 'react';
// import { Carousel } from 'antd';
import { Carousel, Typography, Tag, Rate, Button, Space } from 'antd';

import styles from './carousel.module.less';

const { Title, Text, Paragraph } = Typography;

const contentStyle: React.CSSProperties = {
  marginTop: 0,
  color: '#fff',
  height: '800px',
  lineHeight: '160px',
  textAlign: 'center',
  background: `url('./back.jpg')`,
  backgroundSize: 'cover',
  zIndex: 1,
};

const ImgCarousel: React.FC = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <div className={styles.carouselWrapper}> {/* Updated wrapper class */}
      <div className={styles.gradientOverlay}>
      <Space direction="vertical" align='start' size="middle" className='absolute bottom-20 left-12'>
          {/* Movie Title */}
          <Typography className={`${styles.movieTitle} text-slate-50`}>
            Movie Name
          </Typography>

          {/* Genres */}
          <div className={styles.genres}>
            <Tag color="volcano">Action</Tag>
            <Tag color="geekblue">Adventure</Tag>
            <Tag color="green">Sci-Fi</Tag>
          </div>

          {/* Rating */}
          <Rate allowHalf defaultValue={4.5} className={styles.rating} />

          {/* Movie Description */}
          <Paragraph className={`${styles.description} text-slate-50`} ellipsis={{ rows: 3, expandable: false }}>
            This is a brief description of the movie, capturing key plot points and
            engaging the viewer with an exciting summary.
          </Paragraph>

          {/* Read More Button */}
          <Button onClick={()=>console.log("clicked")} type="primary" size="large" className={styles.readMoreButton}>
            Read More
          </Button>
        </Space>
        </div> 

      <Carousel className={styles.carouselbg} afterChange={onChange} autoplay={false}>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </div>
  );
};

export default ImgCarousel;
