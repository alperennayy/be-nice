import React from 'react'
import { useSelector } from 'react-redux'
import ShopItem from '../components/ShopItem'

const Shops = () => {

    const shops = useSelector(state => state.shop.shops)

    return (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
            {
                shops.map((shop, index) => (
                    <ShopItem key={index} id={shop._id} name={shop.name} image={shop.image} descripiton={shop.descripiton} category={shop.category} location={shop.location} />
                ))
            }
        </div>
    )
}

export default Shops