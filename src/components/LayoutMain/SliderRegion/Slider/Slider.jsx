import React, { Component } from "react";
import Slider from "react-slick";
import img1 from './../../../../img/slide1.png'
import img2 from './../../../../img/slider2.png'
import img3 from './../../../../img/slider3.png'
import exlusive from "../../../../img/exlusive.jpg";
import './Slider.css'
import './../../../style.css'
import Slide from "./Slide/Slide";



export default class SimpleSlider extends Component {
    render() {
        const settings = {
            arrows:true,
            dots:false,
            slidesToShow:1,
            autoplay:true,
            speed:1000,
            autoplaySpeed:3000,

            responsive:[
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow:1
                    }
                },
                {
                    breakpoint: 550,
                    settings: {
                        slidesToShow:1
                    }
                }
            ]
        };
        return (
            <div className="wrapper">
                <Slider className="slider" {...settings}>
                    <div className="slider__item filter">
                    <Slide img={img1}
                           title={"ВЫСТУПЛНИЕ С УЧАСТИЕМ ГРУППЫ “АДАПТАЦИЯ”"}
                           content={"Послушаем живой гитарный рок с участием уроженца нашего любимого города "}
                           type={'Мероприятия'}
                            data={"03.04.2021"}></Slide>
                    </div>
                    <div className="slider__item">
                        <Slide img={img2}
                               title={"ОТМЕЧАЕМ НАУРЫЗ ВМЕСТЕ”"}
                               content={"Будем отмечать Наурыз! Вас ждут национальные игры, музыка и угощения "}
                               type={'Мероприятия'}
                               data={"22.03.2021"}></Slide>
                    </div>
                    <div className="slider__item filter">
                        <Slide img={img3}
                               title={"ОНЛАЙН ПРОФОРИЕНТАЦИЯ"}
                               content={"В быстроменяющемся современном мире выбор профессии одна из важнейших и сложных задач. Подготовка молодежи к выбору профессии - профориентация, полезный и важный вид занятий, помогающий определиться с выбором профессии."}
                               type={'ZOOM-КОНФЕРЕНЦИЯ'}
                               data={"10.04.2021"}></Slide>
                    </div>
                </Slider>


            </div>
        );
    }
}
