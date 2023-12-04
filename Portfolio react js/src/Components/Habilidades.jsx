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

const Figure = styled.figure`
    border: solid green;
    display: flex;
    align-items: center;
    height: 50vh;
    width:98vw;
`

const ImgHTML = styled.img`
    width: 10vw;
`

const ImgCSS = styled.img`
    width: 10vw;
`

const ImgJS = styled.img`
    width: 10vw;
`

export default function Habilidades(){
    return(
        <>
            <Main>
                <Figure>
                    <ImgHTML src="https://cdn.icon-icons.com/icons2/1488/PNG/512/5352-html5_102567.png" alt="" />
                    <figcaption>HTML</figcaption>

                    <ImgCSS src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_css_icon_130661.png" alt="" />
                    <figcaption>CSS</figcaption>

                    <ImgJS src="https://cdn.icon-icons.com/icons2/2415/PNG/512/javascript_plain_logo_icon_146454.png" alt="" />
                    <figcaption>JavaScript</figcaption>

                    <ImgJS src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_reactjs_icon_130205.png" alt="" />
                    <figcaption>React</figcaption>

                    <ImgJS src="https://cdn.icon-icons.com/icons2/2415/PNG/512/java_original_wordmark_logo_icon_146459.png" alt="" />
                    <figcaption>Java</figcaption>

                    <ImgJS src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_styled_icon_130142.png" alt="" />
                    <figcaption>Styled Components</figcaption>

                    <ImgJS src="https://cdn.icon-icons.com/icons2/2699/PNG/512/git_scm_logo_icon_170096.png" alt="" />
                    <figcaption>Git</figcaption>

                    <ImgJS src="https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_vscode_icon_130084.png" alt="" />
                    <figcaption>VS Code</figcaption>
                </Figure>
            </Main>
        </>
    )
}