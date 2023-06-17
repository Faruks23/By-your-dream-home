import React from 'react';

const CardHeader = ({title,subtile}) => {
  return (
    <>
      <h1 className="font-bold text-lg"> { title}</h1>
      <p className="text-blue-500">{ subtile}</p>
    </>
  );
};

export default CardHeader;