import React from 'react';
import { useGlobalProduct } from "./context/ProductContext";
import Product from "./Home/Product";
import styled from 'styled-components'

const Favorite = () => {

    const { favorites } = useGlobalProduct();
    return (
        <Wrapper>
            {(favorites.length !== 0) ? (
                <div>
                    <div className="heading">Favorites</div>
                    <div className="grid grid-three-column container">

                        {
                            favorites.map((currEle, index) => {
                                return (
                                    <>
                                        <Product key={index} {...currEle} />
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            ) : <p className="heading">Nothing to show</p>
            }
        </Wrapper>
    )
}


const Wrapper = styled.div`
.heading
{
    text-align:center;
    font-size:4rem;
    padding:2rem;
    color:${({ theme }) => theme.colors.btn};
   
}
  img{
    height:auto;
    width:100%;
  }
`

export default Favorite  