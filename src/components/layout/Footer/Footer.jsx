import S from './Footer.styled'

export default function Footer() {
    const currentYear = new Date().getFullYear();
  return (
    <S.Footer>
      <p>© Carro & Chloe {currentYear}</p>
    </S.Footer>
  )
}