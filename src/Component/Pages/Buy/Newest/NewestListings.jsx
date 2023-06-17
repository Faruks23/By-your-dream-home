import React from 'react';
import Card from '../LowestHome/Card/Card';
import CardHeader from '../LowestHome/Card-Header/CardHeader';

const NewestListings = () => {
  return (
    <div className="container mx-auto mt-[60px]">
      <CardHeader
        title={" Homes around $284,700"}
        subtile={"View all in Columbus, OH"}
      ></CardHeader>

      <div className=" grid grid-cols-2 md:grid-cols-4 overflow-x-scroll md:overflow-x-hidden">
        {/* card */}
        <Card
          image={
            "https://ap.rdcpix.com/3049710d1b137709e54d225b6f762af4l-m324196902od-w480_h360.webp"
          }
        ></Card>
        <Card
          image={
            "https://ap.rdcpix.com/3049710d1b137709e54d225b6f762af4l-m324196902od-w480_h360.webp"
          }
        ></Card>
        <Card
          image={
            "https://ap.rdcpix.com/3049710d1b137709e54d225b6f762af4l-m324196902od-w480_h360.webp"
          }
        ></Card>
        <Card
          image={
            "https://ap.rdcpix.com/3049710d1b137709e54d225b6f762af4l-m324196902od-w480_h360.webp"
          }
        ></Card>
        <Card
          image={
            "https://ap.rdcpix.com/3049710d1b137709e54d225b6f762af4l-m324196902od-w480_h360.webp"
          }
        ></Card>
       
      </div>
    </div>
  );
};

export default NewestListings;