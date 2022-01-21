import React from 'react'
import {
    ProductsContainer,
    ProductWrapper,
    ProductCard,
    ProductImg,
    ProductInfo,
    ProductTitle,
    ProductDesc,
    ProductBorder
} from './ProductsElements';
import { GlobalHeading } from '../GlobalStyles';


const Products = ({ heading, data }) => {
    return (
        <>
        <ProductsContainer id='previousevents'>
        <GlobalHeading>{heading}</GlobalHeading>
        <ProductWrapper>
          {data.map((product, index) => {
          return (
            <ProductCard key={index}>
                <ProductBorder>
                    
            <ProductImg src={product.img} alt ={product.alt} />
            
            <ProductInfo>
                <ProductTitle>{product.name}</ProductTitle>
                <ProductDesc>{product.desc}</ProductDesc>
                
            </ProductInfo>
            
            </ProductBorder>
        </ProductCard>
          )
})}
               
     </ProductWrapper>
      </ProductsContainer>
        </>
    )
};

export default Products