import React from 'react';
import Header from "../Header/Header";
import './../style.css'
import BlockNews from "./BlockNews/BlockNews";


const PageNews = () =>{


    return(
        <div>
            <Header color={"dark"}/>
            <div data-fetch-key="NewsPage:0" className="news__container page" data-v-70979625="">
            <BlockNews/>
        </div
        ></div>

    )
}

export default PageNews;