import React from 'react';
import { GlobalFilterContent } from "../context/FilterContext";
import GridView from "./GridView"
import ListView from "./ListView";

const ProductList = () => {
    const { filterProduct, gridView } = GlobalFilterContent();


    if (gridView === true) {
        return (
            <GridView products={filterProduct}/>
        )
    }

    if (gridView === false) {
        return (<ListView products={filterProduct}/>)
    }
}

export default ProductList     