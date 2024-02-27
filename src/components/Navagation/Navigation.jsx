import React, { useState } from "react";
import styles from "./Navigation.module.scss";

function Navigation() {
  const [isActive, setIsActive] = useState("");

  return (
    <div className={styles.container}>
      <a
        id="1"
        onClick={(e) => setIsActive(e.target.id)}
        className={
          isActive === "1"
            ? `${styles.link} ${styles.link_active}`
            : styles.link
        }
        href="#price"
      >
        Цены
      </a>
      <a
        id="2"
        onClick={(e) => setIsActive(e.target.id)}
        className={
          isActive === "2"
            ? `${styles.link} ${styles.link_active}`
            : styles.link
        }
        href="#stock"
      >
        Акция
      </a>
      <a
        id="3"
        onClick={(e) => setIsActive(e.target.id)}
        className={
          isActive === "3"
            ? `${styles.link} ${styles.link_active}`
            : styles.link
        }
        href="#materials"
      >
        Материалы
      </a>
      <a
        id="4"
        onClick={(e) => setIsActive(e.target.id)}
        className={
          isActive === "4"
            ? `${styles.link} ${styles.link_active}`
            : styles.link
        }
        href="#order"
      >
        Как&nbsp;заказать
      </a>
      <a
        id="5"
        onClick={(e) => setIsActive(e.target.id)}
        className={
          isActive === "5"
            ? `${styles.link} ${styles.link_active}`
            : styles.link
        }
        href="#complete"
      >
        Наши&nbsp;работы
      </a>
      <a
        id="6"
        onClick={(e) => setIsActive(e.target.id)}
        className={
          isActive === "6"
            ? `${styles.link} ${styles.link_active}`
            : styles.link
        }
        href="#reviews"
      >
        Отзывы
      </a>
      <a
        id="7"
        onClick={(e) => setIsActive(e.target.id)}
        className={
          isActive === "7"
            ? `${styles.link} ${styles.link_active}`
            : styles.link
        }
        href="#contacts"
      >
        Контакты
      </a>
    </div>
  );
}

export default Navigation;
