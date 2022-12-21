import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const PageNavigation = ({ title }) => {
    return (
        <Wrapper>
            <NavLink to="/esara">Home</NavLink>/{title}
        </Wrapper>
    );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: flex-start;
  padding:0.5rem 0;
  background-color: ${({theme})=>theme.colors.helper};
  align-items: center;
  font-size: 1.5rem;
  padding-left: 1.2rem;
  a {
    font-size: 1.5rem;
  }
`;

export default PageNavigation;