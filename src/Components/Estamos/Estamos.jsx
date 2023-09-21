import './Estamos.css'
import AudifonosB from '../../img/Audifonos.png'
import DiagramaB from '../../img/Diagrama.png'
import DiagramaPieB from '../../img/Diagrama.png'
import PersonaB from '../../img/Persona.png'

export default function Estamos() {
  return (
    <div className='EstamosE'>
      <h1 className='TituloS'><a className='LinkS'>Estamos contigo</a></h1>
      <div className='CuadradosE'>

      <div className='CuadradoE'>
      <button className='BotonE'>
      <img src={AudifonosB} alt="ImagenE" className="imagenE" />
      <h1 className='subE'>Contact Center</h1>
      <p className="ContenidoE">No importa el canal que utilice tu cliente, con nuestra plataforma de Contact Center podrás atenderlo 24/7</p>
      </button>
      </div>

      <div className='CuadradoE'>
      <button className='BotonE'>
      <img src={DiagramaB} alt="ImagenE" className="imagenE" />
      <h1 className='subE'>Analíticas</h1>
      <p className="ContenidoE">Maneja todos los análisis de interaccion con una sola aplicación analiza conversaciones en chat, correo electrónico, redes sociales y aplicaciones de mensajería.</p>
      </button>
      </div>

      <div className='CuadradoE'>
      <button className='BotonE'>
      <img src={DiagramaPieB} alt="ImagenE" className="imagenE" />
      <h1 className='subE'>Reportes</h1>
      <p className="ContenidoE">Convierte los datos en informaion comercial valiosa.Los resportes se visualizarán a través de una interfaz gráfica de usuario, cuenta con herramientas de ususario, cuenta con los filtros, herramientas de análisis para generar informes, asi como reportes prediseñados.
      </p>
      </button>
      </div>

      <div className='CuadradoE'>
      <button className='BotonE'>
      <img src={PersonaB} alt="ImagenE" className="imagenE" />
      <h1 className='subE'>Planificación</h1>
      <p className="ContenidoE">Haz un seguimiento de actividades multicanal y de todos los canales para que puedas mantener a los agentes adecuados disponibles</p>
      </button>
      </div>
      
      </div>
    </div>
  )
}
