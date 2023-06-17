import React from 'react';
import { BsSuitHeart } from "react-icons/bs";
const Card = ({image}) => {
  return (
    <>
      <div className="card active:border rounded-lg w-[300px] p-3 border shadow-md mt-5 relative">
        <img
          className="w-full"
          src={`${
            image
              ? image
              : "https://ap.rdcpix.com/3f6c073f178d8aaeba47b8fa9316e2a3l-m3877119961od-w480_h360_x2.webp"
          } `}
        />
        <div className="status bg-blue-600 text-white  rounded-sm px-2   w-fit absolute top-7 left-6 font-serif">
          <h1 className=" uppercase">New 7-Hours ago</h1>
        </div>

        <div className="heart absolute  right-7   top-[44%] rounded-full ">
          <BsSuitHeart className="w-10 h-10 text-white cursor-pointer hover:text-red-500 transition-colors duration-300 overflow-hidden"></BsSuitHeart>
        </div>
        <div className="flex gap-2  items-center  mt-2">
          <div className="icon w-3 h-3 rounded-sm  bg-[#36B396]"></div>
          <div className="title">Single-Family Home</div>
        </div>

        <h1 className="font-bold mt-3">Price:$278,474</h1>
        <div className="overview flex gap-4 ">
          <h1>
            {" "}
            <span className="font-bold">2</span> bed{" "}
          </h1>
          <h1>
            {" "}
            <span className="font-bold">1</span>bath{" "}
          </h1>
          <h1>
            {" "}
            <span className="font-bold">474</span> sqft{" "}
          </h1>
          <h1>
            {" "}
            <span className="font-bold">855</span> sqft lot{" "}
          </h1>
        </div>
        <p>
          {" "}
          <span className="font-bold">49</span> w Lincolin St
        </p>
        <p className="mt-2"> Columbus,OH 44545</p>
      </div>
    </>
  );
};

export default Card;