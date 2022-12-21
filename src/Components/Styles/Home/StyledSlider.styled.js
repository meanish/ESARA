import styled from "styled-components";


export const StyledSlider = styled.div` 

.slider-img{
height:45rem;
display:flex;
justify-content:center;
img{
height:45rem;
object-position:center;
}
}
  /* Dots */
  .slick-dotted.slick-slider {
    margin-bottom: 30px;
  }

  .slick-dots {
    bottom: 20px;
     }
  .slick-dots li {
    position: relative;
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 0 5px;
  }
  .slick-dots li button:hover:before,
  .slick-dots li button:focus:before {
    opacity: 1;
  }
  .slick-dots li button:before {
    font-family: "slick";
    font-size: 10px;
    line-height: 20px;
    content: "•";
    text-align: center;
    color: white;
    opacity: 0.5;
  }


  @media (max-width:${({ theme }) => theme.media.mobile}){
 border:10px solid red;
}
`