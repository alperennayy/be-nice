import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { shops } from '../assets/assets'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'


const Shop = () => {

    const { shopId } = useParams()
    const [shopData, setShopData] = useState(false)
    const [image, setImage] = useState('')
    const [service, setService] = useState('')


    const fetchShopData = async () => {

        shops.map((shop) => {
            if (shop._id === shopId) {
                setShopData(shop)
                setImage(shop.image[0])
                return null
            }
        })

    }

    useEffect(() => {
        fetchShopData()
    }, [shopId, shops])

    return shopData ? (
        <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
            {/* Shop Data  */}
            <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>

                {/* Shop Images */}
                <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
                    <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
                        {
                            shopData.image.map((item, index) => (
                                <img onClick={() => setImage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />
                            ))
                        }
                    </div>

                    <div className='w-full sm:w-[80%]'>
                        <img className='w-full h-auto' src={image} alt="" />
                    </div>

                </div>

                {/* Shop INFO  */}

                <div className='flex-1'>
                    <h1 className='font-medium text-2xl mt-2'>{shopData.name}</h1>
                    <p className='text-sm mt-2  text-gray-500'>{shopData.location}</p>
                    <div className='flex items-center gap-1 mt-2'>
                        <p className='text-lg'>{shopData.rating}</p>
                        <img src={assets.starIcon} alt="" className='w-3.5' />
                    </div>
                    <p className='mt-5 text-gray-500 md:w-4/5'>{shopData.description}</p>
                    <Link to={`/shop/${shopId}/make-reservation`}>
                        <button className='bg-black text-white mt-5 px-8 py-3 text-sm active:bg-gray-700'> Hizmet Seç</button>
                    </Link>
                    <hr className='mt-8 sm:w-4/5' />
                </div>
            </div>
        </div>

    ) : <div className='opacity-0'></div>

}

export default Shop