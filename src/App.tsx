import { lazy, Suspense } from 'react'
import './App.css'
import Outline from './out/Outline'
const Header=lazy(()=>import('./layout/header/Header'))
const Footer=lazy(()=>import('./layout/footer/Footer'))

function App() {

  return (
    <>
    <Header/>
    <Outline/>
    <Footer/>
   
    </>
  )
}

export default App
