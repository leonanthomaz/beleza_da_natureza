import styled from "styled-components";

export const Container = styled.div`
`;

export const Title = styled.h2`
text-align: center;
font-size: 30px;
color: gray;
`;

export const CardContainer = styled.div`
display: grid;
grid-template-columns: 250px 250px 250px;
justify-content: center;
text-align: center;
gap: 10px;

/* @media(max-width: 760px){
    grid-template-columns: 200px 200px 200px;
} */

@media(max-width: 760px){
    grid-template-columns: auto auto auto;
}

@media(max-width: 500px){
    grid-template-columns: auto auto;
}

/* @media(max-width: 350px){
    display: flex;
    flex-direction: column;
    align-items: center;
} */

`;
