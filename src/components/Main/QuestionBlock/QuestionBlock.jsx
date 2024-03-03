import React from 'react';
import styles from './QuestionBlock.module.scss';

import clockIcon from '../../../images/clockIcon.svg';
import phoneIcon from '../../../images/phoneIcon.svg';
import mapIcon from '../../../images/map-button.svg';
import YuliaImg from '../../../images/designer/designer-Yulia.png';

function QuestionBlock() {
  return (
    <section className={styles.container}>
      <h3 className={styles.title}>Остались вопросы? — <br /></h3>
      <div className={styles.block}>
        <aside className={styles.info}>
          <div className={styles.info_block}>
            <img src={clockIcon} alt="часы" /><p>Отвечаем на звонки с 9:00 до 21:00 без выходных!</p>
          </div>
          <div className={styles.info_block}>
            <img src={mapIcon} alt="карта" /><p>г. Краснодар, <br />ул. Красных <br />Партизан, 483</p>
          </div>
        </aside>
        <aside className={styles.designer}>
          <img src={YuliaImg} alt="Дизайнер Юлия" />
          <span>Юлия, </span>
        </aside>
        <aside className={styles.info}>
        <div className={styles.info_block}>
        <img src={phoneIcon} alt="телефон" /><p>+7 (989) 277-94-30</p>
        </div>
        </aside>
      </div>
    </section>
  )
}

export default QuestionBlock
