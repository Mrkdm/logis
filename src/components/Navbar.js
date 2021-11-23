import React from 'react'
import logoLogisitca from '../assets/images/Logo-Logistica.png'
const Navbar = () => {
    return (
  <div className="">





  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <img className="" style={{ width:170, objectFit:'cover'}} src={logoLogisitca} />
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Inicio <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Casas en venta
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="/casasMerida">Merida</a>
          <a className="dropdown-item" href="/casasCancun">Cancun</a>
    
        </div>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Casas en renta
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Merida</a>
          <a className="dropdown-item" href="#">Cancun</a>
   
        </div>
      </li>

    </ul>
 
  </div>
</nav>

  </div>
    )
}

export default Navbar
