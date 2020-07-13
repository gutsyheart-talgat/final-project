import React from 'react'
import style from './carinfo.module.css'
import {    NavLink     } from 'react-router-dom'

export default function(){
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
                <div>
                    <div className={style.infoheader}>
                        <div className={style.carheader}>
                            <h1 className={style.h1}>Продажа Lexus LX III 570 5.7</h1>
                            <h1 className={style.h1}>$ 33 500</h1>
                        </div>
                        <div className={style.owner}>
                            <div className={style.img}></div>
                            <div className={style.ownerinfo}>tima 05588554477885</div>
                        </div>
                    </div>
                    <div className={style.infobody}>
                        <div className={style.parametrs}>
                            <div>
                                <h2 className={style.h2}>Год выпуска</h2>
                                <p></p>
                            </div>
                            <div>
                                <h2 className={style.h2}>Объем двигателя, л</h2>
                                <p></p>
                            </div>
                            <div>
                                <h2 className={style.h2}>Тип кузова </h2>
                                <p></p>
                            </div>
                            <div>
                                <h2 className={style.h2}>КПП</h2>
                                <p></p>
                            </div>
                            <div>
                                <h2 className={style.h2}>Привод</h2>
                                <p></p>
                            </div>
                            <div>
                                <h2 className={style.h2}>Топливо</h2>
                                <p></p>
                            </div>
                            <div>
                                <h2 className={style.h2}>Руль</h2>
                                <p></p>
                            </div>
                            <div> 
                                <h2 className={style.h2}>Цвет</h2>
                                <p></p>
                            </div>
                            <div>
                                <h2 className={style.h2}>Цена</h2>
                                <p></p>
                            </div>
                        </div>
                        <div className={style.carfoto}></div>
                    </div>

                </div>
            </div>
        </div>
    )
}