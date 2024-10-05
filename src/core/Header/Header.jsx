import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Hamburger from 'hamburger-react';
import { RiLogoutCircleRLine } from 'react-icons/ri';
import useAuth from '../../Shared/Services/Store/useAuth';
import useCartStore from "../../Shared/Services/Store/UseCart";
import ProductLists from '../../Shared/Components/Products/ProductLists'

export default function Header() {
  const [isOpen, setOpen] = useState(false);
  const [isSearchActive, setSearchActive] = useState(false);
  const { cart } = useCartStore();
  const { isLoggedIn, logout, getUserDetails } = useAuth();
  const location = useLocation();

  const toggleMenu = () => {
    setOpen(!isOpen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearchFocus = () => setSearchActive(true);
  const handleSearchBlur = () => setSearchActive(false);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <header className="w-full border-b-2 py-3 fixed top-0 bg-white shadow-sm z-50">
        <div className="max-w-[70rem] px-5 mx-auto flex justify-between items-center">
          <Link to='/'>
            <img className="w-[150px] hidden md:block" src="/assets/Images/Header/My_Kozan1.png" alt="logo" />
          </Link>

          <div className="relative hidden md:block w-[30vw] cursor-pointer">
            <input
              placeholder="Search"
              className="w-full rounded-md px-2 py-1 border focus:outline-[#E38734]"
              onFocus={handleSearchFocus}
              onBlur={handleSearchBlur}
            />
          </div>

          <div className="md:flex gap-5 hidden">
            <Link to="/product">
              <img className="cursor-pointer h-7 opacity-85" src="/assets/Images/Header/Shop.png" alt="shop" />
            </Link>
            <Link to="/cart">
                <div className="flex">
                  <div className="relative left-5 bottom-3 h-1 w-1 rounded-full">
                    {cart.length}
                  </div>
                  <img
                    className="cursor-pointer h-7 opacity-85"
                    src="/assets/Images/Header/Shopping Cart (1).png"
                    alt="cart"
                    title="Cart"
                  />
                </div>
              </Link>
            <Link to={isLoggedIn ? '/' : '/login'} onClick={isLoggedIn ? logout : null}>
              <div className="relative">
                {isLoggedIn ? (
                  <RiLogoutCircleRLine className="text-2xl text-[#E38734]" title="Logout" />
                ) : (
                 <> <img className="cursor-pointer h-7 opacity-85" src="/assets/Images/Header/Login.png" alt="login" />
                  <div className="absolute top-14 ">
                  <ProductLists />
                </div></>)}
              </div>
            </Link>
          </div>
          <Hamburger toggled={isOpen} toggle={toggleMenu} />
        </div>

        <div
          className={`fixed top-0 right-0 h-full bg-white shadow-lg w-[260px] transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"} z-50`}
        >
          <div className="p-4">
            <div className="flex justify-between">
              <Hamburger toggled={isOpen} toggle={toggleMenu} />
              <h2 className="text-lg font-bold text-[#E38734]">Menu</h2>
            </div>
            <nav className="space-y-4 mt-5 text-right">
              <Link to="/" className={`block ${isActive('/') ? 'text-[#E38734]' : 'hover:text-[#E38734] cursor-pointer'}`} onClick={toggleMenu}>
                Home
              </Link>
              <Link to="/product" className={`block ${isActive('/product') ? 'text-[#E38734]' : 'hover:text-[#E38734] cursor-pointer'}`} onClick={toggleMenu}>
                Products
              </Link>
              <Link to="/cart" className={`block ${isActive('/cart') ? 'text-[#E38734]' : 'hover:text-[#E38734] cursor-pointer'}`} onClick={toggleMenu}>
                Cart
              </Link>
              <Link to={isLoggedIn ? '/' : '/login'} onClick={isLoggedIn ? logout : toggleMenu} className={`block ${isActive('/login') ? 'bg-transparent border text-black' : 'cursor-pointer'} bg-[#E38734] text-white p-2 px-4 hover:-translate-x-2 hover:shadow-md rounded-lg inline-block duration-200`}>
                {isLoggedIn ? 'Logout' : 'Login'}
              </Link>
            </nav>
          </div>
        </div>
        {isOpen && <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={toggleMenu}></div>}
        {isSearchActive && <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={handleSearchBlur}></div>}
      </header>
    </>
  );
}




