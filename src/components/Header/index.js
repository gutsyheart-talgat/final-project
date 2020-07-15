import React from 'react'
import {NavLink} from 'react-router-dom'
import style from './header.module.css'

export default function (){
    return(
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
    )
}