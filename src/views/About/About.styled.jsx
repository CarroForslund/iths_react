import styled from "styled-components"

const ImageFullWidth = styled.img`
    width: 100%;
    max-height: 800px;
    object-fit: cover;
`

const PeopleContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const S = {
    ImageFullWidth,
    PeopleContainer
}

export default S