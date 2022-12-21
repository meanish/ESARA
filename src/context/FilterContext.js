import React, { createContext, useContext, useEffect, useReducer } from 'react'
import { useGlobalProduct } from "./ProductContext";
import reducer from "../reducer/FilterReducer";


const FilterContext = createContext();

const initialState = {
    allProduct: [],
    filterProduct: [],
    gridView: true,
    sorting: "random",
    filters: {
        text: "",
        category: "All",
        company: "All",
        colors: "All",
        maxPrice: "",
        price: "",
        minPrice: "",
        clear: "",
    },
}

const FilterContextProvider = ({ children }) => {

    const { products } = useGlobalProduct();


    const [state, dispatch] = useReducer(reducer, initialState)

    //Api call beginning
    useEffect(() => {
        dispatch({ type: "Set_ProductFilter", payload: products })
    }, [products])

    //Sorting from words lke highest lowest
    useEffect(() => {
        dispatch({ type: "SET-SORTITEMS", payload: products })
    }, [products, state.sorting])


    // //Price range highest to lowest
    // useEffect(() => {
    //     dispatch({ type: "SET-PRICEFILTER", payload: products })
    // }, [products, state.filters])



    // tO MAKE GRID LIST
    const SetGridView = () => {

        dispatch({ type: "SET-GRIDVIEW" })
    }
    // tO MAKE GRID LIST
    const SetListView = () => {

        dispatch({ type: "SET-LISTVIEW" })
    }

    const SortItems = (events) => {
        let userValue = events.target.value;
        dispatch({ type: "GET-SORTITEMS", payload: userValue })

    }

    //searchbar change on user type value of the default name={text}
    const UpdateFilterSearch = (e) => {
        const { name, value } = e.target;
        return dispatch({ type: "Update-FilterValue", payload: { name, value } })
    }


    //Filter by serachbar and choosing option triggered on Update-FilterValue
    useEffect(() => {
        dispatch({ type: "Search_Filter" })
    }, [products, state.filters])


    //To claer all ther filters are

    const clearFilter = () => {

        return dispatch({ type: "CLEAR_FILTER" });
    }


    return (
        <FilterContext.Provider value={{ ...state, SetGridView, SetListView, SortItems, UpdateFilterSearch, clearFilter }}>{children}</FilterContext.Provider>
    )
}



export const GlobalFilterContent = () => {

    return useContext(FilterContext);
}

export default FilterContextProvider