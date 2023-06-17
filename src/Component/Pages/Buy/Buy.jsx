import React from 'react';
import Banner from '../../SharedComponent/Banner/Banner';
import LowestHome from './LowestHome/LowestHome';
import NewestListings from './Newest/NewestListings';

const Buy = () => {
  return (
    <div>
      {/* banner */}

      <Banner
        title={"Discover your perfect home®"}
        subtitle={
          "With the most complete source of homes for sale & real estate near you"
        }
        image={
          "https://static.rdc.moveaws.com/images/hero/default/2021-11/webp/hp-hero-desktop-xl.webp"
        }
      ></Banner>
   
      {/* Lowest home */}
      <LowestHome></LowestHome>
      {/* newest home */}
      <NewestListings></NewestListings>

    </div>
  );
};

export default Buy;