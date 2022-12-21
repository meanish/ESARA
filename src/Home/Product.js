import React from 'react';
import { NavLink } from "react-router-dom";
import FormatPrice from "../Helper/FormatPrice";
import styled from "styled-components";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { useGlobalProduct } from "../context/ProductContext";
import { useSnackbar } from "react-simple-snackbar";

const Product = ({ ...val }) => {
  const { id, name, image, price, chooseFav } = val;

  const { AddtoFavorite } = useGlobalProduct();



  // const FunctionCall = (id) => {
  //   AddtoFavorite(id, !AddFav);
  //   setaddFav(!AddFav)

  // }
  const options = {
    position: "bottom-right",
    style: {
      backgroundColor: "transparent",
      boxShadow: "none",
      color: "white",
      fontFamily: "Menlo, monospace",
      fontSize: "20px",
      textAlign: "center"
    },
  };
  const [openSnackbar] = useSnackbar(options);

  const myfunction = () => {
    AddtoFavorite(id, chooseFav);
    snackFav();     //for snackbar
  }

  const snackFav = () => {
    if (chooseFav === false) { openSnackbar(<p className="snack-add" style={{ backgroundColor: "green", padding: "12px", borderRadius: "5px" }}>An item is added to favorites.</p>, [3000]) }
    else { openSnackbar(<p className="snack-remove" style={{ backgroundColor: "red", padding: "12px", borderRadius: "5px" }}>An item is removed from favorites.</p>, [2000]) }

  }
  return (
    <Wrapper>
      <div className="card">

        <NavLink to={`/esara/singleproduct/${id}`}>

          <figure>
            <img src={image} alt={name} />

          </figure>

          <div className="card-data">
            <div className="card-data-flex">
              <h3>{name}</h3>
              <p className="card-data--price">{<FormatPrice price={price} />}</p>
            </div>
          </div>

        </NavLink>

        <div className="caption" onClick={() => myfunction()}>
          {
            (chooseFav === true) ?
              (
                <BsHeartFill size={28} style={{ color: "red", }} />
              )
              :
              (
                <BsHeart size={28} />
              )

          }


        </div>
      </div>
    </Wrapper>
  )
}


const Wrapper = styled.div`
/*Products.js*/

.card {
  overflow: hidden;
  border-radius: 10px 10px 10px 10px;
  box-shadow: 0;
  transform: scale(0.95);
  transition: box-shadow 0.5s, transform 0.5s;
  position:relative;



  .caption{
    opacity:0;
  }
    &:hover{
    transform: scale(1);
    box-shadow: 5px 20px 30px rgba(0,0,0,0.2);

    .caption{
      z-index:999999;
      background-color:transparent;
      opacity:1;
      top:20px;
      right:0;
      position:absolute;
    }
  }
    .card-data {
      padding: 0 2rem;
    }
    .card-data-flex {
      margin: 2rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    h3 {
      color: ${({ theme }) => theme.colors.text};
      text-transform: capitalize;
    }
    .card-data--price {
      color: ${({ theme }) => theme.colors.helper};
    }
    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        background-color: rgb(98 84 243);
      }
      &:hover a {
        color: #fff;
      }
      a {
        color: rgb(98 84 243);
        font-size: 1.4rem;
      }
    }
  }`
export default Product