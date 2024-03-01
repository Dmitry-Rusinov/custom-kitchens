import React from "react";
import styles from "./AdvantageBlock.module.scss";

import img1 from "../../../images/advantageBlock/img-1.png";
import img2 from "../../../images/advantageBlock/img-2.png";
import img3 from "../../../images/advantageBlock/img-3.png";
import img4 from "../../../images/advantageBlock/img-4.png";
import img5 from "../../../images/advantageBlock/img-5.png";
import img6 from "../../../images/advantageBlock/img-6.png";
import Button from "../Button/Button";

function AdvantageBlock() {
  return (
    <section className={styles.container}>
      <h3 className={styles.title}>Почему выбирают </h3>
      <div className={styles.grid}>
        <div className={styles.card_block}>
          <img src={img1} alt="Современные фасады" />
          <h3 className={styles.subtitle}>Современные фасады</h3>
          <p className={styles.text}>
            Наши фасады на{" "}
            <font color="red">
              <b>40%</b>
            </font>{" "}
            долговечнее обычных, так как они влагоустойчивы
            <br />и не подвержены повреждениям. <br />В наличии более{" "}
            <font color="red">
              <b>250</b>
            </font>{" "}
            фактур и{" "}
            <font color="red">
              <b>2000 </b>
            </font>
            оттенков.{" "}
          </p>
        </div>
        <div className={styles.card_block}>
          <img src={img2} alt="Прочные столешницы" />
          <h3 className={styles.subtitle}>Прочные столешницы</h3>
          <p className={styles.text}>
            Наши столешницы на{" "}
            <font color="red">
              <b>25%</b>
            </font>{" "}
            прочнее <br />и в{" "}
            <font color="red">
              <b>2</b>
            </font>{" "}
            раза влагоустойчивее чем обычные. В наличии{" "}
            <font color="red">
              <b>10</b>
            </font>{" "}
            покрытий и{" "}
            <font color="red">
              <b>170</b>
            </font>{" "}
            вариантов расцветок и фактур.
          </p>
        </div>
        <div className={styles.card_block}>
          <img src={img3} alt="Долговечная и функциональная фурнитура" />
          <h3 className={styles.subtitle}>
            Долговечная и функциональная фурнитура
          </h3>
          <p className={styles.text}>
            Выдерживает более{" "}
            <font color="red">
              <b>20</b>
            </font>{" "}
            лет службы. Создает максимальный комфорт <br />и удобство
            пользования кухней.
          </p>
        </div>
        <div className={styles.card_block}>
          <img src={img4} alt="Полный комплект документов" />
          <h3 className={styles.subtitle}>Полный комплект документов</h3>
          <p className={styles.text}>
            Вы получите: договор, кассовый <br />
            чек, гарантийный талон и правила эксплуатации. Это гарантирует
            защиту Ваших прав.
          </p>
        </div>
        <div className={styles.card_block}>
          <img src={img5} alt="Опытные и вежливые сборщики" />
          <h3 className={styles.subtitle}>Опытные и вежливые сборщики</h3>
          <p className={styles.text}>
            Наши сборщики вежливы и аккуратны. Соберут, установят и вынесут
            строительный мусор. Имеют стаж <br />
            работы с кухнями не менее{" "}
            <font color="red">
              <b>6</b>
            </font>{" "}
            лет.
          </p>
        </div>
        <div className={styles.card_block}>
          <img src={img6} alt="Бесплатная доставка и сборка кухни" />
          <h3 className={styles.subtitle}>
            Бесплатная доставка и сборка кухни
          </h3>
          <p className={styles.text}>
            Мы бесплатно доставим, соберем <br />и установим Вашу кухню в любой{" "}
            <br />
            точке Краснодара.
          </p>
        </div>
      </div>
      <div className={styles.button_block}>
        <Button width="286px" text="Рассчитать стоимость" margin="0"/>
        <Button type="white" width="286px" text="Получить весь каталог" margin="0"/>
      </div>
    </section>
  );
}

export default AdvantageBlock;
