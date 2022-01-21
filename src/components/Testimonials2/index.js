import React from 'react'
import { Testimonials2Container } from './Testimonials2Elements'
import InfoSection from '../InfoSection'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from '../InfoSection/data'
import { GlobalHeading } from '../GlobalStyles'


const Testimonials2 = () => {
    return (
        <>
        <Testimonials2Container id='testimonials'>
          <GlobalHeading>Testimonials</GlobalHeading>
          <InfoSection {...homeObjOne} />
          <InfoSection {...homeObjTwo} />
          <InfoSection {...homeObjThree} />
          <InfoSection {...homeObjFour} />
        </Testimonials2Container>
        </>
    )
}

export default Testimonials2
