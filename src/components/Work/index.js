import React from 'react'
import { GlobalHeading } from '../GlobalStyles'
import {
    WorkContainer,
    WorkBox,
    WorkLink,
    TextBackground
} from './WorkElements'



function Work() {
    return (
        <>
            <WorkContainer id="work">
            <GlobalHeading>Work with us</GlobalHeading>
            
                <WorkBox />
                    <WorkLink to={{ pathname: "https://impact.eventmaster.jobs" }} target="_blank">
                        <TextBackground><h1>Apply Here</h1></TextBackground>
                    </WorkLink>
            </WorkContainer>
        </>
    )
}

export default Work
