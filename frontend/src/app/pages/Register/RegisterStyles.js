import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
margin: auto;
`;

export const Box = styled.div`
    margin: auto;
    max-width: 500px;
    height: auto;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 10px 10px -5px;

    @media(max-width: 650px){
        padding: 10px;
        max-width: 300px;
    }

    h1{
        font-size: 25px;
        text-align: center;
        padding: 10px;
    }

    p {
        .error-login{
            font-size: 14px;
            text-align: center;
        }
    }


`;

export const FormContainer = styled.div`
    /* border: 2px solid red; */
    padding-top: 20px;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    display: flex;
    max-width: 300px;
    margin: auto;
    margin-top: 20px;
    padding: 5px;

    @media(max-width: 650px){
        max-width: 250px;
    }
`;

export const Input = styled.input`
    color: #0e880ec2;
    border: 1px solid #141414;
    outline: none;
    width: 300px;
    padding: 10px;
    font-size: 16px;
    margin: 10px;
    transition: all .1s linear;
    -webkit-transition: all .1s linear;
    -moz-transition: all .1s linear;
    -webkit-appearance:none;
    border-radius: 20px;

    @media(max-width: 650px){
        max-width: 200px;
    }

    :focus{
        border: 2px solid red;
        color: #141414;
        border-radius: 5px;
    }
`;

export const ButtonSendForm = styled.button`
    width: 100px;
    padding: 5px;
    text-decoration: none;
    background: #0e880ec2;
    color: white;
    transition: all ease 0.5s;
    border-radius: 20px;
    cursor: pointer;
    display: flex;
    justify-content: center;

    :hover{
        background: red;
        border: 2px solid white;
        color: white;
        transition: all ease 0.5s;
    }
`;

export const ContainerCenter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;

    @media(max-width: 650px){
        h4{
            font-size: 12px;
        }
    }
`;

export const ButtonRedirect = styled(Link)`
    width: 100px;
    height: 20px;
    padding: 5px;
    text-decoration: none;
    background: #0e880ec2;
    color: white;
    transition: all ease 0.5s;
    border-radius: 20px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;

    @media(max-width: 650px){
        font-size: 12px;
        max-width: 80px;
    }

    :hover{
        background: red;
        border: 2px solid white;
        color: white;
        transition: all ease 0.5s;
    }
`;
