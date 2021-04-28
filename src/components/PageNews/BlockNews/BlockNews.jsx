import React from 'react';
import news1 from '../../../img/news/news1.jpg'
import news2 from '../../../img/news/news2.jpg'
import news3 from '../../../img/news/news3.jpg'
import news4 from '../../../img/news/news4.jpg'
import news5 from '../../../img/news/news5.png'
import news6 from '../../../img/news/news6.png'
import news7 from '../../../img/news/news7.png'
import news8 from '../../../img/news/news8.png'
import {NavLink} from "react-router-dom";
import SimpleCard from "../../SimpleCard/SimpleCard";


const BlockNews = (props) => {
    let newsSwitch;
let headSwitch;
    if (props.header === "ON")
    {
        newsSwitch = "heading__title";
        headSwitch = "heading__action";
    }
    else if(props.header === "OFF")
    {
        headSwitch = "heading__action";
    }
    else
    {
        newsSwitch ="heading__title nuxt-link-exact-active nuxt-link-active heading__title--readonly"
        headSwitch = "off";
    }

    return(

            <div className="interesting__container interesting">
                <div className="container">
                    <div className="grid grid--interesting" >
                        <div className="heading-container" >
                            <div className="heading heading--grid" data-v-8578b8a4 ><NavLink to="/news" className={newsSwitch} data-v-8578b8a4>Новости</NavLink>
                                <NavLink to={"/news"} className={ headSwitch} data-v-8578b8a4>Все новости</NavLink></div>
                        </div>
                    <SimpleCard img = {news1}
                                type="НОВОСТИ"
                                title={"КВЕСТ ЗА ЧАШКУ АМЕРИКАНО"}
                                content={"Весной ходить пешком в нашем городе, это как прохождение целого квеста."}
                                data={"29.02.2021"}/>
                        <SimpleCard img = {news2}
                                    type="НОВОСТИ"
                                    title={"У НАС ALL-DAY BREACKFAST"}
                                    content={"Самый простой и вкусный вариант для завтрака или перекуса, это, конечно же, смузи. С овсянкой этот напиток станет сытнее."}
                                    data={"23.02.2021"}/>
                        <SimpleCard img = {news3} type="НОВОСТИ"
                                    title={"ЧАЕПИТИЕ В ЧЕСТЬ 1000 ПОДПИСЧИКОВ"}
                                    content={"С нас бесплатный чай с 16 до 18, а с вас хорошее настроение:) С собой можно взять настольные игры и музыкальные инструменты. "}
                                    data={"21.02.2021"}/>
                        <SimpleCard img = {news4}
                                    type="НОВОСТИ"
                                    title={"ПЕРВАЯ ФОТОСУШКА"}
                                    content={"Уже сегодня состоится первая фотосушка в квartира.space. "}
                                    data={"06.03.2021"}/>
                        <SimpleCard img = {news5}
                                    type="НОВОСТИ"
                                    title={"ОБУЧЕНИЕ ЗАГРАНИЦЕЙ ПОИСК ПРОФЕССИ."}
                                    content={"Поговорим о том как поступать в зарубежный университет на грант и обучаться в Европе и Америке по программе обмена."}
                                    data={"25.02.2021"}/>
                        <SimpleCard img = {news6} t
                                    ype="НОВОСТИ"
                                    title={"ОТМЕЧАЕМ НАУРЫЗ ВМЕСТЕ В КВARTИРА SPACE"}
                                    content={"Будем отмечать Наурыз! Вас ждут национальные игры, музыка и угощения "}
                                    data={"22.03.2021"}/>
                        <SimpleCard img = {news7}
                                    type="НОВОСТИ"
                                    title={"ПЕРВЫЙ КВАРТИРНИК"}
                                    content={"Дорогие друзья, рады сообщить вам, что в эту субботу, 27 февраля в 18:00 в Kvartira Space, состоится наш первый Квартирник.  "}
                                    data={"21.02.2021"}/>
                        <SimpleCard img = {news8} type="НОВОСТИ"
                                    title={"ЗАЧЕМ НАМ SEX EDUCATION?"}
                                    content={"Казахстан находится на лидирующих позициях по подростковой беременности и абортам. Обсудим как нам поможет с этим Sex Education."}
                                    data={"06.03.2021"}/>



                    </div>
                    <div className="more more--next" >
                        <button className="button">Загрузить ещё</button>
                    </div>
                </div>
            </div>
    )
}

export default BlockNews;