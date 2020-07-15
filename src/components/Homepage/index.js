import React from 'react'
import Header from '../Header'
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
                <Header />
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
                    <div className={style.cars}> 
                        {cars.map(car =>(
                            <div key={car.id} className={style.Car}>
                                <div className={style.carinfo}></div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}