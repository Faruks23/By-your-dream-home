import React from 'react';
import Mediacard from './Mediacard/Mediacard';

const CardMedia = () => {
  return (
    <div className=" container mx-auto my-10">
      <div className="grid grid-cols-4 gap-10">
        <Mediacard
          title={"Unique home"}
          image={
            "https://na.rdcpix.com/e2bec6b543be7949ba282713e6d20982w-c2117565884rd-w300_h200_r4_q80.jpg"
          }
          overlyTitle={
            " lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolore magna aliqu"
          }
        ></Mediacard>
        <Mediacard
          title={"celebrity real estate"}
          image={
            "https://na.rdcpix.com/6a5cd0cdc5c5fa4038cb3c9c66641b07w-c3389960532rd-w300_h200_r4_q80.jpg"
          }
          overlyTitle={
            " lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolore magna aliqu"
          }
        ></Mediacard>
        <Mediacard
          title={"finance"}
          image={
            "https://na.rdcpix.com/f89ea0a5baec68f4be0ea446cafe7087w-c1805495381rd-w300_h200_r4_q80.jpg"
          }
          overlyTitle={
            " lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolore magna aliqu"
          }
        ></Mediacard>
        <Mediacard
          title={"celebrity real estate"}
          image={
            "https://na.rdcpix.com/2ca08413f3f5f97d4cdb9f3976d71698w-c2044243972rd-w300_h200_r4_q80.jpg"
          }
          overlyTitle={
            " lorem ipsum dolor sit amet, consectetur adip incididunt ut labore et dolore magna aliqu"
          }
        ></Mediacard>
      </div>
    </div>
  );
};

export default CardMedia;