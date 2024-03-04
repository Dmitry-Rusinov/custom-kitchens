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
import Review from './Review/Review';
import QuestionBlock from './QuestionBlock/QuestionBlock';

import bannerImg from '../../images/banner-image.png'
import CallbackBlock from './CallbackBlock/CallbackBlock';
import MapComponent from './MapComponent/MapComponent';


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
      <Review />
      <Banner wrapper={bannerImg} component={<Stock/>}/>
      <QuestionBlock />
      <CallbackBlock />
      <MapComponent />
    </main>
  )
}

export default Main
