import React from 'react'
import styled from 'styled-components'

const Square=styled.div`
width:60px;
height:60px;
background-color:blue;
opacity:0.7;
position:absolute;
top:0px;
left:0px;
z-index:-1;
animation: square 25s linear alternate infinite;
@keyframes square {
   to{
       transform:translate(100vw,100vh)
   } 
}
`
function AnimatedShape() {
  return (
<Square/>
  )
}

export default AnimatedShape