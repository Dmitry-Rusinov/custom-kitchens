import React from 'react';
import Banner from './Banner/Banner';
import InfoBlock from './InfoBlock/InfoBlock';
import KitchenCards from './KitchenCards/KitchenCards';
import KitchenModel from './KitchenModel/KitchenModel';
import KitchenDesign from './KitchenDesign/KitchenDesign';
import KitchenService from './KitchenService/KitchenService';
import AdvantageBlock from './AdvantageBlock/AdvantageBlock';
import IdealKitchen from './IdealKitchen/IdealKitchen';
import Stock from './Stock/Stock';

function Main() {
  return (
    <main>
      <Banner component={<Stock/>}/>
      <InfoBlock />
      <KitchenCards />
      <KitchenModel />
      <KitchenDesign />
      <KitchenService />
      <AdvantageBlock />
      <IdealKitchen />
    </main>
  )
}

export default Main
