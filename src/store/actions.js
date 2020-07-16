export const changeParam = (name,value) => ({
    type: 'CHANGE_PARAMETRS',
    name,
    value
})
export const changePrice = (price) => ({
    type: 'CHANGE_PRICE',
    price
})
export const changeColor = (color) => ({
    type: 'CHANGE_COLOR',
    color
})
export const changeDesc = (desc) => ({
    type: 'CHANGE_DESC',
    desc
})
export const changeCarParam = () => ({
    type: 'CHAN'
})

const checkResponse = (response, errText) =>{
    if(!response.ok) throw new Error(errText)
    return response.json()
}

// export const postCars = () = () =>{
//     fetch('https://une-mashine.herokuapp.com/create/users')
//         .then((response) => checkResponse(response, 'ошибка отправки'))
//         .then((data)=>{
//             dispatch({type:'CHANGE_PARAMETRS', data})
//         })
// }