import React from 'react';
import ReactInputMask from 'react-input-mask';
import styles from './KitchenDesign.module.scss';

import { designerData } from '../../utils/dataCard';
import Slyder from '../Slyder/Slyder';
import Button from '../Button/Button';
import { useFormValidation } from '../../utils/useFormValidation';

import icon from '../../../images/designer/icon.svg'

function KitchenDesign() {
  const { values, isValid, handleChange } = useFormValidation();
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Не знаете какой выбрать <br/></h3>
      <div className={styles.grid}>
        <Slyder />
        <div className={styles.info_block}>
        <aside>
          <h3 className={styles.aside_title}>Обратитесь к нашим </h3>
          <p>Более 3000 клиентов благодарны <br />нашим дизайнерам за:</p>
          <span>
            <img src={icon} alt="иконка" />
            Скрупулезную и терпеливую работу <br />по созданию проекта идеальной кухни.		
          </span>
          <span>
            <img src={icon} alt="иконка" />
            Подбор материалов с экономией <br />до 60% без потери качества.			
          </span>
          <span>
            <img src={icon} alt="иконка" />
            100% соответствие дизайн-проекта <br />с реальностью.		
          </span>
        </aside>
          <p>Оставьте свой номер телефона <br />и наш дизайнер свяжется <br />с Вами в ближайшее время</p>
        <form>
        <ReactInputMask
          name="phone"
          id="phone"
          className={styles.input}
          mask="+7\-999-999-99-99"
          pattern="\+7-[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
          maskChar=" "
          value={values.phone || ""}
          placeholder="Введите номер"
          onChange={handleChange}
          required
        />
        <Button disabled={!isValid} width='100%' text='Получить консультацию' margin='0'/>
        <Button type='white' width='100%' text='Прикрепить свой проект' margin='0'/>
        </form>
        </div>
        </div>
    </div>
  )
}

export default KitchenDesign
