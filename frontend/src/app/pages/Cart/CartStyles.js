import styled from "styled-components";
import { Link } from 'react-router-dom'

export const Container = styled.div`
/* border: 2px solid red; */
`;

export const CartContainer = styled.div`
display: block;

`;

export const CartWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: auto;
max-width: 500px;

@media(max-width: 760px){
    max-width: 400px;
}

@media(max-width: 450px){
    max-width: 300px;
}

h3{
    font-size: 30px;
    color: gray;

    @media(max-width: 760px){
        font-size: 25px;
    }

    @media(max-width: 450px){
        font-size: 20px;
    }
}
`

export const Button = styled(Link)`
background: #0e880ec2;
color: white;
padding: 10px;
text-decoration: none;
border-radius: 10px;
`;

export const Total = styled.div`

`;
