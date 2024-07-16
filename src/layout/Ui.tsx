import React from 'react'

const Ui = () => {
  return (
  <>
   <div className="container mx-auto py-8">
  <h1 className="text-4xl font-bold mb-6 text-center">Product List</h1>
 <div className='w-max mx-auto mb-6'>
 <button className=' px-4 py-1 text-lg font-semibold text-white bg-black rounded-lg hover:shadow-md hover:shadow-gray-300'>Thêm sản phẩm</button>
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
        {/* Product Row Start */}
        <tr className="border-b border-gray-700">
          <td className="py-3 px-4 text-sm text-gray-300">Product Name</td>
          <td className="py-3 px-4 text-sm text-gray-300">
            <img src="https://via.placeholder.com/100" alt="Product Image" className="w-20 h-20 object-cover rounded-md" />
          </td>
          <td className="py-3 px-4 text-sm text-gray-300">$99.99</td>
          <td className="py-3 px-4 text-sm text-gray-300">Product description goes here.</td>
          <td className="py-3 px-4 text-sm text-gray-300">
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2">Delete</button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Update</button>
          </td>
        </tr>
        {/* Product Row End */}
        {/* Repeat above block for more products */}
        <tr className="border-b border-gray-700">
          <td className="py-3 px-4 text-sm text-gray-300">Product Name</td>
          <td className="py-3 px-4 text-sm text-gray-300">
            <img src="https://via.placeholder.com/100" alt="Product Image" className="w-20 h-20 object-cover rounded-md" />
          </td>
          <td className="py-3 px-4 text-sm text-gray-300">$99.99</td>
          <td className="py-3 px-4 text-sm text-gray-300">Product description goes here.</td>
          <td className="py-3 px-4 text-sm text-gray-300">
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2">Delete</button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Update</button>
          </td>
        </tr>
        {/* More products here */}
      </tbody>
    </table>
  </div>


</div>
 {/* form  */}
 <div className='fixed top-0 left-0 w-full h-full bg-black/45 '>
 <div className="w-[600px] mx-auto mt-10">
 <div className="max-w-lg mx-auto bg-gray-800 p-8 rounded-lg shadow-lg relative">
   <span className=' cursor-pointer px-4 py-2 rounded-md absolute right-1 top-1 r text-xl font-semibold bg-white flex justify-center items-center hover:bg-purple-900 hover:text-white transition duration-300 ease-in-out'>
     x
   </span>
    <form>
      <div className="mb-6">
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Product Name</label>
        <input type="text" id="name" name="name" className="w-full px-4 py-2 bg-gray-900 border border-gray-600 rounded-lg text-gray-300 focus:outline-none focus:border-blue-500" placeholder="Enter product name" />
      </div>
      <div className="mb-6">
        <label htmlFor="image" className="block text-sm font-medium text-gray-300 mb-2">Image URL</label>
        <input type="text" id="image" name="image" className="w-full px-4 py-2 bg-gray-900 border border-gray-600 rounded-lg text-gray-300 focus:outline-none focus:border-blue-500" placeholder="Enter image URL" />
      </div>
      <div className="mb-6">
        <label htmlFor="price" className="block text-sm font-medium text-gray-300 mb-2">Price</label>
        <input type="number" id="price" name="price" className="w-full px-4 py-2 bg-gray-900 border border-gray-600 rounded-lg text-gray-300 focus:outline-none focus:border-blue-500" placeholder="Enter price" />
      </div>
      <div className="mb-6">
        <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-2">Description</label>
        <textarea id="description" name="description" rows={4} className="w-full px-4 py-2 bg-gray-900 border border-gray-600 rounded-lg text-gray-300 focus:outline-none focus:border-blue-500" placeholder="Enter product description" defaultValue={""} />
      </div>
      <div className="flex justify-center items-center">
       
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add Product</button>
      </div>
    </form>
  </div>
</div>
 </div>
  {/* register  */}
  <div className="bg-gradient-custom text-white h-screen">
  <div className="container mx-auto py-8">
    <h1 className="text-4xl font-bold mb-6 text-center">Registration Form</h1>
    <div className="max-w-lg mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
      <form>
        <div className="mb-6">
          <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-2">Username</label>
          <input type="text" id="username" name="username" className="w-full px-4 py-2 bg-gray-900 border border-gray-600 rounded-lg text-gray-300 focus:outline-none focus:border-blue-500" placeholder="Enter your username" />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
          <input type="email" id="email" name="email" className="w-full px-4 py-2 bg-gray-900 border border-gray-600 rounded-lg text-gray-300 focus:outline-none focus:border-blue-500" placeholder="Enter your email" />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">Password</label>
          <input type="password" id="password" name="password" className="w-full px-4 py-2 bg-gray-900 border border-gray-600 rounded-lg text-gray-300 focus:outline-none focus:border-blue-500" placeholder="Enter your password" />
        </div>
        <div className="mb-6">
          <label htmlFor="confirm_password" className="block text-sm font-medium text-gray-300 mb-2">Confirm Password</label>
          <input type="password" id="confirm_password" name="confirm_password" className="w-full px-4 py-2 bg-gray-900 border border-gray-600 rounded-lg text-gray-300 focus:outline-none focus:border-blue-500" placeholder="Confirm your password" />
        </div>
        <div className="flex items-center mb-6">
          <input type="checkbox" id="terms" name="terms" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-600 rounded bg-gray-900" />
          <label htmlFor="terms" className="ml-2 block text-sm text-gray-300">I agree to the terms and conditions</label>
        </div>
        <div className="flex justify-center">
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Register</button>
        </div>
      </form>
    </div>
  </div>
</div>

  </>

  )
}

export default Ui