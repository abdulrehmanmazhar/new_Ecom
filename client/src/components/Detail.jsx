import React, { useEffect, useState } from 'react'
import styles from './styles/Detail.module.css'
import Carousel from './Carousel'
import DarkBtn from './DarkBtn';
import LightBtn from './LightBtn';
import Card from './Card';
import Slider from "react-slick";

function Detail() {
  const name = 'product';
  const price = '20$';
  const description = 'this is a top selling product of this niche';
  const max = '100';

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      console.log(window.innerWidth); // Log the new width
    };

    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  let num = Math.round(width / 400); 
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: num,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.carousel}>
          <Carousel className={styles.actual} images={[
            "https://www.searchenginejournal.com/wp-content/uploads/2017/02/Banner-with-SEO-Expert-1024x539.jpg",
            'https://fastly.picsum.photos/id/237/200/300.jpg?hmac=TmmQSbShHz9CdQm0NkEjx1Dyh_Y984R9LpNrpvH2D_U'
          ]}></Carousel>
        </div>
        <div className={styles.details}>
          <div className={styles.field}>
            <h2>Name: {name}</h2>
          </div>
          <div className={styles.field}>
            <h2>Price: {price}</h2>
          </div>
          <div className={styles.field}>
            <p>{description}</p>
          </div>
          <div className={styles.field}>
            <input type="number" name="quantity" id="quantity" defaultValue={1} />
            <p>{max} max. in stock</p>
          </div>
          <div className={styles.field}>
            <DarkBtn text='Add to Cart'></DarkBtn>
            <LightBtn text='Add to Wishlist'></LightBtn>
          </div>
        </div>
      </div>
      <div className={styles.similar}>
        <h1>Similar Products</h1>
        <div className={styles.swiper}>
          <Slider {...settings}>
            <div>
              <Card
                data={{
                  name: "product",
                  price: "10$",
                  description: "product",
                  image: "https://www.searchenginejournal.com/wp-content/uploads/2017/02/Banner-with-SEO-Expert-1024x539.jpg",
                  sale: '20% off'
                }}
              ></Card>
            </div>
            <div>
              <Card
                data={{
                  name: "product",
                  price: "10$",
                  description: "product",
                  image: "https://www.searchenginejournal.com/wp-content/uploads/2017/02/Banner-with-SEO-Expert-1024x539.jpg",
                  sale: '20% off'
                }}
              ></Card>
            </div>
            <div>
              <Card
                data={{
                  name: "product",
                  price: "10$",
                  description: "product",
                  image: "https://www.searchenginejournal.com/wp-content/uploads/2017/02/Banner-with-SEO-Expert-1024x539.jpg",
                  sale: '20% off'
                }}
              ></Card>
            </div>
            <div>
              <Card
                data={{
                  name: "product",
                  price: "10$",
                  description: "product",
                  image: "https://www.searchenginejournal.com/wp-content/uploads/2017/02/Banner-with-SEO-Expert-1024x539.jpg",
                  sale: '20% off'
                }}
              ></Card>
            </div>
            <div>
              <Card
                data={{
                  name: "product",
                  price: "10$",
                  description: "product",
                  image: "https://www.searchenginejournal.com/wp-content/uploads/2017/02/Banner-with-SEO-Expert-1024x539.jpg",
                  sale: '20% off'
                }}
              ></Card>
            </div>
            <div>
              <Card
                data={{
                  name: "product",
                  price: "10$",
                  description: "product",
                  image: "https://www.searchenginejournal.com/wp-content/uploads/2017/02/Banner-with-SEO-Expert-1024x539.jpg",
                  sale: '20% off'
                }}
              ></Card>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Detail;
