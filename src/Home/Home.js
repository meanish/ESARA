import React from 'react';
import FeatureProduct from "./FeatureProduct";
import Slider from "./HomeSlider";
import About from "../About/About"

const Home = () => {
    return (
        <>
            <Slider />
            <FeatureProduct />
            <About />
        </>
    )
}

export default Home