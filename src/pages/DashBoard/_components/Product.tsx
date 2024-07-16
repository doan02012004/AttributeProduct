import React, { useState } from 'react'
import InforProduct from './InforProduct'
import AttributeProduct from './AttributeProduct'
import OptionalProduct from './OptionalProduct'

const Product = () => {
    const [isOpenForm, setIsOpenForm] = useState(false)
    const [isInfor, setIsInfor] = useState(true)
    const [isAtb, setIsAtb] = useState(false)
    const [isOptional, setIsOptional] = useState(false)
    return (
        <section>
            {/* Form add  */}
            {isOpenForm && (
                <section className='fixed top-0 left-0 w-full h-full bg-white/20'>
                    <div className='w-full h-full flex justify-center items-center'>
                        <div className='w-[1200px] h-[700px] border bg-white rounded-lg shadow-md shadow-gray-400 p-6 flex gap-x-4 relative'>
                            {/* close  */}
                            <div onClick={() => setIsOpenForm(false)} className=' absolute top-2 right-3 cursor-pointer size-9 bg-gray-100 rounded-full flex justify-center items-center border hover:bg-gray-400'>
                                <span><i className="fa-solid fa-xmark"></i></span>
                            </div>
                            {/* sidebar product  */}
                            <div className='pr-4 border-r border-r-gray-300 h-full flex-shrink-0'>
                                <ul>
                                    <li onClick={() => { setIsInfor(true), setIsAtb(false), setIsOptional(false) }} className={`${isInfor && 'underline text-blue-500'} px-3 cursor-pointer py-1 font-semibold mb-2 hover:underline`}>Thông tin sản phẩm</li>
                                    <li onClick={() => { setIsInfor(false), setIsAtb(true), setIsOptional(false) }} className={`${isAtb && 'underline text-blue-500'} px-3 cursor-pointer py-1 font-semibold mb-2 hover:underline`} >Thêm thuộc tính</li>
                                    <li onClick={() => { setIsInfor(false), setIsAtb(false), setIsOptional(true) }} className={`${isOptional && 'underline text-blue-500'} px-3 cursor-pointer py-1 font-semibold mb-2 hover:underline`} >Tạo biến thể</li>
                                </ul>
                            </div>
                            <div className='w-full'>
                                {isInfor && (
                                  <InforProduct />
                                )}
                                {isAtb && (
                                   <AttributeProduct />
                                )}
                                {isOptional && (
                                  <OptionalProduct />
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            )}
            {/* Title  */}
            <div className='mb-3'>
                <div className='mb-3'>
                    <h3 className='text-white text-xl font-semibold'>List Product</h3>
                </div>
                <div>
                    <button onClick={() => setIsOpenForm(true)} className='px-4 py-2 text-sm rounded-md bg-blue-500 hover:bg-blue-800 text-white font-semibold'><span className='mr-2'><i className="fa-solid fa-plus"></i></span>Product</button>
                </div>
            </div>
            {/* Table  */}
            <div className="flex flex-col">
                <div className="overflow-x-auto">
                    <div className="min-w-full py-2 align-middle">
                        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200">
                                <thead className="bg-gray-50">
                                    <tr>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            STT
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Name
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Avatar
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Price
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Discount
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Category
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            View
                                        </th>
                                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                    {/* Example Row */}
                                    <tr>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            1
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            Product Name
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className=' size-12 overflow-hidden rounded-full'>
                                                <img className="w-full h-full object-cover" src="https://picsum.photos/id/34/300/300" alt="Avatar" />
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            $100.00
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            10%
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            Category Name
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                            <button className=" size-9 flex justify-center items-center rounded-full hover:bg-gray-200"><span className='text-green-600 hover:text-green-900'> <i className="fa-solid fa-eye"></i></span></button>
                                        </td>
                                        <td className="px-6 py-5 flex items-center whitespace-nowrap text-sm font-medium">
                                            <button className=" size-9 flex justify-center items-center rounded-full hover:bg-gray-200 mr-2"><span className='text-red-600 hover:text-red-900'><i className="fa-regular fa-trash-can"></i></span></button>
                                            <button className=" size-9 flex justify-center items-center rounded-full hover:bg-gray-200 "><span className='text-yellow-600 hover:text-yellow-900'><i className="fa-regular fa-pen-to-square"></i></span></button>

                                        </td>
                                    </tr>
                                    {/* Add more rows as needed */}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Product