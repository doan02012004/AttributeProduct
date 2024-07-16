import  { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Iproduct } from '../interfaces/product'
import useProductQuery from '../hooks/useProductQuery'
import useProductMutation from '../hooks/useProductMutation'

const Layout = () => {
  const [products, setProducts] = useState([] as Iproduct[])
  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  const [statusForm, setStatusForm] = useState(false)
  const [optionForm, setOptionForm] = useState('add')
  const mutation = useProductMutation()
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const query: any = useProductQuery()
  useEffect(() => {
    if (query.data) {
      setProducts(query.data)
    }else{
      setProducts([])
    }
  }, [query.data])
  const onRemove = (product:Iproduct) =>{
    if(confirm("Bạn có muốn xóa không?")){
      mutation.mutate({action:'delete',product:product})
    }
  }
  const onAdd = () => {
    setStatusForm(true)
    setOptionForm('add')
    reset()
  }
  const onUpdate = (product:Iproduct) =>{
    setStatusForm(true)
    setOptionForm('update')
    reset(product)
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit: any = (data: Iproduct) => {
    if(optionForm == 'add'){
      mutation.mutate({action:'add',product:data})
      setStatusForm(false)
    }else{
      mutation.mutate({action:'update',product:data})
      setStatusForm(false)
    }
  }
 
  return (
    <>
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold mb-6 text-center">Product List</h1>
        <div className='w-max mx-auto mb-6'>
          <button onClick={onAdd} className=' px-4 py-1 text-lg font-semibold text-white bg-black rounded-lg hover:shadow-md hover:shadow-gray-300'>Thêm sản phẩm</button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-gray-800 rounded-lg">
            <thead>
              <tr>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-300">Name</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-300">Image</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-300">Price</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-300">Description</th>
                <th className="py-3 px-4 text-left text-sm font-semibold text-gray-300">Action</th>
              </tr>
            </thead>
            <tbody>

              { products && products?.map((product, i) =>(
                <tr key={i} className="border-b border-gray-700">
                  <td className="py-3 px-4 text-sm text-gray-300">{product.name}</td>
                  <td className="py-3 px-4 text-sm text-gray-300">
                    <img src={product.image} alt={product.name} className="w-20 h-20 object-cover rounded-md" />
                  </td>
                  <td className="py-3 px-4 text-sm text-gray-300">{product.price}</td>
                  <td className="py-3 px-4 text-sm text-gray-300">{product.description}</td>
                  <td className="py-3 px-4 text-sm text-gray-300">
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2" onClick={() =>onRemove(product)}>Delete</button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"  onClick={() =>onUpdate(product)}>Update</button>
                  </td>
                </tr>
              ))}

            </tbody>
          </table>
        </div>


      </div>
      {/* form  */}
      {statusForm && (
        <div className='fixed top-0 left-0 w-full h-full bg-black/45 '>
          <div className="w-[600px] mx-auto mt-10 ">

            <div className="max-w-lg mx-auto bg-gray-800 p-8 rounded-lg shadow-lg relative">
              <span onClick={() => setStatusForm(false)} className=' cursor-pointer px-4 py-2 rounded-md absolute right-1 top-1 r text-xl font-semibold bg-white flex justify-center items-center hover:bg-purple-900 hover:text-white transition duration-300 ease-in-out'>
                x
              </span>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-6">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Product Name</label>
                  <input type="text" id="name"  {...register('name', { required: true })} className="w-full px-4 py-2 bg-gray-900 border border-gray-600 rounded-lg text-gray-300 focus:outline-none focus:border-blue-500" placeholder="Enter product name" />
                </div>
                <div className="mb-6">
                  <label htmlFor="image" className="block text-sm font-medium text-gray-300 mb-2">Image URL</label>
                  <input type="text" id="image" {...register('image', { required: true })} className="w-full px-4 py-2 bg-gray-900 border border-gray-600 rounded-lg text-gray-300 focus:outline-none focus:border-blue-500" placeholder="Enter image URL" />
                </div>
                <div className="mb-6">
                  <label htmlFor="price" className="block text-sm font-medium text-gray-300 mb-2">Price</label>
                  <input type="number" id="price"  {...register('price', { required: true })} className="w-full px-4 py-2 bg-gray-900 border border-gray-600 rounded-lg text-gray-300 focus:outline-none focus:border-blue-500" placeholder="Enter price" />
                </div>
                <div className="mb-6">
                  <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-2">Description</label>
                  <textarea id="description" {...register('description', { required: true })} rows={4} className="w-full px-4 py-2 bg-gray-900 border border-gray-600 rounded-lg text-gray-300 focus:outline-none focus:border-blue-500" placeholder="Enter product description" defaultValue={""} />
                </div>
                <div className="flex justify-center items-center">

                  <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">{optionForm == 'add' ? 'Add Product': 'Update Product'}</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Layout