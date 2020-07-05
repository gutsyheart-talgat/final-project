import React from 'react'
import style from './login.module.css'
import Nav from '../Nav'

export default function(){
    return (
        <div className={style.back}>
            <div className={style.path}>
                <div className={style.text}>    
                    <Nav />
                    <input type="text" className={style.input} placeholder="acount"></input>
                    <input type="password" className={style.input} placeholder="password"></input>
                </div>
                
            </div>
        </div>
    )
}