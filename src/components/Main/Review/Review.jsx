import React from 'react';

import ReviewSlyder from '../ReviewSlyder/ReviewSlyder';

import styles from './Review.module.scss';

function Review() {
  return (
    <section className={styles.container}>
      <h3 className={styles.title}>Нам </h3>
      <div className={styles.slyder_block}>
        <ReviewSlyder />
      </div>
    </section>
  )
}

export default Review
