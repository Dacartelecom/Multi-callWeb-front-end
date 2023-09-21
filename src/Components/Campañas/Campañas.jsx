import './Campañas.css'
import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import imgCamp1 from '../../img/EmpresaLogo1.png'
import imgCamp2 from '../../img/EmpresaLogo2.png'
import imgCamp3 from '../../img/EmpresaLogo3.png'
import imgCamp4 from '../../img/EmpresaLogo4.png'
import imgCamp5 from '../../img/EmpresaLogo5.png'
import imgCamp6 from '../../img/EmpresaLogo6.png'
import imgCamp7 from '../../img/EmpresaLogo7.png'
// import required modules
import { EffectCoverflow, Pagination } from "swiper";

const Campañas = () => {

  return (
    <div className='contenido-total-camp' id='clientes'>
      <h1 className='TituloS'><a className='LinkS'>Clientes</a></h1>
    <div className='text-adicional'>
    <span>Somos el mejor socio estratégico, ¡Lo dicen nuestros clientes!</span>
      <h2>Nuestros principales clientes que confían en nosotros para su transformación:</h2>
    </div>
      <div className='container-campaing'>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"3"}
        coverflowEffect={{
          rotate: 40,
          stretch: 10,
          depth: 100,
          modifier: 1,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper swip-camp"
      > 
      <div className='left-camp'>
      <SwiperSlide>
          <div className='camp-img'>
            <img src={imgCamp1} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='camp-img'>
            <img src={imgCamp2} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='camp-img'>
          <img src={imgCamp3} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='camp-img'>
          <img src={imgCamp4} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='camp-img'>
          <img src={imgCamp5} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='camp-img'>
            <img src={imgCamp6} />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='camp-img'>
          <img src={imgCamp7} />
          </div>
        </SwiperSlide>
      </div>






      </Swiper>
    </div>
    </div>
  )
}

export default Campañas
