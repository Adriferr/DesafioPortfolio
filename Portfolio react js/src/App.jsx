import styled from "styled-components";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Introducao from "./Components/Introducao";
import Sobremim from "./Components/Sobremim";
import Habilidades from "./Components/Habilidades";
import Projetos from "./Components/Projetos";
import Contato from "./Components/Contato";
import { createGlobalStyle } from "styled-components";
import { useState } from 'react'
import './App.css'



const GlobalStyles = createGlobalStyle`
    *{
      @import url('https://fonts.googleapis.com/css2?family=Sawarabi+Gothic&display=swap');
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
  `;

  const Header = styled.header`
    background-color: #0e002f;
    border: solid red;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: white;
  `

  const Nav = styled.nav`
    border: solid blue;
    padding: 15px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  `;

  const Ul = styled.ul`
    border: solid red;
    width: 30vw;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    list-style: none;
    text-decoration: none;
  `;

  const Links = styled(Link)`
    color: white;
    text-decoration: none;
    padding: 8px;
    font-size: 16px;
  
    &:hover {
      border-bottom: 4px solid white;
    }
  `;

  const Span = styled.span`
    color: purple;
  `

export default function App() {
  return (
    <>
      <GlobalStyles/ >

      <BrowserRouter>
                {/* <Header> */}
                    <Header>
                    <h1><Span>A</Span>dri <Span>F</Span>erreira</h1>
                      <Nav>
                        <Ul>
                          <li>
                            <Links to ="/">Introducao</Links>
                          </li>
                          <li>
                            <Links to ="/sobremim">Sobre mim</Links>
                          </li>
                          <li>
                            <Links to ="/habilidades">Habilidades</Links>
                          </li>
                          <li>
                            <Links to ="/projetos">Projetos</Links>
                          </li>
                          <li>
                            <Links to ="/contato">Contato</Links>
                          </li>
                        </Ul>
                      </Nav>

                    </Header>
                    <Routes>
                        <Route path="/" element ={<Introducao />} />
                        <Route path="/sobremim" element={<Sobremim />} />
                        <Route path="/habilidades" element={<Habilidades/>}/>
                        <Route path="/projetos" element={<Projetos />} />
                        <Route path="/contato" element={<Contato />} />
                    </Routes>
                {/* </Header> */}

                {/* <Introducao /> */}

            </BrowserRouter>
            
           

    </>
  )
}
