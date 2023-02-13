import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`

/* border: 2px solid red; */
display: flex;
flex-direction: column;
width: 250px;
/* box-shadow: 2px 2px 3px 2px gray; */
box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
border-radius: 7px;
/* font-family: 'Josefin Sans', sans-serif; */
padding: 10px;

@media(max-width: 760px){
    width: 170px;
}

@media(max-width: 500px){
    width: 150px;
}
`

export const Title = styled.h1`
font-size: 25px;
padding: 5px;

@media(max-width: 760px){
    font-size: 18px;
}

@media(max-width: 500px){
    font-size: 16px;
}

`

export const Img = styled.div`
/* width: 250px;
height: 250px; */
margin: auto;

img{
    width: 100%;
}
`

export const Description = styled.span`
font-size: 16px;

@media(max-width: 760px){
    font-size: 12px;
}

`

export const Price = styled.p`
font-size: 20px;
font-weight: 700;

@media(max-width: 760px){
    font-size: 18px;
}

@media(max-width: 500px){
    font-size: 16px;
}
`

export const NavLinkContainer = styled.div`
display: flex;
justify-content: center;
margin: 10px;

`

export const NavLink = styled(Link)`
    background: #0e880ec2;
    color: whitesmoke;
    border-radius: 10px;
    padding: 5px;
    width: 200px;
    text-decoration: none;

    &:hover{
        background: red;
    }

    @media(max-width: 760px){
        font-size: 16px;
        width: 150px;
    }

`;


