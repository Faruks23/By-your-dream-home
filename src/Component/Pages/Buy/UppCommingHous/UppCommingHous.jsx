import React from 'react';
import CardHeader from '../LowestHome/Card-Header/CardHeader';
import Card from '../LowestHome/Card/Card';

const UppCommingHous = () => {
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
            "https://ap.rdcpix.com/30f891c5c2328f00a234e77e3f6d703fl-m1929360329od-w480_h360.webp"
          }
        ></Card>
        <Card
          image={
            "https://ap.rdcpix.com/30f891c5c2328f00a234e77e3f6d703fl-m1929360329od-w480_h360.webp"
          }
        ></Card>
        <Card
          image={
            "https://ap.rdcpix.com/30f891c5c2328f00a234e77e3f6d703fl-m1929360329od-w480_h360.webp"
          }
        ></Card>
        <Card
          image={
            "https://ap.rdcpix.com/30f891c5c2328f00a234e77e3f6d703fl-m1929360329od-w480_h360.webp"
          }
        ></Card>
       
      </div>
    </div>
  );
};

export default UppCommingHous;