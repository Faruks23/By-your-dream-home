import React from 'react';
import Banner from '../../SharedComponent/Banner/Banner';
import LowestHome from './LowestHome/LowestHome';
import NewestListings from './Newest/NewestListings';
import UppCommingHous from './UppCommingHous/UppCommingHous';
import AffordableHomes from './AffordableHomes/AffordableHomes';
import LuxuryHomes from './LuxuryHomes/LuxuryHomes';
import Trend from './Trend/Trend';
import CardMedia from './CardMedia/CardMedia';
import HomeLoan from './HomeLoan/HomeLoan';

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
      {/* uppcomming hous */}
      <UppCommingHous></UppCommingHous>
      
      {/* Affordable HOme */}
      <AffordableHomes></AffordableHomes>

      {/* Luxury Home */}
      <LuxuryHomes></LuxuryHomes>
      {/* Trend */}
      <Trend></Trend>

      <CardMedia></CardMedia>
      {/* Home loan section */}

      <HomeLoan></HomeLoan>
    </div>
  );
};

export default Buy;