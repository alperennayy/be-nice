import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ServiceList from '../components/ServiceList'
import EmployeeCard from '../components/EmployeeCard'

const MakeReservation = () => {
    const { shopId } = useParams()
    const navigate = useNavigate()
    const shops = useSelector(state => state.shop.shops)
    const selectedEmployee = useSelector(state => state.reservation.selectedEmployee)
    const selectedService = useSelector(state => state.reservation.selectedService)

    const [shopData, setShopData] = useState(null)

    useEffect(() => {
        const shop = shops.find(shop => shop._id === shopId)
        if (shop) setShopData(shop)
    }, [shopId, shops])

    if (!shopData) return <div className='opacity-0'></div>
    const filteredEmployees = selectedService
        ? shopData.employees.filter(emp =>
            emp.service.some(srv => srv.toLowerCase().trim() === selectedService.name.toLowerCase().trim())
        )
        : shopData.employees

    return (
        <div>
            <p className='text-gray-600 text-lg sm:text-xl font-medium'>Make a reservation</p>

            <div className='flex flex-col sm:flex-row gap-4 mt-5'>
                <ServiceList services={shopData.services} />
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:w-2/3'>
                    {filteredEmployees.map(emp => (
                        <EmployeeCard key={emp._id} emp={emp} />
                    ))}
                </div>
            </div>

            {selectedEmployee && (
                <div className='flex justify-center mt-8'>
                    <button
                        onClick={() => navigate(`/employee/${selectedEmployee}`)}
                        className='bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition'
                    >
                        Randevu Seç
                    </button>
                </div>
            )}
        </div>
    )
}

export default MakeReservation
