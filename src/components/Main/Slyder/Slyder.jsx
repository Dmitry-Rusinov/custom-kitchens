import React, { useEffect, useState } from "react";
import styles from "./Slyder.module.scss";
import { designerData } from "../../utils/dataCard";

function Slyder() {
  const [people, setPeople] = useState(designerData);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (currentIndex < 0) {
      setCurrentIndex(lastIndex);
    }
    if (currentIndex > lastIndex) {
      setCurrentIndex(0);
    }
  }, [currentIndex, people]);

  useEffect(() => {
    let slyder = setInterval(
      () => setCurrentIndex((prevState) => prevState + 1),
      5000
    );
    return () => {
      clearInterval(slyder);
    };
  }, [currentIndex]);

  return (
    <section className={styles.slyder}>
      {people.map((data, personIndex) => {
        const { id, image, position, employment, name } = data;
        let state = styles.nextSlyde;
        if (personIndex === currentIndex) {
          state = styles.activeSlyde;
        }
        if (
          personIndex === currentIndex - 1 ||
          (currentIndex === 0 && personIndex === people.length - 1)
        ) {
          state = styles.lastSlyde;
        }
        return (
          <article className={state} key={id}>
            <img className={styles.image} src={image} alt="фото сотрудника" />
            <div className={styles.person_info}>
              <span>
                <font color="red">{name},</font> {`${position}, работает с `}{" "}
                <font color="red">{employment}</font> года
              </span>
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

export default Slyder;
