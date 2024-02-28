import React from 'react';
import styles from './InfoBlock.module.scss';

import infoIcon1 from '../../../images/info-icon1.svg';
import infoIcon2 from '../../../images/info-icon2.svg';
import infoIcon3 from '../../../images/info-icon3.svg';
import infoIcon4 from '../../../images/info-icon4.svg';

function InfoBlock() {
  return (
    <div className={styles.container}>
      <div className={styles.block}>
        <img src={infoIcon1} alt="Рассрочка" />
        <p>Рассрочка 0%<br/>до 12 месяцев</p>
      </div>
      <div className={styles.block}>
        <img src={infoIcon2} alt="Основание" />
        <p>Устанавливаем кухни<br/>с 2013 года</p>
      </div>
      <div className={styles.block}>
        <img src={infoIcon3} alt="Установка" />
        <p>Бесплатная<br/>установка</p>
      </div>
      <div className={styles.block}>
        <img src={infoIcon4} alt="Срок службы" />
        <p>Срок службы<br/>20 лет</p>
      </div>
    </div>
  )
}

export default InfoBlock
