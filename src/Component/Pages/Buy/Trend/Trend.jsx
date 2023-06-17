import React from 'react';

const Trend = () => {
  return (
    // <div className="w-full relative">
    //   <div className="w-full  ">
    //     <img
    //       className="w-full"
    //       src="https://na.rdcpix.com/1d62521890c3dde2133858b8c80b12d3w-c2245607612srd_q80.jpg"
    //       alt=""
    //     />
    //   </div>

    //   <div className="overly absolute font-serif w-full flex justify-center bg-opacity-60  top-10">
    //     <div className=" bg-opacity-60 text-center w-[50%]">
    //       <p className="text-white font-bold">Trend</p>
    //       <h1 className="text-3xl font-bold text-white mt-10">
    //         Soaring Home Prices Are So Last Year: The 10 Cities Where Buyers Can
    //         Find the Best Deals This Summer
    //       </h1>
    //       <button className="btn btn-outline text-white mt-10">
    //         Read More
    //       </button>
    //     </div>
    //   </div>
    // </div>

    <div
      className="hero h-[500px] mt-16 "
      style={{
        backgroundImage: `url(https://na.rdcpix.com/1d62521890c3dde2133858b8c80b12d3w-c2245607612srd_q80.jpg)`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="w-[50%]">
          <h1 className="font-bold">Trend</h1>
          <h1 className="mb-5 text-2xl font-bold">
            Soaring Home Prices Are So Last Year: The 10 Cities Where Buyers Can
            Find the Best Deals This Summer
          </h1>
          
          <button className="btn  btn-outline text-white mt-10  rounded-xl">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default Trend;