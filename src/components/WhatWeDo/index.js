import React from 'react'

import {
    WhatWeDoTextContainer,
    WhatWeDoH2,
    WhatWeDoP,
    WhatWeDoTextWrapper,
    WhatWeDoH1
} from './WhatWeDoElements';

// import { GlobalHeading } from '../GlobalStyles';

const WhatWeDo = () => {
    return (
        <WhatWeDoTextContainer id='whatwedo'>
            <WhatWeDoTextWrapper>
            <WhatWeDoH1>What we do</WhatWeDoH1>
            <WhatWeDoH2>Pop up events to full blown festival sites, we've got you covered.</WhatWeDoH2>
            <WhatWeDoP>
                Sister company to Refresh West, we pride ourselves on ensuring the most efficient, cost effective and smooth bar operation possible to maximise bar revenue. 
                With extensive event bar experience and a combined 60 years in the field, we:
                <br/>
                <br/>
                <li>Provide full till operating systems to optimise the speed of service and provide a full report of live data and up to date sales records</li>
                <li>Hire an experienced bar team to ensure professionalism and customer satisfaction</li>
                <li>Ensure smooth logistical operations which includes everything from building the bars to providing the refrigeration units</li>
                <li>Engage with local suppliers and breweries to guarantee good quality products whilst maintaining the best deals possible</li>
                <li>Strive to use the most environmentally friendly resources to reduce our ecological impact and minimise our carbon footprint</li>
            </WhatWeDoP>
            {/* <WhatWeDoH2>Our Goals:</WhatWeDoH2> */}
            <WhatWeDoP>
                
            </WhatWeDoP> 
             </WhatWeDoTextWrapper>
        </WhatWeDoTextContainer>
    )
}

export default WhatWeDo
