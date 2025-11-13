import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setSelectedEmployee } from '../redux/slices/reservationSlice.js'

const EmployeeCard = ({ emp }) => {
    const dispatch = useDispatch()
    const selectedEmployee = useSelector(state => state.reservation.selectedEmployee)

    return (
        <button
            onClick={() => dispatch(setSelectedEmployee(emp._id))}
            className={`flex flex-col items-center gap-3 p-3 border rounded-md hover:shadow-md transition-all text-left
        ${selectedEmployee === emp._id ? 'bg-blue-500 text-white' : 'border-gray-300 text-gray-600'}`}
        >
            <img src={emp.image[0]} alt={emp.name} className='mt-3 w-32 h-32 object-cover rounded' />
            <p className='text-center text-md font-medium'>{emp.name}</p>
            {emp.service.map((srv, idx) => (
                <p key={idx} className='text-gray-500 text-center text-sm'>{srv}</p>
            ))}
        </button>
    )
}

export default EmployeeCard
