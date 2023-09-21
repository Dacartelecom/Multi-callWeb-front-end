import './Portada.css'
import imgPort from '../../img/operadora-multicall.png'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper";
import { useEffect, useState } from 'react';


const Portada = () => {
  const [load, setLoad]=useState(false);

  useEffect(()=>{
    const loadinTimeout = setTimeout(()=>{
      setLoad(true)
    },900);

    return ()=>{
      clearTimeout(loadinTimeout)
    }
  })
  return (
    <div className={`container-portada ${load ? 'load':''}`}>
<Swiper
        spaceBetween={30}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay]}
        className="mySwiper swipPortada"
      >
      <SwiperSlide>
        <div className='CuadroV'>
        <p className='TextoV'>En nuestro call center, cada llamada es una oportunidad para marcar la diferencia.</p>
        </div> 
      </SwiperSlide>
      <SwiperSlide>
        <div className='CuadroV'>
        <p className='TextoV'>En el corazón de nuestra empresa, el call center es el vínculo entre nuestros clientes y el éxito</p>
        </div> 
      </SwiperSlide>
      <SwiperSlide>
        <div className='CuadroV'>
        <p className='TextoV'>En el call center, damos vida a la satisfacción del cliente a través de nuestras voces amigables.</p>
        </div> 
      </SwiperSlide>
      <SwiperSlide>
        <div className='CuadroV'>
        <p className='TextoV'>Ponemos a disposición de la Administración Pública todos los medios técnicos que presta sus servicios a la ciudadanía.</p>
        </div> 
      </SwiperSlide>

      <SwiperSlide>
        <div className='CuadroV'>
        <p className='TextoV'>Nuestra empresa de call center se dedica a mejorar la experiencia del cliente, llamada tras llamada.</p>
        </div>
      </SwiperSlide>
       
      <SwiperSlide>
        <div className='CuadroV'>
        <p className='TextoV'>El call center: el puente que une a los clientes con la excelencia en el servicio.</p>
        </div> 
      </SwiperSlide>
        
      <SwiperSlide>
        <div className='CuadroV'>
        <p className='TextoV'>La excelencia en el servicio al cliente es nuestro distintivo en el call center.</p>
        </div> 
      </SwiperSlide>

    </Swiper>
    <div className='img-port'>
      <img className='dis-none' src={imgPort} alt="Portada" />
    </div>
    </div>
  )
}

export default Portada
