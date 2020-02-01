import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
//Context
import CartContext from "../contexts/CartContext";
//Hooks
import { useDarkMode } from "../hooks/useDarkMode";

const Navigation = () => {
  const { cart } = useContext(CartContext);
  const [darkMode, setDarkMode] = useDarkMode();

  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <div className="navigation">
      <NavLink to="/">Products</NavLink>
      <NavLink to="/cart">
        Cart <span>{cart.length}</span>
      </NavLink>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? "toggle toggled" : "toggle"}
        />
      </div>
    </div>
  );
};

export default Navigation;
