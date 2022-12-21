import { ThemeProvider } from "styled-components";
import './App.css';
import GlobalStyles from "./Components/Styles/GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Products from "./Product/Products";
import Contact from "./Contact";
import SingleProduct from "./SingleProduct/SingleProduct";
import Cart from "./Cart";
import ErrorPage from "./ErrorPage";
import Footer from "./Footer";
import Favorite from "./Favorite"
import Header from "./Header"

const theme = {
  colors: {
    heading: "rgb(24 24 29)",
    text: "rgba(29 ,29, 29, .8)",
    white: "#fff",
    black: " #212529",
    helper: "#8490ff",
    bg: "#F6F8FA",
    footer_bg: "#0a1435",
    btn: "rgb(98 84 243)",
    border: "rgba(98, 84, 243, 0.5)",
    hr: "#ffffff",
    gradient:
      "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
    shadow:
      "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
    shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
  },
  media: {
    mobile: "768px",
    tab: "998px",
  },
};


function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/esara" element={<Home />} />
            {/* <Route path="/about" element={<About />} /> */}
            <Route path="esara/products/:id" element={<Products />} />
            <Route path="/:id/contact" element={<Contact />} />
            <Route path="/esara/singleproduct/:id" element={<SingleProduct />} />
            <Route path="/esara/cart" element={<Cart />} />
            <Route path="/:id/favorite" element={<Favorite />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>

      </>
    </ThemeProvider>
  );
}



export default App;
