import { useContext } from "react"
import CartContext from "../context/CartContextBase"

export const useCart = () =>  useContext(CartContext)
