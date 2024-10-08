import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTachometerAlt, FaBoxOpen, FaReceipt, FaUserAlt, FaHome } from "react-icons/fa";

const SideBar = () => {
  const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!isOpen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <section className='w-80 h-screen p-5 '>
        <div className='bg-slate-200 h-full w-full rounded-2xl'>
          <Link to='/'>

            <div>
              <img className='mx-auto pt-5' src="/assets/Images/Header/My_Kozan1.png" alt="Logo" />
            </div>
          </Link>
          <div className='mt-14'>
            <Link
              to='/admin/dashboard'
              className={`inline-flex gap-4 items-center ${isActive('/admin/dashboard') ? 'text-[#E38734]' : 'hover:text-[#E38734] cursor-pointer'} p-2 pl-5 hover:bg-[#E38734] hover:text-white w-[calc(100%-16px)] m-2 duration-200`}
              onClick={toggleMenu}>
              <FaTachometerAlt /> Dashboard
            </Link>
          </div>
          <div>
            <Link
              to='/admin/product'
              className={`inline-flex gap-4 items-center ${isActive('/admin/product') ? 'text-[#E38734]' : 'hover:text-[#E38734] cursor-pointer'}  p-2 pl-5 hover:bg-[#E38734] hover:text-white w-[calc(100%-16px)] mx-2 mb-1 duration-200`}
              onClick={toggleMenu}>
              <FaBoxOpen /> Products
            </Link>
          </div>
          <div>
            <Link
              to='/admin/orders'
              className={`inline-flex gap-4 items-center ${isActive('/admin/orders') ? 'text-[#E38734]' : 'hover:text-[#E38734] cursor-pointer'}  p-2 pl-5 hover:bg-[#E38734] hover:text-white w-[calc(100%-16px)] mx-2 mb-1 duration-200`}
              onClick={toggleMenu}>
              <FaReceipt /> Orders
            </Link>
          </div>
          <div>
            <Link
              to='/admin/users'
              className={`inline-flex gap-4 items-center ${isActive('/admin/users') ? 'text-[#E38734]' : 'hover:text-[#E38734] cursor-pointer'}  p-2 pl-5 hover:bg-[#E38734] hover:text-white w-[calc(100%-16px)] mx-2 mb-1 duration-200`}
              onClick={toggleMenu}>
              <FaUserAlt /> Users
            </Link>
          </div>
          <div>
            <Link
              to='/'
              className={`inline-flex gap-4 items-center ${isActive('/') ? 'text-[#E38734]' : 'hover:text-[#E38734] cursor-pointer'}  p-2 pl-5 hover:bg-[#E38734] hover:text-white w-[calc(100%-16px)] mx-2 mb-1 duration-200`}
              onClick={toggleMenu}>
              <FaHome /> Home Page
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default SideBar;
