import styled from "styled-components";
import FilterSection from "./FilterSection";
import ProductList from "./ProductList";
import Sort from "./Sort";
import { GlobalFilterContent } from "../context/FilterContext";
import { useParams } from "react-router-dom";
import SliderData from "../Home/SliderData"

const Products = () => {
  const { allProduct } = GlobalFilterContent();
  const { id } = useParams();

  return (
    <Wrapper>
      {
        (id !== "all") ? (
          <div className="slider_image">
            {
              SliderData.map((currEle, index) => {
                const { name, img, bgcolor, id: alias } = currEle;
                if (alias === id) {
                  return (
                    <div className="slider_img" key={index} style={{ backgroundColor: `${bgcolor}` }}>
                      <img src={img} alt={name} />
                    </div>
                  )
                }
                return <></>

              })


            }
          </div>
        ) : ""
      }

      <div className="grid grid-filter-column">
        <div className="filter-section">
          <FilterSection />
        </div>

        <section className="product-view--sort">
          <div className="sort-filter">
            <Sort />
          </div>
          <div className="main-product">
            <ProductList values={allProduct} />
          </div>
        </section>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled.section`
.slider_img{
  display:flex;
  justify-content:center;
  align-items:center;
  img{
    width:30%;
    height:35vh;
  }
}
  .grid-filter-column {
    grid-template-columns: 0.3fr 1fr;
    padding:0rem 5rem 0rem 0;
  }

  .filter-section {
    display:grid;
    justify-content: center;
    background-color:#F6F8FA;
    box-shadow:3px 3px 10px rgba(102,102,104,0.6);
      }
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }
`;

export default Products                                       