import React from 'react';
import Header from "../Header/Header";
import BigCard from "../BigCard/BigCard";
import img1 from './../../img/projects/projects1.png'
import img2 from './../../img/projects/projects2.png'

const Projects = () =>{
    return(<div>
        <Header color = "dark"></Header>
            <div className="news__container page" >
            <div className="container" >
                <div className="grid grid--reviews" >
                    <div className="heading-container" >
                        <div className="heading">
                            <a
                            aria-current="page"
                            className="heading__title nuxt-link-exact-active nuxt-link-active heading__title--readonly">Проекты</a><a
                             aria-current="page"
                            className="heading__action nuxt-link-exact-active nuxt-link-active"
                            data-v-8578b8a4=""></a></div>
                    </div>
                    <BigCard
                        img={img1}
                        type={"общественный транспорт"}
                        title={"СПАСЕМ ОБЩЕСТВЕННЫЙ ТРАНСПОРТ"}
                        content={"Депутатам маслихата остается принять или отклонить выводы этой комиссии..."}
                        />
                    <BigCard
                        img={img2}
                        type={"арт-пространство"}
                        title={"ДЕЛАЙТЕ ПОЖЕРТВОВАНИЯ НА РАЗВИТИЕ ГОРОДА"}
                        content={"Если хотите чтобы в Актобе было такое пространство, где творческие люди, объединившись создавали прекрасное, а на итоги развивали наш город?"}
                        state={5213}/>
                </div>

            </div>

        </div>
            <div className="more more--next" >
                <button className="button">Загрузить ещё</button>
            </div>
    </div>
    )
}

export default Projects;