import React from 'react'
import style from './create.module.css'
import Header from '../Header'
import {  useDispatch , useSelector  } from 'react-redux'
import {    changeParam ,changePrice,changeColor,changeDesc    } from '../../store/actions'
export default function Creater(){
    const dispatch = useDispatch()
    const creater = useSelector(state => state.creater)
    console.log(creater)
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
    const handleChoise = (item,name) => () => {
        dispatch(changeParam(name,item))
    }
    const handleColor = (value, name)  =>{
        dispatch(changeParam(name,value))
    }
    const handlePrice = (value, name) =>{
        dispatch(changeParam(name,value))
    }
    const handleDesc = (value, name) =>{
        dispatch(changeParam(name,value))
    }
    const createCar = ()=>{
        fetch('https://une-mashine.herokuapp.com/create/users')
    }
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
                                        onClick={handleChoise(cs.s,car.par)}
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
                        onChange={e => handleColor(e.target.value, 'color')}/>
                    </div>
                    <div className={style.createifno}>
                        <h2 className={style.h2}>Цена</h2>
                        <input 
                        type="text" 
                        placeholder="Цена" 
                        className={style.input}
                        onChange={e => handlePrice(e.target.value, 'price')}/>
                    </div>
                    <div className={style.createifno}>
                        <h2 className={style.h2}>Описание</h2>
                        <input type="text" placeholder="Описание" className={style.input}
                        onChange={e => handleDesc(e.target.value, 'desc')}/>
                    </div>
                </div>
                <button 
                className={style.createbtn}
                onClick={createCar}>Создать</button>
            </div>
        </div>
    )
}