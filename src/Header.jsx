import { Link } from 'react-router-dom'

const Header = () => {
    return (
    <div className='header'>
      <nav>
        <div className='logo'>
          <Link className='logo-head' to='/'>
            <h1>Note Maker</h1>
          </Link>
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
