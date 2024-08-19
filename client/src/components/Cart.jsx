import React from 'react'
import styles from './styles/Cart.module.css';
import Card from './Card'

import DarkBtn from './DarkBtn';
function Cart() {
  return (
    <>
    <h1 className={styles.heading}>Shopping Cart</h1>
    <div className={styles.container}>
      <div className={styles.items}>
      <Card
            data={{
              name: "product",
              price: "10$",
              description: "product",
              image:"https://www.searchenginejournal.com/wp-content/uploads/2017/02/Banner-with-SEO-Expert-1024x539.jpg",
              sale: '20% off',
              replaceDetail: 'true',
              qty:'23',
              removeText:'Remove'
            }}
            ></Card>
            <Card
            data={{
              name: "product",
              price: "10$",
              description: "product",
              image:"https://www.searchenginejournal.com/wp-content/uploads/2017/02/Banner-with-SEO-Expert-1024x539.jpg",
              sale: '20% off',
              replaceDetail: 'true',
              qty:'23'
            }}
            ></Card>
            <Card
            data={{
              name: "product",
              price: "10$",
              description: "product",
              image:"https://www.searchenginejournal.com/wp-content/uploads/2017/02/Banner-with-SEO-Expert-1024x539.jpg",
              sale: '20% off',
              replaceDetail: 'true',
              qty:'23'
            }}
            ></Card>
            <Card
            data={{
              name: "product",
              price: "10$",
              description: "product",
              image:"https://www.searchenginejournal.com/wp-content/uploads/2017/02/Banner-with-SEO-Expert-1024x539.jpg",
              sale: '20% off',
              replaceDetail: 'true',
              qty:'23'
            }}
            ></Card>
            <Card
            data={{
              name: "product",
              price: "10$",
              description: "product",
              image:"https://www.searchenginejournal.com/wp-content/uploads/2017/02/Banner-with-SEO-Expert-1024x539.jpg",
              sale: '20% off',
              replaceDetail: 'true',
              qty:'23'
            }}
            ></Card>
            <Card
            data={{
              name: "product",
              price: "10$",
              description: "product",
              image:"https://www.searchenginejournal.com/wp-content/uploads/2017/02/Banner-with-SEO-Expert-1024x539.jpg",
              sale: '20% off',
              replaceDetail: 'true',
              qty:'23'
            }}
            ></Card>
      </div>
      <div className={styles.summary}>
        <div className={styles.box}>
          <h2 className={styles.heading}>Cart Summary</h2>
          <div>Total Items : {'156'}</div>
          <div>Total Amount : {'1200$'}</div>
          <DarkBtn text={'Check Out'}></DarkBtn>
        </div>
      </div>
    </div>
    </>
  )
}

export default Cart