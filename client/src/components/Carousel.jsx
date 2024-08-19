import { GrIndicator, GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
import { RxOpenInNewWindow } from "react-icons/rx";
import styles from "./styles/Carousel.module.css";
import DarkBtn from "./DarkBtn"
import { useEffect, useRef, useState } from "react";

function Carousel({ images, detail }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [record, setRecord] = useState([]);
  const parentRef = useRef(null);
  const intervalRef = useRef(null);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  let indFunc = function (record) {
    return () => {
      const currentIndicator = parentRef.current.childNodes[currentIndex];

      // Assign the "now" class to the current indicator
      currentIndicator.id = styles.now;

      // Update the record array
      let arrayState = [...record, currentIndicator];
      setRecord(arrayState);
      let vanish = record[record.length - 1];
      if (vanish) {
        vanish.id = "";
      }
    };
  };
  let cloIndFunc = indFunc(record);
  useEffect(() => {
    cloIndFunc();
  }, [currentIndex]);

  useEffect(() => {
    // Set up the interval
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 3000);

    // Clear the interval when the component unmounts
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div className={styles.carousel}>
      <div className={styles.image}>
        <img src={images[currentIndex]} alt="" />
      </div>
      <div className="controls">
        <div className={styles.buttons}>
          <GrPrevious className={styles.prev} onClick={prevSlide} />
          <GrNext className={styles.next} onClick={nextSlide} />
        </div>
        <div className={styles.indbtns} ref={parentRef}>
          {images.map((image, index) => (
            <div key={index} className={`${styles.ind} `} />
          ))}
        </div>
        <div className={styles.explore}>
          {/* <button>
            <strong>EXPLORE NOW</strong>
          </button> */}
          {detail&&<DarkBtn text='EXPLORE' link=''></DarkBtn>}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
