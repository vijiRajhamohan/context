import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "../Pages/Cart";
import Home from "../Pages/Home";
function Routing() {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Home />} exact />
        <Route path={"/home"} element={<Home />} />
        <Route path={"/cart"} element={<Cart />} />
      </Routes>
    </div>
  );
}

export default Routing;
