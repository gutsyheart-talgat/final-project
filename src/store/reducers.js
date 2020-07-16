const initialState = {
    marks:'',
    kuzov:'',
    kpp:'',
    privod:'',
    toplivo:'',
    rul:'',
    price: 0,
    color:'',
    desc:''
}

const reducer = (state = initialState, action) =>{
    switch(action.type){
        case 'CHANGE_PARAMETRS':
            return {
                ...state
            }
        case 'CHANGE_PRICE':
            return{
                ...state,
                price:''
            }
        case 'CHANGE_COLOR':
            return {
                ...state,
                color:''
            }
        case 'CHANGE_DESC': 
            return {
                ...state,
                desc:''
            }
        default:
            return state
    }
}
export default reducer