import React from 'react';
import styles from './styles/Card.module.css';
import LightBtn from './LightBtn';
import DarkBtn from './DarkBtn';
import { BsInfoCircleFill } from "react-icons/bs";



function Card({ data }) {
  // let text = 'Add to Cart'
  const { image, name, price, description,sale, replaceDetail, qty, removeText }=data
  // console.log(image, name, price, description);

  return (
    <div className={styles.card}>
      {sale&&<h2 className={styles.sale}>{sale}</h2>}
      <div className={styles.image}>
        <img src={image} alt={image} />
      </div>
      <div className={styles.other}>
        <div className={styles.wrapper}>

        <h2>{name}</h2>
        <h2 className={styles.price}>{price}</h2>
        </div>
        <p>{description}</p>
        <div className={styles.btns}>
          {qty&&<h2>{qty} Pieces</h2>}
          {!replaceDetail&&<LightBtn text='Details' link="/products/detail" ><BsInfoCircleFill /></LightBtn>}
          <DarkBtn text={removeText?removeText:'Add to Cart'} link="" />
        </div>
      </div>
    </div>
  );
}

export default Card;
