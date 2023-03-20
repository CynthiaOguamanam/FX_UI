import React from 'react';
import styled from 'styled-components'
// import Footer from './Footer/Footer';
import HeroPage from './Hero1/HeroPage'
import Hero2Page from './Hero2/Hero2Page';
import Hero3 from './Hero3/Hero3';
import Hero4 from './Hero4/Hero4';
import Hero5 from './Hero5/Hero5';
import Hero6 from './Hero6/Hero6';

const LandingPage = () => {
  return (
    <Container>
        <HeroPage/>
        <Hero2Page/>
        <Hero3/>
        <Hero4/>
        <Hero5/>
        <Hero6/>
        {/* <Footer/> */}
    </Container>
  )
};

export default LandingPage;

const Container = styled.div`
width: 100%;
height: auto;
display: flex;
flex-direction: column;
justify-content: center;
font-family: Raleway, sans-serif;
`;