import React, {useState, useEffect} from 'react';
import {
    Container, LeftDiv, H4, H1, Content, Line,ButtonHold,
    KnowMore, Arrow, RightDiv, Wrapper, Img, Content1
} from "./Hero2style";
// import arrow from '../../../Assets/arrow.svg'
import bg2 from '../../../Assets/bg44.svg'


const Hero2Page = () => {

  return (
    <Container>
        <Wrapper>
        <LeftDiv>
                 <H4>MANAGING YOUR CRYPTOCURRENCY MARKET PORTFOLIO</H4>
                <H1>Passion relates to performance</H1>
                <Content1>Groundbreaking financial services within the cryptocurrency industry.</Content1>
                <Line></Line>
                <Content>We first use our traders experience and knowledge to establish a link between the price of individual digital coins and the cryptocurrency market. Using the econometrics and statistical methods, we look at the precision and, with the help of data mining, we enhance the predictive parts for the next step</Content>
                <ButtonHold>
                    <KnowMore>Know More</KnowMore>
                    <Arrow >-</Arrow>
                </ButtonHold>
        </LeftDiv>
        <RightDiv>
          <Img src={bg2} alt='bg'/>
        </RightDiv>
        </Wrapper>
    </Container>
  )
}

export default Hero2Page;