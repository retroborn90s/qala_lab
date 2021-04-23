import React from 'react';
import {NavLink} from "react-router-dom";


const MobileNav = (props) => {
    return (
        <div id="mobile-menu" className="menu__container" data-v-4898f67a>
            <div className="container" data-v-4898f67a>
                <div className="menu" data-v-4898f67a><a href="/news" className="menu-item" data-v-4898f67a><img
                    data-src="/icons/menu/newspaper.svg" className="menu-item__icon" data-v-4898f67a/><span
                    className="menu-item__title" data-v-4898f67a>НОВОСТИ</span></a><a href="/releases" className="menu-item" data-v-4898f67a>
                    <img data-src="/icons/menu/playlist.svg"
                    className="menu-item__icon" data-v-4898f67a/><span className="menu-item__title" data-v-4898f67a>ПРОЕКТЫ</span></a><a
                    href="/chart" className="menu-item"
                    data-v-4898f67a><img data-src="/icons/menu/bar-chart.svg" className="menu-item__icon"
                                         data-v-4898f67a/><span className="menu-item__title"
                                                               data-v-4898f67a>КВARTИРА</span></a><a
                    href="/reviews" className="menu-item" data-v-4898f67a><img
                    data-src="/icons/menu/music-folder.svg" className="menu-item__icon"
                    data-v-4898f67a/><span className="menu-item__title" data-v-4898f67a>МЕРОПРИЯТИЯ</span></a><a
                    href="/editions" className="menu-item" data-v-4898f67a><img data-src="/icons/menu/edit.svg" className="menu-item__icon" data-v-4898f67a/><span
                    className="menu-item__title"
                    data-v-4898f67a>О НАС</span></a></div>
            </div>
        </div>

    )
}
export default MobileNav;