import React from "react";
import Banner from "../../Component/Banner/Banner";
import HowItWorks from "../../Component/HowItWorks/HowItWorks";
import Services from "../Services/Services";
import Brands from "../../Component/Brands/Brands";
import OurCommitment from "../../Component/OurCommitment/OurCommitment";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <HowItWorks></HowItWorks>
      <Services></Services>
      <Brands></Brands>
      <OurCommitment></OurCommitment>
    </div>
  );
};

export default Home;
