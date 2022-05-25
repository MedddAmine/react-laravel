import 'react-bootstrap'
import 'react-router-dom'
import './App.css';
import { Link } from 'react-router-dom'
function Header (){
    return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light eyo">
        <div className="container">
            <a className="navbar-brand " href="">TiziNtimimt</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">

                <ul className="navbar-nav ms-auto">

                    <li className="nav-item">
                        <Link to="/Logout" className="text-decoration-none text-dark">Logout</Link>
                        
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}
export default Header