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

export default function Contato(){
    return(
        <>
            <Main>
                <h2>Contato</h2>
            </Main>
        </>
    )
}