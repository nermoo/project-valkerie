import React from "react";
import { useParams } from "react-router-dom";
import { Card } from 'antd';

const { Meta } = Card;
// import styles from './movieDetails.module.less';

const MovieDetails: React.FC = () => {
    // const navigate = useNavigate();
    const { movieId } = useParams();
    console.log(movieId);
    
  
    return (
      <>
        hello from movie details
        <Card
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
        <Meta title="Europe Street beat" description="www.instagram.com" />
        </Card>
      </>
    )
  }
  
  export default MovieDetails;