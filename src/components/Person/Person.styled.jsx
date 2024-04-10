import styled from "styled-components"


const Person = styled.div`
    border: 1px solid #ddd;
    padding: 20px;
    margin: 20px;
    display: inline-block;
    text-align: center;
`

const Portrait = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    object-fit: cover;
`

const S = {
    Person,
    Portrait
}

export default S