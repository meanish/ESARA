import React, { Component } from 'react';
import SliderData from "./SliderData";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import "../../node_modules/slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { StyledSlider } from "../Components/Styles/Home/StyledSlider.styled";
import { NavLink } from "react-router-dom"

export default class HeadSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            arrows: false,
            speed: 1000,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <StyledSlider>
                <Slider {...settings}>
                    {
                        SliderData.map((val, index) => {
                            const { name, img, bgcolor, id } = val;
                            return (
                                <div className="slider" key={index}>
                                    <div className="slider-img" style={{ backgroundColor: `${bgcolor}` }}>
                                        <NavLink to={`/esara/products/${id}`} ><img src={img} alt={name} /></NavLink>
                                    </div>
                                </div>
                            )
                        })
                    }

                </Slider>
            </StyledSlider>
        );
    }
}