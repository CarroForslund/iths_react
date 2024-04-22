import { Link } from "react-router-dom";
import S from './Header.styled'
import { useTheme } from './../../../context/ThemeContext'

export default function Header() {
  const { darkTheme, toggleTheme } = useTheme();
  console.log('darkTheme', darkTheme)
  
  return (
    <S.Header>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/woof">Woof</Link>
                </li>
                <li>
                    <input
                        type="checkbox"
                        className="themeToggleCheckbox"
                        autoComplete="off"
                        id="themeToggle"
                        defaultChecked={false}
                        onClick={()=> {toggleTheme()}}
                    />
                    <label htmlFor="themeToggle" className="themeToggleCheckbox-label">
                        <i className="fas fa-moon"></i>
                        <i className="fas fa-sun"></i>
                        <span className="ball"></span>
                    </label>
                </li>
            </ul>
        </nav>
    </S.Header>
  )
}
