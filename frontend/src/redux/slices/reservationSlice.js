import { createSlice } from "@reduxjs/toolkit"

// Uygulama başlarken localStorage'daki veriyi oku
const persistedService = localStorage.getItem('selectedService')

const initialState = {
    selectedService: persistedService ? JSON.parse(persistedService) : null,
    selectedEmployee: '',
    price: ''
}

const reservationSlice = createSlice({
    name: 'reservation',
    initialState,
    reducers: {
        setSelectedService: (state, action) => {
            state.selectedService = action.payload
            state.selectedEmployee = '' // Hizmet değişince çalışan bilgisini sıfırlıyor

            // LocalStorage’a kaydet
            localStorage.setItem('selectedService', JSON.stringify(action.payload))
        },
        setSelectedEmployee: (state, action) => {
            state.selectedEmployee = action.payload
        },
        clearReservationState: (state) => {
            state.selectedEmployee = ''
            state.selectedService = null

            // LocalStorage’dan da sil
            localStorage.removeItem('selectedService')
        },
    },
})

export const { setSelectedService, setSelectedEmployee, clearReservationState } = reservationSlice.actions
export default reservationSlice.reducer
