import React, { useEffect, useState } from "react";

import { reviewData } from "../../utils/dataCard";

import styles from "./ReviewSlyder.module.scss";
import star from "../../../images/reviews/star.svg";
import Button from "../Button/Button";

function ReviewSlyder() {
  const [review, setReviev] = useState(reviewData);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const lastIndex = review.length - 1;
    if (currentIndex < 0) {
      setCurrentIndex(lastIndex);
    }
    if (currentIndex > lastIndex) {
      setCurrentIndex(0);
    }
  }, [currentIndex, review]);

  useEffect(() => {
    let slyder = setInterval(
      () => setCurrentIndex((prevState) => prevState + 1),
      50000
    );
    return () => {
      clearInterval(slyder);
    };
  }, [currentIndex]);

  const handleStarr = (rating) => {
    let arr = [];
    for (let i = 0; i < rating; i++) {
      arr.push(<img src={star} alt="рейтинг" />);
    }
    return arr;
  };

  return (
    <section className={styles.slyder}>
      {review.map((data, personIndex) => {
        const { id, date, name, rating, text, userImage, kitchenImage } = data;
        let state = styles.nextSlyde;
        if (personIndex === currentIndex) {
          state = styles.activeSlyde;
        }
        if (
          personIndex === currentIndex - 1 ||
          (currentIndex === 0 && personIndex === review.length - 1)
        ) {
          state = styles.lastSlyde;
        }
        return (
          <article className={state} key={id}>
            <div className={styles.info_block}>
              <span className={styles.date}>{date}</span>
              <h4 className={styles.name}>{name}</h4>
              <div className={styles.rating}>{handleStarr(rating)}</div>
              <p className={styles.text}>{text}</p>
              <Button width="286px" text="Получить дизайн проект" margin="auto 0"/>
            </div>
            <div className={styles.image_block}>
              <img className={styles.img} src={userImage} alt="Фото пользователя" />
              <img className={styles.img} src={kitchenImage} alt="Фото кухни пользователя" />
            </div>
          </article>
        );
      })}
      <button
        onClick={() => setCurrentIndex((prevState) => prevState - 1)}
        className={styles.arrow}
        type="button"
      ></button>
      <button
        onClick={() => setCurrentIndex((prevState) => prevState + 1)}
        className={styles.arrow}
        type="button"
      ></button>
    </section>
  );
}

export default ReviewSlyder;
