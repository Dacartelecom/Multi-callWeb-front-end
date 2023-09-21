import './Servicios.css'
import Cliente from '../../img/AtencionCliente.jpg'
import Back from '../../img/Backofice.jpg'
import Ventas from '../../img/Televentas.jpg'
import Image from '../MovilImg/Image'


export default function Servicios() {
  return (
    <div className='Servicios' id='servicios'>
      <h1 className='TituloS'><a className='LinkS'>Nuestros Servicios</a></h1>
      <div className='ImagenesS'>
      <div className='ImgSer' >
      <Image src={Cliente} alt='Atencion al cliente' title='Atencion al cliente' text='Optimizamos tus procedimientos internos. 
      Contamos con el mejor talento humano para lograr los objetivos'/>
      </div>
      <div className='ImgSer' >
      <Image src={Back} alt='Backoffice' title='Backoffice' text='Integramos todos los canales de comunicación para atender el 100% de tu mercado y asi crecer juntos'/>
      </div>
      <div className='ImgSer' >
      <Image src={Ventas} alt='Televentas' title='Televentas' text='Campañas telefónicas.
Llamamos a tus prospectos de ventas dando prioridad a tus clientes potenciales.'/>
      </div>

      </div>      
    </div>
  )
}