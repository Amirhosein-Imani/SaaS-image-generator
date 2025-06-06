import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Navbar = () => {

    const {user} = useContext(AppContext);
    const navigate = useNavigate();

  return (

    <div className='flex justify-between items-center py-4'>

        <Link to='/'>

            <img src={assets.amirhosein_imani} alt="Amirhosein Imani" className='rounded-full w-10 h-auto sm:w-15 lg:w-20' />

        </Link>

        <div>

            {

                user ? 
                <div className='flex items-center gap-2 sm:gap-3 flex-row-reverse'>

                    <button onClick={() => navigate('/buy')} className='flex items-center gap-2 bg-blue-100 px-4 sm:px-6 py-1.5 sm:py-3 rounded-full hover:scale-105 transition-all duration-700'>

                        <img src={assets.credit_star} alt="Credit Star" className='w-5' />
                        <p className='text-xs sm:text-sm font-medium text-gray-600'>اعتبار باقی‌مانده: ۵۰</p>

                    </button>

                    <p className='text-gray-600 max-sm:hidden pl-4'>سلام، امیرحسین</p>

                    <div className='relative group'>

                        <img src={assets.profile_icon} alt="User" className='w-10 drop-shadow' />

                        <div className='absolute hidden group-hover:block top-0 right-0 text-black rounded z-10 pt-12'>

                            <ul className='list-none m-0 p-2 bg-white rounded-md border text-sm'>

                                <li className='py-1 px-2 pr-10 cursor-pointer'>خروج</li>

                            </ul>

                        </div>

                    </div>

                </div> 
                
                : 
                <div className='flex items-center gap-2 sm:gap-5 flex-row-reverse'>

                    <p onClick={() => navigate('/buy')} className='cursor-pointer'>تعرفه ها</p>
                    <button className='bg-zinc-800 text-white px-8 sm:px-10 py-2 text-sm rounded-full'>ورود</button>

                </div>

            }

        </div>

    </div>

  )

}

export default Navbar