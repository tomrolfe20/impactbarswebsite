import React from 'react'
import { HeroContainer, HeroContent, HeroH1, HeroItems, HeroP, HeroBtn, HeroLink } from './HeroElements'



const Hero = () => {



    return (
        <HeroContainer>
            
            <HeroContent>
                <HeroItems>
                    <HeroH1>Impact Bars</HeroH1>
                    <HeroP>How can we help?</HeroP>
                    <HeroLink to='contact'><HeroBtn><h1>Contact</h1></HeroBtn></HeroLink>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero;

