import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Foot from '../Mobile/Foot'
function Main() {
  return (
    <div>
      <Header/>
      <main className='lg:mt-36 mt-28'>
        <Outlet/>
      </main>
      <Footer/>
      <div className='md:hidden block fixed bottom-0 bg-white p-2 z-50 w-full border rounded-sm'>
        <Foot/>
      </div>
    </div>
  )
}
export default Main
