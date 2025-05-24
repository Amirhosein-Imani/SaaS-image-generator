import React from 'react'
import { assets, testimonialsData } from '../assets/assets'

const Testimonials = () => {

  return (

    <div className='flex flex-col justify-center items-center my-20 py-12'>

        <h1 className='text-3xl sm:text-4xl font-semibold mb-4'>نظرات کاربران</h1>

        <p className='text-gray-500 mb-12'>کاربران چه میگویند؟</p>

        <div className='flex flex-wrap gap-6'>

            {

                testimonialsData.map((testimonial , index) => (

                    <div key={index} className='bg-white/20 p-12 rounded-lg shadow-md border w-80 m-auto cursor-pointer hover:scale-[1.02] transition-all'>

                        <div className='flex flex-col items-center'>

                            <img src={testimonial.image} alt="" className='rounded-full w-14' />

                            <h2 className='text-xl font-semibold mt-3'>{testimonial.name}</h2>

                            <p className='text-gray-500 mb-4 mt-1 whitespace-nowrap'>{testimonial.role}</p>

                            <div className='flex mb-4'>

                                {

                                    Array(testimonial.stars).fill().map((item , index) => (

                                        <img src={assets.rating_star} alt="" key={index} />

                                    ))

                                }

                            </div>

                            <p className='text-sm text-gray-600 text-justify'>{testimonial.text}</p>

                        </div>

                    </div>

                ))

            }

        </div>

    </div>

  )

}

export default Testimonials