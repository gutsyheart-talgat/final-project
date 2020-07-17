import React from 'react'
import {    NavLink     } from 'react-router-dom'

export default function Card({info}){
    return(
        <NavLink
            to={`/carsinfo/${info.id}`}
        >
            
        </NavLink>
    )
}