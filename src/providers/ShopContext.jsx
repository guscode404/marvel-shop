import { createContext } from "react";

export const ShopContext = createContext({});

export const ShopProvider = ({ children }) => {
  const formatPrice = (comic) => {
    let price = comic.prices[0].price.toString();

    if (price.indexOf(".") === -1) {
      price = price + ".00";
    } else if (price[price.indexOf(".") + 2] === undefined) {
      price = price + "0";
    }

    comic.prices[0].price = price;
  };

  return (
    <ShopContext.Provider value={{ formatPrice }}>
      {children}
    </ShopContext.Provider>
  );
};
