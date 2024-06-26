import { useState, useEffect } from 'react'
import Main from '../../components/layout/Main/Main'
import Button from '../../components/Button/Button'
import S from './Home.styled'

export default function Home() {
  const [ name, setName ] = useState('')
  const [ yourName, setYourName ] = useState('')

  const handleSubmission = (e) => {
    e.preventDefault()
    setYourName(name)
  }

  useEffect(() => {
    document.getElementById('name').value = '';
  }, [yourName])
  

  return (
    <Main>
      <h1>Hello!</h1>
      <p>What is your name?</p>
      <form onSubmit={handleSubmission}>
        <S.TextInput id="name" type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Type here" required/><br />
        <Button type="submit" text="Submit"/>
      </form>
      { yourName && <p>Nice to meet you, {yourName}! :)</p> }
    </Main>
  )
}