import React from 'react'

import {
    WhatWeDoTextContainer,
    WhatWeDoH2,
    WhatWeDoP,
    WhatWeDoTextWrapper
} from './WhatWeDoElements';

import { GlobalHeading } from '../GlobalStyles';

const WhatWeDo = () => {
    return (
        <WhatWeDoTextContainer id='whatwedo'>
            <WhatWeDoTextWrapper>
            <GlobalHeading>What we do</GlobalHeading>
            <WhatWeDoH2>Running bars is our bread and butter</WhatWeDoH2>
            <WhatWeDoP>
                Sister company to Refresh West, we pride ourselves on ensuring the most efficient and cost effective process possible, from start to finish. 
                We work closely with suppliers to ensure the best deals possible, have a team of hard working and happy dedicated festival and event staff, ensuring that no event is out of our reach.

            </WhatWeDoP>
            <WhatWeDoH2>Our Goals:</WhatWeDoH2>
            <WhatWeDoP>
                <li>Maximise efficiency, bar take and profits</li>
                <li>hello</li>
            </WhatWeDoP>
             </WhatWeDoTextWrapper>
        </WhatWeDoTextContainer>
    )
}

export default WhatWeDo
