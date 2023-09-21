import  { useState } from "react";
import "./Image.css";

const Image = ({ src,title, text }) => {
  const [hover, setHover] = useState(false);

  const handleMouseOver = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  return (
    <div className="image-container" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
      <img className={`image ${hover && 'hover'}`} src={src} alt="imagen" />
      {hover && <div className="text">

      <h1 className="tittle">{title}</h1>
      <h2 className="contenido">{text}</h2>

      </div> }
    </div>
    
  );
};

export default Image;