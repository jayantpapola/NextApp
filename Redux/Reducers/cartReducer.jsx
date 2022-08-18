import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    basket:[]
}

export const cartReducer = createSlice({
    name:'Cart',
    initialState,
    reducers:{
        addToCart:(state,action) => {
            state.basket = [...state.basket, action.payload]
        },
        deleteFromCart:(state,action) =>{
            var newBasket = state.basket.filter(e=>e.id != action.payload)
            state.basket = newBasket
        }
        
    }
})

export const { addToCart, deleteFromCart } = cartReducer.actions
export default cartReducer.reducer