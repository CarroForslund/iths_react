import styled from "styled-components"

const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100px 200px;
    transition: ease-in-out all 0.1s;
    &.dark {
        background-color: #282c34;
        color: white;
    }
`

const S = {
    Main
}

export default S