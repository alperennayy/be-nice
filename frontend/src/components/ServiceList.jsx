import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedService } from '../redux/slices/reservationSlice.js'

const ServiceList = ({ services }) => {
    const dispatch = useDispatch()
    const selectedService = useSelector(state => state.reservation.selectedService)

    return (
        <div className='flex flex-col gap-3 text-sm text-gray-600 sm:w-1/3'>
            {services.map((service, index) => (
                <button
                    key={index}
                    onClick={() => dispatch(setSelectedService(service))}
                    className={`w-full pl-3 py-2 pr-6 text-start border rounded cursor-pointer transition-all 
      ${selectedService?.name === service.name ? 'bg-blue-500 text-white' : 'border-gray-300 text-gray-600'}`}
                >
                    <div className='flex justify-between'>
                        <span>{service.name}</span>
                        <span className='font-medium'>{service.price} TL</span>
                    </div>
                </button>
            ))}

        </div>
    )
}

export default ServiceList
