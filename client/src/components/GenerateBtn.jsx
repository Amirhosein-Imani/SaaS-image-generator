import React from 'react'
import { assets } from '../assets/assets'

const GenerateBtn = () => {

  return (

    <div className='text-center pb-16'>

      <h1 className='text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold text-neutral-800 py-6 md:py-16'>همین حالا امتحان کنید!</h1>

      <button className='inline-flex items-center gap-2 px-12 py-3 rounded-full bg-black text-white m-auto hover:scale-105 transition-all duration-500'>تولید تصاویر

        <img src={assets.star_group} alt="" className='h-6' />

      </button>

    </div>

  )

}

export default GenerateBtn