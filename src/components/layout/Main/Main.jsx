import React from 'react'
import { useTheme } from './../../../context/ThemeContext'
import S from './Main.styled'

export default function Main( {children} ) {
  const { darkTheme } = useTheme();
  return (
    <S.Main className={ darkTheme ? 'dark' : '' }>
        {children}
    </S.Main>
  )
}
