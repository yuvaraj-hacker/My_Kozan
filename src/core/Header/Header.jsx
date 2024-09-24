import React, { useState } from "react";
import Hamburger from "hamburger-react";
import { Link } from "react-router-dom";
import ProductLists from "../../Shared/Components/Products/ProductLists";


export default function Header() {
  const [isOpen, setOpen] = useState(false);

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
                {/* <Link to="/wishlist">
                  <img
                    className="cursor-pointer h-8"
                    src="/assets/Images/Header/Heart.png"
                    alt="heart"
                  />
                </Link> */}
                <Link to="/cart">
                  <img
                    className="cursor-pointer h-8"
                    src="/assets/Images/Header/Cart.png"
                    alt="cart"
                  />
                </Link>
                <Link to='/signup'>
                  <div className="relative">
                    <img
                      className="cursor-pointer h-8"
                      src="/assets/Images/Header/User.png"
                      alt="user"
                    />

                    <div className="absolute   top-10">
                      <ProductLists />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-span-1 md:order-last order-first md:flex justify-end items-end">
            <Hamburger toggled={isOpen} toggle={setOpen} />
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
        className={`fixed top-0 right-0 h-full bg-white shadow-lg w-[250px] transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"
          } z-50`}
      >
        <div className="p-5">
          <div className="flex gap-5">

            <h2 className="text-lg font-bold mb-4 lg:mt-0 mt-2">Menu</h2>
          </div>
          <div className="space-y-4">
            <div>
              <Link to="/" onClick={() => setOpen(false)}>
                <div className="hover:text-orange-500 cursor-pointer">Home</div>
              </Link>
            </div>
            <div>
              <Link to="/aboutus" onClick={() => setOpen(false)}>
                <div className="hover:text-orange-500 cursor-pointer">
                  About Us
                </div>
              </Link>
            </div>
            <div>
              <Link to="/products" onClick={() => setOpen(false)}>
                <div className="hover:text-orange-500 cursor-pointer">
                  Products
                </div>
              </Link>
            </div>
            {/* <div>
              <Link to="/wishlist" onClick={() => setOpen(false)}>
                <div className="hover:text-orange-500 cursor-pointer">
                  Wishlist
                </div>
              </Link>
            </div> */}
            <div>
              <Link to="/cart" onClick={() => setOpen(false)}>
                <div className="hover:text-orange-500 cursor-pointer">Cart</div>
              </Link>
            </div>
            <div>
              <Link to="/signup" onClick={() => setOpen(false)}>
                <div className="hover:text-orange-500 cursor-pointer">
                  Sign Up
                </div>
              </Link>
            </div>
          </div>
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
