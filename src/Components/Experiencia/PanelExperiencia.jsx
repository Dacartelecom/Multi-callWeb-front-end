import Experiencia from './Experiencia'
import img1 from '../../img/icono1.png'
import img2 from '../../img/icono2.png'
import img3 from '../../img/icono3.png'
import img4 from '../../img/icono4.png'
import './PanelExperiencia.css'

const PanelExperiencia = () => {
  return (
    <div className='container-panel'>
      <div className='container-text'>
      <h1 className='tittle-link'><a className='links'>NUESTRA EXPERIENCIA NOS RESPALDA</a></h1>
          <div className='text-container'>
          <p className='content-text'>
          Ofrecemos soluciones innovadoras a lo largo de diversos sectores, con modelos de precios rentables, que garantizan a nuestros clientes un retorno de su inversión. Somos reconocidos como un mejor socio estratégico, solvente y flexible para atender las crecientes demandas del mercado.
          </p>
        </div>
      </div>
      <div className='imagenes-panel'>
      <Experiencia img={img1} number={11} duracion={1} text='Años de amplia experiencia'/>
      <Experiencia img={img2} number={220} text='Profesionales especializados'/>
      <Experiencia img={img3} number={10} text='Clientes satisfechos'/>
      <Experiencia img={img4} number={7} text='Campañas comerciales activas'/>
      </div>
    </div>
  )
}

export default PanelExperiencia
