import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
margin:40px;
padding:20px;
-webkit-box-shadow: 4px 6px 10px -2px rgba(0,0,0,0.72);
box-shadow: 4px 6px 10px -2px rgba(0,0,0,0.72);
background-color:white;
border-radius:10px;
display:flex;
flex-direction:column;
align-items:center;
`
const Prices = styled.span`
font-weight:bold;
font-size:50px;
`
const Type = styled.div`
padding:10px;
margin:10px 0;
border:1.5px solid crimson;
background-color:white;
border-radius:20px;
`
const PricecardContainer = styled.div`
display:flex;
align-items:center;
`
const List = styled.ul`
list-style:none;
`
const Listitem = styled.li`
margin:30px 0;
`
const Button = styled.button`
padding:10px;
margin:10px 0;
border:none;
background-color:darkblue;
border-radius:10px;
color:white;
font-weight:bold;
cursor: pointer;
`
function Price({price,type}) {
  return (
    <Container>
        <PricecardContainer>
            <Prices>${price}</Prices>/month
            </PricecardContainer>
            <Type>{type}</Type>
           
            <List>
                <Listitem>Power BI Pro is included in Microsoft 365 E5.</Listitem>
                <Listitem>Available to buy now with a credit card.1</Listitem>
                <Listitem>icense individual users to accelerate access to</Listitem>
                <Listitem>data prep for big data, and simplify data</Listitem>
            </List>
            <Button>Buy now</Button>
    </Container>
  )
}

export default Price