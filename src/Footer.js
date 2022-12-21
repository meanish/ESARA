import React from 'react';
import { NavLink } from "react-router-dom";
import { Button } from "./Components/Styles/Home/Button.styled";
import { FaDiscord, FaInstagram, FaYoutube } from "react-icons/fa";
import { StyleFooter } from "./Components/Styles/Footer.styled";


const Footer = () => {
    return (
        <>
            <StyleFooter>
                <section className="contact-short">
                    <div className="grid grid-two-column">
                        <div>
                            <h3>Ready to get started?</h3>
                            <h3>Talk to us today</h3>
                        </div>

                        <div>
                            <Button className="btn hireme-btn">
                                <NavLink to="/esara/products/all"> Get Started </NavLink>
                            </Button>
                        </div>
                    </div>
                </section>
                {/* footer section */}

                <footer>
                    <div className="container grid grid-four-column">
                        <div className="footer-about">
                            <h3>Esara.com</h3>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                        </div>
                        <div className="footer-subscribe">
                            <h3>Subscribe to get important updates</h3>
                            <form action="#">
                                <input type="email" name="email" placeholder="YOUR E-MAIL" />

                                <input type="submit" value="subscribe" />
                            </form>
                        </div>
                        <div className="footer-social">
                            <h3>Follow Us</h3>
                            <div className="footer-social--icons">
                                <div>
                                    <a
                                        href="http://discordapp.com/users/Anishh#4379"
                                        rel="noreferrer"
                                        target="_blank">
                                        <FaDiscord className="icons" />
                                    </a>

                                </div>
                                <div>
                                    <a
                                        href="https://www.instagram.com/anishghoshrestha/"
                                        rel="noreferrer"
                                        target="_blank">
                                        <FaInstagram className="icons" />
                                    </a>

                                </div>
                                <div>
                                    <a
                                        href="https://www.youtube.com"
                                        rel="noreferrer"
                                        target="_blank">
                                        <FaYoutube className="icons" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="footer-contact">
                            <h3>Call Us</h3>
                            <a href="tel:+977-9803713529" >+977-9803713529</a>
                        </div>
                    </div>

                    <div className="footer-bottom--section">
                        <hr />
                        <div className="container grid grid-two-column ">
                            <p>
                                @{new Date().getFullYear()} SASHCODE. All Rights Reserved
                            </p>
                            <div>
                                <p>PRIVACY POLICY</p>
                                <p>TERMS & CONDITIONS</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </StyleFooter>
        </>
    )
};
export default Footer;