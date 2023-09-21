import './Footer2.css';
import { Facebook } from 'iconsax-react';
import img from '../../img/McB.png';
import { Instagram } from 'iconsax-react';
import { Location } from 'iconsax-react';
import ButtonTop from '../ButtonTop/ButtonTop';



export default function Footer2() {
  const style={
    marginTop:'2em'
  };
  return (
    <div className='footer'>
      <div className='sd_footer secction_padding'>
        <div className='sb_footer-links'>
          <div className='sb_footer-links_div'>
            <img className='ImagenF' src={img} alt="imagen dyc"/>
          </div>
          <div className='sb_footer-links_div'>
          <div className='Direccion'> 
          <p><Location className='logo' size="40" color="#FFFFFF"/></p><h4> DIRECCIÓN </h4> </div>
            <p className='dieccion-text'>Av. Manuel Prado 428, Carabayllo, Lima, Perú</p>
          </div>
          <div className='sb_footer-links_div'>
           {/*<div className='Telefono'> 
          <p><CallCalling className='logo' size="30" color="#FFFFFF"/></p><h4 >TELÉFONO</h4>
          </div>
           <a className='LinkF' href="tel:923226771">
              <p>+51 958 236 886</p>
            </a>*/ }
          </div>
          <div className='sb_footer-links_div'>
          <div className='Correo'> 
          <p><i className="fa fa-envelope logo"></i></p><h4 style={style}>CORREO</h4>
          </div>
            <a className='LinkF' href="mailto:reclutamiento@agoratelecom.pe">
              <p>reclutamiento@agoratelecom.pe</p>
            </a>
          </div>
          <div className='sb_footer-links_div'>
          <h4>SÍGUENOS</h4>
          <div className='socialmedia'>
          <p>
            <a href="https://www.facebook.com/AgoraContactCenter/">
          <Facebook className='logo' size="64" color="#FFFFFF" variant="Outline"/>
          </a></p>
          <p>
            <a href="https://www.instagram.com/agora.contactcenter/">
              <Instagram  className='logo' size="64" color="#FFFFFF"/></a>
          </p>
          </div>
          </div>
        </div>
        <hr/>
        <div className='sb_footer-below'>
          <div className='sb_footer-copyright'>

            <p>
              @{new Date().getFullYear()}. Todos los derechos reservados.
            </p>
            <div className='sb_footer-below-links'>
            <ButtonTop/>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
