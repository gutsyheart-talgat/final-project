import React from 'react'
import {    NavLink     } from 'react-router-dom'
import style from './home.module.css'

export default function Card({info}){
    
    
    return(
        <NavLink
            to={`/carsinfo/${info.id}`}
            className={style.card}
        >
            <h2 className={style.cardH2}>{info.marks}</h2>
            <div>Цвет:{info.color}</div>
            <div>Цена:{info.price}$</div>
            <div>Коробка:{info.kpp}</div>
            <div>Кузов:{info.kuzov}</div>
        </NavLink>
    )
}