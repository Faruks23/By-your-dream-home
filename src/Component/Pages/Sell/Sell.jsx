import React from 'react';
import Banner from '../../SharedComponent/Banner/Banner';
import Service from './Service/Service';
import SellerGide from './SellerGuide/SellerGide';

const Sell = () => {
  return (
    <div>
      {/* banner section */}
      <Banner
        image={
          "https://static.rdc.moveaws.com/images/sell/sell-landing-hero/sell-hero-1440.webp"
        }
        title={"Explore different ways to sell your home"}
        subtitle={"Get your home's value and see selling options"}
      ></Banner>

      {/*  services */}
      <Service></Service>

      {/* looking for agent */}
      <div className="container mx-auto border py-5 px-5 shadow-lg my-10">
        <h1 className=" capitalize">
          {" "}
          <span className="font-bold ">Looking for a local agent?</span>
          Browse reviews and ratings in our{" "}
          <span className="text-blue-500 capitalize">
            {" "}
            Find a RealTor directory
          </span>
        </h1>
      </div>

      {/* Find out and connect with lander */}
      <div className="container mx-auto border my-20">
        <div className="card card-side bg-base-100 shadow-xl  ">
          <figure>
            <img
              src="https://static-mortgage.rdc.moveaws.com/static/images/ons/Illustration.svg"
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              Find out how much home equity you can use
            </h2>
            <p>
              If you're looking to fund a home renovation project or a down
              payment on a new place, the equity in your home could help.
              Connect with a lender to see if you qualify.
            </p>
            <div className="card-actions gap-16 mt-5">
              <button className=" px-5 py-2 bg-red-500 rounded-lg text-white ">
                Connect with lander
              </button>
              <button className="outline outline-1 outline-red-500 py-2 px-5 rounded-lg ">
                Latest Home equity rates
              </button>
            </div>
          </div>
        </div>
      </div>


      {/* seller guide */} 
       <SellerGide></SellerGide>

    </div>
  );
};

export default Sell;