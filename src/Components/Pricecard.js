import React from 'react'
import Price from './Price'
import styled from 'styled-components';

const Container = styled.div`
height:100%;
display:flex;
justify-content:space-between;
align-items:center;
`

function Pricecard() {
  return (
    <Container>
        <Price price='10' type='Basic Plan'/>
        <Price price='20' type='Advance Plan'/>
        <Price price='30' type='Prime Plan'/>
    </Container>
  )
}

export default Pricecard