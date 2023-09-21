import { useState } from 'react'
import imgNosotros from "../../img/CLIENTES.png";
import imgEquipo from "../../img/EQUIPO.png";
import imgCliente from "../../img/NOSOTROS.png";
import { QuoteUp } from 'iconsax-react'
import { QuoteDown } from 'iconsax-react'
import "./Panel.css";

const Frases=[
  "Nuestro cliente es primero",
  "Nuestro equipo es ganador",
  "Lo que hacemos, lo hacemos bien"
]
export default function Panel() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectFrases,setSelectFrases]=useState(Frases[0])


    const handleButtonClick = (img) => {
      setSelectedImage(img);
    };
    const handleFrases =(nuevaFrase)=>{
      setSelectFrases(nuevaFrase)
    }
  
  return (
    <div className="panel">
          <div className="button-container">
      <button onClick={() => {handleButtonClick(imgNosotros);handleFrases(Frases[0])} }>
      <h2>¿Quiénes somos?</h2>
      </button>
      <button onClick={() => {handleButtonClick(imgEquipo);handleFrases(Frases[1]) }}>
      <h2>Nuestro equipo</h2>
      </button>
      <button onClick={() => {handleButtonClick(imgCliente);handleFrases(Frases[2])}}>
      <h2>Nuestros clientes</h2>
      </button>
    </div>
    <h2 className='Frase'><QuoteUp size="32" color="#F38629" variant="Bold" /> {selectFrases} <QuoteDown size="32" color="#F38629" variant="Bold"/></h2>
    <br />
    <div className="image-container">
    <div className="logo-container">
      <img className="logo-img" src={selectedImage ? selectedImage : imgNosotros} alt="" />
    </div>
    </div>
    <br />

  </div>
  )
}
