import React from 'react'
import styled from 'styled-components'
import AnimatedShape from './AnimatedShape'
const Container = styled.div`
height:calc(100vh - 50px);
display:flex;
padding:20px;
`
const Left = styled.div`
width:60%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;

`
const Right = styled.div`
width:40%;
`
const Titale = styled.h1`
width:60%;
font-size:50px;
`
const Desc = styled.p`
width:60%;
padding:20px;
`
const Info = styled.div`
width:60%;
display:flex;
justify-content:space-between;
align-items:center;
`
const Button = styled.button`
padding:15px;
background-color :darkblue;
color:white;
border:none;
border-radius:10px;
letter-spacing:2px;
cursor: pointer;
`;

const Phone = styled.div`
color:crimson;
font-weight:bold;
`
const Contact = styled.div`
display:flex;
flex-direction:column;
`
const ContactText = styled.div`
color:gray;
margin-top:6px;
`


function Intro() {
    return (
        <Container>
            <Left>
                <Titale>WELCOME USER </Titale>
                <Desc>

                    A Zuventian has many facets. Be it the passion with which he creates brands which leaves a mark in the Pharma brand space. Be it the aggression he/she embodies to dethrone many a mega pharma brands. A sales team which perfectly complements with zealous implementation. A R&D and Manufacturing team which brings out the best in quality and innovation to bring joy to our end consumers</Desc>

                <Info><Button>HI USER</Button>

                    <Contact>
                        <Phone>CLL US ON 182656</Phone>
                        <ContactText>call us on any query and concern</ContactText></Contact>
                </Info>
                <AnimatedShape></AnimatedShape>
            </Left>
            
            <Right>
               
            </Right>
        </Container>
    )
}

export default Intro