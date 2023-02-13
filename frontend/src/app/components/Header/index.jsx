
import React, { useContext, useEffect, useState } from "react";
import * as H from './HeaderStyles';
import { Link } from "react-router-dom";
import { CartContext } from "../../sharing/context/cart";
import { AuthContext } from "../../sharing/context/auth";

export const Header = () => {
    const { setCart } = useContext(CartContext)
    const { user } = useContext(AuthContext)
    const pathImg = process.env.REACT_APP_PATH_IMG_LOCAL
    const carrinho = JSON.parse(localStorage.getItem("cart"))
    const [ click, setClick ] = useState(false)
    const [ mobile, setMobile ] = useState(false)

    useEffect(()=>{
        setCart(carrinho)
    },[carrinho > 0])

    const handleClick = () => {
        setClick(!click)
    }

    useEffect(() => {
        const innerWidth = () => {
            if(window.innerWidth <= 760){
                setMobile(true);
            }else{
                setMobile(false);
            }
        }
        return innerWidth
    }, []);

    // const [blackHeader, setBlackHeader] = useState();

    // useEffect(() => {
    //     const scrollLinstener = () => {
    //     if(window.scrollY > 10){
    //         setBlackHeader(true);
    //     }else{
    //         setBlackHeader(false);
    //     }
    //     }
    //     window.addEventListener('scroll', scrollLinstener);
    //     return () => {
    //     window.removeEventListener('scroll', scrollLinstener);
    //     }
    // }, []);

    return(
        <H.Container>
            <H.Left>
                <H.LogoContainer>
                    <H.Logo>
                        <Link to='/'>
                            <img src={pathImg + 'logo.png'} alt='' />
                        </Link>
                    </H.Logo>
                </H.LogoContainer> 
            </H.Left>
            <H.Center>
                <H.Menu click={click}>
                    {mobile ? 
                    <div className="header-user-menu">
                        <Link to={user ? '/myaccount' : '/login'}>
                            <H.IconUser/>
                        </Link>
                    </div> : '' }
                    <H.Nav>
                        <Link to='/'>Home</Link>
                    </H.Nav>
                    <H.Nav>
                        <Link to='/categories/1'>Skincare</Link>
                    </H.Nav>
                    <H.Nav>
                        <Link to='/categories/2'>Corpo</Link>
                    </H.Nav>
                    <H.Nav>
                        <Link to='/categories/3'>Cabelo</Link>
                    </H.Nav>
                    <H.Nav>
                        <Link to='/categories/4'>Aromas</Link>
                    </H.Nav>
                </H.Menu>
            </H.Center>
            <H.Right>
                <H.IconsContainer>
                    <Link to='/cart'>
                        <H.CartContainer>
                            <H.CartIcon><H.IconSacola/></H.CartIcon>
                            {carrinho && carrinho.length > 0 ? 
                            <H.CartNumber>
                                <span>{carrinho ? carrinho.length : ''}</span>
                            </H.CartNumber>
                            : '' }
                        </H.CartContainer>
                    </Link>

                    {click ? <H.IconClose style={{
                        cursor: 'pointer'
                    }}
                    onClick={handleClick} 
                    /> : <H.IconMenu onClick={handleClick} style={{
                        cursor: 'pointer'
                    }}/> }
 
                    {/* <div className="header-user-menu">
                        <Link to={user ? '/myaccount' : '/login'}>
                            <H.IconUser/>
                        </Link>
                    </div> */}
                </H.IconsContainer>
            </H.Right>
        </H.Container>
    )
}