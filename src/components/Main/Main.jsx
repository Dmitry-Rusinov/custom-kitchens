import React from 'react';
import Banner from './Banner/Banner';
import InfoBlock from './InfoBlock/InfoBlock';
import KitchenCards from './KitchenCards/KitchenCards';
import KitchenModel from './KitchenModel/KitchenModel';
import KitchenDesign from './KitchenDesign/KitchenDesign';
import KitchenService from './KitchenService/KitchenService';
import AdvantageBlock from './AdvantageBlock/AdvantageBlock';
import IdealKitchen from './IdealKitchen/IdealKitchen';

function Main() {
  return (
    <main>
      <Banner />
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
