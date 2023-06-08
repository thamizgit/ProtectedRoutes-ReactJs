import '../App.css'
import { Link } from 'react-router-dom';
const LinkPage = () => {
    return (
        <section className="App-register">
            <h2>Links</h2>
            <h1>Public</h1>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
            <br></br>
            <br></br>
            <h1>Private</h1>
            <Link to="/admin">Admin Page</Link>
            <Link to="/editor">Editor Page</Link>
            <Link to="/home">Home Page</Link>
            <Link to="/lounge">Lounge Page</Link>
        </section>
    )
}
export default LinkPage