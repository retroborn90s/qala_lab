import React from 'react';
import Header from "../Header/Header";

import BlockEvents from "./BlockEvents/BlockEvents";

const Events = () =>{
    return(
        <div>
            <Header color={"dark"}/>
            <div className="news__container page">
                <BlockEvents/>
            </div>
        </div>
       )
}

export default Events;