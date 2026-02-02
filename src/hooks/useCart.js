import { useContext } from "react";
import { CartContext } from "../context/CartContext"; // adjust path if needed

export const useCart = () => {
  return useContext(CartContext);
};
