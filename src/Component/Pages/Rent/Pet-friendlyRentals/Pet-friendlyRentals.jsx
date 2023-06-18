import React from 'react';
import CardHeader from '../../Buy/LowestHome/Card-Header/CardHeader';
import Card from '../../Buy/LowestHome/Card/Card';

const PetFriendlyRentals = () => {
  return (
    <>
      <div className="container mx-auto my-[60px]  ">
        <CardHeader
          title={"Pet-friendly rentals"}
          subtile={"View all Pet-friendly rentals in Corpus Christi, TX"}
        ></CardHeader>
        <div className="grid grid-cols-1 md:grid-cols-4  ">
          <Card
            image={
              "https://ar.rdcpix.com/9d790017bb466abecb60d8404943244ec-f1323218816od-w480_h360.webp"
            }
          ></Card>
          <Card
            image={
              "https://ar.rdcpix.com/9d790017bb466abecb60d8404943244ec-f1323218816od-w480_h360.webp"
            }
          ></Card>
          <Card
            image={
              "https://ar.rdcpix.com/9d790017bb466abecb60d8404943244ec-f1323218816od-w480_h360.webp"
            }
          ></Card>
          <Card
            image={
              "https://ar.rdcpix.com/9d790017bb466abecb60d8404943244ec-f1323218816od-w480_h360.webp"
            }
          ></Card>
         
        </div>
      </div>
    </>
  );
};

export default PetFriendlyRentals;