import React from "react";
import { RecoilRoot } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";
import { CartProvider } from "./context/CartContext";

const queryClient = new QueryClient();

export function AppProvider({ children }) {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <CartProvider>{children}</CartProvider>
      </QueryClientProvider>
    </RecoilRoot>
  );
}
