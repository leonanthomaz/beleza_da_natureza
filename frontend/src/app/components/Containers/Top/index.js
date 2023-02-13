
import React, { useContext } from "react";
import * as TP from './TopStyles'
import { StoreContext } from "../../../sharing/context/store";
import { Product } from "../../Cards/Product";

export const Top = () => {
    const { products } = useContext(StoreContext)

    return(
        <TP.Container>
            <TP.Title>Destaques</TP.Title>
            <TP.CardContainer>
                {products.map((item, index)=>{
                    if(item.top === 2){
                        return (
                            <Product
                                key={index}
                                id={item._id}
                                name={item.name}
                                description={item.description}
                                img={item.img}
                                price={item.price}
                            />
                        )
                    }
                })}
            </TP.CardContainer>
        </TP.Container>
    )
}