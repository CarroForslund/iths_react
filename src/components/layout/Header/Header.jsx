import { Link } from "react-router-dom";
import S from './Header.styled'
import Switch from '../../Switch/Switch'

export default function Header() {
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
            </ul>
        </nav>
        <Switch/>
    </S.Header>
  )
}
