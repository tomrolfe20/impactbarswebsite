import React from 'react'
import { GlobalHeading } from '../GlobalStyles'
import {
    TestimonialsContainer,
    TestimonialsBox,
    TestimonialsLeftBox,
    TestimonialsRightBox,
    TestimonialsRightTopBox,
    TestimonialsRightBottomBox,
    TestimonialsContent,
    TestimonialTitle,
    TestimonialDesc,
    TestimonialsImg
} from './TestimonialsElements'

const Testimonials = ({ data }) => {
    return (
        <>
          <TestimonialsContainer id="testimonials">
              
              <TestimonialsContent>
              <GlobalHeading>Testimonials</GlobalHeading>
              {data.map((product, index) => {
                  return (
                <TestimonialsBox key={index}>
                    <TestimonialsLeftBox>
                        <TestimonialsImg src={product.img1} />
                    </TestimonialsLeftBox>
                    <TestimonialsRightBox>
                        <TestimonialsRightTopBox>
                        <TestimonialTitle><h1>{product.name}</h1></TestimonialTitle>
                        <TestimonialDesc><p>{product.desc}</p></TestimonialDesc>
                        </TestimonialsRightTopBox>
                        <TestimonialsRightBottomBox>
                        <TestimonialsImg src={product.img2} />
                        </TestimonialsRightBottomBox>
                    </TestimonialsRightBox>
                </TestimonialsBox>

)
})}

                <TestimonialsBox>
                    
                    <TestimonialsRightBox>
                        
                        <TestimonialsRightBottomBox>
                            
                        </TestimonialsRightBottomBox>
                        <TestimonialsRightTopBox>
                            <h1>Arcadia</h1>
                        <p>Lorem ipsum dolor sit amet. Et maxime ipsum non laudantium obcaecati qui eligendi quia est deserunt ullam et impedit nobis sed sunt velit. Non maiores sunt et voluptatem nobis qui fuga 
            laudantium aut consectetur tempore </p>
                        </TestimonialsRightTopBox>
                    </TestimonialsRightBox>
                    <TestimonialsLeftBox>
                        
                    </TestimonialsLeftBox>
                </TestimonialsBox>

                <TestimonialsBox>
                    <TestimonialsLeftBox>
                        
                    </TestimonialsLeftBox>
                    <TestimonialsRightBox>
                        <TestimonialsRightTopBox>
                            <h1>Team Love</h1>
                        <p>Lorem ipsum dolor sit amet. Et maxime ipsum non laudantium obcaecati qui eligendi quia est deserunt ullam et impedit nobis sed sunt velit. Non maiores sunt et voluptatem nobis qui fuga 
            laudantium aut consectetur tempore </p>
                        </TestimonialsRightTopBox>
                        <TestimonialsRightBottomBox>
                            
                        </TestimonialsRightBottomBox>
                    </TestimonialsRightBox>
                </TestimonialsBox>

                <TestimonialsBox>
                    
                    <TestimonialsRightBox>
                        
                        <TestimonialsRightBottomBox>
                            
                        </TestimonialsRightBottomBox>
                        <TestimonialsRightTopBox>
                            <h1>St Pauls Carnival Committee</h1>
                        <p>Lorem ipsum dolor sit amet. Et maxime ipsum non laudantium obcaecati qui eligendi quia est deserunt ullam et impedit nobis sed sunt velit. Non maiores sunt et voluptatem nobis qui fuga 
            laudantium aut consectetur tempore </p>
                        </TestimonialsRightTopBox>
                    </TestimonialsRightBox>
                    <TestimonialsLeftBox>
                        
                    </TestimonialsLeftBox>
                </TestimonialsBox>

                <TestimonialsBox>
                    <TestimonialsLeftBox>
                        
                    </TestimonialsLeftBox>
                    <TestimonialsRightBox>
                        <TestimonialsRightTopBox>
                            <h1>Boomtown</h1>
                        <p>Lorem ipsum dolor sit amet. Et maxime ipsum non laudantium obcaecati qui eligendi quia est deserunt ullam et impedit nobis sed sunt velit. Non maiores sunt et voluptatem nobis qui fuga 
            laudantium aut consectetur tempore </p>
                        </TestimonialsRightTopBox>
                        <TestimonialsRightBottomBox>
                            
                        </TestimonialsRightBottomBox>
                    </TestimonialsRightBox>
                </TestimonialsBox>
              </TestimonialsContent>
          </TestimonialsContainer>  
        </>
    )
}

export default Testimonials
