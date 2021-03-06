import React from 'react'
import style from './home.module.css'

export default function(){
    const inputs =[
        {id:1, name:"марка",p: "марка", span:[
            {s:'mers'},
            {s:'toyota'},
            {s:'bmw'},
            {s:'audi'},
            {s:'lexus'},
            {s:'kia'},
            {s:'honda'},
            {s:'hundai'}
        ]},
        {id:4, name:'Тип кузова',p:'кузов', span: [
            {s:'седан'},
            {s:'внедорожник'},
            {s:'хэтчбэк'},
            {s:'универсал'}
        ]},
        {id:5, name:'КПП',p:'коробка',span:[
            {s:'автомат'},
            {s:'механика'}
        ]},
        {id:6, name:'Привод',p:'Привод', span:[
            {s:'полный'},
            {s:'передний'},
            {s:'задний'}
        ]},
        {id:7, name:'Топливо',p:'Топливо',span:[
            {s:'бензин'},
            {s:'дизель'}
        ]},
        {id:8, name:'Руль',p:'руль',span:[
            {s:'слева'},
            {s:'справа'}
        ]}
    ]
    return(
        <div className={style.inputs}>
                        {inputs.map(input => (
                                <div className={style.carifno} key={input.id}>
                                    <p className={style.p1}>{input.p}</p>
                                    <p className={style.p2}>{
                                        input.span.map(cs => (
                                            <span className={style.span} key={cs.s}>{cs.s}</span>
                                        ))
                                    }</p>
                                </div>
                        ))}
                        <input type="text" className={style.input} placeholder="год от"></input>
                        <input type="text" className={style.input} placeholder="год до"></input>
                        <input type="text" className={style.input} placeholder="цена от"></input>
                        <input type="text" className={style.input} placeholder="цена до"></input>
                        <input type="text" className={style.input} placeholder="объем от"></input>
                        <input type="text" className={style.input} placeholder="объем до"></input>
                        <input type="text" className={style.input} placeholder="руль"></input>
                        <input type="text" className={style.input} placeholder="цвет"></input>
                        <button className={style.poiskbtn}>Найти</button>
                    </div>
    )
}