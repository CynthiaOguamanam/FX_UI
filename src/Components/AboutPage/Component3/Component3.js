import React from 'react';
import {
    Container, Circle, Wrapper, Icon, ButtonHold, Text,
    Div1, H1, H4, H5, Content,Content2, Line, Div2, Left, Right
} from './Component3Style';
import flaticon from './flaticon.svg'; 
import pdficon from './pdficon.svg'; 
import {AiFillCalendar} from 'react-icons/ai'
import {BsSearch} from 'react-icons/bs'

const Component3 = () => {
  return (
    <Container>
        <Circle></Circle>
        <Wrapper>
            <Div1>
                <H4>INCORPURATION</H4>
                <H1 href='https://pipscountfx.com/home/index4c4f.html?a=aboutus#'>Pipscountfx.com; Nr.: 1122234445</H1>
                <Content>Pipscountfx.comis a cryptocurrency trading broker established in 2022. The wide array of services we offer were specifically designed to assist Bitcoin holders in making good cryptocurrency management decisions.</Content>
                <Line></Line>
            </Div1>
            <br/>
            <br/>
            <Div2>
                <Left>
                    <Icon src={flaticon} alt='flaticon'/>
                    <H4>CERTIFICATE OF INCORPORATION</H4>
                    <Content2>Pipscountfx.com passed the registration procedure in Jan 2022 and is listed on the website of the royal registrar Companies House.</Content2>
                    <ButtonHold>
                        <AiFillCalendar/>
                        <Text>VIEW OUR CERTIFICATE</Text>
                    </ButtonHold>
                </Left>
                <Right>
                <Icon src={pdficon} alt='flaticon'/>
                    <H5>TERMS OF SERVICE</H5>
                    <Content2>Please read rules carefully before you start to use the site and register an account. By using website, you confirm that you accept terms of service.</Content2>
                    <ButtonHold>
                        <BsSearch/>
                        <Text>VALIDATE COMPANY DETAILS</Text>
                    </ButtonHold>
                </Right>
            </Div2>
        </Wrapper>
    </Container>
  )
}

export default Component3;