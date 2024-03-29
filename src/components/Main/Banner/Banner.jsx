import React from "react";
import styles from "./Banner.module.scss";

import priceIcon from "../../../images/price-icon.svg";
import warrantyIcon from "../../../images/warranty-icon.svg";
import deadlineIcon from "../../../images/deadline-icon.svg";

function Banner({ component }) {
  return (
    <div className={styles.wrapper}>
      <section className={styles.container}>
        <div className={styles.promo_block}>
          <div className={styles.wrap}>
            <h1 className={styles.title}>
              Кухни на заказ <br />
            </h1>
            <div className={styles.advantage}>
              <div className={styles.advantage_block}>
                <img src={priceIcon} alt="Цена" />
                <p className={styles.promo_info}>Цена от&nbsp;</p>
              </div>
              <div className={styles.advantage_block}>
                <img src={deadlineIcon} alt="Изготовление" />
                <p className={styles.promo_info}>Изготовим от&nbsp;</p>
              </div>
              <div className={styles.advantage_block}>
                <img src={warrantyIcon} alt="Гарантия" />
                <p className={styles.promo_info}>Гарантия&nbsp;</p>
              </div>
            </div>
          </div>
          {component}
        </div>
      </section>
    </div>
  );
}

export default Banner;
