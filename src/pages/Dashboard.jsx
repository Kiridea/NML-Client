import './Dashboard.css'
import ProfileForm from "../components/ProfileForm"
import LinkDisplay from "../components/LinkDisplay"
import LinkForm from '../components/LinkForm'
import { useState } from 'react'

function Dashboard() {
    const [display, setDisplay] = useState(false)
    
    function displayForm() {
        if(display === false) setDisplay(true);
        else setDisplay(false)
    }

    return(
        <section className="dashboard">
            <div className="dashboard-forms">
            <h2>Hello, user</h2>
            <h3>Manage your !MLs</h3>
            <ProfileForm />
                <div className="links">
                    <button className="add-btn" onClick={displayForm}>+</button>
                    {display && <LinkForm displayForm={displayForm}/>}
                    
                </div>
            </div>
            <div className="dashboard-link-display">
            <h3>Visitor view</h3>
            <LinkDisplay />
            </div>
        </section>
    )
}

export default Dashboard