import "./NavBar.css";
import logo from "./logo-negro.jpg";
import CartWidget from "../CartWidget/CartWidget"; 


const NavBar = () => {
    return (
        <>
         <div className="collapse" id="navbarToggleExternalContent">
            <div className="bg-dark p-4">
                <li className="nav-item">
                    <a className="active nav" href="#tortas">Inicio</a>
                </li>                
                <li className="nav-item">
                    <a className="active nav" href="#tortas">Tortas</a>
                </li>
                <li className="nav-item">
                    <a className="active nav" href="#alfajores">Alfajores</a>
                </li>
                <li className="nav-item">
                    <a className="active nav" href="#bom">Bombones</a>
                </li>
                <li className="nav-item">
                    <a className="active nav" href="#contacto">Contacto</a>
                </li>
            </div>
          </div>
          <nav className="navbar navbar-dark bg-dark d-flex">
            <div className="container-fluid">              
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <img src= {logo} alt="logo tienda" className="logo"/>
              <h1 className="titulo">Mary Delicatessen</h1>  
              <CartWidget />                                     
            </div>
          </nav>
        </>       
    );
};
export default NavBar;


