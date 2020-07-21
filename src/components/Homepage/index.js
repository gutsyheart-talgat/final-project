import React from 'react'
import Header from '../Header'
import style from './home.module.css'
import Card from './Card.js'
import Inputs from './Inputs'




export default function(){
    
    
    const [state, setState] = React.useState([''])
    React.useEffect(()=> {
        fetch('http://localhost:5555/list')
            .then((response) => {
                if(!response.ok) throw response
                return response.json()
            })
            .then(data => {
               
                setState(data)
            })
            .catch(err => {
                console.log(err)
            })
    },[])
    
    return(
        <div className={style.back}>
            <div className={style.path}>
                <Header />
                <Inputs />

                <div>
                    <div className={style.cars}> 
                        {state.map(car => <Card className={style.Car} key={car.id} info={car} />)}
                    </div>
                    
                </div>
            </div>
        </div>
    )
}