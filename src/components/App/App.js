import React from 'react';
import Header from '../Header/Header';
import Banner from '../Banner/Banner';
import InfoBlock from '../InfoBlock/InfoBlock';
import KitchenCards from '../KitchenCards/KitchenCards';
import KitchenModel from '../KitchenModel/KitchenModel';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Banner />
      <InfoBlock />
      <KitchenCards />
      <KitchenModel />
    </div>
  );
}

export default App;
