import React from 'react';
import Services from "./Services";
import Trusted from "./Trusted";
import { useGlobalProduct } from "../context/ProductContext"

const About = () => {
  const val = useGlobalProduct();
  console.log(val);
  return (
    <>
      <Services />
      <Trusted />
    </>
  )
}

export default About