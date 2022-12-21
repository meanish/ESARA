import React, { useState } from 'react';
import styled from "styled-components";
import { FaCheck } from "react-icons/fa";
import { GlobalAddCart } from "../context/AddCartContext";
import { NavLink } from "react-router-dom";
import { Button } from "../Components/Styles/Home/Button.styled";
import QualityToggle from "./QuantityToggle"


const AddtoCart = ({ product }) => {
  const { addCart } = GlobalAddCart();
  const { id, colors, stock } = product;

  const [color, setActiveColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const decrement = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  }

  const increment = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  }
  return (
    <>
      <Wrapper>
        <div className="colors">
          <p>
            {
              colors.map((currColor, index) => {
                return (
                  <button
                    key={index}
                    style={{ backgroundColor: `${currColor}` }}
                    className={color === currColor ? "btnStyle active" : "btnStyle"}
                    onClick={() => setActiveColor(currColor)}
                  >{color === currColor ? <FaCheck className="checkStyle" /> : null}</button>
                )
              })
            }
          </p>
        </div>

        <div className="quantityToggle">
          <QualityToggle amount={amount} decrement={decrement} increment={increment} />
        </div>

        <div className="add2cart">
          <NavLink to="/esara/cart" onClick={() => addCart({ id, product, amount, color })}><Button>Add to Cart</Button></NavLink>
        </div>
      </Wrapper>


    </>
  )
}
const Wrapper = styled.section`
  .colors p {
    display: flex;
    justify-content: flex-start;
    align-items: center;
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
  /* we can use it as a global one too  */
  .amount-toggle {
    margin-top: 3rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 1.4rem;
    button {
      border: none;
      background-color: #fff;
      cursor: pointer;
    }
    .amount-style {
      font-size: 2.4rem;
      color: ${({ theme }) => theme.colors.btn};
    }
  }
`;

export default AddtoCart