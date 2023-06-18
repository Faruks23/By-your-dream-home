import React from 'react';

const Hero = () => {
  return (
    <div
      className="hero h-[500px] mt-16 "
      style={{
        backgroundImage: `url(https://na.rdcpix.com/ce04996063a819dc397f5481455f1d6cw-c3629674996srd_q80.jpg)`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="w-[50%]">
          <h1 className="mb-5 text-2xl font-bold">
            What a Renter Needs to Know About a Landlord Checking Their Credit
          </h1>

          <button className="btn  btn-outline text-white mt-10  rounded-xl">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;