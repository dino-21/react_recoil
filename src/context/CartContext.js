import React, { createContext, useReducer, useContext } from "react";

const CartContext = createContext();

const cartInitialState = [
  { id: 0, imgurl: "shoes1.jpg", name: "White and Black", count: 2 },
  { id: 1, imgurl: "shoes2.jpg", name: "Red Knit", count: 1 },
  { id: 2, imgurl: "shoes3.jpg", name: "Grey Yordan", count: 1 },
];

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_COUNT":
      return state.map((item) =>
        item.id === action.payload ? { ...item, count: item.count + 1 } : item
      );
    case "DECREASE_COUNT":
      return state.map((item) =>
        item.id === action.payload && item.count > 0
          ? { ...item, count: item.count - 1 }
          : item
      );
    case "ADD_ITEM":
      const exists = state.find((item) => item.id === action.payload.id);
      return exists
        ? state.map((item) =>
            item.id === action.payload.id
              ? { ...item, count: item.count + 1 }
              : item
          )
        : [...state, action.payload];
    case "DELETE_ITEM":
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [cartState, dispatch] = useReducer(cartReducer, cartInitialState);

  return (
    <CartContext.Provider value={{ cartState, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
