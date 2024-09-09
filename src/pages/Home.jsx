import './Home.css'
import '../components/ButtonStyles.css'
import { Link } from "react-router-dom"

function Home() {
    
    return(
        <section className="homepage">
            <div className="hero">
                <h1>Welcome to !MissingLink</h1>
                <h5>The app where you can compile all of your links and sites</h5>
            </div>
            <div className="button-container">
                <Link to="/signup" className="signup-btn">Sign Up</Link>
                <Link to="/login" className="login-btn">Log In</Link>
            </div>
        </section>
        
    )
}

export default Home