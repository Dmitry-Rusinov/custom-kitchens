import React from "react";
import styles from "./IdealKitchen.module.scss";

import Button from "../Button/Button";

import img1 from "../../../images/idealKitchen/img-1.png";
import img2 from "../../../images/idealKitchen/img-2.png";
import img3 from "../../../images/idealKitchen/img-3.png";
import img4 from "../../../images/idealKitchen/img-4.png";
import img5 from "../../../images/idealKitchen/img-5.png";

function IdealKitchen() {
  return (
    <div className={styles.wrapper}>
      <section>
        <h3 className={styles.title}>5 шагов к Вашей </h3>
        <div className={styles.grid}>
          <div className={styles.card_block}>
            <img src={img1} alt="Заявка" />
            <h3 className={styles.subtitle}>
              <span>1</span>Заявка
            </h3>
            <p className={styles.text}>
              <font color='red'>Вы оставляете заявку</font> или звоните нам <br /> <font color='red'>+7 (989) 277-94-30</font> Наш
              специалист подробно расскажет Вам об особенностях наших кухонь,
              вариантах оплаты и ее установки.
            </p>
          </div>
          <div className={styles.card_block}>
            <img src={img2} alt="Консультация дизайнера " />
            <h3 className={styles.subtitle}>
              <span>2</span>Консультация дизайнера 
            </h3>
            <p className={styles.text}>
            Наши дизайнеры с 9:00 до 21: 00 помогут Вам подобрать идеальную кухню, проведут замер, сделают проект и рассчитают стоимость.									
            </p>
          </div>
          <div className={styles.card_block}>
            <img src={img3} alt="Заключение договора" />
            <h3 className={styles.subtitle}>
              <span>3</span>Заключение договора
            </h3>
            <p className={styles.text}>
            Подписываем договор, выдаем чек, оформляем рассрочку, согласовываем удобное для Вас время доставки и сборки.
            </p>
          </div>
          <div className={styles.card_block}>
            <img src={img4} alt="Доставка и сборка кухни" />
            <h3 className={styles.subtitle}>
              <span>4</span>Доставка и сборка кухни
            </h3>
            <p className={styles.text}>
            Привезем Вашу кухню, соберем и установим. Время работ зависит от выбранного Вами материала и перечня дополнительных работ. По окончанию сборки делаем уборку, выносим мусор.
            </p>
          </div>
          <div className={styles.card_block}>
            <img src={img5} alt="Поздравляем! Ваша кухня готова!" />
            <h3 className={styles.subtitle}>
              <span>5</span>Поздравляем! <br />Ваша кухня готова!
            </h3>
            <p className={styles.text}>
            Теперь вы можете наслаждаться временем проведенным с семьей <br />на Вашей новой кухне.
            </p>
          </div>
        </div>
        <div className={styles.button_block}>
        <Button width="286px" text="Рассчитать стоимость" margin="0"/>
        <Button type="white" width="286px" text="Получить весь каталог" margin="0"/>
      </div>
      </section>
    </div>
  );
}

export default IdealKitchen;
