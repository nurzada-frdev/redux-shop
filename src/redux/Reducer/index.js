
const initialState={
product:[],
    basket:[],
    favorite:[]
}
export const Reducer=(state=initialState,action)=>{
    switch (action.type){
        case "GET_PRODUCT":
            return {...state,product:action.payload}
        case 'ADD_TO_BASKET':
            const fountProduct =state.basket.find(el=>el.id===action.payload.id)
            if (fountProduct){
                return {...state,basket: state.basket.map(el=>el.id===fountProduct.id?{...el,quantity:el.quantity+1}:1)}
            }else {
                return {...state,basket: [...state.basket,{...action.payload,quantity: 1}]}
            }
        default:return state
    }
}