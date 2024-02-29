import React from 'react';
import Banner from './Banner/Banner';
import InfoBlock from './InfoBlock/InfoBlock';
import KitchenCards from './KitchenCards/KitchenCards';
import KitchenModel from './KitchenModel/KitchenModel';
import KitchenDesign from './KitchenDesign/KitchenDesign';

function Main() {
  return (
    <main>
      <Banner />
      <InfoBlock />
      <KitchenCards />
      <KitchenModel />
      <KitchenDesign />
    </main>
  )
}

export default Main
