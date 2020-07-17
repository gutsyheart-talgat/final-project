import React from 'react'
import style from './create.module.css'
import Header from '../Header'
export default function Creater(){
    // React.useEffect(()=>{
    //     fet
    // },[])
    
    const carParam = [
        {id:1, name:"марка",p: "марка",par:'marks', span:[
            {s:'mers'},
            {s:'toyota'},
            {s:'bmw'},
            {s:'audi'},
            {s:'lexus'},
            {s:'kia'},
            {s:'honda'},
            {s:'hundai'}
        ]},
        {id:4, name:'Тип кузова',p:'кузов',par:'kuzov', span: [
            {s:'седан'},
            {s:'внедорожник'},
            {s:'хэтчбэк'},
            {s:'универсал'}
        ]},
        {id:5, name:'КПП',p:'коробка',par:'kpp',span:[
            {s:'автомат'},
            {s:'механика'}
        ]},
        {id:6, name:'Привод',p:'Привод',par:'privod', span:[
            {s:'полный'},
            {s:'передний'},
            {s:'задний'}
        ]},
        {id:7, name:'Топливо',p:'Топливо',par:'toplivo',span:[
            {s:'бензин'},
            {s:'дизель'}
        ]},
        {id:8, name:'Руль',p:'руль',par:'rul',span:[
            {s:'слева'},
            {s:'справа'}
        ]}
    ]
    return (
        <div className={style.back}>
            <div className={style.path}>
                <Header />
                <div className={style.create}>
                    {carParam.map(car => (
                        <div className={style.createifno} key={car.id}>
                            <h2 className={style.h2}>{car.name}</h2>
                            <div className={style.carinfo}>
                                <p className={style.p1}>{car.p}</p>
                                <p className={style.p2}>{
                                    car.span.map(cs => (
                                        <span 
                                        key={cs.s}
                                        className={style.span}
                                        >{cs.s}</span>
                                    ))
                                }</p>
                            </div>
                        </div>

                    ))}
                    <div className={style.createifno}>
                        <h2 className={style.h2}>Цвет</h2>
                        <input 
                        type="text" 
                        placeholder="Цвет" 
                        className={style.input}
                        />
                    </div>
                    <div className={style.createifno}>
                        <h2 className={style.h2}>Цена</h2>
                        <input 
                        type="text" 
                        placeholder="Цена" 
                        className={style.input}
                        />
                    </div>
                    <div className={style.createifno}>
                        <h2 className={style.h2}>Описание</h2>
                        <input type="text" placeholder="Описание" className={style.input}
                        />
                    </div>
                </div>
                <button 
                className={style.createbtn}
                >Создать</button>
            </div>
        </div>
    )
}