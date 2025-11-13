import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import EmployeeDetailCard from '../components/EmployeeDetailCard'

const ReservationDetail = () => {
    const { employeeId } = useParams()
    const shops = useSelector(state => state.shop.shops)
    const selectedService = useSelector(state => state.reservation.selectedService)

    const [empData, setEmpData] = useState(null)

    useEffect(() => {
        if (shops.length === 0) return
        const employee = shops.flatMap(shop => shop.employees)
            .find(emp => String(emp._id) === String(employeeId))
        setEmpData(employee)
    }, [employeeId, shops])


    if (!empData) return <p className='text-center mt-10'>Yükleniyor...</p>

    return (
        <div className='p-6 flex justify-center'>
            <EmployeeDetailCard employee={empData} />
        </div>
    )
}

export default ReservationDetail
