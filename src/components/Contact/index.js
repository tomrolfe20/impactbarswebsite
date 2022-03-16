import React from 'react'
import { GlobalHeading } from '../GlobalStyles'
import { 
    ContactContainer,
    ContactBox,
    ContactTopLine,
    Heading,
    Subtitle,
    ContactImage,
    ContactBoxContainer
 } from './ContactElements'

 import Javi from '../images/javi1.jpg'
 import Tom from '../images/tom2.jpg'
 import mail from '../images/envelope-solid.svg'
 import phone from '../images/phone-solid.svg'


const Contact = () => {
    return (
        <>
          <ContactContainer id="contact">
              <GlobalHeading>Contact</GlobalHeading>
              <ContactBoxContainer>
            <ContactBox>
            <ContactImage><img src={Javi} alt="Javi" /></ContactImage>
                <ContactTopLine>Javi Tamayo</ContactTopLine>
                <Heading><img src={mail} alt="mail" />javi@impactbars.co.uk</Heading>
                <Heading><img src={phone} alt="mail" />07485454545</Heading>
                {/* <Subtitle>Get in touch with any and all festival and event needs.</Subtitle> */}
            </ContactBox>
            <ContactBox>
                <ContactImage><img src={Tom} alt="Tom" /></ContactImage>
                <ContactTopLine>Tom Rolfe</ContactTopLine>
                <Heading><img src={mail} alt="mail" />tom@impactbars.co.uk</Heading>
                <Heading><img src={phone} alt="mail" />07481114188</Heading>
                {/* <Subtitle>Get in touch if you have any questions regarding recruitment.</Subtitle> */}
            </ContactBox>
            </ContactBoxContainer>
          </ContactContainer>  
        </>
    )
}

export default Contact
