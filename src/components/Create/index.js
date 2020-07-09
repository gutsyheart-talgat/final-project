import React from 'react'
import style from './create.module.css'
import {    NavLink    } from 'react-router-dom'
export default function(){
    const btn = document.querySelectorAll('.btn')
    btn.addEventListener('click', function(){
        btn.className.remove()
        btn.className.add('button')
    })
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
                        <button className={style.btn}>седан</button>
                        <button className={style.btn}>универсал</button>
                        <button className={style.btn}>внедорожник</button>
                        <button className={style.btn}>хэтчбек</button>
                    </div>
                    <div className={style.createifno}>
                        <h2 className={style.h2}>КПП</h2>
                        <button className={style.btn}>автомат</button>
                        <button className={style.btn}>механика</button>
                    </div>
                    <div className={style.createifno}>
                        <h2 className={style.h2}>Привод</h2>
                        <button className={style.btn}>полный</button>
                        <button className={style.btn}>задний</button>
                        <button className={style.btn}>передний</button>
                    </div>
                    <div className={style.createifno}>
                        <h2 className={style.h2}>Топливо</h2>
                        <button className={style.btn} >бензин</button>
                        <button className={style.btn}>дизель</button>
                    </div>
                    <div className={style.createifno}>
                        <h2 className={style.h2}>Руль</h2>
                        <button className={style.btn}>справа</button>
                        <button className={style.btn}>слева</button>
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