import React from "react";
import { Route } from "react-router-dom";
import data from "./data";

//Context
import ProductContext from "./contexts/ProductContext";
import CartContext from "./contexts/CartContext";
//Hooks
import { useLocalStorage } from "./hooks/useLocalStorage";
// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const [products] = useLocalStorage("products", data);
  const [cart, setCart] = useLocalStorage("cart", []);

  const addItem = item => {
    // add the given item to the cart
    const product = { ...item, cartId: Date.now() };
    setCart([...cart, product]);
  };

  const removeItem = itemToRemoveId => {
    // remove the given item from the cart
    setCart(cart.filter(item => itemToRemoveId !== item.cartId));
  };

  return (
    <div className="App">
      <ProductContext.Provider value={{ products, addItem }}>
        <CartContext.Provider value={{ cart, removeItem }}>
          <Navigation />
          {/* Routes */}
          <Route exact path="/" render={() => <Products />} />

          <Route path="/cart" render={() => <ShoppingCart />} />
        </CartContext.Provider>
      </ProductContext.Provider>
    </div>
  );
}

export default App;
