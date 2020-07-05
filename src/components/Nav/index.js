import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './nav.module.css'

export default function(){
    return (
        <div className={style.cont}>
            <NavLink to="/signin" activeClassName={style.active} className={style.nav} exact>Sign In</NavLink>
            <NavLink to="/login" activeClassName={style.active} className={style.nav} exact>Log In</NavLink>
        </div>
    )
}