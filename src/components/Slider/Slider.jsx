import '../../App.css';
import React from "react";
import slider from './../../img/slide1.png'
const Slider = () =>{
    return(
        <div  className="main page page--main">
            <div className="slider-wrapper" ><img src={slider} alt=""/>
                 </div>
        </div>
    )
}
 export default Slider;