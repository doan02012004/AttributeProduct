/* eslint-disable @typescript-eslint/no-explicit-any */

import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { setInfor } from '../../../redux/features/attributeSlice'
import { useEffect } from 'react'

const InforProduct = () => {
    const {register,handleSubmit,reset} = useForm()
    const dispath = useDispatch()
    const infor = useSelector((state:any)=>state.attribute.infor)
    console.log();
    const query = useQuery({
        queryKey:['CATEGORY'],
        queryFn: async()=>{
            try {
                const data = await axios.get('http://localhost:3000/categories')
                return data.data
            } catch (error) {
                console.log(error);
            }
        }
    })
    useEffect(()=>{
        reset(infor)
    },[infor])
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onSubmit = (infor:any) =>{
       dispath(setInfor(infor))
    }
   console.log(infor);
    return (
        <div className='w-full'>
            <div>
                <h1 className='text-center font-bold uppercase'>Thông tin sản phẩm</h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                    <input type="text" id="name" {...register('name',{required:true})} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter product name" />
                </div>
                <div className="mb-4">
                    <label htmlFor="price" className="block text-gray-700 font-bold mb-2">Price</label>
                    <input type="text" id="price" {...register('price',{required:true})} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter product price" />
                </div>
                <div className="mb-4">
                    <label htmlFor="discount" className="block text-gray-700 font-bold mb-2">Discount</label>
                    <input type="text" id="discount" {...register('discount',{required:true})} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter discount percentage" />
                </div>
                <div className="mb-4">
                    <label htmlFor="category" className="block text-gray-700 font-bold mb-2">Category</label>
                    <select id="category" {...register('category',{required:true})}  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                        <option >Select category</option>
                        {query?.data?.map((category:any,index:number)=>(
                              <option key={index} value={category.id}>{category.name}</option>
                        ))}
                        {/* <option value="electronics">Electronics</option>
                        <option value="fashion">Fashion</option>
                        <option value="home">Home</option>
                        <option value="books">Books</option>
                        <option value="toys">Toys</option> */}
                    </select>
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Save
                    </button>
                </div>
            </form>

        </div>
    )
}

export default InforProduct