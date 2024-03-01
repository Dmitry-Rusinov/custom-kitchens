import React from "react";
import styles from "./KitchenService.module.scss";

import Button from "../Button/Button";

import lighting from "../../../images/kitchenService/connection-lighting.png";
import plumbing from "../../../images/kitchenService/connection-plumbing.png";
import connection from "../../../images/kitchenService/connection.png";

function KitchenService() {
  return (
    <div className={styles.wrapper}>
      <section className={styles.container}>
        <span>Наши </span>
        <h3 className={styles.title}> для Вашей кухни</h3>
        <div className={styles.grid}>
          <div className={styles.card_block}>
            <img src={connection} alt="Подключение техники для кухни" />
            <p className={styles.text}>Подключение техники для кухни</p>
            <Button text="Получить консультацию" width="253" margin="0 20px"/>
          </div>
          <div className={styles.card_block}>
            <img src={lighting} alt="Подключение освещения" />
            <p className={styles.text}>Подключение освещения</p>
            <Button text="Получить консультацию" width="253" margin="0 20px"/>
          </div>
          <div className={styles.card_block}>
            <img src={plumbing} alt="Подключение сантехники" />
            <p className={styles.text}>Подключение сантехники</p>
            <Button text="Получить консультацию" width="253" margin="0 20px"/>
          </div>
        </div>
      </section>
    </div>
  );
}

export default KitchenService;
