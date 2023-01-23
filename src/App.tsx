import { lazy, useEffect } from 'react'
import './App.css'
import Outline from './out/Outline'
const Header=lazy(()=>import('./layout/header/Header'))
const Footer=lazy(()=>import('./layout/footer/Footer'))

function App() {
  useEffect(()=>{
    // let a= localStorage.setItem('sf',JSON.stringify())

    
 })
  const getLocalItems=()=>{
    let ls=localStorage.getItem('sf')
    console.log('aaaaaaaaa',ls);

    // if(ls){
    //     return JSON.parse(localStorage.getItem('sf':string):void)
    // }else{
    //     return []
    // }
    
}


  return (
    <>
    <Header/>
   
       <Outline/>
    <Footer/>
   
    </>
  )
}

export default App
