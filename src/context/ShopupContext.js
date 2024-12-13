import React from "react";
import { createContext, useState } from "react";

export const ShopupContext = createContext({});

export const ShopupProvider = ({ children }) => {
  const [showFilter, setShowFilter] = useState(false);
  const [products, setProducts] = useState([]);

  return (
    <ShopupContext.Provider
      value={{
        showFilter,
        setShowFilter,
        products,
        setProducts,
      }}
    >
      {children}
    </ShopupContext.Provider>
  );
};
