import React from 'react';
import Card from '../LowestHome/Card/Card';
import CardHeader from '../LowestHome/Card-Header/CardHeader';

const LuxuryHomes = () => {
  return (
    <div className="container mx-auto mt-[60px]">
      <CardHeader
        title={"Newest Listings"}
        subtile={"View all in Columbus, OH"}
      ></CardHeader>

      <div className=" grid grid-cols-2 md:grid-cols-4 overflow-x-scroll md:overflow-x-hidden">
        {/* card */}
        <Card
          image={
            "https://ap.rdcpix.com/1feed6ecd5603516a13df554320f66cbl-m3538701463od-w480_h360.webp"
          }
        ></Card>
        <Card
          image={
            "https://ap.rdcpix.com/1feed6ecd5603516a13df554320f66cbl-m3538701463od-w480_h360.webp"
          }
        ></Card>
        <Card
          image={
            "https://ap.rdcpix.com/1feed6ecd5603516a13df554320f66cbl-m3538701463od-w480_h360.webp"
          }
        ></Card>
        <Card
          image={
            "https://ap.rdcpix.com/1feed6ecd5603516a13df554320f66cbl-m3538701463od-w480_h360.webp"
          }
        ></Card>
        <Card
          image={
            "https://ap.rdcpix.com/1feed6ecd5603516a13df554320f66cbl-m3538701463od-w480_h360.webp"
          }
        ></Card>
        <Card
          image={
            "https://ap.rdcpix.com/1feed6ecd5603516a13df554320f66cbl-m3538701463od-w480_h360.webp"
          }
        ></Card>
        <Card
          image={
            "https://ap.rdcpix.com/1feed6ecd5603516a13df554320f66cbl-m3538701463od-w480_h360.webp"
          }
        ></Card>
        <Card
          image={
            "https://ap.rdcpix.com/1feed6ecd5603516a13df554320f66cbl-m3538701463od-w480_h360.webp"
          }
        ></Card>
      
       
      </div>
    </div>
  );
};

export default LuxuryHomes;