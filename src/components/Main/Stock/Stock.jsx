import React from 'react';
import styles from './Stock.module.scss';
import ReactInputMask from 'react-input-mask';
import { useFormValidation } from '../../utils/useFormValidation';

function Stock() {
  const { errors, values, isValid, handleChange } = useFormValidation();

  return (
    <div className={styles.container}>
      <h3>Акция</h3>
      <p>Скидка 35% на Вашу кухню</p>
      <span>до 01.01.2022</span>
      <form className={styles.callback_form}>
        <ReactInputMask
          name="phone"
          id="phone"
          className={styles.input}
          mask="+7\-999-999-99-99"
          pattern="\+7-[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
          maskChar=" "
          value={values.phone || ""}
          placeholder="Введите номер телефона"
          onChange={handleChange}
          required
        />
        <button className={styles.callback_button}>Получить скидку</button>
      </form>
      
        
    </div>
  )
}

export default Stock
