import { Link } from 'react-router-dom'

const Header = () => {
    return (
    <div className='header'>
      <nav>
        <div className='logo'>
          <h1 className='logo-head'>Note Maker</h1>
        </div>
        <div className='nav-links'>
          <ul>
            <li>
            <Link to='/create'>Write A Note</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    )
}

export default Header
