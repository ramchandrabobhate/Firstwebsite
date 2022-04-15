import React from 'react'
import styled from 'styled-components'
import Mastercard from './Mastercard'
import book_PNG2111 from '../Img/book_PNG2111.png'

const Container = styled.div`
display:flex;
`
const Left = styled.div`
width:50%;
`
const Imge = styled.img`
height:100%;
width:50%;
margin-left:100px;
`
const Right = styled.div`
width:50%;
`
const Wrapper = styled.div`
padding:10px;
display:flex;
flex-direction:column;
`
const Title = styled.h1`
padding:50px;
display:flex;
`
const Desc = styled.p`
font-size:20px;
margin-top:20px;
color:#555;
`
const CardContainer = styled.div`
display:flex;
justify-content:space-between;
margin-top:50px;
`

function Services() {
    return (
        <Container>
            <Left>

            </Left>
            <Right>
                <Wrapper>
                    <Title>Top 10 Communication Skills</Title>
                    <Desc>The ability to communicate effectively with superiors, colleagues, and staff is essential, no matter what industry you work in. Workers in the digital
                        age must know how to effectively convey and receive messages in person as well as via phone,
                        email, and social media.
                    </Desc>
                    <CardContainer>
                        <Mastercard />
                        <Mastercard />
                        <Mastercard />
                    </CardContainer>
                </Wrapper>
            </Right>
        </Container>
    )
}

export default Services