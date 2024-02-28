import React from 'react';
import styles from './KitchenCards.module.scss';
import Card from '../Card/Card';

import { dataCard } from '../../utils/dataCard'; 

function KitchenCards() {
  return (
    <section id='materials' className={styles.wrapper}>
      <div className={styles.container}>
        <h3>Какие кухни<br/></h3>
        <div className={styles.grid_container}>
        {dataCard.map(card => <Card key={card.id} data={card} />)}
        </div>
      </div>
    </section>
  )
}

export default KitchenCards
