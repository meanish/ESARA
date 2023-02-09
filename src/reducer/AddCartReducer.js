    const AddCartReducer = (state, action) => {

    switch (action.type) {
        case "Add_Cart": {
            const { id, amount, color, product } = action.payload;

            // Existing one or not

            let existingProduct = state.Cart.find((currItem) => currItem.id === id + color)
            console.log("Existing", existingProduct)

            if (existingProduct) {
                let updateProduct = state.Cart.map((currEle) => {
                    if (currEle.id === id + color) {
                        let netAmount = currEle.amount + amount

                        if (netAmount >= currEle.max) {
                            netAmount = currEle.max;
                        }
                        return {
                            ...currEle,
                            amount: netAmount,
                        }


                    }
                    else {
                        return currEle;
                    }


                })
                return {
                    ...state,
                    Cart: updateProduct,    //This is helping to make a list of older and adding new items

                }
            }
            else {
                let cartProduct = {
                    id: id + color,
                    name: product.name,
                    price: product.price,
                    image: product.image[0].url,
                    max: product.stock,
                    amount,
                    color,
                }

                return {

                    ...state,
                    Cart: [...state.Cart, cartProduct],    //This is helping to make a list of older and adding new items


                }
            }
        }

        case "DELETE_ITEM": {
            const { id } = action.payload
            const remainingItems = state.Cart.filter((currVal) => {
                console.log(currVal)
                return currVal.id !== id;
            })
            console.log(remainingItems)
            return {
                ...state,
                Cart: remainingItems,
            }
        }

        case "CLEAR_CART": {

            return {
                ...state,
                Cart: [],
            }
        }


        case "DECREASE": {
            let selectedItem = state.Cart.map((currVal) => {

                if (currVal.id === action.payload) {
                    let decrementAmount = currVal.amount - 1;

                    if (decrementAmount <= 1) {
                        decrementAmount = 1
                    }
                    return { ...currVal, amount: decrementAmount }
                }
                else {
                    return currVal;
                }
            })
            return { ...state, Cart: selectedItem }
        }

        case "INCREASE": {
            let selectedItem = state.Cart.map((currVal) => {

                if (currVal.id === action.payload) {
                    let IncrementAmount = currVal.amount + 1;

                    if (IncrementAmount >= currVal.max) {
                        IncrementAmount = currVal.max;
                    }
                    return { ...currVal, amount: IncrementAmount }
                }
                else {
                    return currVal;
                }
            })
            return { ...state, Cart: selectedItem }
        }

        // CArt_number_top
        case "COUNT_CART": {

            let updateCart = state.Cart.reduce((initialValue, currVal) => {
                return initialValue = initialValue + currVal.amount;

            }, 0)
            return { ...state, initialItems: updateCart }
        }

        case "SUBTOTAL_ITEMS": {
            let updatedAmount = state.Cart.reduce((initialValue, currVal) => {


                return initialValue = initialValue + (currVal.price * currVal.amount)
            }, 0)
            return { ...state, totalPrice: updatedAmount }
        }

       

        default:

            return state;


    }
}
export default AddCartReducer;