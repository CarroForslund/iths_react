import styled from "styled-components"

const Label = styled.label`
    position: relative;
    display: inline-block;
    width: 50px;
    height: 25px;
`

const Input = styled.input`
    opacity: 0;
    width: 0;
    height: 0;
`

const Slider = styled.span`
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ theme }) => (theme === 'light' ? '#ffffff' : '#333333')};
    color: ${({ theme }) => (theme === 'light' ? '#333333' : '#ffffff')};
    border-radius: 25px;
    transition: .5s;
    &:before {
        position: absolute;
        content: "";
        height: 19px;
        width: 19px;
        top: 3px;
        left: ${({ theme }) => (theme === 'light' ? '3px' : 'auto')};
        right: ${({ theme }) => (theme === 'light' ? 'auto' : '3px')};
        background-color: ${({ theme }) => (theme === 'light' ? '#333333' : '#ffffff')};
        border-radius: 50%;
        transition: .5s;
    }
`

const S = {
    Label,
    Input,
    Slider
}

export default S