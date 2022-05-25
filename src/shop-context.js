import React,{ useState } from "react";

export default React.createContext(
   { products:[],
    cart: [],
  addProductToCart: product => {},
  removeProductFromCart: productId => {}}
);


