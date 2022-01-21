import styled from "styled-components";
import BottomRight from '../images/festival11.jpg' 

export const TestimonialsContainer = styled.div`
  background-color: white;
  min-height: 100vh;
  padding: 5rem 0;
  background-color: #40514f;
  color: #E4F9F5;
`
export const TestimonialsContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  text-align: center;

`
export const TestimonialsBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  min-height: 50vh;
  margin: 20px;
`

export const TestimonialsLeftBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 50%;

  @media screen and (max-width: 800px) {
      width: 100%;
      min-height: 300px;
  }
`
export const TestimonialsImg = styled.img`
max-width: 100%;
height: auto;
`

export const TestimonialsRightBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  justify-content: stretch;
  width: 50%;


  @media screen and (max-width: 800px) {
      width: 100%;
  }
`
export const TestimonialsRightTopBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  height: 50%;
  padding: 10px;

  @media screen and (max-width: 800px) {
      min-height: 300px;
  }
`
export const TestimonialsRightBottomBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  height: 50%;
  width: 100%;

  @media screen and (max-width: 800px) {
      min-height: 300px;
  }
`

export const TestimonialTitle = styled.div``

export const TestimonialDesc = styled.div``