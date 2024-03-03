import React from 'react';
import ReactInputMask from 'react-input-mask';
import { useFormValidation } from '../../utils/useFormValidation';
import styles from './CallbackBlock.module.scss';

function CallbackBlock() {
  const { values, isValid, handleChange } = useFormValidation();
  return (
    <div className={styles.wrapper}>
      <section>
        <p>Оставьте свой номер телефон и наш дизайнер свяжется с Вами в ближайшее время!</p>
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
        <button disabled={!isValid} className={styles.callback_button}>Получить скидку</button>
      </form>
      </section>
    </div>
  )
}

export default CallbackBlock
