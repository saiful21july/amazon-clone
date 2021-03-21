export const initialState = {
    basket: [],
    user: null 
}
// how to build a selector
export const getBasketTotal = (basket) =>
basket?.reduce((amount, item) => item.price + amount,0)

// reducer is how we dispatch action into datalayer basically it is similar like redux and it is a globalstore for your app.Basically reducer just listen that ohh you updated and now i know (reducer)what to do or you remove something from the basket now i know what to do.That's what reducer is doing.
const reducer = (state, action) => {
    console.log(action);
    switch(action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket:[...state.basket, action.item]
            }
            case 'REMOVE_FROM_BASKET':
                const index = state.basket.findIndex((basketItem) =>basketItem.id === action.id)
                let newBasket = [...state.basket]
                if (index>= 0) {
                    newBasket.splice(index, 1)

                } else {
                    console.warn(
                      `Can't remove product (id: ${action.id}) as it's not in basket!`
                    )
                }
                return {
                    ...state,
                    basket:newBasket
                }
                case 'SET_USER':
                    return {
                        ...state,
                        user: action.user

                    }
            default:
                return state
    }
}
export default reducer