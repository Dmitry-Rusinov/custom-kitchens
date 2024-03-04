import React from 'react';
import styles from './Footer.module.scss';

function Footer() {
  return (
    <footer>
      <div>
        <span className={styles.text}>©  “Немецкий Стандарт” Информация на сайте не является публичной офертой. <br />Настоящий сайт не является интернет-магазином</span>
        <span className={styles.text}>©  Все права <br />защищены</span>
        <a className={styles.text} href="#">Политика конфиденциальности</a>
      </div>
    </footer>
  )
}

export default Footer
