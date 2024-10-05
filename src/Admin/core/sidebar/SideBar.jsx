import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { IoLayers } from "react-icons/io5";
import { FaBoxesStacked } from "react-icons/fa6";

const SideBar = () => {
    const [isOpen, setOpen] = useState(false)
    const toggleMenu = () => {
        setOpen(!isOpen);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      };

    const isActive = (path) => location.pathname === path;

  return (
   <>
   <section className='w-80 h-screen p-5'>
    <div className=' bg-slate-200 h-full w-full rounded-2xl'>
        <div><img src="/assets/Images/Header/My_Kozan1.png" alt="" /></div>
        <div className='mt-14'><Link to={'/admin/dashboard'} className={`inline-flex gap-4 items-center ${isActive('/admin/dashboard') ? 'text-[#E38734]' : 'hover:text-[#E38734] cursor-pointer'} p-2 pl-5 hover:bg-[#E38734] hover:text-white w-[calc(100%-16px)] m-2 duration-200`} onClick={toggleMenu}><IoLayers /> Dashboard</Link></div>
        <div><Link to={'/admin/product'}  className={`inline-flex gap-4 items-center ${isActive('/admin/product') ? 'text-[#E38734]' : 'hover:text-[#E38734] cursor-pointer'}  p-2 pl-5 hover:bg-[#E38734] hover:text-white w-[calc(100%-16px)] mx-2 mb-1 duration-200`} onClick={toggleMenu}><FaBoxesStacked /> Products</Link></div>
        
    </div>
   </section>
   </>
  )
}

export default SideBar