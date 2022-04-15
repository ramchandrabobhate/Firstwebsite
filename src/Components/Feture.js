import React from 'react'
import Phone from '../Img/phone.png'
import styled from 'styled-components'

const Container = styled.div`
display:flex;
`
const Right = styled.div`
width:50%;
height:100%;
display:flex;
flex-direction:column;
color: #333;
justify-content:center;
`
const Left = styled.div`
width:50%;
`
const Image = styled.img`
`
const Title = styled.span`
font-size:70px;
`
const SubTitle = styled.span`
font-size:24px;
font-style:italic;
color: #333;
`
const Desc = styled.p`
font-size:24px;
margin-top:30px;
color: #777;
`
const Button = styled.button`
width:150px;
border:none;
padding:15px 20px;
background-color:darkblue;
color:white;
font-size:20px;
border-radius:10px;
margin-top:30px;
cursor: pointer;
`
function Feture() {
    return (
        <Container>
            <Left>
               
            </Left>
            <Right>
                <Title>
                    <b>good</b> design<br/>
                    <b>good</b>business<br/>
                 </Title>
                <SubTitle>Good Bussiness means good organisation</SubTitle>
                <Desc>Written And Oral Communication. Verbal communication is using words to convey information and it includes both written and oral communication.</Desc>
                <Button>Start Now</Button>
            </Right>
        </Container>
    )
}

export default Feture