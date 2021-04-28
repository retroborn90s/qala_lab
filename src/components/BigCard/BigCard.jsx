import React from 'react'
import './../style.css'

const BigCard = (props) =>{

    let switchDonate;
    if(props.state)
    {
        switchDonate="inline"
    }
    else
    {
        switchDonate="none"
    }

        return(
            <div className="news-card-container" style={{order:2}} data-v-863c6bcc="">
                <div className="card" data-v-cded006a="" data-v-863c6bcc="">
                    <a className="card__link"
                    data-v-cded006a=""></a>
                    <div
                        style={{backgroundImage: `url(${props.img})`}}
                        className="card__background" data-v-cded006a=""></div>
                    <div className="card__container" data-v-cded006a="">
                        <div className="card-left" data-v-cded006a="">
                            <div
                                style={{backgroundImage: `url(${props.img})`}}
                                className="card__cover" data-v-cded006a=""></div>
                            </div>
                        <div className="card-right" data-v-cded006a="">
                            <div className="card-top" data-v-cded006a="">
                                <a
                                   aria-current="page"
                                   className="card__category nuxt-link-exact-active nuxt-link-active"
                                   data-v-cded006a="">Проект</a>
                                <div className="card__genres text--cut" >{props.type}
                                </div>
                            </div>
                            <div className="card-main" data-v-cded006a=""><a

                                className="card-main__title text--cut" data-v-cded006a="">{props.title}</a>
                                <div className="card-main__artist text--cut" data-v-cded006a="">{props.name}
                                </div>
                            </div>
                            <div className="card-secondary" data-v-cded006a="">
                                <div className="card-secondary__excerpt text--cut" data-v-cded006a="">
                                    <p>{props.content}</p>
                                </div>
                            </div>
                            <div className="card__rating" data-v-cded006a="" style={{display:`${switchDonate}`}}>Собрано: <span style={{fontSize: `1rem`}}>{props.state} Тенге</span></div>
                            <div className="card-bottom" data-v-cded006a="">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
}

export default BigCard;