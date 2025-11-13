import { configureStore } from '@reduxjs/toolkit'
import shopReducer from './slices/shopSlice'
import reservationReducer from './slices/reservationSlice'

export const store = configureStore({
    reducer: {
        shop: shopReducer, // Mağaza verilerini saklamak için oluşturdum
        reservation: reservationReducer, //Randevu için çalışan kişi ve hizmet i tutuyor
    },
})