import React, { useState } from 'react'
import { useTheme } from './../../ThemeContext' 
import S from './Switch.styled'

export default function Switch() {
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => {
    console.log('switch toggle')
    setIsOn(!isOn)
    console.log('isOn', isOn)
  };

  return (
    <S.Label>
      <S.Input type='checkbox' checked={useTheme.theme === 'dark'} onChange={useTheme.toggleTheme}/>
      <S.Slider/>
    </S.Label>
  )
}
