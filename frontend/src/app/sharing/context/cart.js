import React from 'react';
import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const [ cart, setCart ] = useState([])

    const carrinho = JSON.parse(localStorage.getItem("cart"))

    useEffect(()=>{
        setCart(carrinho)
    },[])

    const addCart = (id, price) => {
        // console.log('Função no contexto: ', id)
        const cartLocalStorage = JSON.parse(localStorage.getItem('cart'))
        const copyProductsCart = cartLocalStorage ? [...cartLocalStorage] : []
        const item = copyProductsCart.find((product) => product.id === id);
        if(!item){
            copyProductsCart.push({ 
                id: id,
                price: price,
                qtd: 1, 
            });
        }else{
            item.qtd = item.qtd + 1;
        }
        localStorage.setItem('cart', JSON.stringify(copyProductsCart))
        setCart(cartLocalStorage)
    }

    const removeItem = (id, price) => {
        // console.log('Função no contexto: ', id)
        const cartLocalStorage = JSON.parse(localStorage.getItem('cart'))
        const copyProductsCart = cartLocalStorage ? [...cartLocalStorage] : []
        const item = copyProductsCart.find((product) => product.id === id);
        if(!item){
            copyProductsCart.push({ 
                id: id, 
                price: price,
                qtd: 1
            });
        }else{
            item.qtd = item.qtd -1   
        }

        if(item.qtd <= 0){
            item.splice({ item, id });
        }

        localStorage.setItem('cart', JSON.stringify(copyProductsCart))
        setCart(copyProductsCart)
    }

    const removeCart = (id) => {
        const cartLocalStorage = JSON.parse(localStorage.getItem('cart'))
        const copyProductsCart = cartLocalStorage ? [...cartLocalStorage] : cart
        const filteredCart = copyProductsCart.filter(cartItem => cartItem.id !== id)
        localStorage.setItem('cart', JSON.stringify(filteredCart))
        setCart(filteredCart)
    }


    return(
        <CartContext.Provider value={{ addCart, removeItem, removeCart, cart, setCart }}>
            {children}
        </CartContext.Provider>
    )
}
