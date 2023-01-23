import React from 'react'
import { lazy, Suspense } from 'react'
import { Route } from 'react-router'
import { Routes } from 'react-router-dom'
import CategoryList from '../pages/category/CategoryList'
import Category from '../pages/category/CategoryList'
import SupplierList from '../pages/supplier/SupplierList'
const ProductList=lazy(()=>import('../pages/product/ProductList'))
const Home=lazy(()=>import('../pages/home/Home'))
const Login=lazy(()=>import('../pages/login/Login'))


function Outline() {
  return (
    <div>

   <Routes>
      <Route path='/' element={<Suspense> <Home/></Suspense>}/>
      <Route path='/products' element={<Suspense> <ProductList/></Suspense>}/>
      <Route path='/category' element={<Suspense> <CategoryList/></Suspense>}/>
      <Route path='/supplier' element={<Suspense> <SupplierList/></Suspense>}/>
      <Route path='/login' element={<Suspense> <Login/></Suspense>}/>
      
    </Routes>
    </div>
  )
}

export default Outline