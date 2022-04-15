import React from 'react'
import styled from 'styled-components'
import Phone from '../Img/phone.png'
import Send from '../Img/send.png'
import Map from '../Img/map.png'
const Container = styled.div`
height:90%;
background:url("https://www.toptal.com/designers/subtlepatterns/patterns/double-bubble-outline.png");
`
const Wrapper = styled.div`
height:100%;
padding:20px;
display:flex;
justify-content:center;
align-items:center;
`
const Title=styled.h1`
margin:50px;
margin-top:0;
`
const Fromcontainer = styled.div`
width:50%;
`
const Form = styled.form`
height:250px;
display:flex;
align-items:center;
justify-content:center;
`
const LeftForm = styled.div`
height:100%;
display:flex;
flex-direction:column;
justify-content:space-between;
`
const RightForm = styled.div`
height:100%;
padding:20px;
display:flex;
flex-direction:column;
justify-content:space-between;
margin-right:20px;
`
const Input = styled.input`
width:200px;
padding:20px;
`
const Textarea = styled.textarea`
width:200px;
height:60%;
padding:20px;
`
const AddressContianer = styled.div`
width:50%;
display:flex;
flex-direction:column;
align-items:center;
`
const AddressItem = styled.div`
display:flex;
margin-bottom: 50px;
align-items:center;
`
const Icon=styled.img`
width:20px;
`
const Text=styled.span`
font-size:20px;
`

const Button=styled.button`
padding:10px;
margin:10px 0;
border:none;
background-color:darkblue;
border-radius:10px;
color:white;
font-weight:bold;
cursor: pointer;
`

function Contact() {
    return (
        <Container>
            <Wrapper>
               
                <Fromcontainer>
                    <Title>Question<br/>Let's Get Tuch in</Title>
                    <Form>
                    <LeftForm>
                        <Input placeholder='Your Name'></Input>
                        <Input placeholder='Your Email'></Input>
                        <Input placeholder='Your Subject'></Input>
                    </LeftForm>
                    <RightForm>
                        <Textarea placeholder='Your Message'></Textarea>
                        <Button>Send US</Button>
                    </RightForm>
                    </Form>
                </Fromcontainer>
                <AddressContianer>
                <AddressItem>
                    <Icon src={Map}></Icon>
                    <Text>123 Park Avenue</Text>
                    <Text>123 Park Avenue SD</Text>
                </AddressItem>
                <AddressItem>
                    <Icon src={Phone}></Icon>
                    <Text>85585222, </Text>
                    <Text>89756565 </Text>
                </AddressItem>
                <AddressItem>
                    <Icon src={Send}></Icon>
                    <Text>raja@gmail.com</Text>
                    <Text>rajdda@gmail.com</Text>
                </AddressItem>
            </AddressContianer>
            </Wrapper>
            
        </Container>
    )
}

export default Contact