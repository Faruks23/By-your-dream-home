import React from 'react';
import CardHeader from '../LowestHome/Card-Header/CardHeader';
import Card from '../LowestHome/Card/Card';

const AffordableHomes = () => {
  return (
    <div className="container mx-auto mt-[60px]">
      <CardHeader
        title={"Affordable Homes"}
        subtile={"View all in Columbus, OH"}
      ></CardHeader>

      <div className=" grid grid-cols-2 md:grid-cols-4 overflow-x-scroll md:overflow-x-hidden">
        {/* card */}
        <Card
          image={
            "https://ap.rdcpix.com/d71999a77d032398cce69748f7e26beal-m3088207047od-w480_h360.webp"
          }
        ></Card>
       
        <Card
          image={
            "https://ap.rdcpix.com/d71999a77d032398cce69748f7e26beal-m3088207047od-w480_h360.webp"
          }
        ></Card>
       
        <Card
          image={
            "https://ap.rdcpix.com/d71999a77d032398cce69748f7e26beal-m3088207047od-w480_h360.webp"
          }
        ></Card>
       
        <Card
          image={
            "https://ap.rdcpix.com/d71999a77d032398cce69748f7e26beal-m3088207047od-w480_h360.webp"
          }
        ></Card>
       
      </div>
    </div>
  );
};

export default AffordableHomes;