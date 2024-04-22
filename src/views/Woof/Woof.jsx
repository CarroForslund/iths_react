import React from 'react'
import Fetch from '../../api/RandomDogPicture'
import Main from '../../components/layout/Main/Main'

export default function Woof() {
  return (
    <Main>
        <h1>Woof!</h1>
        <Fetch/>
        <p>Here is a random dog picture. Reload the page for a new one.</p>
    </Main>
  )
}
