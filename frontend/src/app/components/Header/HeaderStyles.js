import styled from "styled-components";
import { BiMenu } from "react-icons/bi";
import { BsSearch, BsBag } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";

export const Container = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;
height: 60px;
margin: 10px;

@media(max-width: 760px){
    flex-direction: row-reverse;
}
`;

export const Menu = styled.ul`
display: flex;
justify-content: center;
list-style: none;

@media(max-width: 760px){
    flex-direction: column;
    align-items: center;
    width: 200px;
    padding: 20px;
    margin-top: 30px;
    background: green;
    position: absolute;
    z-index: 999;
    left: ${({click}) => (click ? '0' : '-250px') };
    transition: all ease-in-out 0.2s;
}
`;

export const Nav = styled.li`
margin: 10px;

a{
    color: #141414;
    text-decoration: none;
}

@media(max-width: 760px){
    a{
        color: white;
    }
}
`;

export const Left = styled.div`
width: 150px;

`;

export const Center = styled.div`

.header-user-menu{
    
    @media(min-width: 760px){
        display: none;
    }
}
`;

export const Right = styled.div`
display: flex;
justify-content: space-between;
justify-content: center;
align-items: center;
margin-right: 40px;

@media(max-width: 760px){
    flex-direction: column;
    margin-right: 0px;
    margin-left: 10px;

}

`;

export const LogoContainer = styled.div`
position: absolute;
z-index: 9999;
width: 120px;

@media(max-width: 760px){
    width: 100px;
}
`;

export const Logo = styled.div`

position: relative;
z-index: 99;
width: 150px;
left: 50px;
border-radius: 50%;
border: 3px solid #0e880ec2;
bottom: 65px;
background: #eeeeee;

img{
    width: 100%;
}

@media(max-width: 760px){
    width: 100px;
    left: 10px;
}

@media(max-width: 550px){
    width: 80px;
    height: 80px;
    left: 50px;
    
    img{
        width: 80px;
    }
}

`

export const IconsContainer = styled.div`
display: flex;
flex-direction: row;
align-items: center;
font-size: 25px;
margin: 10px;

@media(max-width: 760px){
    flex-direction: row;
}

`;

export const CartContainer = styled.div`
display: flex;
/* border: 2px solid red; */
position: relative;

`;
export const CartIcon = styled.div`
`;
export const CartNumber = styled.div`
background: red;
border-radius: 50%;
padding: 12px;
position: absolute;
right: 0;
width: 5px;
height: 5px;
font-size: 14px;
color: white;
display: flex;
justify-content: center;
align-items: center;

`;

export const IconMenu = styled(BiMenu)`
color: #141414;
font-size: 30px;

@media(min-width: 760px){
   display: none;
}
`
export const IconClose = styled(AiOutlineClose)`
color: #141414;

`

export const IconSacola = styled(BsBag)`
color: #141414;
margin: 5px;
margin-right: 20px;
font-size: 30px;

`
export const IconUser = styled(AiOutlineUser)`
margin: 5px;
color: #141414;
font-size: 30px;

`
export const IconSearch = styled(BsSearch)`
margin: 5px;
`;



