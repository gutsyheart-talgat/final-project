import React from 'react'
import style from './create.module.css'
import Header from '../Header'
export default function Creater(){
    
    const [mark, setMark] = React.useState('марка')
    const [rul, setRul] = React.useState('Руль')
    const [privod, setPrivod] = React.useState('Привод')
    const [toplivo, setToplivo] = React.useState('Топливо')
    const [kuzov, setKuzov] = React.useState('Тип кузова')
    const [kpp, setKpp] = React.useState('коробка')
    const [color, setColor] = React.useState('Цвет')
    const [price, setPrice] = React.useState('Цена')
    const [desc, setDesc] = React.useState('Описание')
    const [year, setYear] = React.useState('Год выпуска')
    const [obem, setObem] = React.useState('Объем')

    const handleMark = (e, name) => {
        e.preventDefault()
        setMark(name)
    }
    const handleKuzov = (e,name) => {
        e.preventDefault()
        setKuzov(name)
    }
    const handleRul = (e,name) => {
        e.preventDefault()
        setRul(name)
    }
    const handlePrivod = (e,name) => {
        e.preventDefault()
        setPrivod(name)
    }
    const handleToplivo = (e,name) => {
        e.preventDefault()
        setToplivo(name)
    }
    const handleKpp = (e,name) => {
        e.preventDefault()
        setKpp(name)
    }
    
    const handleColor = (name)  =>{
        
        setColor(name)
    }
    const handleYear = (name) => {
        setYear(name)
    }
    const handleObem = (name) => {
        setObem(name)
    }
    const handlePrice = (name) =>{
       
        setPrice(name)
    }
    const handleDesc = (name) =>{
       
        setDesc(name)
    }
    const handleCar = () =>{
        console.log(
            
        )
        function addTask(body) {
            return fetch('http://localhost:5555/add', {
             method : 'POST',
             headers :{ 'Content-Type': 'application/json' },
             body : JSON.stringify(body),
            })
            .then(response => {
                if(!response.ok) throw new Error('Не удалось создать заметку!')
            })
        } 
        addTask({
            mark: mark, 
            "privod", privod,
            "toplivo", toplivo,
            "rul", rul,
            "kpp", kpp,
            "kuzov", kuzov,
            "color", color,
            "price", price,
            "desc", desc,
            "obem", obem,
            "year", year
        })
    }
    
    return (
        <div className={style.back}>
            <div className={style.path}>
                <Header />
                <div className={style.create}>
                    
                    <div className={style.createifno}>
                        <h2 className={style.h2}>Марка</h2>
                        <div className={style.carinfo}>
                            <p className={style.p1}>{mark} </p>
                            <p className={style.p2}>
                                <span onClick={e =>handleMark(e, 'toyota')} className={style.span}>toyota</span>
                                <span onClick={e =>handleMark(e, 'bmw')} className={style.span}>bmw</span>
                                <span onClick={e =>handleMark(e, 'audi')} className={style.span}>audi</span>
                                <span onClick={e =>handleMark(e, 'lexus')} className={style.span}>lexus</span>
                                <span onClick={e =>handleMark(e, 'kia')}  className={style.span}>kia</span>
                                <span onClick={e =>handleMark(e, 'honda')} className={style.span}>honda</span>
                                <span onClick={e =>handleMark(e, 'hyundai')} className={style.span}>hyundai</span>
                                <span onClick={e =>handleMark(e, 'mers')} className={style.span}>mers</span>
                            </p>
            
                        </div>
                    </div>
                    <div className={style.createifno}>
                        <h2 className={style.h2}>Тип кузова</h2>
                        <div className={style.carinfo}>
                            <p className={style.p1}>{kuzov}</p>
                            <p className={style.p2}>
                                <span onClick={e => handleKuzov(e,'седан')} className={style.span}>седан</span>
                                <span onClick={e => handleKuzov(e,'внедорожник')} className={style.span}>внедорожник</span>
                                <span onClick={e => handleKuzov(e,'хэтчбэк')} className={style.span}>хэтчбэк</span>
                                <span onClick={e => handleKuzov(e,'универсал')} className={style.span}>универсал</span>
                            </p>
                        </div>
                    </div>
                    <div className={style.createifno}>
                        <h2 className={style.h2}>КПП</h2>
                        <div className={style.carinfo}>
                            <p className={style.p1}>{kpp}</p>
                            <p className={style.p2}>
                                <span onClick={e => handleKpp(e,'автомат')} className={style.span}>автомат</span>
                                <span onClick={e => handleKpp(e,'механика')} className={style.span}>механика</span>
                            </p>
                        </div>
                    </div>
                    <div className={style.createifno}>
                        <h2 className={style.h2}>Привод</h2>
                        <div className={style.carinfo}>
                            <p className={style.p1}>{privod}</p>
                            <p className={style.p2}>
                                <span onClick={e => handlePrivod(e,'полный')} className={style.span}>полный</span>
                                <span onClick={e => handlePrivod(e,'передний')}  className={style.span}>передний</span>
                                <span onClick={e => handlePrivod(e,'задний')} className={style.span}>задний</span>
                            </p>
                        </div>
                    </div>
                    <div className={style.createifno}>
                        <h2 className={style.h2}>Топливо</h2>
                        <div className={style.carinfo}>
                            <p className={style.p1}>{toplivo}</p>
                            <p className={style.p2}>
                                <span onClick={e => handleToplivo(e,'бензин')} className={style.span}>бензин</span>
                                <span onClick={e => handleToplivo(e,'дизель')} className={style.span}>дизель</span>
                            </p>
                        </div>
                    </div>
                    <div className={style.createifno}>
                        <h2 className={style.h2}>Руль</h2>
                        <div className={style.carinfo}>
                            <p className={style.p1}>{rul}</p>
                            <p className={style.p2}>
                                <span onClick={e => handleRul(e,'слева')} className={style.span}>слева</span>
                                <span onClick={e => handleRul(e,'справа')} className={style.span}>справа</span>
                            </p>
                        </div>
                    </div>
                    <div className={style.createifno}>
                        <h2 className={style.h2}>Цвет</h2>
                        <input 
                        type="text" 
                        placeholder={color} 
                        className={style.input}
                        onChange={e=>handleColor(e.target.value)}
                        />
                    </div>
                    <div className={style.createifno}>
                        <h2 className={style.h2}>Объем</h2>
                        <input 
                        type="text" 
                        placeholder={obem} 
                        className={style.input}
                        onChange={e=>handleObem(e.target.value)}
                        />
                    </div>
                    <div className={style.createifno}>
                        <h2 className={style.h2}>Год</h2>
                        <input 
                        type="text" 
                        placeholder={year} 
                        className={style.input}
                        onChange={e=>handleYear(e.target.value)}
                        />
                    </div>
                    <div className={style.createifno}>
                        <h2 className={style.h2}>Цена</h2>
                        <input 
                        type="text" 
                        placeholder={price} 
                        className={style.input}
                        onChange={e=>handlePrice(e.target.value)}
                        />
                    </div>
                    <div className={style.createifno}>
                        <h2 className={style.h2}>Описание</h2>
                        <input 
                        type="text"
                        placeholder={desc} 
                        className={style.input}
                        onChange={e=>handleDesc(e.target.value)}
                        />
                    </div>
                </div>
                <button 
                onClick={handleCar}
                className={style.createbtn}
                >Создать</button>
            </div>
        </div>
        
    )
}