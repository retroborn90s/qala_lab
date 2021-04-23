import React from 'react';
import Header from "../Header/Header";
import SimpleSlider from "./Slider/Slider";
import {BrowserRouter} from "react-router-dom";
import BlockNews from "../PageNews/BlockNews/BlockNews";
import MainNews from "./MainNews/MainNews";


const LayoutMain = (props)=>{
    return(

        <div>
            <Header color = "dark"/>
            <SimpleSlider/>
            <BlockNews/>
            <MainNews/>

        </div>

    )
}

export default LayoutMain