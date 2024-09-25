import React, { useState } from "react";
import Hamburger from "hamburger-react";
import { Link, useLocation } from "react-router-dom";
import ProductLists from "../../Shared/Components/Products/ProductLists";
export default function Header() {
  const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => {
    if (!isOpen) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    setOpen(!isOpen);
  };
  const location = useLocation();
  const isActive = (path) => location.pathname === path;
  return (
    <>
      <header className="w-full border-b-2 md:py-0 py-3 z-50 fixed top-0 bg-white shadow-sm border-b-gray-200">
        <div className="grid mx-auto max-w-[68rem] md:grid-cols-10 grid-cols-3 justify-between items-center  2xl:px-0 px-5">
          <div className="flex justify-between items-center md:col-span-9 col-span-1">
            <div className="flex items-center gap-4 md:gap-10">
              <Link to='/'>
                <img
                  className="lg:w-auto w-[150px]"
                  src="/assets/Images/Header/My_Kozan1.png"
                  alt="logo"
                />
              </Link>
              <div className="relative hidden md:block w-[30vw]">
                <input
                  placeholder="Search"
                  className="w-full rounded-md px-2 py-1 border focus:outline-orange-400"
                />
                <img
                  src="/assets/Images/Header/Search.png"
                  alt="search icon"
                  className="absolute animate-pulse animate-infinite right-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
                />
              </div>
              <div className="md:flex gap-5 hidden">
                <Link to="/cart">
                  <img
                    className="cursor-pointer h-8 opacity-85"
                    src="/assets/Images/Header/ccc.png"
                    alt="cart"
                  />
                </Link>
                <Link to='/login'>
                  <div className="relative">
                    <img
                      className="cursor-pointer h-8 opacity-85"
                      src="/assets/Images/Header/gg.png"
                      alt="user"
                    />
                    <div className="absolute top-14">
                      <ProductLists />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-1 md:order-last order-first md:flex justify-end items-end">
            <Hamburger toggled={isOpen} toggle={toggleMenu} />
          </div>
          <div className="md:hidden block order-last col-span-1">
            <img
              src="/assets/Images/Header/Search (1).png"
              alt="search icon"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 w-7 h-7"
            />
          </div>
        </div>
      </header>
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg w-[260px] transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"} z-50`}
      >
        <div className="p-4 ">
          <div className="flex gap-5 justify-between ">
            <div className="2xl:hidden xl:block lg:block md:block hidden">
              <Hamburger toggled={isOpen} toggle={toggleMenu} />
            </div>
            <h2 className="lg:text-2xl text-lg font-bold mb-4 lg:mt-0 mt-2 text-[#E38734]">Menu</h2>
          </div>
          <div className="space-y-4 mt-5 text-right text-base font-semibold ">
            <div>
              <Link to="/" onClick={() => { setOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                <div className={`" ${isActive('/') ? 'text-[#E38734]' : 'hover:text-[#E38734] cursor-pointer hover:scale-105 duration-200'}`}>Home</div>
              </Link>
            </div>
            <div>
              <Link to="/aboutus" onClick={() => { setOpen(false); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
                <div className={`" ${isActive('/aboutus') ? 'text-[#E38734]' : 'hover:text-[#E38734] cursor-pointer hover:scale-105 duration-200'}`}>About Us</div>
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
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={() => setOpen(false)}
        ></div>
      )}
    </>
  );
}
