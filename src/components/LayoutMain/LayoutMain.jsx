import React from 'react';
import Header from "../Header/Header";
import Slider from "./Slider/Slider";
import {BrowserRouter} from "react-router-dom";


const LayoutMain = (props)=>{
    return(

        <div>
            <Header color = "light"></Header>
            <Slider/>
        </div>

    )
}

export default LayoutMain