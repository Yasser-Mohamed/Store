import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../assets/data/dummyData";

export const productSlice = createSlice({
  name: "products",
  initialState: {
    filterProduct:
      JSON.parse(sessionStorage.getItem("filterdData")) || storeData,
    singleProduct:
      JSON.parse(sessionStorage.getItem("oneProduct")) || storeData,
  },
  reducers: {
    filterProduct(state, action) {
      try {
        const filter = storeData.filter(
          (product) => product.type === action.payload
        );
        state.filterProduct = filter;
        const saveState = JSON.stringify(filter);
        sessionStorage.setItem("filterdData", saveState);
      } catch (err) {
        return err;
      }
    },
    singleProduct(state, action) {
      try {
        const oneProduct = storeData.filter(
          (product) => product.id === action.payload
        );
        state.singleProduct = oneProduct
        const saveState = JSON.stringify(oneProduct);
        sessionStorage.setItem("oneProduct", saveState);
      } catch (err) {
        return err;
      }
    },
  },
});

export const { filterProduct, singleProduct } = productSlice.actions;
export default productSlice.reducer;
