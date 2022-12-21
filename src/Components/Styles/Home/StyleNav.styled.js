import styled from "styled-components";


export const StyleNav = styled.nav`
.navbar{
  padding-top:1rem;
}
 .navbar-lists {
      display: flex;
      gap: 4.8rem;
      align-items: center;

      .navbar-link {
        &:link,
        &:visited {
          display: inline-block;
          text-decoration: none;
          font-size: 1.8rem;
          font-weight: 500;
          text-transform: uppercase;
          color: ${({ theme }) => theme.colors.black};
          transition: color 0.3s linear;
        }
        &:hover,
        &:active {
          color: ${({ theme }) => theme.colors.helper};
        }
      }
    }
          
    .cart-trolley-link {
      position: relative;
      .cart-trolley {
        position: relative;
        font-size: 3.2rem;
      }
      .cart-total-item {
        width: 2.4rem;
        height: 2.4rem;
        position: absolute;
        background-color: #000;
        color: #000;
        border-radius: 50%;
        display: grid;
        place-items: center;
        top: -20%;
        left: 70%;
        background-color: ${({ theme }) => theme.colors.helper};
      }
    }

    .mobile-btn{
      display:none;
      cursor: pointer;
      border:none;
    }

    .nav-btn[name="close-nav"]{
      display:none;
    }

    .nav-btn{
      display:none;
    }

    @media (max-width: ${({ theme }) => theme.media.mobile}){


.navbar-lists{
  width:100%;
  height:100vh;
  position:absolute;
  top:0;
  left:0;
  background-color:#fff;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-direction:column;
  visibility:hidden;
  opacity:0;
  transform:translateX(100%);


}
.active .navbar-lists{
  visibility:visible;
  opacity:1;
  transform:translateX(0);
  z-index:0;
  transform-origin:right;
  transition:all 0.23s linear;
}
      .mobile-btn{
        display:block;
        z-index:999;
        border:${({ theme }) => theme.colors.black};

      }
      .nav-btn{
        display:block;
       font-size:4.2rem;
       color:${({ theme }) => theme.colors.black};
      }
    

    .active .mobile-btn {
      font-size:4.2rem;
      position:absolute;
      top:1.5rem;
      right:5%;
      color:${({ theme }) => theme.colors.black};
      z-index:999;
    }

    .active .close-nav{
      display:block; 
    }

    }
    .active .nav-btn[name="open-nav"]{
      display:none;
    }

`