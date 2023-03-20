import React, {useState, useEffect} from 'react';
import pic from './logo.png'
import styled from 'styled-components'
import logo from './logo2.png'
import {
    Container,
    Container2,
    Wrapper,
    Wrapper2,
    LogoDiv,
    NavWrap,
    Nav,
    Button,
    Button2,
    Line,
    Img,
    NavRight,
    NavDiv,
    MenuHold,
    Menu,
    Menu2,
    Nav2,
    HeaderHold,
    CreateAccount,
    CreateAccount2,
} from "./HeaderStyle";
import SideNav from './sideNav';


const Header = () => {

  const [nav, setNav] = useState(false);
  const [header, setHeader] = useState(false);

  const changeHeaderBackground = () =>{
    // console.log((window).scrollY);
    if(window.scrollY >= 66){
      setHeader(true);
    }else{
      setHeader(false);
    }
  };

  useEffect(() =>{
    changeHeaderBackground();
    window.addEventListener("scroll", changeHeaderBackground)
  })

  return (
      <HeaderHold>
        {header? (
           <Container2  >
           <Wrapper>
          <LogoDiv to='/'>
            <Img src={logo} alt="logo"/>
          </LogoDiv>
          <NavWrap>
            <Nav2 to='/about'>About Us</Nav2>
            <Nav2 to='/trading'>Trading</Nav2>
            <Nav2 to='/affiliate'>Affiliate</Nav2>
            <Nav2 to='/getstarted'>Get Started</Nav2>
            <Nav2 to='/FAQ'>FAQ</Nav2>
            <Nav2 to='/contact'>Contact</Nav2>
            <Line></Line>
            <NavRight>
            <CreateAccount2 to='/register'>Create Account</CreateAccount2>
            <Button2 style={{color: "black"}}>Sign In</Button2> 
            </NavRight>
          </NavWrap>
          <MenuHold  onClick={() =>{
                    setNav(true);
                }}> 
                <Menu />
                </MenuHold>
        </Wrapper>
        </Container2>
      ) :  
      <Container setHeader={setHeader}>
      <Wrapper2>
     <LogoDiv to='/'>
       <Img src={pic} alt="logo"/>
     </LogoDiv>
     <NavWrap>
       <Nav to='/about'>About Us</Nav>
       <Nav to='/trading'>Trading</Nav>
       <Nav to='/affiliate'>Affiliate</Nav>
       <Nav to='/getstarted'>Get Started</Nav>
       <Nav to='/FAQ'>FAQ</Nav>
       <Nav to='/contact'>Contact</Nav>
       <Line></Line>
       <NavRight>
       <CreateAccount to='/register'>Create Account</CreateAccount>
       <Button to='/signin'>Sign In</Button>
       </NavRight>
     </NavWrap>
     <MenuHold  onClick={() =>{
                    setNav(true);
                }}> 
                <Menu2 />
                </MenuHold>
   </Wrapper2>
   </Container>
      }
    { nav? (<NavDiv> <SideNav setNav={setNav} /> </NavDiv>): null}
    </HeaderHold>
    
  )
};

export default Header;

