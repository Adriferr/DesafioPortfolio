import styled from "styled-components";

const Main = styled.main`
    background-color: #141325;
    border: solid black;
    height: 91.5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: white;
`

const H2 = styled.h2`
    // background: linear-gradient(to right, #471754, #ff5e62);
    // -webkit-background-clip: text;
    // color: transparent;

`

const Span = styled.span`
    color: purple;
`

export default function Introducao(){
    return(
        <>
            <Main>
                <H2><Span>O</Span>lá, eu sou...</H2>
                <h1><Span>A</Span>dri Ferreira</h1>
                <h3>Desenvolvedor front-end e estudante do curso Ciência da Computação</h3>
            </Main>
            
        </>
    )
}