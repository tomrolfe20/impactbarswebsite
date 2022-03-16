import React from 'react'
import { ClientsContainer, ImgContainer, ImgBox, ImgOverlay, ImgTitle, Img } from './ClientsElements'
import boomtown from "../images/boomtown.jpg"
import alfresco from '../images/alfrescoclient.jpg'
import arcadia from '../images/arcadia.jpg'
import sol from '../images/sol.jpg'
import carnival from '../images/carnival.jpg'
import { GlobalHeading } from '../GlobalStyles'

const Clients = () => {
  return (
    <>
    <ClientsContainer id='clients'>
    <GlobalHeading>Clients</GlobalHeading>
        <ImgContainer>
          <ImgBox>
            <Img><img src={boomtown} alt="Boomtown" /></Img>
            <ImgOverlay>
              <ImgTitle>
                Boomtown
              </ImgTitle>
            </ImgOverlay>
          </ImgBox>

          <ImgBox>
            <Img><img src={alfresco} alt="alfresco" /></Img>
            <ImgOverlay>
              <ImgTitle>
                Alfresco Disco
              </ImgTitle>
            </ImgOverlay>
          </ImgBox>

          <ImgBox>
            <Img><img src={arcadia} alt="arcadia" /></Img>
            <ImgOverlay>
              <ImgTitle>
                Arcadia
              </ImgTitle>
            </ImgOverlay>
          </ImgBox>

          <ImgBox>
            <Img><img src={sol} alt="sol" /></Img>
            <ImgOverlay>
              <ImgTitle>
                Lakota: Summer of love
              </ImgTitle>
            </ImgOverlay>
          </ImgBox>

          <ImgBox>
            <Img> <img src={carnival} alt="carnival" /></Img>
            <ImgOverlay>
              <ImgTitle>
                St Pauls Carnival
              </ImgTitle>
            </ImgOverlay>
          </ImgBox>
           
           
           
           
          
        </ImgContainer>
    </ClientsContainer>
    </>
  )
}

export default Clients