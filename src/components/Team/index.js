import React from 'react'
import {
    TeamContainer,
    TeamWrapper,
    TeamTextContainer,
    TeamImg,
    TeamHeading,
    TeamInfo,
    TeamCard
} from './TeamElements'
import { GlobalHeading } from '../GlobalStyles'

const Team = ({ data, heading }) => {
    return (
        <>
         <TeamContainer id='team'>
             <GlobalHeading>{heading}</GlobalHeading>
          <TeamWrapper>

                {data.map((team, index) => {
                     return (
                <TeamCard key={index}>
                
                   <TeamImg src={team.img} alt={team.alt} />
                   
               
               <TeamTextContainer>
                   <TeamHeading>
                       {team.name}
                   </TeamHeading>
                   <TeamInfo>
                       {team.desc}
                   </TeamInfo>
               </TeamTextContainer>
               </TeamCard>
               )})}
         </TeamWrapper>    
         </TeamContainer>   
        </>
    )
}

export default Team
