import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const StoreContext = createContext()

export const StoreProvider = ({ children }) => {
    const [ products, setProducts ] = useState([])

    useEffect(()=>{
        const loadProducts = async () => {
            await axios.get(`${process.env.REACT_APP_BACKENDURL}products/list`).then((response)=>{
                // console.log(response.data.products)
                setProducts(response.data.products)
            }).catch((error)=>{
                console.log(error)
            })
        }
        loadProducts()
    },[])

    return(
        <StoreContext.Provider value={{ products }}>
            {children}
        </StoreContext.Provider>
    )
}
