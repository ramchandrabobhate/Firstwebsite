import React from 'react'
import styled from 'styled-components'
import Search from '../Img/search.png'

const Container=styled.div`
width:100px;
padding:20px;
display:flex;
flex-direction:column;
-webkit-box-shadow: 4px 6px 10px -2px rgba(0,0,0,0.72);
box-shadow: 4px 6px 10px -2px rgba(0,0,0,0.72);
`
const Image=styled.img`
width:20px;
`
const Text=styled.span`
font-size:15px; 

`
function Mastercard() {
  return (
   <Container>
       <Image src={Search}/>
           <Text>Being a good listener is one of the best ways to be a good communicator </Text>
       
   </Container>
  )
}

export default Mastercard