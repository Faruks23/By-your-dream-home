import React from 'react';

const Mediacard = ({image, title,overlyTitle}) => {
  return (
    <div className="card active:border rounded-lg w-[300px] p-3 border shadow-md mt-16 relative">
      <img
        className="w-full"
        src={`${
          image
            ? image
            : "https://ap.rdcpix.com/3f6c073f178d8aaeba47b8fa9316e2a3l-m3877119961od-w480_h360_x2.webp"
        } `}
      />
      <div className="status bg-blue-600 text-white  rounded-sm px-2   w-fit absolute top-7 left-6 font-serif">
        <h1 className=" uppercase">{title}</h1>
      </div>

      <p className='mt-10  capitalize'>{overlyTitle}</p>
    </div>
  );
};

export default Mediacard;