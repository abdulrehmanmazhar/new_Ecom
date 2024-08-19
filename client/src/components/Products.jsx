import React, { useState } from "react";
import { FaFilter } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import styles from "./styles/Products.module.css";
import Card from "./Card";
import DarkBtn from "./DarkBtn";
import LightBtn from "./LightBtn";
function Products() {
  const [display, setDisplay] = useState(false);
  const toggle = () => {
    setDisplay((prev) => !prev);
  };
  return (
    <><div className={styles.filter}>
    <div className={styles.icon} onClick={toggle}>
      <FaFilter />
      <h3>Filters</h3>
    </div>
      <div className={styles.container}>
        
          {display &&<div className={styles.filters}>
            <div className={styles.categories}>
              <h2>Filter by Categories</h2>
              <div className={styles.wrapper}>
                <input type="radio" name="Category 1" id="category-one" />
                <label htmlFor="category-one">Category One</label>
              </div>
              <div className={styles.wrapper}>
                <input type="radio" name="Category 1" id="category-one" />
                <label htmlFor="category-one">Category One</label>
              </div>
              <div className={styles.wrapper}>
                <input type="radio" name="Category 1" id="category-one" />
                <label htmlFor="category-one">Category One</label>
              </div>
              <div className={styles.wrapper}>
                <input type="radio" name="Category 1" id="category-one" />
                <label htmlFor="category-one">Category One</label>
              </div>
            </div>
            <div className={styles.prices}>
              <h2>Filter by Prices</h2>
              <div className={styles.wrapper}>
                <input type="radio" name="price-one" id="price-one" />
                <label htmlFor="price-one">Price One</label>
              </div>
              <div className={styles.wrapper}>
                <input type="radio" name="price-one" id="price-one" />
                <label htmlFor="price-one">Price One</label>
              </div>
              <div className={styles.wrapper}>
                <input type="radio" name="price-one" id="price-one" />
                <label htmlFor="price-one">Price One</label>
              </div>
            </div>
          </div>}
        <div className={styles.products}>
          <Card
            data={{
              name: "product",
              price: "10$",
              description: "product",
              image:"https://www.searchenginejournal.com/wp-content/uploads/2017/02/Banner-with-SEO-Expert-1024x539.jpg",
              sale: '20% off'
            }}
            ></Card>
            <Card
            data={{
              name: "product",
              price: "10$",
              description: "product",
              image:"https://www.searchenginejournal.com/wp-content/uploads/2017/02/Banner-with-SEO-Expert-1024x539.jpg",
              sale: '20% off'
            }}
            ></Card>
            <Card
            data={{
              name: "product",
              price: "10$",
              description: "product",
              image:"https://www.searchenginejournal.com/wp-content/uploads/2017/02/Banner-with-SEO-Expert-1024x539.jpg",
              sale: '20% off'
            }}
            ></Card>
            <Card
            data={{
              name: "product",
              price: "10$",
              description: "product",
              image:"https://www.searchenginejournal.com/wp-content/uploads/2017/02/Banner-with-SEO-Expert-1024x539.jpg",
              sale: '20% off'
            }}
            ></Card>
            <Card
            data={{
              name: "product",
              price: "10$",
              description: "product",
              image:"https://www.searchenginejournal.com/wp-content/uploads/2017/02/Banner-with-SEO-Expert-1024x539.jpg",
              sale: '20% off'
            }}
            ></Card>
            </div>
        </div>
      </div>
      <div className={styles.loadMore}>

      <LightBtn  text='Load More ' link=''></LightBtn>
      </div>
    </>
  );
}

export default Products;
