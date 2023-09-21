import  { useState } from 'react'
import {MenuItems} from './MenuItems'
import './Navbar2.css'
import imgN from '../../img/McB.png'

const Navbar2=()=>{
  /*Menu */
  const[menu,setMenu]=useState(['nav-menu','nav-menu active'])
  const[indice,setIndice]=useState(0)
  const handleMenu=()=>{
    const newMenu=(indice+1)%menu.length;
    setIndice(newMenu)
  }
  /*icono*/
const[clicked,setClicked]=useState(['fa fa-reorder','fa fa-remove'])
const[indiceActual,setIndiceActual]=useState(0)
  const handleclick=()=>{
    const newIndice=(indiceActual+1)%clicked.length;
    setIndiceActual(newIndice)
  }
  /*Funcion doble */
  const handleName=()=>{
    handleMenu();
    handleclick();
  }

  return (

<nav className='NavbarItems'>
<img className='navbar-logo' src={imgN} alt="DacarB" />
  <div className='menu-icon' onClick={handleName}>
  <i className={clicked[indiceActual]}></i>
  </div>
  <ul className={menu[indice]}>
        {MenuItems.map((item,index)=>{
          return(
            <li key={index}>
              <a className={item.cName} href={item.url}>
                {item.tittle}
              </a>
            </li>
          )
        })}
    </ul>
</nav>
    
  )
}
export default Navbar2;