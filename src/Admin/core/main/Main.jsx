import React from 'react'
import SideBar from '../sidebar/SideBar'
import { Outlet } from 'react-router-dom'

const Main = () => {
  return (
    <>
      <section className='flex '>


        <SideBar />
        <Outlet />
      </section>
    </>
  )
}

export default Main