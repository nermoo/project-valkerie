import React, { useState } from 'react';
// import { Carousel } from 'antd';
import { Carousel, Typography, Tag, Rate, Button, Space } from 'antd';

import styles from './carousel.module.less';

const { Paragraph } = Typography;


const ImgCarousel: React.FC = () => {

    // Dummy data for movies
  const movies = [
    {
      title: "Avengers: Endgame",
      genres: ["Action", "Superhero", "Sci-Fi"],
      rating: 4.9,
      description: "This is a brief description of Avengers: Endgame.",
      posterUrl: "https://example.com/poster1.jpg",
    },
    {
      title: "Deadpool II",
      genres: ["Action", "Comedy", "Adventure"],
      rating: 3.5,
      description: "This is a brief description of Deadpool II.",
      posterUrl: "https://example.com/poster2.jpg",
    },
    {
      title: "Inception",
      genres: ["Thriller", "Sci-Fi", "Adventure"],
      rating: 4.8,
      description: "This is a brief description of Inception.",
      posterUrl: "https://example.com/poster3.jpg",
    },
  ];

  const [currentMovie, setCurrentMovie] = useState(movies[0]);
  const [isFading, setIsFading] = useState(false);

  const onChange = (currentSlide: number) => {
    setIsFading(true);
    setTimeout(() => {
      setCurrentMovie(movies[currentSlide]);
      setIsFading(false);
    }, 100);
  };

  return (
    <div className={styles.carouselWrapper}> 
      <div className={styles.gradientOverlay}>
      <Space direction="vertical" align='start' size="middle" className={`${isFading ? styles.fadeOut : styles.movieInfo} absolute bottom-20 left-12 `}>

          {/* Movie Title */}
          <Typography className={`${styles.movieTitle} text-slate-50`}>
            {currentMovie.title}
          </Typography>

          {/* Genres */}
          <div className={styles.genres}>
            {currentMovie.genres.map((genre) => (
              <Tag className={styles.tag} key={genre}>
                {genre}
              </Tag>
            ))}
          </div>

          {/* Rating */}
          <Rate allowHalf value={currentMovie.rating} className={styles.rating} />

          {/* Movie Description */}
          <Paragraph className={`${styles.description} max-w-lg text-slate-50`} ellipsis={{ rows: 3, expandable: false }}>
             {currentMovie.description}
          </Paragraph>

          {/* Read More Button */}
          <Button onClick={()=>console.log("clicked")} type="primary" size="large" className={styles.readMoreButton}>
            Read More
          </Button>
        </Space>
        </div> 

      <Carousel className={styles.carouselbg} afterChange={onChange} autoplay={true}>
        
        {movies.map((movie, index) => (
          <div key={index} className={styles.carouselItem}>
          <img alt={movie.title} src='./back.jpg' className={styles.posterImage} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImgCarousel;
