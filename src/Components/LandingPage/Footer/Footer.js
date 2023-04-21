import React, { useEffect } from 'react';
import { AiFillFacebook, AiFillTwitterSquare } from 'react-icons/ai';
import bitcoin from '../../../Assets/bitcoin.png'
import { 
    Container, Wrapper, LeftDiv, RightDiv, Img, Logo,
    Dot, Span, Hold
} from './FooterStyle';
// import ScrollToTop from "react-scroll-to-top";
// import ScrollToTop from "react-scroll-to-top" remeber to import if it breaks madam ;


const Footer = () => {

    useEffect(()=>{
        window.scroll({
            top: 0,
            left: 100,
            behavior: "smooth"
        })
    }, [])


  return (
    <Container>
        <Wrapper>
            <LeftDiv>
                <Logo>PIPSCOUNTFX</Logo>
                <Dot></Dot>
                <Span to='/news'>News</Span>
                <Dot></Dot>
                <Span to='/terms'>Terms & Condition</Span>
                <Dot></Dot>
                <Span to='/FAQ'>FAQ</Span>
                <Dot></Dot>
                <Span to='/contact'>Contact</Span>
            </LeftDiv>
            <RightDiv>
                <Hold href='https://www.facebook.com'><AiFillFacebook  style={{cursor: "pointer", width: "25px", height: "25px", borderRadius:"20px"}}/>
                </Hold>
                <Hold href='https://twitter.com'>
                <AiFillTwitterSquare  style={{width: "25px", height: "25px", cursor: "pointer", borderRadius:"20px"}}/>
                </Hold>
                <Img src={bitcoin} alt="bitcoin"/>
            </RightDiv>
            {/* <ScrollToTop style={{
                    width: 150, height: 50, border: "1px solid grey", backgroundColor: "grey", opacity: "80%"
                }} smooth/>  */}
        </Wrapper>
    </Container>
  )
}

export default Footer;