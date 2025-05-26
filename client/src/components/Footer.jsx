import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {

  return (

    <div className='flex items-center justify-between gap-4 py-3 mt-20'>

        <img src={assets.amirhosein_imani} alt="" width={45} className='rounded-full'/>

        <p className='flex-1 border-r border-gray-400 pr-4 text-sm text-gray-500 max-sm:hidden'>توسعه یافته توسط امیرحسین ایمانی | ۲۰۲۵ © تمامی حقوق محفوظ است.</p>

        <div className='flex gap-2.5'>

            <a href="https://github.com/Amirhosein-Imani" target='_blank'>

                <img src={assets.github_icon} alt="" width={35} className='hover:scale-[1.10] transition-all duration-300'/>

            </a>
            
            <a href="https://www.instagram.com/imani_programmer/" target='_blank'>

                <img src={assets.instagram_icon} alt="" width={35} className='hover:scale-[1.10] transition-all duration-300'/>

            </a>

        </div>

    </div>

  )

}

export default Footer