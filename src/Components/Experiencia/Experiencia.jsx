import { useState } from 'react'

import './Experiencia.css'
import { useEffect } from 'react'
const Experiencia = ({img, number, duracion,text}) => {
  const [count, setCount] = useState(0);
  const [loadder,setLoadder] =useState(true)

  const interval = duracion * 1000 / number 

  useEffect (()=>{
    const steps = number;
    let currenSteps =0;
    
    const timer =setInterval(()=>{
      currenSteps+=1;
      setCount(currenSteps)
      if(currenSteps>=steps){
        clearInterval(timer)
      }

    },interval)

    return()=>{
      clearInterval(interval);
    };
  },[number,interval])

  useEffect(() => {
    const interval =setInterval(()=>{
      setLoadder(false);
    },2500)

    return()=>{
      clearInterval(interval);
    };
  }, []);
  return (
    <div className='container-component-experiencia'>
      <div className='container-loadder'>
      {loadder &&  <div className='icono-experiencia circle'/>}
      <div className='border'/>
      <img className='icono' src={img} alt="icono" />

      </div>



      <div className='text-initial-experiencia'>
        <div className='tittle-experiencia'>
        <span>+{count}</span>
        </div>

        <div className='text-optional'>
        <span className='optional-text'>{text}</span>
        </div>
      </div>
    </div>
  )
}

export default Experiencia
