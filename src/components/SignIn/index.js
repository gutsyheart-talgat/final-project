import React from 'react'
import style from './sign.module.css'
import Nav from '../Nav'

export default function(){
    const [acount,setAcount] = React.useState('acount')
    const [phone, setPhone] = React.useState('phone number')
    const [pass, setPass] = React.useState('password')
    const [num, setNum] = React.useState('Номер телефона')
    const handlesign = () => {
        console.log(
            "acount", acount,
            "phone", phone,
            "pass", pass,
            "num", num
        )
    }
    return (
        <div className={style.back}>
            <div className={style.path}>
                <div className={style.text}>    
                    <Nav />
                    <input 
                    type="text" 
                    className={style.input} 
                    placeholder={acount}
                    onChange={e => setAcount(e.target.value)}/>
                    <input 
                    type="text"
                    className={style.input}
                    placeholder={num}
                    onChange={e => setNum(e.target.value)}/>
                    <input 
                    type="text" 
                    className={style.input} 
                    placeholder={phone}
                    onChange={e => setPhone(e.target.value)}/>
                    <input 
                    type="password" 
                    className={style.input} 
                    placeholder={pass}
                    onChange={e => setPass(e.target.value)}/>
                </div>
                <button
                onClick={handlesign}
                >зарегаться</button>
                
            </div>
        </div>
    )
}