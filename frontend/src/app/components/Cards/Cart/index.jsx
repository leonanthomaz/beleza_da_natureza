import React, { useContext } from 'react'
import { CartContext } from '../../../sharing/context/cart'
import * as CC from './CardCartStyles'

export const CardCart = ({id, img, name, price, qtd}) => {
    const { addCart, removeCart, removeItem } = useContext(CartContext)    
    const pathImg = process.env.REACT_APP_PATH_IMG_FOLDER

    return (
        <CC.Container>
            <CC.Wrapper>
                <CC.Left>
                    <div className='cart-img-container'>
                        <img src={pathImg + img} alt='' width={100} />
                    </div>
                </CC.Left>
                <CC.Right>
                    <h2>{name}</h2>
                    <h4><span>{qtd}x </span>{Number(price).toLocaleString("pt-BR", { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' })}</h4>
                    <h5>Subtotal: {Number(parseFloat(price) * parseFloat(qtd)).toLocaleString().toLocaleString("pt-BR", { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' })}</h5>
                    <CC.ButtonContainer>
                        <CC.IconPlus onClick={()=>addCart(id)}></CC.IconPlus>
                        <span>{qtd}</span>
                        { qtd > 1 ?
                        <CC.IconMinus onClick={()=>removeItem(id)}></CC.IconMinus>
                        : 
                        <CC.IconClose onClick={()=>removeCart(id)}></CC.IconClose>
                        }
                    </CC.ButtonContainer>
                    
                </CC.Right>
            </CC.Wrapper>
        </CC.Container>
    )
}
