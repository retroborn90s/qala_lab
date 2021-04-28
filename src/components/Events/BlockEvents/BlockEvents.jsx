import React from 'react';
import SimpleCard from "../../SimpleCard/SimpleCard";
import event1 from '../../../img/events/events1.jpg'
import event2 from '../../../img/events/events2.jpg'
import event3 from '../../../img/events/events3.png'
import event4 from '../../../img/events/evets4.jpg'
import event5 from '../../../img/events/events5.jpg'
import event6 from '../../../img/events/events6.png'
import event7 from '../../../img/events/events7.png'
import event8 from '../../../img/events/events8.png'
import './../../style.css'

const BlockEvents = () =>{
    return(
        <div className="interesting__container interesting">
        <div className="container">
            <div className="grid grid--interesting" >
                <div className="heading-container" >
                    <div className="heading heading--grid"  ><p className={"heading__title nuxt-link-exact-active nuxt-link-active heading__title--readonly"} data-v-8578b8a4>МЕРОПРИЯТИЯ</p></div>
                </div>

                <SimpleCard
                    img={event1}
                    type={"Мероприятие"} title={"ЧАЕПИТИЕ В ЧЕСТЬ 1000 ПОДПИСЧИКОВ"}
                    content={"С нас бесплатный чай с 16 до 18, а с вас хорошее настроение:) С собой можно взять настольные игры и музыкальные инструменты. "}
                    data={"21.02.2021"}>
                </SimpleCard>

                <SimpleCard
                    img={event2}
                    type={"Мероприятие"} title={"ПЕРВАЯ ФОТОСУШКА"}
                    content={"Уже сегодня состоится первая фотосушка в квartира.space. "}
                    data={"06.03.2021"}>
                </SimpleCard>

                <SimpleCard
                    img={event3}
                    type={"Мероприятие"} title={"ОТМЕЧАЕМ НАУРЫЗ ВМЕСТЕ В КВARTИРА SPACE"}
                    content={"Будем отмечать Наурыз! Вас ждут национальные игры, музыка и угощения "}
                    data={"22.03.2021"}>
                </SimpleCard>

                <SimpleCard
                    img={event4}
                    type={"Мероприятие"}
                    title={"ПОСТКРОССИНГ"}
                    content={"Будем отмечать Наурыз! Вас ждут национальные игры, музыка и угощения"}
                    data={"16.03.2021"}>
                </SimpleCard>

                <SimpleCard
                    img={event5}
                    type={"Мероприятие"}
                    title={"ФОТОВЫСТАВКА ПЛЕНОЧНОЙ ФОТОГРАФИИ"}
                    content={"Долгожданная фотосушка пройдёт в нашей квartира.space при участии творческой группы «Свет»"}
                    data={"28.02.2021"}>

                </SimpleCard>

                <SimpleCard
                    img={event6}
                    type={"Мероприятие"}
                    title={"КИНОВЕЧЕР"}
                    content={"Вы можете отправить открытку в Финляндию, получить в ответ открытку из Лиссабона, Португалии! "}
                    data={"16.03.2021"}>

                </SimpleCard>

                <SimpleCard
                    img={event7}
                    type={"Мероприятие"}
                    title={"КИНОПОКАЗ “ГАРРИ ПОТТЕРА”"}
                    content={"У нас домашняя обстановка, приходите в своих тапках и пижамах. повсюду будут ковры, одеяло, подушки и корпешки."}
                    data={"16.02.2021"}>
                </SimpleCard>

                <SimpleCard
                    img={event8}
                    type={"Мероприятие"}
                    title={"ANIME DAY"} content={"Третьего марта на нашей арт-площадке пройдет первый в городе «Anime day»!"}
                    data={"27.02.2021"}>
                </SimpleCard>



            </div>
            <div className="more more--next" >
                <button className="button">Загрузить ещё</button>
            </div>
        </div>
    </div>)
}

export default BlockEvents;