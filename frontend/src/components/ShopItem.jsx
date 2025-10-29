import React from 'react'
import { Link } from 'react-router-dom'

const ShopItem = ({ id, name, image, descripiton, category, location }) => {
    return (
        <Link className='text-gray-700 cursor-pointer' to={`/shop/${id}`}>
            <p className='pt-3 pb-1 text-sm'>{name}</p>
            <div className='overflow-hidden'>
                <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt={name} loading='lazy' />
            </div>
            <p className='text-sm font-medium'>{descripiton}</p>
            <p className='text-sm font-medium'>{category}</p>
            <p className='text-sm font-medium'>{location}</p>
        </Link>
    )
}

export default ShopItem