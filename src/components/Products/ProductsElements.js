import styled from "styled-components";


export const ProductsContainer = styled.div`
min-height: 100vh;
padding: 5rem 0;
background-color: #40514f;
color: #E4F9F5;
`;

export const ProductWrapper = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;

`;

export const ProductCard = styled.div`
margin: 10px;
width: 300px;

`

export const ProductBorder = styled.div`

display: flex;
flex-wrap: wrap;
flex-direction: column;
`
export const ProductSplitter = styled.div`
display: flex;
flex-wrap: wrap;
background-color: red;
`

export const ProductImg = styled.img`
width: 100%;
`

export const ProductInfo = styled.div`

justify-content: center;
align-items: center;
display: inline-block;
text-align: center;
padding: 5px;
`

export const ProductTitle = styled.h1`
  margin-bottom: 24px;
  font-size: 18px;
  line-height: 1.1;
  font-weight: 600;
  color: white;

@media screen and (max-width: 480px) {
    font-size: 32px
}
  `

export const ProductDesc = styled.p`
margin-bottom: 1rem;
`

export const ProductPrice = styled.p`
margin-bottom: 1rem;
font-size: 2rem;
`

export const ProductButton = styled.button`
font-size: 1rem;
padding: 1rem 4rem;
border: none;
background: #e31837;
color: #fff;
transition: 0.2 ease-out;
`