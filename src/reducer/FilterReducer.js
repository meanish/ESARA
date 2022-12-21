const FilterReducer = (state, action) => {

    switch (action.type) {
        case "Set_ProductFilter":

            //For The amount array

            // console.log(Pricearray)===["6000,400,400"]; //Array of all prices
            let PriceArray = action.payload.map((currEle) => currEle.price);


            let HighestPrice = Math.max(...PriceArray)


            return {
                ...state,
                allProduct: [...action.payload],
                filterProduct: [...action.payload],
                filters: { ...state.filters, maxPrice: HighestPrice, price: HighestPrice }
            }


        case "SET-GRIDVIEW":
            return {
                ...state,
                gridView: true,
            }
        case "SET-LISTVIEW":
            return {
                ...state,
                gridView: false,
            }


        case "GET-SORTITEMS":
            // let userSortValue = document.getElementById("sort").options[document.getElementById("sort").selectedIndex].value;  //Clicked value in sorting highest

            // console.log("Hello Consoled me", action.payload);
            return {
                ...state,
                // sorting: userSortValue,
                sorting: action.payload,
            }

        //Highest lowest a-z z-a
        case "SET-SORTITEMS":
            let newSortData;
            const { filterProduct, sorting } = state;
            let tempSortProducts = [...filterProduct];

            if (sorting === "random") {
                return {
                    ...state,
                }
            }

            const sortingProduct = (a, b) => {

                if (sorting === "lowest") {
                    return a.price - b.price;
                }

                if (sorting === "highest") {
                    return b.price - a.price;
                }

                if (sorting === "a-z") {
                    return a.name.localeCompare(b.name);
                }

                if (sorting === "z-a") {
                    return b.name.localeCompare(a.name);
                }
            };
            newSortData = tempSortProducts.sort(sortingProduct);

            return {
                ...state,
                filterProduct: newSortData,
            }

        //serachbar ma user ko value change vayesi state change huney
        case "Update-FilterValue":
            const { name, value } = action.payload;
            return {
                ...state,
                filters: {
                    ...state.filters,
                    [name]: value,
                }
            }

        //Searchbar change ma update Api calling
        case "Search_Filter":
            let { allProduct } = state;
            let tempProducts = [...allProduct];

            const { text, category, company, colors, price, clear } = state.filters;

            if (text) {
                tempProducts = tempProducts.filter((currEle) => {

                    return currEle.name.toLowerCase().includes(text);  //includes can be startswith,endwith 
                })
            }

            if (category !== "All") {
                tempProducts = tempProducts.filter((currEle) => {
                    // return currEle.category.toLowerCase().startsWith(category)
                    return currEle.category === category;
                })
            }
            if (company !== "All") {
                tempProducts = tempProducts.filter((currEle) => {
                    // return currEle.category.toLowerCase().startsWith(category)
                    return currEle.company === company;
                })
            }

            if (colors !== "All") {
                tempProducts = tempProducts.filter((currEle) => currEle.colors.includes(colors))
            }


            if (price === 0) {
                tempProducts = tempProducts.filter((currEle) => currEle.price === price)
            }
            else {
                tempProducts = tempProducts.filter((currEle) => currEle.price <= price)
            }

            if (clear === "notclear") {
                tempProducts = [...action.payload];
            }
            return {
                ...state,
                filterProduct: tempProducts,
            }


        case "CLEAR_FILTER":
            return {
                ...state,
                filters: {
                    text: "",
                    category: "All",
                    company: "All",
                    colors: "All",
                    maxPrice: state.filters.maxPrice,
                    price: state.filters.maxPrice,
                    minPrice: "",

                }
            }

        default:
            return state;
    }
}

export default FilterReducer