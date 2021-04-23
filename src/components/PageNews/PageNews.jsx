import React from 'react';
import Header from "../Header/Header";
import App from "../../App";
import BlockNews from "./BlockNews/BlockNews";


const PageNews = () =>{


    return(
        <div>
            <Header color={"dark"}></Header>
            <div data-fetch-key="NewsPage:0" className="news__container page" data-v-70979625="">
            <BlockNews/>
        </div></div>

    )
}

export default PageNews;