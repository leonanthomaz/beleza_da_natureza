import React, { useContext } from 'react'
import { CartContext } from '../../../sharing/context/cart'
import * as PD from './ProductsStyles'

export const Product = ({ id, img, name, description, price }) => {
    const { addCart } = useContext(CartContext)
    const pathImg = process.env.REACT_APP_PATH_IMG_FOLDER

    return (
        <PD.Container key={id}>
            <PD.Title>{name}</PD.Title>
            <PD.Img>
                <figure>
                    <img src={`${pathImg + img}`} alt={name} width={200} /> 
                </figure>
            </PD.Img>
            <PD.Price>{Number(price).toLocaleString("pt-BR", { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' })}</PD.Price>
            <PD.Description>{description}</PD.Description>
            <PD.NavLinkContainer>
                <PD.NavLink onClick={()=>addCart(id, price)}>Adicionar</PD.NavLink>
            </PD.NavLinkContainer>
        </PD.Container>
    )
}
