import '../../../App.css';
import style from './Slider.css';
import React from "react";
import slider1 from './../../../img/slide1.png';
import slider2 from './../../../img/slider2.png'
import slider3 from './../../../img/slider3.png'







function Slider(props){
    const sliderItems = [...document.querySelectorAll(".hover-slider__item")];
    const navItems=[...document.querySelectorAll(".hover-slider-nav__item")];
    sliderItems.forEach((item, index)=>{
        item.dataset.index = index;
        if (index === 0)
        {
            item.classList.add('hover-slider__item--active')
        }
    });

        navItems.forEach((item, index)=>{
            item.dataset.index = index;
            if (index === 0)
            {
                item.classList.add('hover-slider-nav__item--active')
            }


        })
    return(

         <div>
             <ul className={"hover-slider-nav "}>
             <li className="hover-slider-nav__item " >Slider 1 </li>
             <li className="hover-slider-nav__item" >Slider 2 </li>
             <li className="hover-slider-nav__item" >Slider 3 </li>

         </ul>
             <ul className={"hover-slider"}>

                 <li className={"hover-slider__item "}>
                     <img className={"hover-slider__item-img"}  src={slider1} alt="" />
                 </li>
                 <li className={"hover-slider__item"}>
                     <img className={"hover-slider__item-img"} src={slider2}  alt="" />
                 </li>
                 <li className={"hover-slider__item"}>
                     <img className={"hover-slider__item-img"} src={slider3}   alt="" />
                 </li>
             </ul>

         </div>



    )
}
 export default Slider;