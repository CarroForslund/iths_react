import React from 'react'
import Fetch from '../../api/RandomDogPicture'
import Main from '../../components/layout/Main/Main'
import S from './Woof.styled'

export default function Woof() {
  return (
    <Main>
        <h1>Woof!</h1>
        <p>Here is a random dog picture for you</p>
        <S.ImageContainer>
          <Fetch/>
        </S.ImageContainer>
    </Main>
  )
}
