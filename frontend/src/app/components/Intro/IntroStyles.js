import styled from "styled-components";

export const Container = styled.div`
/* height: auto; */

`;

export const SplideContainer = styled.div`
z-index: 1;
max-width: 1200px;
height: auto;
margin: auto;

.splide{
    padding: 0;
}

@media (max-width: 900px){
    max-width: 700px;
}

@media (max-width: 760px){
    max-width: 600px;
}

@media (max-width: 400px){
    width: 350px;
}

img{
    width: 100%;
    border-radius: 20px;

}
`;
