import React from 'react'
import style from './create.module.css'
import {    NavLink    } from 'react-router-dom'
export default function(){
    const {className, setClassName} = React.useState()
    return (
        <div className={style.back}>
            <div className={style.path}>
                <header className={style.header}>
                    <div className={style.headerWhite}>
                        <nav className={style.nav}>
                            <NavLink to="/" exact className={style.navlink}>Главная</NavLink>
                            <NavLink to="/create" exact className={style.navlink}>Создать</NavLink>
                            <NavLink to="/login" exact className={style.navlink}>Вход/Регистрация</NavLink>
                        </nav>
                    </div>
                    <div className={style.headerBlue}>UNE-MASHINE</div>
                </header>
                <div className={style.create}>
                    <div className={style.createifno}>
                        <h2 className={style.h2}>Марка и модель </h2>
                        <input type="text" placeholder="марка" className={style.input}/>
                        <input type="text" placeholder="модель" className={style.input}/>
                    </div>
                    <div className={style.createifno}>
                        <h2 className={style.h2}>Год выпуска</h2>
                        <input type="text" placeholder="Год выпуска" className={style.input}/>
                    </div>
                    <div className={style.createifno}>
                        <h2 className={style.h2}>Объем двигателя, л</h2>
                        <input type="text" placeholder="Объем" className={style.input}/>
                    </div>
                    <div className={style.createifno}>
                        <h2 className={style.h2}>Тип кузова </h2>
                        <div className={style.carinfo}>
                            <p className={style.p1}>кузов</p>
                            <p className={style.p2}> 
                               <span className={style.span}>седан</span>
                               <span className={style.span}>внедорожник</span>
                               <span className={style.span}>хэтчбэк</span>
                               <span className={style.span}>универсал</span>
                            </p>
                        </div>
                    </div>
                    <div className={style.createifno}>
                        <h2 className={style.h2}>КПП</h2>
                        <div className={style.carinfo}>
                            <p className={style.p1}>коробка</p>
                            <p className={style.p2}>
                                <span className={style.span}>автомат</span>
                                <span className={style.span}>механика</span>
                            </p>
                        </div>
                    </div>
                    <div className={style.createifno}>
                        <h2 className={style.h2}>Привод</h2>
                        <div className={style.carinfo}>
                            <p className={style.p1}>привод</p>
                            <p className={style.p2}>
                                <span className={style.span}>полный</span>
                                <span className={style.span}>передний</span>
                                <span className={style.span}>задний</span>
                            </p>
                        </div>
                    </div>
                    <div className={style.createifno}>
                        <h2 className={style.h2}>Топливо</h2>
                        <div className={style.carinfo}>
                            <p className={style.p1}>топливо</p>
                            <p className={style.p2}>
                                <span className={style.span}>бензин</span>
                                <span className={style.span}>дизель</span>
                            </p>
                        </div>
                    </div>
                    <div className={style.createifno}>
                        <h2 className={style.h2}>Руль</h2>
                        <div className={style.carinfo}>
                            <p className={style.p1}>руль</p>
                            <p className={style.p2}>
                                <span className={style.span}>слева</span>
                                <span className={style.span}>справа</span>
                            </p>
                        </div>
                    </div>
                    <div className={style.createifno}>
                        <h2 className={style.h2}>Цвет</h2>
                        <input type="text" placeholder="Цвет" className={style.input}/>
                    </div>
                    <div className={style.createifno}>
                        <h2 className={style.h2}>Цена</h2>
                        <input type="text" placeholder="Цена" className={style.input}/>
                    </div>
                </div>
                <button className={style.createbtn}>Создать</button>
            </div>
        </div>
    )
}