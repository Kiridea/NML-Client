import './FormStyles.css'
import { Link } from 'react-router-dom'

function LogIn() {
    return(
        <section className="form-section">
        <form>
            <h1>Log in</h1>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
            <div className="form-button-container">
            <button type="submit" className="submit-btn">Log in</button>
            <Link to="/" className="cancel-btn">Cancel</Link>
            </div>
        </form> 
        </section>
    )
}

export default LogIn