import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import { StyleNav } from "./Components/Styles/Home/StyleNav.styled";
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu, CgClose } from "react-icons/cg";
import { GlobalAddCart } from "./context/AddCartContext";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { useGlobalProduct } from "./context/ProductContext.js";

const Nav = () => {

    const [addActive, setAddactive] = useState(false);
    const { initialItems } = GlobalAddCart();
    const { favorites } = useGlobalProduct();



    return (
        <StyleNav>
            <div className={addActive ? "navbar active" : "navbar"}>

                <ul className="navbar-lists">
                    <li><NavLink to="esara/products/all" className="navbar-link" onClick={() => setAddactive(false)}>Product</NavLink></li>
                    <li><NavLink to="esara/contact" className="navbar-link" onClick={() => setAddactive(false)}>Contact</NavLink></li>
                    <li><NavLink to="esara/cart" className="navbar-link cart-trolley-link" onClick={() => setAddactive(false)}>
                        <FiShoppingCart className="cart-trolley" />
                        {initialItems !== 0 ? (
                            <span className="cart-total-item">{initialItems}</span>) : ""
                        }
                    </NavLink></li>
                    <li><NavLink to="esara/favorite" className="navbar-link" onClick={() => setAddactive(false)}>
                        {
                            favorites.length !== 0 ? (<BsHeartFill style={{ color: "red" }} size={28} />) : (<BsHeart size={28} />)

                        }</NavLink></li>
                </ul>

                {/* for mobile version */}

                <div className="mobile-btn">
                    <CgMenu className="nav-btn open-nav" name="open-nav" size={28} onClick={() => setAddactive(true)} />
                    <CgClose className="nav-btn close-nav" name="close-nav" size={28} onClick={() => setAddactive(false)} />
                </div>

            </div>
        </StyleNav>
    )
}

export default Nav