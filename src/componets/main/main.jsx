import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import wrapp_left from "../../img/left-foto.jpg"
import wrapp_right from "../../img/right-foto.jpg"
import "./main.css"

export default function Main () {
  const[desing, setDesing] = useState(true)
  const[devi, setDevi] = useState(true)

  let des
  let dev
  let timerDes
  let timerDev

  useEffect(() => {
    timerDes = setInterval(() => setDesing(!desing), 1000)
    return () => { clearInterval(timerDes)}
  }, [desing]);

  if(desing){
    des = <p className={'eng'}>Desing</p>
  } else {
    des = <p className={'rus'}>Дизайн</p>
  }

  useEffect(() => {
    timerDev = setInterval(() => setDevi(!devi), 1000)
    return () => { clearInterval(timerDev)}
  }, [devi]);

  if(devi){
    dev = <p className={'eng'}>Development</p>
  } else {
    dev = <p className={'rus'}>Разработка</p>
  }

  return (
    <div className={'main'}>
      <NavLink to={"/portfolioDes"} className={'wrapper_left'} onMouseEnter={() => setDesing(!desing)}
               onMouseOver={() => clearInterval(timerDev)}>
        <div>
          {des}
          <img src={wrapp_left} alt="left foto" className={'left_foto'}/>
        </div>
      </NavLink>
      <NavLink to={"/portfolioDev"} className={'wrapper_right'} onMouseEnter={() => setDevi(!devi)}
               onMouseOver={() => clearInterval(timerDes)}>
        <div>
          {dev}
          <img src={wrapp_right} alt="right foto" className={'right_foto'}/>
        </div>
      </NavLink>
    </div>
  );
}