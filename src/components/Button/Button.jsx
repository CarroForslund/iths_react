import React from 'react'
import S from './Button.styled'

export default function Button( { text, type } ) {
  return (
    <S.Button type={type}>{text}</S.Button>
  )
}
