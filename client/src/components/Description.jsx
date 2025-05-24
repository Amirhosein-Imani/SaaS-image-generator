import React from 'react'
import { assets } from '../assets/assets'

const Description = () => {

  return (

    <div className='flex flex-col items-center justify-center my-24 p-6 md:px-28'>

        <h1 className='text-3xl sm:text-4xl font-semibold mb-4'>تولید تصاویر به کمک هوش مصنوعی</h1>
        <p className='text-gray-500 mb-8'>تصورات خود را مقابل چشمانتان ببینید</p>

        <div className='flex flex-col gap-5 md:gap-14 md:flex-row items-center'>

            <img src={assets.sample_img_1} alt="" className='w-80 xl:w-96 rounded-lg' />

            <div className='max-w-4xl space-y-4 text-justify '>

                <h2 className='text-3xl font-medium max-w-4xl mb-4'>معرفی مبدل نوشته به تصویر مبتنی بر هوش مصنوعی</h2>

                <p className='text-gray-600 mb-4'>به راحتی به ایده های خود جان ببخشید! چه تصاویر خیره کننده معمولی نیاز داشته باشید چه تصاویری خاص و بی همتا، این ابزار به شما کمک خواهد کرد. کافی ست لحظه ای خیال پردازی کنید و چند لحظه بعد ایده های خودتان را مقابل چشمانتان بیابید.</p>

                <p className='text-gray-600'>به سادگیه تایپ کردن چند کلمه و جمله میتوانید تصویر دلخواه خودتان را به وجود بیاورید. این ابزار که از تکنولوژی پیشرفته هوش مصنوعی قدرت گرفته کار را برایتان ساده خواهد کرد.</p>

            </div>

        </div>

    </div>

  )

}

export default Description