
import React, { useContext } from "react";
import * as N from './NewsStyles'
import { StoreContext } from "../../../sharing/context/store";
import { Product } from "../../Cards/Product";

export const News = () => {
    const { products } = useContext(StoreContext)

    return(
        <N.Container>
            <N.Title>Novidades</N.Title>
            <N.CardContainer>
                {products.map((item, index)=>{
                    if(item.news === 2){
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
            </N.CardContainer>
        </N.Container>
    )
}