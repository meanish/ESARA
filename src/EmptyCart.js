import React from 'react';
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { Button } from "./Components/Styles/Home/Button.styled";

const EmptyCart = () => {
  return (
    <Wrapper>
      <div className="empty-cart container">
        <h1>OOPS.. THE CART LOOKS EMPTY</h1>
        <p>
          Click <NavLink to="/esara/products/all">👉<Button>PRODUCTS</Button>👈</NavLink> to shop.
        </p>


      </div>

    </Wrapper>
  )
}

const Wrapper = styled.div`
height:90vh;
display:grid;
align-items:center;
overflow-x:hidden;
  .container{
    padding: 9rem 0;
    text-align: center;
    h1 {
      font-size: 2.5rem;
    }
    p {
      font-size:1.5rem;
      margin: 3rem 0;
  }
  }
`

export default EmptyCart