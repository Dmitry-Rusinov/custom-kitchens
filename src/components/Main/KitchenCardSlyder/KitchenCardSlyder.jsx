import React, { useState, useEffect } from "react";
import styles from "./KitchenCardSlyder.module.scss";
import { dataCard } from "../../utils/dataCard";
import Card from "../Card/Card";

function KitchenCardSlyder() {
  const [cards, setCards] = useState(dataCard);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const lastIndex = cards.length - 1;
    if (currentIndex < 0) {
      setCurrentIndex(lastIndex);
    }
    if (currentIndex > lastIndex) {
      setCurrentIndex(0);
    }
  }, [currentIndex, cards]);

  useEffect(() => {
    let slyder = setInterval(
      () => setCurrentIndex((prevState) => prevState + 1),
      50000
    );
    return () => {
      clearInterval(slyder);
    };
  }, [currentIndex]);

  return (
    <section className={styles.slyder}>
      <div className={styles.container}>
        <h3>
          Какие кухни
          <br />
        </h3>
        {cards.map((data, personIndex) => {
          let state = styles.nextSlyde;
          if (personIndex === currentIndex) {
            state = styles.activeSlyde;
          }
          if (
            personIndex === currentIndex - 1 ||
            (currentIndex === 0 && personIndex === cards.length - 1)
          ) {
            state = styles.lastSlyde;
          }
          return (
            <article className={state} key={data.id}>
              <div className={styles.grid_container}>
                {dataCard.map((card) => (
                  <Card key={card.id} data={card} />
                ))}
              </div>
            </article>
          );
        })}
      </div>
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

export default KitchenCardSlyder;
