import React from 'react';
import CardHeader from '../../Pages/Buy/LowestHome/Card-Header/CardHeader';
import Card from '../../Pages/Buy/LowestHome/Card/Card';

const CardContainer = ({ img, title, subtile }) => {
  return (
    <div className="container mx-auto my-[60px]  ">
      <CardHeader title={title} subtile={subtile}></CardHeader>
      <div className="grid grid-cols-1 md:grid-cols-4  ">
        <Card image={img}></Card>
        <Card image={img}></Card>
        <Card image={img}></Card>
        <Card image={img}></Card>
      </div>
    </div>
  );
};

export default CardContainer;