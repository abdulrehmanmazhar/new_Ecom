import React from 'react';
import styles from './styles/Footer.module.css';
import { Link } from 'react-router-dom';
import { SiVisa } from 'react-icons/si';
import { FaApplePay, FaGooglePay } from 'react-icons/fa';

function Footer() {
  let Links = [
    { text: 'Home', link: '/home' },
    { text: 'Products', link: '/products' },
    { text: 'About', link: '/about' },
    { text: 'Hot Sales', link: '/hotsales' }
  ];

  return (
    <>
      <footer>
        <div className={styles.container}>
          {Links.map((e, i) => (
            <div key={i}>
              <Link to={e.link}>{e.text}</Link>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable
              </p>
            </div>
          ))}
        </div>
        <div className="icons">
          <SiVisa className={styles.ic} />
          <FaApplePay className={styles.ic} />
          <FaGooglePay className={styles.ic} />
        </div>
      </footer>
      <div className={styles.Link}>
        Developed by <Link to='https://abdurrahmanweb.com/' target='_blank'>abdurrahman</Link> copyrights 2024
      </div>
    </>
  );
}

export default Footer;
