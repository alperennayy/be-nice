import { createSlice } from '@reduxjs/toolkit'
import { shops as localShops } from '../../assets/assets' // Şu an frontend verisi

const initialState = {
    shops: localShops || [],  // Mağazalar ve çalışanlar
}

const shopSlice = createSlice({
    name: 'shop',
    initialState,
    reducers: {
        setShops: (state, action) => {
            state.shops = action.payload
        },
    },
})

export const { setShops } = shopSlice.actions
export default shopSlice.reducer
