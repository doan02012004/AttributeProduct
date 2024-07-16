import React from 'react'
import { Outlet } from 'react-router-dom'

const DashBoard = () => {
  return (
    <div className='px-4 bg-gray-900 w-full h-screen flex gap-x-8'>
        {/* SideBar  */}
       <div className='w-52 h-screen'>
       <div className=' fixed top-0 left-4 flex-shrink-0 py-4 w-52'>
            <div className='w-full text-center py-4 border-b border-b-gray-50 mb-3'>
                <div className='w-max mx-auto size-14 rounded-full overflow-hidden mb-2 '>
                    <img src="http://picsum.photos/id/34/500/500" className='w-full h-full object-cover' alt="" />
                </div>
                <h3 className='font-bold text-base uppercase text-white'>Admin</h3>
            </div>
            <div className='px-4'>
                {/* item  */}
                <div className='mb-5'>
                    <h5 className='text-sm font-light tracking-wider text-white mb-2'>Statistical</h5>
                    <ul className='menu-sidebar w-full'>
                            <li className=' w-full text-base font-semibold flex flex-col text-white transition-all  duration-300 ease-in-out hover:text-fuchsia-200 hover:underline'><a href="#" className='flex items-center gap-x-3 self-end'><span className='text-yellow-500'><i className="fa-solid fa-chart-line"></i></span>DashBoard</a></li>
                        </ul>
                </div>
                <div className='mb-5'>
                    <h5 className='text-sm font-light tracking-wider text-white mb-2'>Data</h5>
                        <ul className='menu-sidebar w-full'>
                            <li className='active w-full text-base font-semibold flex flex-col text-white transition-all  duration-300 ease-in-out mb-3 hover:text-fuchsia-200 hover:underline'><a href="#" className='flex items-center gap-x-3 self-end'><span className='text-red-500'><i className="fa-solid fa-gift"></i></span>Products</a></li>
                            <li className=' w-full text-base font-semibold flex flex-col text-white transition-all  duration-300 ease-in-out mb-3 hover:text-fuchsia-200 hover:underline'><a href="#" className='flex items-center gap-x-3 self-end'> <span className='text-blue-400'><i className="fa-solid fa-users"></i></span>Users</a></li>
                            <li className=' w-full text-base font-semibold flex flex-col text-white transition-all  duration-300 ease-in-out mb-3 hover:text-fuchsia-200 hover:underline'><a href="#" className='flex items-center gap-x-3 self-end'><span className='text-fuchsia-600'><i className="fa-solid fa-list"></i></span>Categories</a></li>
                            <li className=' w-full text-base font-semibold flex flex-col text-white transition-all  duration-300 ease-in-out  hover:text-fuchsia-200 hover:underline'><a href="#" className='flex items-center gap-x-3 self-end'><span className='text-yellow-700'><i className="fa-solid fa-cart-shopping"></i></span>Order management</a></li>
                        </ul>
                </div>
                <div className='mb-5'>
                    <h5 className='text-sm font-light tracking-wider text-white mb-2'>Chat</h5>
                        <ul className='menu-sidebar w-full'>
                            <li className=' w-full text-base font-semibold flex flex-col text-white transition-all  duration-300 ease-in-out mb-3 hover:text-fuchsia-200 hover:underline'><a href="#" className='flex items-center gap-x-3 self-end'><span className='text-blue-400'><i className="fa-solid fa-comments"></i></span>Messenger</a></li>
                            <li className=' w-full text-base font-semibold flex flex-col text-white transition-all  duration-300 ease-in-out hover:text-fuchsia-200 hover:underline'><a href="#" className='flex items-center gap-x-3 self-end'><span className='text-green-400'><i className="fa-solid fa-check"></i></span>Feedback</a></li>
                        </ul>
                </div>
            </div>
        </div>
       </div>

        <div className='py-4'>
            <Outlet />
        </div>
    </div>
  )
}

export default DashBoard