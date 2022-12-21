import React, { createContext, useContext, useReducer, useEffect } from 'react';
import reducer from "../reducer/AddCartReducer";

const AddCart = createContext();

const getlocalValue = () => {
    const localValue = JSON.parse(window.localStorage.getItem("EcomData"));
    if (localValue !== null) {
        return localValue;
    } else {
        return [];
    }
};


const initialState = {
    // Cart: [],
    Cart: getlocalValue(),
    initialItems: "",
    initialAmount: "",
    totalPrice: "",
    shipping_fee: 120,
    

};



const AddCartContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);


    const addCart = ({ id, product, amount, color }) => {

        dispatch({ type: "Add_Cart", payload: { id, product, amount, color } });
    }

    const deleteItems = ({ id, color }) => {
        dispatch({ type: "DELETE_ITEM", payload: { id, color } })
    }
    const clearCart = () => {
        dispatch({ type: "CLEAR_CART" })
    }

    // LOcal Storage of the Cart

    useEffect(() => {
        window.localStorage.setItem("EcomData", JSON.stringify(state.Cart));
        dispatch({ type: "COUNT_CART" })
    }, [state.Cart]);


    useEffect(() => {
        dispatch({ type: "SUBTOTAL_ITEMS" })
    }, [state.Cart]);


    useEffect(() => {
        dispatch({ type: "TOTALAMOUNT" })
    }, [state.initialItems]);


    const decrease = (id) => {
        dispatch({ type: "DECREASE", payload: id })
    }

    const increase = (id) => {
        dispatch({ type: "INCREASE", payload: id })
    }

   

    return (
        <AddCart.Provider value={{ ...state, addCart, deleteItems, clearCart, increase,  decrease }}>
            {children}
        </AddCart.Provider>
    )
}


export const GlobalAddCart = () => {

    return useContext(AddCart);
}

export default AddCartContextProvider;