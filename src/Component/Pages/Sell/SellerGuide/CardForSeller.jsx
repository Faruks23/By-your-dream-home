import React from 'react';

const CardForSeller = ( {img,title,number}) => {
  return (
    <div className="card  bg-base-100 shadow-xl border">
      <figure>
        <img
          src={img}
          alt="seller img"
        />
      </figure>
      <div className="card-body">
        <h1 className='w-10 h-10 rounded-full text-center bg-slate-300 flex justify-center items-center'>{ number}</h1>
        <h2 className="card-title">{ title}</h2>
      
       
      </div>
    </div>
  );
};

export default CardForSeller;