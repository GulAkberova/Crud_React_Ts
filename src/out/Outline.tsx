import React from 'react'
import { lazy, Suspense } from 'react'
import { Route } from 'react-router'
import { Routes } from 'react-router-dom'
const ProductList=lazy(()=>import('../pages/product/ProductList'))
const Home=lazy(()=>import('../pages/home/Home'))


function Outline() {
  return (
    <div>

   <Routes>
      <Route path='/' element={<Suspense> <Home/></Suspense>}/>
      <Route path='/products' element={<Suspense> <ProductList/></Suspense>}/>
    </Routes>
    </div>
  )
}

export default Outline