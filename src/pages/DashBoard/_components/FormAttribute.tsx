import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { updateAttribute } from '../../../redux/features/attributeSlice'
type FormAttributeProps = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: any
    index:number
}
const FormAttribute = ({ data, index }: FormAttributeProps) => {
    const {register,handleSubmit,reset} = useForm()
    const [avatar,setAvatar] = useState('')
    const [isOpen, setIsOpen] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const dispath = useDispatch()
    useEffect(()=>{
        reset(data)
        const checkValue = Object.values(data).some(value => value === '' || value === 0 || value == null);//trả về true or false
        if(!checkValue){
            setIsSuccess(true)
        }else{
            setIsSuccess(false)
        }
    },[data])
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onChangeAvatar = (event:any)=>{
       setTimeout(()=>{
        setAvatar(event.target.value)
       },300)
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onSubmit = (value:any) =>{
        const newData = {
            ...data,
            instock: value.instock,
            image:value.image,
            price: value.price,
            description:value.description
        }
        dispath(updateAttribute(newData))
    }
    return (
        <div className='border rounded-lg overflow-hidden mb-5'>
            {/* Title  */}
            <div className='flex justify-between items-center px-6 py-2 relative'>
                <div className='flex items-center gap-x-3'>
                    <button className='px-4 py-1  text-black border  border-gray-500 rounded-full'>{data.size}</button>
                    <button className='px-4 py-1 text-black border border-gray-500 rounded-full'>{data.color}</button>
                </div>
                <div onClick={() => setIsOpen(!isOpen)} className='w-4/6 cursor-pointer'>
                    <div className='w-max mx-auto'><i className="fa-solid fa-angles-down"></i></div>
                </div>
                <div className='flex items-center gap-x-3'>
                    <button className='size-8 text-red-600 border border-red-500 rounded-full hover:bg-gray-300'>
                        <span><i className="fa-solid fa-xmark"></i></span>
                    </button>

                    {isSuccess && (
                        <button className='size-8 py-1 text-green-500 border border-green-500 rounded-full hover:bg-gray-300'>
                            <span><i className="fa-solid fa-check"></i></span>
                        </button>
                    )}
                </div>
            </div>
            {/* Form  */}
            {isOpen && (
                <div className="bg-gray-800 p-4  shadow-lg w-full">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='flex items-center gap-x-3 mb-3'>
                            {/* left  */}
                            <div className='grid grid-cols-2 gap-4 basis-4/6'>

                                <div >
                                    <label htmlFor="instock" className="block text-sm text-gray-400 font-bold mb-2">Instock</label>
                                    <input type="number" id="instock" {...register('instock',{required:true})} className="w-full text-sm p-2  border border-gray-600 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                                </div>
                                <div >
                                    <label htmlFor="image" className="block  text-sm text-gray-400 font-bold mb-2">Image URL</label>
                                    <input type="text" id="image" {...register('image',{required:true,onChange:((event)=>onChangeAvatar(event))})} className="w-full text-sm p-2  border border-gray-600 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                                </div>
                                <div >
                                    <label htmlFor="price" className="block  text-sm text-gray-400 font-bold mb-2">Price</label>
                                    <input type="number"  id="price" {...register('price',{required:true})} className="w-full text-sm p-2  border border-gray-600 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400" />
                                </div>
                                <div >
                                    <label htmlFor="description" className="block  text-sm text-gray-400 font-bold mb-2">Mô tả</label>
                                    <textarea id="description" {...register('description',{required:true})} className="resize-none w-full text-sm p-2  border border-gray-600 rounded-lg bg-gray-700 text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-400" rows={4} defaultValue={""} />
                                </div>
                            </div>

                            {/* right  */}
                            <div className='basis-2/6 h-64 border font-semibold text-white border-gray-100 rounded-lg overflow-hidden'>
                            {avatar == ''? 'Avatar is not found': ( <img src={avatar} alt="Avatar" className='h-full w-full object-cover' />)}
                              
                            </div>
                        </div>

                        <div>
                            <button type="submit" className={`bg-white  border border-black ${isSuccess ? 'bg-green-500 text-white' : 'text-black'} font-semibold px-4 py-2 rounded-lg transition-all duration-300 ease-in-out hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-indigo-400`}>Save</button>
                        </div>
                    </form>
                </div>
            )}

        </div>
    )
}

export default FormAttribute