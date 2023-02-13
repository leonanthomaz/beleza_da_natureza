
import React from 'react'
import { Header } from '../../components/Header'
import { Topbar } from '../../components/Topbar'
import { StoreContext } from '../../sharing/context/store'
import * as CT from './CategoriesStyles'
import { Product } from '../../components/Cards/Product'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { CardContainer } from '../../components/Containers/News/NewsStyles'

export const Categories = () => {
    const { products } = useContext(StoreContext)
    const categorySelect = useParams()
    // console.log('pt', typeof(categorySelect.id))

    return (
        <CT.Container>
            <Topbar/>
            <Header/>
            <CardContainer>
                {products.filter(i => i.category === parseInt(categorySelect.id)).map((item, index)=>{
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
                })}
            </CardContainer>
        </CT.Container>
    )
}
