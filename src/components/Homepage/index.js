import React from 'react'
import {    NavLink    } from 'react-router-dom'
import style from './home.module.css'

export default function(){
    const cars = [
        {id:1},
        {id:2},
        {id:3},
        {id:4},
        {id:5},
        {id:6},
        {id:7},
        {id:8}
    ]
    return(
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
                    <div className={style.inputs}>
                        <input type="text" className={style.input} placeholder="марка"></input>
                        <input type="text" className={style.input} placeholder="модель"></input>
                        <input type="text" className={style.input} placeholder="год от"></input>
                        <input type="text" className={style.input} placeholder="год до"></input>
                        <input type="text" className={style.input} placeholder="цена от"></input>
                        <input type="text" className={style.input} placeholder="цена до"></input>
                        <input type="text" className={style.input} placeholder="объем от"></input>
                        <input type="text" className={style.input} placeholder="объем до"></input>
                        <input type="text" className={style.input} placeholder="кузов"></input>
                        <input type="text" className={style.input} placeholder="коробка передач"></input>
                        <input type="text" className={style.input} placeholder="привод"></input>
                        <input type="text" className={style.input} placeholder="топливо"></input>
                        <input type="text" className={style.input} placeholder="руль"></input>
                        <input type="text" className={style.input} placeholder="цвет"></input>
                    </div>
                    <div> 
                        {cars.map(car =>(
                            <div key={car.id} className={style.cars}></div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}