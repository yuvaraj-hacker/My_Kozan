import React, { useState } from "react";
import Hamburger from "hamburger-react";
import { Link, useLocation } from "react-router-dom";
import ProductLists from "../../Shared/Components/Products/ProductLists";
import useCartStore from "../../Shared/Services/Store/UseCart";
export default function Header() {
  const [isOpen, setOpen] = useState(false);
  const [isSearchActive, setSearchActive] = useState(false);
  const [isSearchActiv, setSearchActiv] = useState(false);
  const toggleMenu = () => {
    if (!isOpen) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setOpen(!isOpen);
  };
  const { cart } = useCartStore();
  const handleSearchFocus = () => {
    setSearchActiv(true);
  };
  const handleSearchBlur = () => {
    setSearchActiv(false);
  };


  const handleSearchClick = () => {
    setSearchActive(true);
  };

  const handleSearchClose = () => {
    setSearchActive(false);
  };
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  return (
    <>
      <header className="w-full border-b-2 md:py-0  z-50 fixed top-0 bg-white shadow-sm border-b-gray-200">
        <div className="  max-w-[70rem] px-5  mx-auto  ">
          <div className="flex  md:justify-between  items-center ">
            <Link to='/'>
              <img
                className="lg:w-auto w-[150px]  hidden md:block"
                src="/assets/Images/Header/My_Kozan1.png"
                alt="logo"
              />
            </Link>
            <div className="relative hidden md:block w-[30vw] cursor-pointer " >
              <input
                placeholder="Search"
                className="w-full rounded-md px-2 py-1 border focus:outline-[#E38734]"
                onFocus={handleSearchFocus}
                onBlur={handleSearchBlur}
              />
              <img
                src="/assets/Images/Header/Search.png"
                alt="search icon"
                className="absolute animate-pulse animate-infinite right-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
              />
            </div>
            <div className="md:flex gap-5 hidden" >
              <Link to="/product" onClick={() => { setOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                <img
                  className="cursor-pointer h-7 opacity-85"
                  src="/assets/Images/Header/Shop.png"
                  alt="shop"
                  title="shop"
                />
              </Link>
              <Link to="/cart" >
                <div className="flex">
                  <div className="relative  left-5 bottom-3 h-1 w-1 text-[#E38734] rounded-full ">
                    {cart.length > 0 && (
                      <p> {cart.length}</p>
                    )}
                  </div>
                  <img
                    className="cursor-pointer h-7 opacity-85"
                    src="/assets/Images/Header/Shopping Cart (1).png"
                    alt="cart"
                    title="Cart"
                  />
                </div>
              </Link>
              <Link to='/login'>
                <div className="relative">
                  <img
                    className="cursor-pointer h-7 opacity-85"
                    src="/assets/Images/Header/Login.png"
                    alt="login"
                    title="login"
                  />
                  <div className="absolute top-14 ">
                    <ProductLists />
                  </div>
                </div>
              </Link>
            </div>
            <div className="col-span-1   justify-end items-end  hidden md:block ">

              <Hamburger toggled={isOpen} toggle={toggleMenu} />
            </div>
          </div>
          <div className="flex  justify-between md:hidden  items-center">
            <div className="col-span-1  md:flex justify-end items-end">
              <Hamburger toggled={isOpen} toggle={toggleMenu} />
            </div>
            <Link to='/'>
              <img
                className="lg:w-auto w-[150px] "
                src="/assets/Images/Header/My_Kozan1.png"
                alt="logo"
              />
            </Link>
            <div className="md:hidden block  col-span-1">
              <img
                src="/assets/Images/Header/Search (1).png"
                alt="search icon"
                className="  w-7 h-7 cursor-pointer"
                onClick={handleSearchClick} // Open search when clicked
              />
            </div>
          </div>
        </div>
      </header >
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg w-[260px] transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"} z-50`}
      >
        <div className="p-4 ">
          <div className="flex gap-5 justify-between ">
            <div className="2xl:hidden xl:block lg:block md:block hidden">
              <Hamburger toggled={isOpen} toggle={toggleMenu} />
            </div>
            <h2 className="lg:text-2xl text-lg font-bold mb-4 lg:mt-0 mt-2 ml-auto text-[#E38734]">Menu</h2>
          </div>
          <div className="space-y-4 mt-5 text-right md:text-lg  text-base  ">
            <div>
              <Link to="/" onClick={() => { setOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                <div className={`" ${isActive('/') ? 'text-[#E38734]' : 'hover:text-[#E38734] cursor-pointer hover:scale-105 duration-200'}`}>Home</div>
              </Link>
            </div>
            <div>
              <Link to="/product" onClick={() => { setOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                <div className={`" ${isActive('/product') ? 'text-[#E38734]' : 'hover:text-[#E38734] cursor-pointer hover:scale-105 duration-200'}`}>Products</div>
              </Link>
            </div>
            <div>
              <Link to="/cart" onClick={() => { setOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                <div className={`" ${isActive('/cart') ? 'text-[#E38734]' : 'hover:text-[#E38734] cursor-pointer hover:scale-105 duration-200'}`}>Cart</div>
              </Link>
            </div>
            <div>
              <Link to="/login" onClick={() => { setOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                <div className={`" ${isActive('/login') ? 'text-[#E38734]' : 'hover:text-[#E38734] cursor-pointer hover:scale-105 duration-200'}`}>Login</div>
              </Link>
            </div>
          </div>
          {isOpen && (
            <div className="absolute 2xl:top-8 top-14 right-[103px] h-[300px] w-[300px]">
              <img src="/assets/Images/Header/finn.png" alt="kkk" className="object-cover" />
            </div>
          )}
        </div>
      </div>
      {
        isOpen && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-40"
            onClick={() => setOpen(false)}
          ></div>
        )
      }
      {
        isSearchActive && (
          <div
            className="fixed inset-0 bg-black opacity-50 z-40"
            onClick={() => setSearchActive(false)}
          ></div>
        )
      }
       {isSearchActive && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 flex justify-center items-center">
          <div className="bg-white p-5 rounded-lg relative w-[80vw] max-w-lg">
            <button
              className="absolute top-2 right-2 text-gray-600"
              onClick={handleSearchClose} // Close search modal
            >
              ✕
            </button>
            <input
              type="text"
              className="w-full p-2 border rounded-lg focus:outline-none"
              placeholder="Search..."
            />
          </div>
        </div>
      )}
    </>
  );
}
