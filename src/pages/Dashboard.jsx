import './Dashboard.css'
import LinkForm from "../components/LinkForm"
import LinkDisplay from "../components/LinkDisplay"

function Dashboard() {
    return(
        <section className="dashboard">
            <div className="dashboard-form">
            <h2>Hello, user</h2>
            <h3>Manage your !MLs</h3>
            <LinkForm />
            </div>
            <div className="dashboard-link-display">
            <h3>Visitor view</h3>
            <LinkDisplay />
            </div>
        </section>
    )
}

export default Dashboard