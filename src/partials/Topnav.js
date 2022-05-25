import 'react-bootstrap'
import 'react-router-dom'
import './App.css';
import { Link } from 'react-router-dom'
function Topnav() {
    return (
        <div className="container">
            <div className="row mt-4">
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-header bg-light">
                            les ventes d'aujourd'hui
                        </div>
                        <div className="card-body">
                            <h3 className="my-4 text-center">5000dh </h3>
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header bg-light ">
                            Statistics
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-4">
                                    <Link to="/categorie" className="text-decoration-none text-dark" >
                                        <div className="card my-card shadow text-center p-3">
                                            <h4>Catégories <i className="gg-toolbar-top"></i></h4>
                                            <h3>4</h3>
                                        </div>
                                    </Link>

                                </div>
                                <div className="col-md-4">
                                    <Link to="/Produit" className="text-decoration-none text-dark" >
                                        <div className="card my-card shadow text-center p-3">
                                            <h4>Produits <i className="fas fa-box"></i></h4>
                                            <h3>4</h3>
                                        </div>
                                    </Link>
                                </div>
                                <div className="col-md-4">
                                    <Link to="/Ordres" className="text-decoration-none text-dark" >
                                        <div className="card my-card shadow text-center p-3">
                                            <h4>Ordres <i className="fas fa-shipping-fast"></i></h4>
                                            <h3>4</h3>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Topnav