import React from 'react'
import style from './carinfo.module.css'
import Header from '../Header'

export default function(){
    const carInfo = [
        {id:1, name:'Год выпуска'},
        {id:2, name:'Объем двигателя, л'},
        {id:3, name:'Тип кузова'},
        {id:4, name:'КПП'},
        {id:5, name:'Привод'},
        {id:6, name:'Топливо'},
        {id:7, name:'Руль'},
        {id:8, name:'Цвет'},
        {id:9, name:'Цена'}
    ]
    return (
        <div className={style.back}>
            <div className={style.path}>
                <Header />
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
                            {carInfo.map(car=>(
                                <div key={car.id}>
                                    <h2 className={style.h2}>{car.name}</h2>
                                    <p></p>
                                </div>
                            ))}
                        </div>
                        <div className={style.carfoto}></div>
                    </div>

                </div>
            </div>
        </div>
    )
}