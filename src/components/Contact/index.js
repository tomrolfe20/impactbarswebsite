import React from 'react'
import { GlobalHeading } from '../GlobalStyles'
import { 
    ContactContainer,
    ContactBox,
    ContactTopLine,
    Heading,
    Subtitle
 } from './ContactElements'


const Contact = () => {
    return (
        <>
          <ContactContainer id="contact">
              <GlobalHeading>Contact</GlobalHeading>
            <ContactBox>
                <ContactTopLine>Javi Tamayo</ContactTopLine>
                <Heading>javi@impactbars.co.uk</Heading>
                <Subtitle>Get in touch with any and all festival and event needs.</Subtitle>
            </ContactBox>
            <ContactBox>
                <ContactTopLine>Tom Rolfe</ContactTopLine>
                <Heading>tom@impactbars.co.uk</Heading>
                <Subtitle>Get in touch if you have any questions about the recruitment process.</Subtitle>
            </ContactBox>
          </ContactContainer>  
        </>
    )
}

export default Contact
