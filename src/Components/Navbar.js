import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
height:60px;
`
const Wrapper=styled.div`
padding:10px 20px;
display:flex;
justify-content:space-between;
align-items:center;
`
const Left=styled.div`
width:60%;
display:flex;
align-items:center;
justify-content:space-between;
`
const Logo=styled.h1`
font-weight:bold;
text-decoration:underline crimson;
`
const Menu=styled.ul`
display:flex;
list-style: none;
`;

const Menuitem=styled.li`
margin-right:30px;
font-weight:bold;
font-size:20px;
color:gray;
`;
const Button=styled.button`
border:2px solid black;
padding:10px 15px;
background-color:crimson;
color:white;
font-weight:bold;
border-radius:10px;
`
function Navbar() {
  return (
  <Container>
      <Wrapper>
      <Left>
          <Logo>Logo</Logo>
          <Menu>
              <Menuitem>Home</Menuitem>
              <Menuitem>About</Menuitem>
              <Menuitem>Contact</Menuitem>
          </Menu>
          </Left>
      <Button>JOIN US</Button>
      </Wrapper>
  </Container>
  )
}

export default Navbar