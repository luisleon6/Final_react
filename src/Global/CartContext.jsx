import React, {createContext, useReducer} from "react";
import {AddItems} from './AddItems';

export const CartContext = createContext();

export const CartContextProvider = (props) =>{

    const[cart, dispatch] = useReducer(AddItems, {shoppingCart:[], totalPrice: 0, totalQty: 0});

    return(
        <CartContext.Provider value = {{...cart, dispatch}}>
            {props.children}
        </CartContext.Provider>
    )
}