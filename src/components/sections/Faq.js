import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useLayoutEffect, useRef } from 'react'
import styled from 'styled-components';
import Accordion from '../Accordion';


const Section = styled.section`
min-height: 100vh;
height: auto;
width: 100vw;
background-color: ${props => props.theme.text};
position: relative;
color: ${(props) => props.theme.body};
overflow: hidden;


display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: uppercase;
  color: ${(props) => props.theme.body};
  
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.carouselColor};
  width: fit-content;

  @media (max-width: 48em){
  font-size: ${(props) => props.theme.fontxl};

  }
`;

const Container = styled.div`
width: 75%;
margin: 2rem auto;

display: flex;
justify-content: space-between;
align-content: center;

@media (max-width: 64em){
  width: 80%;
  }
  @media (max-width: 48em){
  width: 90%;
  flex-direction: column;

  &>*:last-child{
    &>*:first-child{

    margin-top: 0;
}

  }
  }
`
const Box = styled.div`
width: 45%;
@media (max-width: 64em){
  align-self: center;
  }
  @media (max-width: 48em){
  width: 90%;
  }

`

const Faq = () => {

const ref = useRef(null);
gsap.registerPlugin(ScrollTrigger);
useLayoutEffect(() => {
  
  let element = ref.current;

  ScrollTrigger.create({
    trigger: element,
    start:'bottom bottom',
    end:'bottom top',
    pin:true,   
    pinSpacing:false, 
    scrub:1,
    // markers:true,
  })

  return () => {
    ScrollTrigger.kill();
  };
}, [])

  return (
    <Section ref={ref} id="faq">
    <Title>Faq</Title>

    <Container>

<Box>
  <Accordion ScrollTrigger={ScrollTrigger} title="What is Zaliban?" >
  Zaliban is a flagship game developed by Offroad Studios that integrates blockchain technology and NFTs to provide users with a unique gaming experience in the metaverse.  </Accordion>
  <Accordion ScrollTrigger={ScrollTrigger} title="What platforms will Zaliban be available on?" >
  The game will be available on multiple platforms, including PC, mobile devices, and consoles.
  </Accordion>
  <Accordion ScrollTrigger={ScrollTrigger} title="What is the revenue-sharing model for NFT holders in Zaliban?" >
  Offroad Studios' revenue-sharing model means that a percentage of the game's revenue will be shared with NFT holders in the form of royalties. This model aligns the interests of Offroad Studios with those of NFT holders, providing them with an incentive to support and promote the game.  </Accordion>
</Box>
<Box>
<Accordion ScrollTrigger={ScrollTrigger} title="What is the target audience for Zaliban?" >
Zaliban targets gamers and blockchain enthusiasts who are interested in owning digital assets and exploring the metaverse. With the integration of NFTs and Web3 technology, Offroad Studios hopes to attract a new set of users to the gaming industry.  </Accordion>
  <Accordion ScrollTrigger={ScrollTrigger} title="What is the storyline of Zaliban?">

  Zaliban revolves around two different clans, the Eastern Clan and the Western Clan. Each clan has its unique set of characters, including heroes and war units, and each character comes with its own story and characteristics. The game has been designed to maintain balance between the two clans in terms of stats, making it a fair and engaging experience for all players.  </Accordion>
  <Accordion ScrollTrigger={ScrollTrigger} title="When will the smart contract for Zaliban be deployed?
" >
The smart contract for Zaliban is currently being worked upon and will be deployed in the second phase of the game's launch. At the time of the launch, Level 1 and Level 2 NFT holders will be airdropped additional NFTs, and all NFT holders will be distributed tokens in the form of airdrops, which would be extensions to the characters they own.




</Accordion>
</Box>
    </Container>
    </Section>
  )
}

export default Faq