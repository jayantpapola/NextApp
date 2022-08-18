import { configureStore } from '@reduxjs/toolkit'
import cartReducer  from './Reducers/cartReducer'

const  store = configureStore({
  reducer: {
    Cart:cartReducer
  },
})
export default store