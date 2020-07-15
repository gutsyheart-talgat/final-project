import React from 'react'
import style from './cabinet.module.css'
import Header from '../Header'

export default function(){
    return (
        <div className={style.back}>
            <div className={style.path}>
               <Header />
                <h1 className={style.h1}>Ваши объявления:</h1>
                <div className={style.carinfo}></div>
            </div>
        </div>
    )
}