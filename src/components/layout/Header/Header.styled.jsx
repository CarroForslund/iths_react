import styled from 'styled-components'

const Header = styled.header`
    background-color: #282c34;
    min-height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: white;
    padding: 0 20px;
    box-shadow: 0 3px 5px rgba(57,63,72,.3);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 100;
    nav ul {
        list-style: none;
        display: flex;
        flex-direction: row;
        gap: 20px;
        margin: 0;
        padding: 0;
        li {
            a {
                text-decoration: none;
                color: white;
                &:hover {
                    color: #61dafb;
                }
            }
        }
    }
`

const S = {
    Header
}

export default S