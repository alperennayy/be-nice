import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedService } from '../redux/slices/reservationSlice'

const EmployeeDetailCard = ({ employee }) => {

    // Redux'tan seçili hizmeti çekiyoruz
    const selectedService = useSelector(state => state.reservation.selectedService)
    const dispatch = useDispatch()

    const [selectedDate, setSelectedDate] = useState(null)
    const [selectedTime, setSelectedTime] = useState(null)

    // Günler
    const dates = [
        { day: 10, weekday: 'Cum' },
        { day: 11, weekday: 'Paz' },
        { day: 12, weekday: 'Pzt' },
        { day: 13, weekday: 'Sal' },
        { day: 14, weekday: 'Çar' },
        { day: 15, weekday: 'Per' },
        { day: 16, weekday: 'Cum' },
    ]

    // Saatler
    const times = [
        "8:00 am", "8:30 am", "9:00 am", "9:30 am",
        "10:00 am", "10:30 am", "11:00 am", "11:30 am"
    ]


    return (
        <div className='bg-white p-6 rounded-xl shadow-lg w-full flex gap-6 items-start'>

            {/* Çalışan Resmi */}
            <div className='flex-shrink-0'>
                <img
                    src={employee.image[0]}
                    alt={employee.name}
                    className='w-48 h-48 object-cover rounded-xl'
                />
            </div>

            {/* Çalışan Detayları */}
            <div className='flex-1 flex flex-col justify-between gap-4'>
                <div>
                    <h2 className='text-2xl font-bold'>{employee.name}</h2>
                    <p className='text-gray-500 mt-1'>{employee.description}</p>

                    <div className='flex flex-wrap gap-2 mt-3'>
                        {employee.service.map((service, index) => (
                            <span key={index} className='bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm'>
                                {service}
                            </span>
                        ))}
                    </div>
                </div>

                <div className='flex gap-2 text-lg'>
                    <p>Alınacak Hizmet : </p>
                    <span className='text-gray-500'>{selectedService?.name}</span>
                </div>

                <div className='flex gap-2 text-lg'>
                    <p>Fiyat: </p>
                    <span className='text-gray-500'>{selectedService?.price} TL</span>
                </div>

                {/* Randevu Seçimi */}
                <div className='mt-4'>
                    <p className='font-medium mb-2'>Randevu Seç</p>

                    {/* Gün Seçimi */}
                    <div className='flex gap-3 overflow-x-auto py-2 mb-3'>
                        {dates.map((date, idx) => {
                            const dateString = `${date.day}-${date.weekday}`
                            return (
                                <button
                                    key={idx}
                                    onClick={() => setSelectedDate(dateString)}
                                    className={`min-w-[70px] h-20 flex flex-col items-center justify-center px-4 py-2 rounded-lg border transition flex-shrink-0
                                        ${selectedDate === dateString ? 'bg-blue-500 text-white' : 'border-gray-300 text-gray-700'}`}
                                >
                                    <span className='text-lg font-semibold'>{date.day}</span>
                                    <span className='text-sm'>{date.weekday}</span>
                                </button>
                            )
                        })}
                    </div>

                    {/* Saat Seçimi */}
                    <div className='grid grid-cols-4 gap-2 mb-4'>
                        {times.map((time, idx) => (
                            <button
                                key={idx}
                                onClick={() => setSelectedTime(time)}
                                className={`px-3 py-1 rounded-full border text-sm transition
                                    ${selectedTime === time ? 'bg-blue-500 text-white' : 'border-gray-300 text-gray-700'}`}
                            >
                                {time}
                            </button>
                        ))}
                    </div>

                    {/* Randevu Al Butonu */}
                    <button
                        disabled={!selectedDate || !selectedTime}
                        className={`w-full py-2 rounded-full text-white transition
                            ${selectedDate && selectedTime ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-300 cursor-not-allowed'}`}
                    >
                        Randevu Al
                    </button>
                </div>
            </div>
        </div>
    )
}

export default EmployeeDetailCard
