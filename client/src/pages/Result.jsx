import React from 'react'
import { assets } from '../assets/assets'

const Result = () => { 

  return (

    <form action="" className='flex flex-col min-h-[90vh] items-center justify-center'>

      <div>

        <div className="relative">

          <img src={assets.sample_img_1} alt="" className="max-w-sm rounded" />
          <span className="absolute bottom-0 right-0 h-1 bg-blue-500 w-full transition-all duration-[10s]" />

        </div>

        <p>در حال بارگزاری...</p>

      </div>

      <div className='flex w-full max-w-xl bg-neutral-500 text-white text-sm p-0.5 mt-10 rounded-full flex-row-reverse'>

        <input type="text" placeholder='در اینجا تصویر موردنظر خود را توصیف کنید' className='flex-1 bg-transparent outline-none mr-8 max-sm:w-20' />

        <button className='bg-zinc-900 px-10 sm:px-16 py-3 rounded-full' type='submit'>تولید تصویر</button>

      </div>

      <div className='flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded-full flex-row-reverse'>

        <p className='bg-transparent border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer'>تولید دوباره تصویر</p>

        <a href="" download className='bg-zinc-900 px-10 py-3 rounded-full cursor-pointer'>دانلود</a>

      </div>

    </form>

  );

}

export default Result