import React from 'react'
import style from './create.module.css'
import Header from '../Header'
export default function(){
    const h2 = [
        {id:4, name:'Тип кузова'},
        {id:5, name:'КПП'},
        {id:6, name:'Привод'},
        {id:7, name:'Топливо'},
        {id:8, name:'Руль'}
    ]
    const p = [
        {name:'кузов' },
        {name:'коробка'},
        {name:'Привод'},
        {name:'Топливо'},
        {name:'руль'}
    ]
    const span = [
        {name:[
            {s:'седан'},
            {s:'внедорожник'},
            {s:'хэтчбэк'},
            {s:'универсал'}
        ]},
        {name:[
            {s:'автомат'},
            {s:'механика'}
        ]},
        {name:[
            {s:'полный'},
            {s:'передний'},
            {s:'задний'}
        ]},
        {name:[
            {s:'бензин'},
            {s:'дизель'}
        ]},
        {name:[
            {s:'слева'},
            {s:'справа'}
        ]}
    ]
    return (
        <div className={style.back}>
            <div className={style.path}>
                <Header />
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
                    {h2.map(h =>(
                        <div key={h.id} className={style.createifno}>
                            <h2 className={style.h2}>{h.name}</h2>
                            {p.map(P => (
                                <p className={style.p1}>{P.name}</p>
                            ))}
                            {span.map(s=>(
                                <p className={style.p2}>
                                    {s.name.map(sn=>(
                                        <span className={style.span}>{sn.s}</span>
                                    ))}
                                </p>
                            ))}
                        </div>
                    ))}
                    <div className={style.createifno}>
                        <h2 className={style.h2}>Тип кузова </h2>
                        <div className={style.carinfo}>
                            <p className={style.p1}>кузов</p>
                            <p className={style.p2}> 
                               <span className={style.span}>седан</span>
                               <span className={style.span}>внедорожник</span>
                               <span className={style.span}>хэтчбэк</span>
                               <span className={style.span}>универсал</span>
                            </p>
                        </div>
                    </div>
                    <div className={style.createifno}>
                        <h2 className={style.h2}>КПП</h2>
                        <div className={style.carinfo}>
                            <p className={style.p1}>коробка</p>
                            <p className={style.p2}>
                                <span className={style.span}>автомат</span>
                                <span className={style.span}>механика</span>
                            </p>
                        </div>
                    </div>
                    <div className={style.createifno}>
                        <h2 className={style.h2}>Привод</h2>
                        <div className={style.carinfo}>
                            <p className={style.p1}>привод</p>
                            <p className={style.p2}>
                                <span className={style.span}>полный</span>
                                <span className={style.span}>передний</span>
                                <span className={style.span}>задний</span>
                            </p>
                        </div>
                    </div>
                    <div className={style.createifno}>
                        <h2 className={style.h2}>Топливо</h2>
                        <div className={style.carinfo}>
                            <p className={style.p1}>топливо</p>
                            <p className={style.p2}>
                                <span className={style.span}>бензин</span>
                                <span className={style.span}>дизель</span>
                            </p>
                        </div>
                    </div>
                    <div className={style.createifno}>
                        <h2 className={style.h2}>Руль</h2>
                        <div className={style.carinfo}>
                            <p className={style.p1}>руль</p>
                            <p className={style.p2}>
                                <span className={style.span}>слева</span>
                                <span className={style.span}>справа</span>
                            </p>
                        </div>
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