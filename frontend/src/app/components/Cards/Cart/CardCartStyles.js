import styled from "styled-components";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom'

export const Container = styled.div`

`;

export const Wrapper = styled.div`

display: grid;
grid-template-columns: auto auto;
box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
gap: 10px;
padding: 10px;

`;

export const Left = styled.div`
/* border: 2px solid black; */

flex-wrap: nowrap;
flex: 1;
display: flex;
justify-content: center;
align-items: center;
width: 150px;
height: 150px;

.cart-img-container{
    border-radius: 10px;

    @media(max-width: 760px){
        width: 120px;
        height: 120px;
    }

    @media(max-width: 450px){
        width: 100px;
    }

    img{
       width: 100%;
    }
}
`;

export const Right = styled.div`
flex-wrap: wrap;
flex: 3.5;
padding: 10px;


h2{
    font-size: 25px;
    color: gray;

    @media(max-width: 760px){
        font-size: 16px;
    }

    @media(max-width: 450px){
        font-size: 14px;
    }
}

h4{
    font-size: 18px;

    @media(max-width: 760px){
        font-size: 14px;
    }

    @media(max-width: 450px){
        font-size: 12px;
    }

}

h5{
    font-size: 18px;

    @media(max-width: 760px){
        font-size: 14px;
    }

    @media(max-width: 450px){
        font-size: 12px;
    }
}
`;

export const ButtonContainer = styled.div`
display:  flex;
flex-direction: row;
align-items: center;
justify-content: center;
margin: 5px;

span{
    /* border: 2px solid red; */
    font-weight: 700;
}
`;

export const Button = styled(Link)`
background: #0e880ec2;
color: white;
padding: 10px;
text-decoration: none;
border-radius: 10px;

`;

export const IconPlus = styled(AiOutlinePlus)`
background: #0e880ec2;
color: white;
padding: 10px;
border-radius: 50%;
margin: 10px;
cursor: pointer;

@media(max-width: 760px){
    width: 20px;
    height: 20px;
}

@media(max-width: 450px){
    width: 15px;
    height: 15px;
}

`;

export const IconMinus = styled(AiOutlineMinus)`
background: red;
color: white;
padding: 10px;
border-radius: 50%;
margin: 10px;
cursor: pointer;

@media(max-width: 760px){
    width: 20px;
    height: 20px;
}

@media(max-width: 450px){
    width: 15px;
    height: 15px;
}

`;

export const IconClose = styled(AiOutlineClose)`
background: red;
color: white;
padding: 10px;
border-radius: 50%;
margin: 10px;
cursor: pointer;

@media(max-width: 760px){
    width: 20px;
    height: 20px;
}

@media(max-width: 450px){
    width: 15px;
    height: 15px;
}
`;

