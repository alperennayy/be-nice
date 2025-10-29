import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { shops } from '../assets/assets'

const MakeReservation = () => {

    const { shopId } = useParams()
    const [shopData, setShopData] = useState(false)
    const [service, setService] = useState('')
    const [employees, setEmployees] = useState('')

    const fetchShopData = async () => {

        shops.map((item) => {
            if (item._id === shopId) {
                setShopData(item)
                return null
            }
        })

    }
    console.log(shopData.employees)

    useEffect(() => {
        fetchShopData()

    }, [shopId, shops])

    return shopData ? (
        <div>
            <p className='text-gray-600'>Make a reservation</p>
            <div className='flex  gap-4 text-sm text-gray-600 '>
                <div className='flex flex-col gap-2 mt-5'>
                    {
                        shopData.services.map((item, index) => (
                            <button onClick={() => setService(item)} className={`border py-2 px-4 bg-gray-100 ${item === service ? 'border-orange-500' : ''}`} key={index}>{item}</button>
                        ))
                    }
                </div>
                <div>
                    {shopData.employees.map((item, index) => (
                        <button key={index} onClick={() => setService(item)}>
                            <img src={item.image} alt={item.name} />
                            <p>{item.name}</p>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    ) : <div className='opacity-0'></div>
}

export default MakeReservation