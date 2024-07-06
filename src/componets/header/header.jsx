import React, {useEffect, useState} from "react";
import logo from "../../img/logo.png"
import { NavLink } from "react-router-dom";
import "./header.css"


export default function Header () {
  const [clock, setClock] = useState(new Date());
  const navListButt = [
    {
      name: 'Главная',
      url: '/'
    },
    {
      name: 'О себе',
      url: 'aboutMe'
    },
    {
      name: 'Портфолио',
      url: 'portfolioDD'
    }
  ]
  const listItom = navListButt.map((navListBu) => (
    <li className={'navLi'} key={navListBu.name}><NavLink to={navListBu.url} className={"navListBut"}> {navListBu.name} </NavLink></li>
  ));
  useEffect(() => {
    const interval = setInterval(() => {
      setClock(new Date());
    }, 1000);
    return () => clearInterval(interval)
  }, []);
  const hours = clock.getHours();
  const minutes = clock.getMinutes();
  const second = clock.getSeconds();

  const timeString =`${hours}:${minutes}:${second}`

  return (
    <header className={"header"}>
      <NavLink to={"/"}>
        <img src={logo} alt="logo" className={"logo"}/>
      </NavLink>
      <ul className={"navList"}>
        {listItom}
      </ul>
      <div className={"clock"}>{timeString}</div>
    </header>
  );
}