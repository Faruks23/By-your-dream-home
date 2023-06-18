import React from 'react';
import CardForSeller from './CardForSeller';

const SellerGide = () => {
  return (
    <>
      <h1 className="text-2xl font-bold font-sans my-10 container mx-auto">Seller Guide</h1>
      <div className="container mx-auto flex justify-center border shadow-md my-10  py-10 px-2">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 ">
          <CardForSeller
            title={"Should i sell my home now?"}
            img={
              "https://static.rdc.moveaws.com/images/sell/sellers-guide-1.svg"
            }
            number={"1"}
          ></CardForSeller>
          <CardForSeller
            title={"How much is my home worth?"}
            img={
              " https://static.rdc.moveaws.com/images/sell/sellers-guide-2.svg"
            }
            number={"2"}
          ></CardForSeller>
          <CardForSeller
            title={"How should i sell my home"}
            img={
              " https://static.rdc.moveaws.com/images/sell/sellers-guide-3.svg"
            }
            number={"3"}
          ></CardForSeller>
          <CardForSeller
            title={"How to prepare your home for sale"}
            img={
              " https://static.rdc.moveaws.com/images/sell/sellers-guide-4.svg"
            }
            number={"4"}
          ></CardForSeller>
        </div>
      </div>
    </>
  );
};

export default SellerGide;