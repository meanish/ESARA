import React from 'react';
import { useGlobalProduct } from "../context/ProductContext";
import Product from "./Product";
import { StyleFeatureProduct } from "../Components/Styles/Home/FeatureProducts.styled"
import Loading from "../Loading";

const FeatureProduct = () => {
    const { isLoading, featureProducts } = useGlobalProduct();

    if (isLoading) {
        return (<h1><Loading /></h1>)
    }
    return (
        <StyleFeatureProduct className="section">
            <div className="container">
                <div className="intro-data">Check Now !!!</div>
                <div className="common-heading">Our Feature Services</div>
                <div className="grid grid-three-column">
                    {featureProducts.map((curElem) => {
                        return <Product key={curElem.id} {...curElem} />;
                    })}
                </div>
            </div>
        </StyleFeatureProduct>
    )
}

export default FeatureProduct