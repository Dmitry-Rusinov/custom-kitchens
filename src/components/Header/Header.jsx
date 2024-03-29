import React from "react";
import styles from "./Header.module.scss";
import Navigation from "../Main/Navagation/Navigation";
import { useResize } from "../utils/useResize";

import logo from "../../images/logo.svg";

function Header() {
  const { isScreenLg } = useResize();

  return (
    <div style={{ width: "100%", background: "rgba(255, 255, 255, 0.9)" }}>
      {isScreenLg ? (
        <header className={styles.container}>
          <div className={styles.grid}>
            <div className={styles.block}>
              <img src={logo} alt="Логотип" />
              <p className={styles.header_title}>Кухни на заказ в Краснодаре</p>
            </div>
            <div className={styles.block}>
              <span className={styles.info_text}>
                Отвечаем на звонки с 9:00 до 21:00
                <br />
                без выходных
              </span>
            </div>
            <div className={styles.block}>
              <button className={styles.map_button}></button>
              <span className={styles.info_text}>
                г. Краснодар, <br />
                ул. Красных <br />
                Партизан, 483
              </span>
            </div>
            <div className={styles.block}>
              <button className={styles.calculate_button}>
                Рассчитать стоимость
              </button>
            </div>
            <div className={styles.block}>
              <span className={styles.tel}>+7 (8612) 17-93-76</span>
              <span className={styles.tel}>+7 (989) 277-94-30</span>
              <button className={styles.callback_button}>
                Вам перезвонить?
              </button>
            </div>
          </div>
          <Navigation />
        </header>
      ) : (
        <header className={styles.container}>
          <div className={styles.grid}>
            <div className={styles.block}>
              <img src={logo} alt="Логотип" />
              <p className={styles.header_title}>Кухни на заказ в Краснодаре</p>
              <span className={styles.info_text}>
                Отвечаем на звонки <br />с 9:00 до 21:00 без выходных
              </span>
              <div style={{ display: "flex", flexDirection: "row" }}>
                <button className={styles.map_button}></button>
                <span className={styles.info_text}>
                  г. Краснодар, ул. Красных <br />
                  Партизан, 483
                </span>
              </div>
            </div>
            <div className={styles.block}>
              <button className={styles.burger_button} type="button"></button>
              <span className={styles.tel}>+7 (8612) 17-93-76</span>
              <span className={styles.tel}>+7 (989) 277-94-30</span>
              <button className={styles.callback_button}>
                Вам перезвонить?
              </button>
              <button className={styles.calculate_button}>
                Рассчитать стоимость
              </button>
            </div>
          </div>
        </header>
      )}
    </div>
  );
}

export default Header;
