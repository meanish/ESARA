const Reducer = (state, action) => {

    switch (action.type) {

        case "Set-Loading":
            return {
                ...state,
                isLoading: true,
            }

        case "Error":
            return {
                ...state,
                isLoading: false,
                isError: true,
            }
        case "ApiCall":

            const Products = action.payload.map((currEle) => {
                return {
                    ...currEle,
                    chooseFav: false
                }
            })
            const FeatureData = Products.filter((currEle) => {
                return currEle.featured === true;
            })

            return {
                ...state,
                isLoading: false,
                products: Products,
                featureProducts: FeatureData,

            }


        // For second SingleProducts Api

        case "SetSingleProduct-Loading":
            return {
                ...state,
                isSingleLoading: true,
            }


        case "SingleProduct_ApiCall":
            return {
                ...state,
                isSingleLoading: false,
                SingleProduct: action.payload,
            }
        case "SingleProduct_Error":
            return {
                ...state,
                isSingleLoading: false,
                SingleProduct_Error: true,
            }

        //favorites
        // case "PRODUCTFAVORITE": {
        //     if (state.products) {
        //         let ProductFav = state.products.map((currEle) => {
        //             return { ...currEle, chooseFav: false }
        //         })
        //         return {
        //             ...state,
        //             PwFavorites: ProductFav,
        //         }
        //     }
        //     else {
        //         return { ...state }
        //     }
        // }

        case "ADD_FAVORITE": {
            const { id, chooseFav } = action.payload;


            //to add the item to favorite
            if (chooseFav === false) {
                state.products.filter((currEle) => {
                    if (currEle.id === id) {
                        return {
                            ...currEle.chooseFav = true
                        };
                    }
                    else {
                        return {
                            ...currEle,
                        }
                    }
                })

                let addFav = state.products.filter((currEle) => {
                    return currEle.chooseFav === true;
                })
                return {
                    ...state,
                    favorites: addFav,
                }
            }
            else {
                state.favorites.filter((currEle) => {
                    if (currEle.id === id) {
                        return {
                            ...currEle.chooseFav = false
                        };
                    }
                    else {
                        return {
                            ...currEle,
                        }
                    }
                })
                let removeItem = state.favorites.filter((currEle) => {
                    return currEle.id !== id;
                })

                return {
                    ...state,
                    favorites: removeItem,
                }
            }
        }

        // case "TOGGLE_FAVORITE": {
        //     console.group("Calledfavorites")
        //     if (state.chooseFavorite === false)
        //         return {
        //             ...state,
        //             chooseFavorite: true,
        //         }
        //     else return {
        //         ...state,
        //         chooseFavorite: false,
        //     }
        // }



        default:
            return state;
    };
};

export default Reducer;