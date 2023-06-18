import React from 'react';
import Banner from '../../SharedComponent/Banner/Banner';
import NewestListing from './NewestListing/NewestListing';
import PetFriendlyRentals from './Pet-friendlyRentals/Pet-friendlyRentals';
import StudioApartments from './Studioapartments/StudioApartments';
import RentalsWithPools from './RentalsWithPools/RentalsWithPools';
import Hero from './Herro/Hero';
import CardMedia from '../Buy/CardMedia/CardMedia';

const Rent = () => {
  return (
    <>
      {/* Banner */}
      <Banner
        image={
          "https://static.rdc.moveaws.com/images/hero/default/landing/2022-2/webp/hp-hero-rent-desktop-xl.webp"
        }
        title={"Discover your perfect rental®"}
        subtitle={"Search nearby apartments, condos, and homes for rent"}
      ></Banner>

      {/* Newest listing category */}
      <NewestListing></NewestListing>

      <h1 className='container mx-auto text-3xl font-bold font-serif'>Explore Corpus Christi, TX</h1>

      {/* pet-friendly home */}
      
      <PetFriendlyRentals></PetFriendlyRentals>
      

      {/* studeio apartments */}
      <StudioApartments></StudioApartments>

      {/* Renals With Pools */}
      <RentalsWithPools></RentalsWithPools>
      
      {/* Hero section */}
      <Hero></Hero>

      {/* Card media */}
      <CardMedia></CardMedia>

    </>
  );
};

export default Rent;