import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addColor, addSize, removeColor, removeSize, setColorData, setSizeData } from '../../../redux/features/attributeSlice'

const AttributeProduct = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const sizeData = useSelector((state: any) => state.attribute.sizeData)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const colorData = useSelector((state: any) => state.attribute.colorData)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const sizes = useSelector((state: any) => state.attribute.sizes)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const colors = useSelector((state: any) => state.attribute.colors)
    const dispath = useDispatch()
    const sizeQuery = useQuery({
        queryKey: ['SIZE'],
        queryFn: async () => {
            try {
                const data = await axios.get('http://localhost:3000/sizes')
                return data.data
            } catch (error) {
                console.log(error);
            }
        }
    })
    const colorQuery = useQuery({
        queryKey: ['COLOR'],
        queryFn: async () => {
            try {
                const data = await axios.get('http://localhost:3000/colors')
                return data.data
            } catch (error) {
                console.log(error);
            }
        }
    })
    useEffect(() => {
        if (sizeQuery.data) {
            if (sizes.length > 0) {
                const newData = sizeQuery.data.filter((item) => !sizes.includes(item))
                dispath(setSizeData(newData))
            } else {
                dispath(setSizeData(sizeQuery.data))
            }
        }
    }, [sizeQuery.data])
    useEffect(() => {
        if (colorQuery.data) {
            if (colors.length > 0) {
                const newData = colorQuery.data.filter((item) => !colors.includes(item))
                dispath(setColorData(newData))
            } else {
                dispath(setColorData(colorQuery.data))
            }

        }
    }, [colorQuery.data])

    // console.log(sizes);

    return (
        <div>
            <h1 className='text-center font-bold uppercase mb-5'>Thêm thuộc tính sản phẩm</h1>
            <div className='w-full grid grid-cols-2 gap-x-4 mb-5 '>
                <div className=' bg-gray-800 shadow-md  shadow-gray-300 p-4 rounded-lg'>
                    <h1 className='font-semibold text-center mb-3 text-white'>Chọn size</h1>
                    <div className='flex gap-x-3'>
                        <div className=' basis-2/6 border rounded-md bg-white '>
                            <h5 className='px-2 pb-4 pt-2 border-b border-b-gray-400'>Chọn :</h5>
                            <div className='h-52 overflow-y-auto scroll-bar py-3 px-2'>
                                {
                                    sizeData?.map((size, index) => (
                                        <button key={index} onClick={() => dispath(addSize(size))} className='w-full mb-4 py-2 border border-gray-500 rounded-full px-2 font-semibold hover:bg-black hover:text-white '>
                                            {size.name}
                                        </button>
                                    ))
                                }

                            </div>
                        </div>
                        <div className='basis-4/6 border rounded-md p-3 flex-shrink-0  bg-white '>
                            <h5 className='pb-4'>Size được chọn :</h5>
                            <div className='w-full flex flex-wrap gap-3'>
                                {sizes?.map((size, i) => (
                                    <button onClick={() => dispath(removeSize(size))} key={i} className='px-7 py-2 font-semibold bg-black text-white rounded-full hover:bg-gray-800'>{size.name}</button>
                                ))}
                                {/* <button className='px-7 py-2 font-semibold bg-black text-white rounded-full hover:bg-gray-800'>M</button>
                        <button className='px-7 py-2 font-semibold bg-black text-white rounded-full hover:bg-gray-800'>S</button>
                        <button className='px-7 py-2 font-semibold bg-black text-white rounded-full hover:bg-gray-800'>L</button>
                        <button className='px-7 py-2 font-semibold bg-black text-white rounded-full hover:bg-gray-800'>Xl</button>
                        <button className='px-7 py-2 font-semibold bg-black text-white rounded-full hover:bg-gray-800'>XXl</button> */}
                            </div>
                        </div>

                    </div>
                </div>
                <div className=' bg-gray-800 shadow-md  shadow-gray-300 p-4 rounded-lg'>
                    <h1 className='font-semibold text-center mb-3 text-white'>Chọn màu</h1>
                    <div className='flex gap-x-3'>
                        <div className=' basis-2/6 border rounded-md bg-white '>
                            <h5 className='px-2 pb-4 pt-2 border-b border-b-gray-400'>Chọn :</h5>
                            <div className='h-52 overflow-y-auto scroll-bar py-3 px-2'>
                                {
                                    colorData?.map((color, index) => (
                                        <button onClick={() =>dispath(addColor(color))} key={index} className='w-full mb-4 py-2 border border-gray-500 rounded-full px-2 font-semibold hover:bg-black hover:text-white '>
                                            {color.name}
                                        </button>
                                    ))
                                }
                            </div>
                        </div>
                        <div className='basis-4/6 border rounded-md p-3 flex-shrink-0  bg-white '>
                            <h5 className='pb-4'>Màu được chọn :</h5>
                            <div className='w-full flex flex-wrap gap-3'>
                                {colors?.map((color, i) => (
                                    <button onClick={() => dispath(removeColor(color))} key={i} className='px-7 py-2 font-semibold bg-black text-white rounded-full hover:bg-gray-800'>{color.name}</button>
                                ))}
                                {/* <button className='px-7 py-2 font-semibold bg-black text-white rounded-full hover:bg-gray-800'>Xanh</button>
                        <button className='px-7 py-2 font-semibold bg-black text-white rounded-full hover:bg-gray-800'>Vàng</button>
                        <button className='px-7 py-2 font-semibold bg-black text-white rounded-full hover:bg-gray-800'>Đỏ</button>
                        <button className='px-7 py-2 font-semibold bg-black text-white rounded-full hover:bg-gray-800'>Đen</button>
                        <button className='px-7 py-2 font-semibold bg-black text-white rounded-full hover:bg-gray-800'>Trắng</button> */}
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <button className='px-4 py-2 rounded-lg bg-black border border-black  text-white font-semibold hover:bg-white hover:text-black'>Save</button>
        </div>
    )
}

export default AttributeProduct