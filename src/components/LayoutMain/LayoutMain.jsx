import React from 'react';
import SimpleSlider from "./SliderRegion/Slider/Slider";
import {BrowserRouter} from "react-router-dom";
import BlockNews from "../PageNews/BlockNews/BlockNews";
import MainNews from "./MainNews/MainNews";
import Header from "../Header/Header";


const LayoutMain = (props)=>{
    return(

        <div  className="main page page--main" >
            <Header color = "light"/>
            <SimpleSlider/>
            <BlockNews header={"ON"}/>
            <MainNews/>

        </div>

    )
}

export default LayoutMain