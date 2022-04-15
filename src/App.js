import React from "react";
import styled, { css } from "styled-components";
import Navbar from "./Components/Navbar";
import Intro from "./Components/Intro";
import Feture from "./Components/Feture";
import Services from "./Components/Services";
import Pricecard from "./Components/Pricecard";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
const Container = styled.div`
height:100vh;
overflow:hidden;
position:relative;
`

const shape = css`
width:100%;
height:100%;
position:absolute;
top:0;  
left:0;
z-index:-1;
`
const Introshape = styled.div`
${shape}
clip-path: polygon(100% 0%, 59% 0%, 45% 99%, 100% 100%);
background-color:crimson;
`
const Ferureshape = styled.div`
${shape}
clip-path: polygon(0 0, 45% 0%, 33% 100%, 0 100%);
background-color:pink;
`
const Serviceshape = styled.div`
${shape}
clip-path: polygon(0 0, 33% 0%, 33% 100%, 0 100%);
background-color:crimson;
`
const Priceshape = styled.div`
${shape}
clip-path: polygon(100% 1%, 33% 0%, 59% 100%, 99% 100%);
background-color:crimson;
`
function App() {
  return (
    <>
      <Container>
        <Navbar />
        <Intro />
        <Introshape />
      </Container>
      <Container>
        <Feture />
        <Ferureshape />
      </Container>
      <Container>
        <Services />
        <Serviceshape />
      </Container>
      <Container>
        <Pricecard />
        <Priceshape />
      </Container>
      <Container>
        <Contact />
        <Footer />
      </Container>
    </>
  );
}

export default App;
