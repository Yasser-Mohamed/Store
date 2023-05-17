import {configureStore} from "@reduxjs/toolkit";
import SlideReducer from "../features/SliderSlice"
import productReducer from "../features/productSlice"
import CartReducer from "../features/CartSlice"
import authReducer from "../features/authSlice"

export const store = configureStore({
    reducer: {
        slider: SlideReducer,
        products: productReducer,
        cart: CartReducer,
        user: authReducer
    }
})