import React from 'react'
import images from '../assets/images/images'

const HomeCard = () => {
    return (
        <div className='w-[280px] m-3 cursor-pointer'>
            <img src={images.deneme} alt="" />
            <div className='font-bold mt-1'>Title Title Title Title Title Title Title Title Title Title Title Title Title</div>
            <div className='text-xs mt-1 tracking-wider text-gray-700'>Barış Karabela</div>
            <div className='text-xs mt-1 tracking-wider text-gray-700'>
                <span>100k Görüntülenme</span>
                <span>1 yıl önce</span>
            </div>
        </div>
    )
}

export default HomeCard