import React from 'react';

const Slide=(props)=>{
    return(

            <div className="slider__item-img" style={{backgroundImage: `url(${props.img})`}}>
                <div className="slide">
                    <div className="container"  >
                        <div className="slide-content"  >
                            <div className="slide-content-meta">
                                <a  className="slide-content-meta__category">{props.type}</a>
                                <div className="slide-content-meta__data"></div>
                            </div>
                            <a className="slide-content__title text--cut">{props.title}</a>
                            <div className="slide-content__excerpt text--cut">
                                <p>{props.content}</p>
                            </div>
                            <div className="slide-content-actions">
                                <a  className="light slide-content-actions__action">Читать</a>
                                <div className="slide-content-actions__date">{props.data}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Slide;