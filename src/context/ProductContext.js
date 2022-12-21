import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../reducer/Reducer.js";


export const AppContext = createContext();

const initialState = {

    isLoading: false,
    isErorr: false,
    products: [],
    featureProducts: [],
    isSingleLoading: false,
    SingleProduct: {},
    favorites: [],
    PwFavorites: [],

}

const Api = "https://api.pujakaitem.com/api/products";

const AppProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)
    console.log("Call to check ", state)
    useEffect(() => {
        const FetchApi = async (url) => {
            dispatch({ type: "Set-Loading" })

            try {
                const result = await axios.get(url);
                const product = await result.data;
                dispatch({ type: "ApiCall", payload: product })

            }
            catch (error) {
                dispatch({ type: "Error" })
            }


        }

        FetchApi(Api);

    }, [])

    // Singleproducts call 

    const getSingleProduct = async (url) => {

        dispatch({ type: "SetSingleProduct-Loading" })
        try {
            const result = await axios.get(url);
            const singleProduct = await result.data;
            dispatch({ type: "SingleProduct_ApiCall", payload: singleProduct })
        }
        catch (error) {
            dispatch({ type: "SingleProduct_Error" })
        }
    }

    //Add to favorite

    const AddtoFavorite = (id, chooseFav) => {

        dispatch({ type: "ADD_FAVORITE", payload: { id, chooseFav } })
    }


    // useEffect(() => {
    //     dispatch({ type: "PRODUCTFAVORITE" })
    // }, [state.products])



    // for display add/ remove afavorite
    useEffect(() => {
        dispatch({ type: "CHANGE_FAV" })
    }, [state.favorites])


    return (
        <AppContext.Provider value={{ ...state, getSingleProduct, AddtoFavorite }}>{children}</AppContext.Provider>
    )
}


export const useGlobalProduct = () => {

    return useContext(AppContext);
}
export default AppProvider;