import React from 'react';
import styles from './KitchenModel.module.scss'

import model1 from '../../../images/kitchenModel/model-1.png';
import model2 from '../../../images/kitchenModel/model-2.png';
import model3 from '../../../images/kitchenModel/model-3.png';

import Button from '../Button/Button';

function KitchenModel() {
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Не нашли нужную модель?<br/></h3>
      <p>Мы установили более <font color="red">3000</font> кухонь на заказ!</p>
      <p>Получите подробный каталог</p>
      <div className={styles.grid}>
        <div className={styles.card_block}>
          <img src={model1} alt="Современные кухни" />
          <h3 className={styles.subtitle}>Современные кухни</h3>
          <p className={styles.text}>У нас более <font color="red"><b>650</b></font> моделей современных кухонь.</p>
        <Button text='Получить каталог' width='178'/>
        </div>
        <div className={styles.card_block}>
          <img src={model2} alt="Кухни Лофт" />
          <h3 className={styles.subtitle}>Современные кухни</h3>
          <p className={styles.text}>У нас более <font color="red"><b>470</b></font> моделей кухонь в стиле Лофт.</p>
        <Button text='Получить каталог' width='178'/>
        </div>
        <div className={styles.card_block}>
          <img src={model3} alt="Классические кухни" />
          <h3 className={styles.subtitle}>Современные кухни</h3>
          <p className={styles.text}>У нас более <font color="red"><b>730</b></font> моделей классических кухонь.</p>
        <Button text='Получить каталог' width='178'/>
        </div>
      </div>
    </div>
  )
}

export default KitchenModel
