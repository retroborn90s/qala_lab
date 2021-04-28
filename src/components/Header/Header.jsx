import React,{useState} from 'react';
import logo from "./../../logo.svg"
import logo2 from "./../../logo2.svg"
import {NavLink} from "react-router-dom";
import './../style.css'


let logoImg;

    const Header = (props) => {
    const [header,setWrapper ] =useState(false);
    const [menu,setNav] =useState(false);
  const changeMenu = ()=>
        {
            if ( window.scrollY > 100 && window.scrollY > scrollPrev )
            {
                setNav(true)
            }
            else
            {
                setNav(false)
            }

        }

        let scrollPrev = window.scrollY;
  const changeBackground = ()=>{
      if(window.scrollY >= 80)
      {
          setWrapper(true)
      }
      else{
          setWrapper(false)
      }

  }

  window.addEventListener('scroll', changeBackground);
  window.addEventListener('scroll', changeMenu);

    if (props.color === "light")
    {

        logoImg = logo;

    }
    else if(props.color === "dark")
    {
        logoImg = logo2;
    }
    if(header)
    {
        logoImg = logo2;
    }

    return (
        <div className='header__wrapper'>
            <div className={header? "header active header--black":"header header--" + `${props.color}`}>
                <div className="header-base__container">
                    <div className="container">
                        <div className="header-base">
                            <div className="header-base-left">
                                <div className="header-base__item header-base__item--search"/>
                            </div>
                            <div className="header-base__logo">
                                <NavLink to={"/"} className="nuxt-link-exact-active nuxt-link-active">

                                    <div className="logo">
                                        <img src={logoImg} alt=""/>
                                    </div>
                                </NavLink>
                            </div>
                            <div className="header-base-right">

                            </div>
                        </div>
                    </div>
                </div>
                <div className={menu? "header-menu__container active": "header-menu__container"}>
                    <div className="container">

                        <div className={"header-menu"}>
                            <NavLink to={"/news"} className="header-menu-item">НОВОСТИ</NavLink>
                            <NavLink to={"/projects"} className="header-menu-item">ПРОЕКТЫ</NavLink>
                            <NavLink to={"/kvartira"} className="header-menu-item">КВARTИРА</NavLink>
                            <NavLink to={"/events"} className="header-menu-item">МЕРОПРИЯТИЯ</NavLink>
                            <NavLink to={"/about"} className="header-menu-item">О НАС</NavLink>
                        </div>
                    </div>
                </div>
            </div>

        </div>


    )
}
export default Header;