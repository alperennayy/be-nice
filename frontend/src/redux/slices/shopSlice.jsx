import { createSlice } from "@reduxjs/toolkit"
import { shops } from "../../assets/assets"

const initialState = {
    shops: shops
}

const shopSlice = createSlice({
    name: "shop",
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {

    }
})

export const selectShops = (state) => state.shop.shops
export default shopSlice.reducer