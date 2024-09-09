import './FormStyles.css'
import { Link } from 'react-router-dom'

function SignUp() {
    return(
        <section className="form-section">
        <form>
            <h1>Create an account</h1>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" />
            <div className="form-button-container">
            <button type="submit" className="submit-btn">Sign up</button>
            <Link to="/" className="cancel-btn">Cancel</Link>
            </div>
        </form> 
        </section>
    )
}

export default SignUp