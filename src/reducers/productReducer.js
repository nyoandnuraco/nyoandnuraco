import uuid from 'uuid/v1';

export const productReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_PRODUCT':
            return [...state, {
                package: action.product.package,
                price: action.product.price,
                id: uuid()
            }]
        case 'REMOVE_PRODUCT':
            return state.filter(product => product.id !== action.id)
        default:
            return state
    }
}