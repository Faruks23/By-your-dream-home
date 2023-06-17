import React from 'react';
import Card from './Card/Card';
import CardHeader from './Card-Header/CardHeader';

const LowestHome = () => {
  return (
    <div className="container mx-auto mt-[60px]">
      <CardHeader
        title={" Homes around $284,700"}
        subtile={"View all in Columbus, OH"}
      ></CardHeader>
    
      <div className=" grid grid-cols-2 md:grid-cols-4 overflow-x-scroll md:overflow-x-hidden">
        {/* card */}
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  );
};

export default LowestHome;