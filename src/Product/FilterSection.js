import React from 'react'
import styled from "styled-components";
import { GlobalFilterContent } from "../context/FilterContext";
import { FaCheck } from "react-icons/fa";
import FormatPrice from "../Helper/FormatPrice";
import { Button } from "../Components/Styles/Home/Button.styled";

const FilterSection = () => {

  const {
    filters: { text, category, colors, maxPrice, price, minPrice },
    allProduct,
    UpdateFilterSearch,
    clearFilter,
  } = GlobalFilterContent();


  const getUniqueValue = (allProduct, field) => {

    let newVal = allProduct.map((currEle, index) => {
      return currEle[field]

    });

    if (field === "colors") {
      return (newVal = ["All", ...new Set([].concat(...newVal))])
      // newVal = newVal.flat();   //Choose unique color only

    }
    return newVal = ["All", ...new Set(newVal)];
  }

  //For Unique value of category and brand etc...
  const categoryOnlyValue = getUniqueValue(allProduct, "category") //"category" same as in ApiCall
  const companyOnlyValue = getUniqueValue(allProduct, "company") //"category" same as in ApiCall
  const colorOnlyValue = getUniqueValue(allProduct, "colors") //"category" same as in ApiCall




  return (
    <Wrapper>
      {/* //SearchBAr */}
      <div className="filter-search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            value={text}
            onChange={UpdateFilterSearch}
            placeholder="Search"
          />
        </form>

      </div>

      {/* //Category */}
      <div className="filter-category">
        <h3>Category</h3>
        <div>
          {
            categoryOnlyValue.map((currEle, index) => {

              return (
                <button
                  key={index}
                  type="button"
                  name="category"
                  value={currEle}
                  onClick={UpdateFilterSearch}
                  className={currEle === category ? "active" : ""}
                >
                  {currEle}
                </button>
              )
            })

          }
        </div>
      </div>


      {/* //CompanyFIlter */}
      <div className="filter-company">
        <h3>Company</h3>
        <div>
          <form>

            <select
              name="company"
              id="company"
              onClick={UpdateFilterSearch}
              className="filter-company-select"
            >
              {
                companyOnlyValue.map((currEle,index) => {
                  return (
                    <option value={currEle} className="company-option" key={index} name="company">{currEle}</option>
                  )
                })
              }
            </select>


          </form>
        </div>
      </div>

      {/* //ColorsFilter */}
      <div className="filter-color">
        <h3>Color</h3>
        <div className="colors">
          {
            colorOnlyValue.map((currColor, index) => {
              if (currColor === "All") {
                return (
                  <button
                    key={index}
                    type="button"
                    value={currColor}
                    name="colors"
                    className="color-all-style"
                    onClick={UpdateFilterSearch}>
                    All
                  </button>
                );
              }
              return (
                <button
                  key={index}
                  type="button"
                  className={colors === currColor ? "btnStyle active" : "btnStyle"}
                  value={currColor}
                  style={
                    {
                      backgroundColor: currColor,
                      width: 20,
                      height: 20,
                    }}
                  name="colors"
                  onClick={UpdateFilterSearch}>
                  {colors === currColor ? <FaCheck className="checkStyle" /> : null}
                </button>

              )
            })
          }
        </div>
      </div>

      {/* //PriceFIlter */}
      <div className="filter-price">
        <h3>Price</h3>
        <p><FormatPrice price={price} /></p>
        <input type="range" id="" name="price" min={minPrice} max={maxPrice} value={price} step="10000" onChange={UpdateFilterSearch} />
      </div>

      {/* Clear-Filter */}

      <div className="filter-clear">
        <Button classNmae="btn" onClick={clearFilter}>Clear Filter</Button>
      </div>
    </Wrapper>

  )
}

const Wrapper = styled.div`

 padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  h3 {
    padding: 2rem 0;
    font-size: 2rem;
    font-size: bolder;
  }
  .filter-search {
    input {
      padding: 0.6rem 1rem;
      width: 80%;
    }
  }

  .filter-category {
    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.4rem;
      button {
        border: none;
        background-color:transparent;
        font-size: 17px;
        text-transform: capitalize;
        cursor: pointer;
        &:hover {
          color: ${({ theme }) => theme.colors.btn};
        }
      }
      .active {
        font-weight:bolder;
        border-bottom: 1px solid ${({ theme }) => theme.colors.white};
        color: red;
      }
    }
  }
  .filter-company-select {
    padding: 0.3rem 1.2rem;
    font-size: 1.6rem;
    font-weight:bolder;
    color: red;
    outline:none;
    text-transform: capitalize;
  }
  .filter-color-style {
    display: flex;
    justify-content: center;
  }
  .color-all-style {
    background-color: transparent;
    text-transform: capitalize;
    border: none;
    cursor: pointer;
  }
  .btnStyle {
    width: 2rem;
    height: 2rem;
    background-color: #000;
    border-radius: 50%;
    margin-left: 1rem;
    border: none;
    outline: none;
    opacity: 0.5;
    cursor: pointer;
    &:hover {
      opacity: 1;
    }
  }
  .active {
    opacity: 1;
  }
  .checkStyle {
    font-size: 1rem;
    color: #fff;
  }
  .filter_price {
    input {
      margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
    }
  }
  .filter-shipping {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .filter-clear .btn {
    background-color: #ec7063;
    color: #000;
  }

 .colors p {
  display: flex;
  justify - content: flex - start;
  align - items: center;
}
  .btnStyle {
  width: 2rem;
  height: 2rem;
  background - color: #000;
  border - radius: 50 %;
  margin - left: 1rem;
  border: none;
  outline: none;
  opacity: 0.5;
  cursor: pointer;
    &:hover {
    opacity: 1;
  }
}
  .active {
  opacity: 1;
}
  .checkStyle {
  font - size: 1rem;
  color: #fff;
}


.filter-price {
  input[type="range"] {
    margin: 0.5rem 0 1rem 0;
      padding: 0;
      box-shadow: none;
      cursor: pointer;
}
  }



`

export default FilterSection