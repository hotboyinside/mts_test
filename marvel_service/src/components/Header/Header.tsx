import './Header.scss'

import { Link } from 'react-router-dom'


function Header() {
  return (
    <header className='header'>
        <div className="container">
            <nav className="nav">
                <ul className="nav__items list-reset">
                    <li className="nav__item"><Link to='/'>Главная</Link></li>
                    <li className="nav__item"><Link to='/heroes'>Герои</Link></li>
                    <li className="nav__item"><Link to='/comics'>Комиксы</Link></li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header
