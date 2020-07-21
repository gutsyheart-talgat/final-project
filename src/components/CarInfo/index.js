import React from 'react'
import style from './carinfo.module.css'
import Header from '../Header'

function Carinfo({match}){
    const [info, setInfo] = React.useState(null)
    console.log(match,'match')
    React.useEffect(()=> {
        fetch(`http://localhost:5555/list/${match.params.id}`)
            .then((response) => {
                if(!response.ok) throw response
                return response.json()
            })
            .then(data => {
                setInfo(data)
            })
            .catch(err => {
                console.log(err)
            })
    },[])
    console.log('infocar',info)
    return (
        <div className={style.back}>
            <div className={style.path}>
                <Header />
                <div>
                    <div className={style.infoheader}>
                        <div className={style.carheader}>
                            <h1 className={style.h1}>{info && info.marks}</h1>
                            <h1 className={style.h1}>{info && info.price}$</h1>
                        </div>
                        <div className={style.owner}>
                            <div className={style.img}></div>
                            <div className={style.ownerinfo}>tima 05588554477885</div>
                        </div>
                    </div>
                    <div className={style.infobody}>
                        <div className={style.parametrs}>
                            <div>
                                <h2 className={style.h2}>Год выпуска</h2>
                                <p>{info && info.year}</p>
                            </div>
                            <div>
                                <h2 className={style.h2}>Объем двигателя, л</h2>
                                <p>{info && info.obem}</p>
                            </div>
                            <div>
                                <h2 className={style.h2}>Тип кузова</h2>
                                <p>{info && info.kuzov}</p>
                            </div>
                            <div>
                                <h2 className={style.h2}>КПП</h2>
                                <p>{info && info.kpp}</p>
                            </div>
                            <div>
                                <h2 className={style.h2}>Привод</h2>
                                <p>{info && info.privod}</p>
                            </div>
                            <div>
                                <h2 className={style.h2}>Топливо</h2>
                                <p>{info && info.toplivo}</p>
                            </div>
                            <div>
                                <h2 className={style.h2}>Руль</h2>
                                <p>{info && info.rul}</p>
                            </div>
                            <div>
                                <h2 className={style.h2}>Цвет</h2>
                                <p>{info && info.color}</p>
                            </div>
                            <div>
                                <h2 className={style.h2}>Цена</h2>
                                <p>{info && info.price}$</p>
                            </div>
                        </div>
                        <div className={style.carfoto}>{info && info.desc}</div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Carinfo