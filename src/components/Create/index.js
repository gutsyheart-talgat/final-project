import React from 'react'
import style from './create.module.css'
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
                <div>
                    <div>
                        <h1>Марка и модель </h1>
                        <label>
                            <input type="text" placeholder="марка"/>
                            <input type="text" placeholder="модель"/>
                        </label>
                    </div>
                    <div>
                        <h1>Год выпуска</h1>
                        <input type="text" placeholder="Год выпуска"/>
                    </div>
                    <div>
                        <h1>Объем двигателя, л</h1>
                        <input type="text" placeholder="Объем"/>
                    </div>
                    <div>
                        <h1>Тип кузова </h1>
                        <div>
                            <button></button>
                            <button></button>
                            <button></button>
                            <button></button>
                        </div>
                    </div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}