import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setAttribute } from '../../../redux/features/attributeSlice'
import FormAttribute from './FormAttribute'

const OptionalProduct = () => {
    const [isSubmit,setIsSubmit] = useState(false)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const colors = useSelector((state:any)=> state.attribute.colors)
     // eslint-disable-next-line @typescript-eslint/no-explicit-any
     const sizes = useSelector((state:any)=> state.attribute.sizes)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
     const attributes = useSelector((state:any)=> state.attribute.attributes)
     const dispath = useDispatch()
     useEffect(()=>{
        let i:number = 0;
        attributes.map((attributes)=>{
           const check = Object.values(attributes).some(value => value === '' || value === 0 || value == null);//trả về true or false
           if(check){
            i++
           }
        })
       if(i == 0){
        setIsSubmit(true)
       }
     },[attributes])
     const onHandleAttribute = ()=>{
        const newAttribute = []
            sizes.map((size)=>{
                colors.map((color)=>{
                        newAttribute.push({
                        size:size.name,
                        color:color.name,
                        price:0,
                        instock:0,
                        image:'',
                        description:''
                        })
                })
            })
        dispath(setAttribute(newAttribute))
     }
  return (
    <div>
    <div className='mb-5'>
        <h1 className='text-center font-bold uppercase'>Tạo biến thể sản phẩm</h1>
    </div>
    <div className='flex items-center gap-x-12 mb-4'>
        <div>
            <h5 className='font-semibold text-black text-sm mb-2'>Size:</h5>
            <div className='flex gap-x-2 items-center'>
                {sizes?.map((size,i)=>(
                    <button key={i} className=' size-8 text-sm font-semibold border border-black text-black rounded-full hover:bg-gray-800 hover:text-white '>{size.name}</button>
                ))}
               
            </div>
        </div>
        <div>
            <h5 className='font-semibold text-black text-sm mb-2'>Màu sắc:</h5>
            <div className='flex gap-x-2 items-center'>
            {colors?.map((color,i)=>(
                   <button  key={i} className=' px-4 py-1 text-sm font-semibold border  text-black rounded-full hover:bg-gray-800 hover:text-white '>{color.name}</button>
                ))}
               
            </div>
        </div>
    </div>
  <div className='flex items-center justify-between'>
  <button onClick={onHandleAttribute} className='px-4 py-2 rounded-lg bg-black border border-black  text-white font-semibold mb-4 hover:bg-white hover:text-black'>Tạo biến thể</button>
  {isSubmit && (<button className='px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-700'>Thêm sản phẩm</button>)}
  </div>
    <div className='py-3 border-t border-t-gray-500 h-[470px] px-8 overflow-y-auto'>
            {attributes?.map((attribute,i)=>(
                <FormAttribute data={attribute} index={i} key={i} />
            ))}
    </div>
</div>
  )
}

export default OptionalProduct