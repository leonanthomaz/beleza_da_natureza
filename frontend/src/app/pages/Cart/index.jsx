import React, { useContext, useEffect } from 'react'
import { Header } from '../../components/Header'
import { Topbar } from '../../components/Topbar'
import { StoreContext } from '../../sharing/context/store'
import * as C from './CartStyles'
import { Link } from 'react-router-dom'
import { CardCart } from '../../components/Cards/Cart'
import { CartContext } from '../../sharing/context/cart'

export const Cart = () => {

    const { products } = useContext(StoreContext)
    const { cart, setCart } = useContext(CartContext)
    const pathImg = process.env.REACT_APP_PATH_IMG_FOLDER
    let total = cart.reduce((total, item) => total += (item.qtd * item.price), 0)

    const carrinho = JSON.parse(localStorage.getItem("cart"))
    useEffect(()=>{
        setCart(carrinho)
    },[])

    return (
        <C.Container>
            <Topbar/>
            <Header/>
            <C.CartContainer>
                <C.CartWrapper>
                    {cart && cart.length > 0 ? cart.map((item)=>{
                        return(
                            products && products.filter(i => i._id === item.id).map(a =>{
                                return(
                                    <CardCart
                                    id={a._id}
                                    img={a.img}
                                    name={a.name}
                                    price={a.price}
                                    qtd={item.qtd}
                                    />
                                )
                            })
                        )
                    }) : <h3>Carrinho vazio</h3> } <br/><hr/>
                    {total && total > 0 ? 
                    <C.Total><h2>Total: {Number(total).toLocaleString("pt-BR", { minimumFractionDigits: 2 , style: 'currency', currency: 'BRL' })}</h2></C.Total>
                    :
                    '' 
                    }
                    {cart && cart.length > 0 ? 
                    <C.Button to='/checkout'>Finalizar Compra</C.Button>
                    : 
                    <C.Button to='/'>Voltar ao início</C.Button>
                    }
                </C.CartWrapper>
            </C.CartContainer>
        </C.Container>
    )
}
