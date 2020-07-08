import React from 'react'
import style from './cabinet.module.css'
import {    NavLink    } from 'react-router-dom'

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
                <h1 className={style.h1}>Ваши объявления:</h1>
                <div className={style.carinfo}></div>
            </div>
        </div>
    )
}