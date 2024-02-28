import React from 'react';
import styles from './Card.module.scss';

import Button from '../Button/Button';

function Card({data}) {

  return (
    <div className={styles.container}>
      <img src={data.image} alt="Изображение кухни" />
      <div className={styles.info_block}>
        <span className={styles.property}>материал фасадов:&emsp;<span className={styles.value}>{`${data.material}`}</span></span>
        <span className={styles.property}>фурнитура:&emsp;<span className={styles.value}>{`${data.accessories}`}</span></span>
        <span className={styles.property}>столешница:&emsp;<span className={styles.value}>{`${data.table}`}</span></span>
      </div>
      <span className={styles.price}>Цена:&emsp;<font color="black">от</font> <span className={styles.value}>{` ${data.price}`}</span></span>
      <Button type='white' width='201' text='Получить каталог'/>
      <Button type='red' width='201' text='Рассчитать стоимость'/>
    </div>
  )
}

export default Card
