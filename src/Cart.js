import React from 'react';
import { NavLink } from "react-router-dom"
import { GlobalAddCart } from "./context/AddCartContext";
import { ImBin } from "react-icons/im";
import QuantityToggle from "./SingleProduct/QuantityToggle";
import FormatPrice from "./Helper/FormatPrice";
import EmptyCart from "./EmptyCart";
import { Button } from "./Components/Styles/Home/Button.styled"
import styled from "styled-components"

const Cart = () => {

  // const [amount, setAmount] = useState(1);

  const { Cart, deleteItems, clearCart, decrease, increase, totalPrice, shipping_fee } = GlobalAddCart();
  console.log(Cart)

  return (

    <Wrapper>

      {(Cart.length !== 0) ? (
        <div className="container">
          <div className="heading">Shopping Cart</div>
          <div className="cart_list">
            <div className="cart-list-head ">
              <div className="cart_heading grid grid-five-column">
                <p>Item</p>
                <p className="cart-hide">Price</p>
                <p>Quantity</p>
                <p className="cart-hide">Subtotal</p>
                <p>Remove</p>
              </div>
            </div>
            <hr />
            <div className="cart-item">
              {Cart.map((currVal) => {
                const { image, id, color, name, price, amount } = currVal;

                return (
                  <div className="cart_heading grid grid-five-column">
                    <div className="cart-image--name">
                      <div>
                        <figure>
                          <NavLink to={`/esara/singleproduct/${id}`}><img src={image} alt="" /></NavLink>
                        </figure>
                      </div>
                      <div>
                        <p className="name">{name}</p>
                        <div className="color-div">
                          <p>color:</p>
                          <div
                            className="color-style"
                            style={{ backgroundColor: color, color: color }}></div>
                        </div>
                      </div>
                    </div>
                    {/* price   */}
                    <div className="cart-hide">
                      <p>
                        <FormatPrice price={price} />
                      </p>
                    </div>

                    {/* Quantity  */}
                    <QuantityToggle
                      amount={amount}
                      decrement={() => decrease(id)}
                      increment={() => increase(id)}
                    />
                    <div className="pricesum">
                      <FormatPrice price={amount * price} />
                    </div>

                    <div className="delete-one"><ImBin onClick={() => deleteItems({ id, color })} /></div>

                  </div>
                )
              })}

              <div className="cart-two-button">
                <NavLink to="/products/all">
                  <Button> Continue Shopping </Button>
                </NavLink>
                <Button onClick={() => clearCart()}>Clear All</Button>
              </div>


            </div>
          </div>
          {/* order total_amount */}
          <div className="order-total-amount">
            <div className="order-total-subdata">
              <div>
                <p>
                  Subtotal:
                </p>
                <p><FormatPrice price={totalPrice} /></p>
              </div>
              <div>
                <p>
                  Shipping Fee:
                </p>
                <p><FormatPrice price={shipping_fee} /></p>
              </div>
              <hr />
              <div>
                <p>
                  Total:
                </p>
                <p><FormatPrice price={totalPrice + shipping_fee} /></p>
              </div>
            </div>
          </div>
        </div>
      ) : <EmptyCart />}
    </Wrapper>
  )
}

const Wrapper = styled.div`
margin-top:3rem;
.heading
{
    text-align:center;
    font-size:4rem;
    padding:2rem;
    color:${({ theme }) => theme.colors.btn};
}
 .cart_list{
  background-color:#fff;
  padding:2rem;
  .cart-list-head {
    font-size:1.5rem;
  }

.delete-one{
    color:red;
}
 }
  .grid-four-column {
    grid-template-columns: repeat(4, 1fr);
  }
  .grid-five-column {
    grid-template-columns: repeat(4, 1fr) 0.3fr;
    text-align: center;
    align-items: center;
  }
  .cart-heading {
    text-align: center;
    text-transform: uppercase;
  }
  hr {
    margin-top: 1rem;
  }
  .cart-item {
    padding: 3.2rem 0;
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
  }
  .cart-user--profile {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1.2rem;
    margin-bottom: 5.4rem;
    img {
      width: 8rem;
      height: 8rem;
      border-radius: 50%;
    }
    h2 {
      font-size: 2.4rem;
    }
  }
  .cart-user--name {
    text-transform: capitalize;
  }
  .cart-image--name {
    /* background-color: red; */
    align-items: center;
    display: grid;
    gap: 1rem;
    grid-template-columns: 0.4fr 1fr;
    text-transform: capitalize;
    text-align: left;
    .name{
      font-size:1.3rem;
      font-weight:bolder;
    }
    img {
      max-width: 5rem;
      height: 5rem;
      object-fit: contain;
      color: transparent;
    }
    .color-div {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 1rem;
      .color-style {
        width: 1.4rem;
        height: 1.4rem;
        border-radius: 50%;
      }
    }
  }
  .cart-two-button {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
    .btn-clear {
      background-color: #e74c3c;
    }
  }
  .amount-toggle {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2.4rem;
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
  .remove_icon {
    font-size: 1.6rem;
    color: #e74c3c;
    cursor: pointer;
  }
  .order-total-amount {
    width: 100%;
    margin: 4.8rem 0;
    text-transform: capitalize;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    .order-total-subdata {
      border: 0.1rem solid #f0f0f0;
      display: flex;
      flex-direction: column;
      gap: 1.8rem;
      padding: 3.2rem;
    }
    div {
      display: flex;
      gap: 3.2rem;
      justify-content: space-between;
    }
    div:last-child {
      background-color: #fafafa;
    }
    div p:last-child {
      font-weight: bold;
      color: ${({ theme }) => theme.colors.heading};
    }
  }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-five-column {
      grid-template-columns: 1.5fr 1fr 0.5fr;
    }
    .cart-hide {
      display: none;
    }
    .cart-two-button {
      margin-top: 2rem;
      display: flex;
      justify-content: space-between;
      gap: 2.2rem;
    }
    .order-total-amount {
      width: 100%;
      text-transform: capitalize;
      justify-content: flex-start;
      align-items: flex-start;
      .order-total-subdata {
        width: 100%;
        border: 0.1rem solid #f0f0f0;
        display: flex;
        flex-direction: column;
        gap: 1.8rem;
        padding: 3.2rem;
      }
    }
  }
`

export default Cart