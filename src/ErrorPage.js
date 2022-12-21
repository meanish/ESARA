import React from 'react';
import { NavLink } from "react-router-dom";
import { Button } from "./Components/Styles/Home/Button.styled";
import styled from "styled-components";

const ErrorPage = () => {
  return (
    <>
      <StyleError>

        <div className="container">
          <div>
            <h2>Error 404, Page Not Found</h2>
            <h3>OH! You're lost.</h3>
            <p>
              The page you are looking for does not exist. How you got here is a
              mystery. But you can click the button below to go back to the
              homepage.
            </p>

            <NavLink to="/esara">
              <Button>Home</Button>
            </NavLink>
          </div>
        </div>
      </StyleError>
    </>
  )
}

const StyleError = styled.section`
height:90vh;
display:grid;
align-items:center;
overflow-x:hidden;
  .container {
    padding: 9rem 0;
    text-align: center;
    h2 {
      font-size: 3.54rem;
      padding:1rem
    }
    h3 {
      font-size: 3rem;
    }
    p {
      margin: 2rem 0;
    }
  }
`;

export default ErrorPage