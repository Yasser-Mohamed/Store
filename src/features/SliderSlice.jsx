import {createSlice} from "@reduxjs/toolkit";
import { sliderData } from "../assets/data/dummyData";

export const SliderSlice = createSlice({
    name: " slider",
    initialState: {
        value: 0,
        length: sliderData.length
    },
    reducers: {
        nextSlide: (state,action) =>{
            state.value = action.payload > state.length -1 ? 0 : action.payload;
        },
        preSlide: (state , action)=>{
            state.value = action.payload < 0 ? state.length -1: action.payload; 
        },
        dotSlide: (state,action)=>{
            state.value = action.payload;
        }
    }
})

export const { nextSlide, preSlide, dotSlide } = SliderSlice.actions;
export default SliderSlice.reducer