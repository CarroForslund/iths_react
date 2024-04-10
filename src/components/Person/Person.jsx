import PropTypes from 'prop-types'
import S from './Person.styled'
import { useRef } from 'react'

export default function Person( { name, age, birthplace, image } ) {

    const imgRef = useRef()
    return (
        <S.Person>
            <S.Portrait 
                ref={imgRef}
                src={image}
                alt={name}
                onMouseOver={() => {
                    imgRef.current.style.filter = "grayscale(100%)"
                }}
                onMouseOut={() => {
                    imgRef.current.style.filter = "grayscale(0%)"
                }}
            />
            <h2>{name}</h2>
            <p>{age} years old</p>
            <p>From {birthplace}</p>
        </S.Person>
    )
}

Person.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    birthplace: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
}