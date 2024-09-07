import './Navbar.css'
import './ButtonStyles.css'
import { Link } from 'react-router-dom'

function Navbar() {
    return(
        <nav>
            <Link to="/" className="app-icon">
                <h3>!ML</h3>
            </Link>
            <Link to="/about">
                <h6>About</h6>
            </Link>
        </nav>
    )
}

export default Navbar