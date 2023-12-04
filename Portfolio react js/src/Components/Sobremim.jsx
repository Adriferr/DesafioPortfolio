import styled from "styled-components";

const Main  = styled.main`
    background-color: #141325;
    border: solid black;
    height: 91.5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: white;
`


export default function Sobremim(){

    return(
        <>
            <Main>
                <h2>Adri Ferreira</h2>
                <h3>Meu nome é Adri Ferreira, tenho 20 anos e me tornei recentemente um desenvolvedor front-end cursando no Vai na Web e atualmente estudo Ciência da Computação na universidade Anhembi Morumbi</h3>
            </Main>
            
        </>
    )
}