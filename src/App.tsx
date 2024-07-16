
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Login from './pages/Login'
import Register from './pages/Register'
import DashBoard from './pages/DashBoard/DashBoard'
import Index from './pages/DashBoard/_components/Index'
import Product from './pages/DashBoard/_components/Product'


function App() {
  return (
   <>
   <Routes>
   <Route path='/' element={<DashBoard />}>
      <Route index element={<Index />} />
      <Route path='product' element={<Product />} />
   </Route>
    <Route path='/products' element={<Layout />} />
   </Routes>
   </>
  )
}

export default App
