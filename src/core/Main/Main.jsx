import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Foot from '../Mobile/Foot'
function Main() {
  return (
    <div>
      <Header/>
      <main className='lg:mt-36 mt-[5rem]'>
        <Outlet/>
      </main>
      <Footer/>
      
    </div>
  )
}
export default Main
