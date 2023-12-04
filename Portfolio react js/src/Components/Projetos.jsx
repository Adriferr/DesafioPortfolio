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

export default function Projetos(){
    return(
        <>
        <Main>
            <h2>Projetos</h2>
        </Main>
        </>
    )
}