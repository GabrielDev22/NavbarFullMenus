import { useState } from "react"
import "./Navbar.css"

export const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [subList, setSubList] = useState(false);
    const [subListNoticias, setSubListNoticias] = useState(false)

    const mostrarSubList = () => {
        setSubList(!subList)
    }

    const mostrarSubListNoticias = () => {
        setSubListNoticias(!subListNoticias)
    }
 
  return (
    <div className="navbar">
        <div className="nav_logo">DevGabriel</div>
        <div className={`nav_items ${isOpen && "open"}`}>
            <ul className="nav_list">
                <li className="nav_listItem"><a>Inicio</a></li>
                <li className="nav_listItem">
                   <div className="contenidoNavItem">
                        <a>Propiedades</a>
                        <img className="iconoDown" onClick={(mostrarSubList)} src="img/chevron-down.svg" alt="" />                   
                        <ul className={`nav_listItem_subItems ${subList ? "nav_listItem_subItems-active" : ""}`}>
                            <li className="subItems">Alquileres</li>
                            <li className="subItems">Alquileres</li>
                            <li className="subItems">Alquileres</li>
                        </ul>
                    </div> 
                </li>
                <li className="nav_listItem">
                    <div className="contenidoNavItem">
                        <a>Noticias</a>
                        <img className="iconoDown" onClick={(mostrarSubListNoticias)} src="img/chevron-down.svg" alt="" />
                    </div>
                        <ul className={`nav_listItem_subItems ${subListNoticias ? "nav_listItem_subItems-active" : ""}`}>
                            <li className="subItems">Noticias</li>
                            <li className="subItems">Noticias</li>
                            <li className="subItems">Noticias</li>
                        </ul>
                </li> 
            
                    <li className="nav_listItem"><a>Equipo</a></li>                
               
            </ul>
        </div>
        <div className={`nav_toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
  )
}
