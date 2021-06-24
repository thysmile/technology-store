import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Products from "./pages/Productpage";
import Aboutpage from "./pages/Aboutpage";
import Navbar from "./Component/Navbar";
import SingleProductPage from "./pages/SingleProduct";
import Footer from "./Component/Footer";
import CartPage from "./pages/CartPage";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route path="/product" exact>
            <Products />
          </Route>
          <Route path="/about" exact>
            <Aboutpage />
          </Route>
          <Route exact path="/product/:id" component={SingleProductPage} />
          <Route exact path="/cart">
            <CartPage />
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
