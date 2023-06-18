import React from 'react';
import Card from '../../Buy/LowestHome/Card/Card';
import CardHeader from '../../Buy/LowestHome/Card-Header/CardHeader';

const NewestListing = () => {
  return (
    <div className="container mx-auto my-[60px]  ">
      <CardHeader
        title={"Newest Listings"}
        subtile={"See the most up-to-date listings"}
      ></CardHeader>
      <div className="grid grid-cols-1 md:grid-cols-4  ">
        <Card
          image={
            "https://ap.rdcpix.com/8b3c422564bb600f90169f41037058c9l-m2483278384od-w480_h360.webp"
          }
        ></Card>
        <Card
          image={
            "https://ap.rdcpix.com/8b3c422564bb600f90169f41037058c9l-m2483278384od-w480_h360.webp"
          }
        ></Card>
        <Card
          image={
            "https://ap.rdcpix.com/8b3c422564bb600f90169f41037058c9l-m2483278384od-w480_h360.webp"
          }
        ></Card>
        <Card
          image={
            "https://ap.rdcpix.com/8b3c422564bb600f90169f41037058c9l-m2483278384od-w480_h360.webp"
          }
        ></Card>
      </div>
    </div>
  );
};

export default NewestListing;