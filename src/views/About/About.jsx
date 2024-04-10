import Person from "../../components/Person/Person";
import Main from "./../../components/layout/Main/Main";
import S from "./About.styled"

export default function About() {
  return (
    <Main>
      <S.ImageFullWidth src="/chloe_and_camper.jpg" alt="Chloe and the camper on the beach" />
      <h1>About</h1>
      <p>Welcome to our website. We are Caroline and Chloe and we are exploring Europe together.</p>
      <S.PeopleContainer>
        <Person name="Carro" age={40} birthplace="Västerås, Sweden" image="/carro.jpeg"/>
        <Person name="Chloe" age={7} birthplace="Paleochora, Greece" image="/chloe.jpg"/>
      </S.PeopleContainer>
    </Main>
  )
}