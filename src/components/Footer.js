import React from 'react'

const Footer = () => {
    return (
       <footer className="bgDark">
           <div className="container">
               <img src="http://logisticainmobiliaria.mx/static/media/logo-logis.7efac62e.jpeg" alt="logo" className="logo-brand" alt="" />
               <ul className="list-inline">
                   <li className="list-inline-item footer-menu"><a href="">Inicio</a></li>
                   <li className="list-inline-item footer-menu"><a href="">Sobre Nosotros</a></li>                   <li></li>
                   <li className="list-inline-item footer-menu"><a href="">Contacto</a></li>
                   
                   
               </ul>
         
               <small>
                   Todos los derechos reservados logisticainmobiliaria
               </small>
           </div>
       </footer>
    )
}

export default Footer
