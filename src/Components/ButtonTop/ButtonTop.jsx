import React, { useEffect, useState } from 'react'
import { ArrowSquareUp } from 'iconsax-react';

import './ButtonTop.css'


export default function ButtonTop() {
const [visible,setVisible]=useState(false)
  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
<ArrowSquareUp size="40" color="#FFFFFF" className={`scroll-to-top ${visible ? "show" : ""} facebok`} onClick={handleClick}/>
)
}
