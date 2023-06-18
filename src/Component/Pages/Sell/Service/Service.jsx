import React from 'react';
import ServiceCard from './ServiceCArd/ServiceCard';

const Service = () => {
  return (
    <div className=" container mx-auto flex justify-center my-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        <ServiceCard
          start={true}
          title={"Pick the right agent for you"}
          btnText={"get started"}
          subtitle={
            "Answer a few questions and get a list of top agents in your area. Compare their costs and services, and choose the right agent for you."
          }
          img={
            "https://static.rdc.moveaws.com/images/owners-sellers-ui/img-agent-final.svg"
          }
        ></ServiceCard>
        <ServiceCard
          title={"Get offers for your home"}
          seller={true}
          subtitle={
            "Get offers for your home Visit Seller’s Marketplace to find out how you can sell without listing or stay in your home while you finance the purchase of your next one"
          }
          img={
            "https://static.rdc.moveaws.com/images/owners-sellers-ui/img-instant-offers-final.svg"
          }
          btnText={"visit seller Marketplace"}
        ></ServiceCard>
        <ServiceCard
          search={true}
          title={"Track your home value"}
          subtitle={
            "See your RealEstimate℠ valuation information over time compared to homes in your area."
          }
          img={
            "https://static.rdc.moveaws.com/images/owners-sellers-ui/img-myhome-final.svg"
          }
        ></ServiceCard>
      </div>
    </div>
  );
};

export default Service;