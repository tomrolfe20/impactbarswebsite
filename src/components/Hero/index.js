import React from 'react'
import { HeroContainer, HeroContent, HeroH1, HeroItems, HeroP, HeroBtn, HeroLink } from './HeroElements'



const Hero = () => {



    return (
        <HeroContainer>
            
            <HeroContent>
                <HeroItems>
                    <HeroH1>Impact Bars</HeroH1>
                    <HeroP>We've got you covered</HeroP>
                   <HeroLink to='contact'><HeroBtn><h1>Contact us</h1></HeroBtn></HeroLink>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero;

