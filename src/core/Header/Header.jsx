import { useState } from "react";
import Hamburger from "hamburger-react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <header className="w-full border-b-4 shadow-md border-b-gray-200">
        <div className="flex mx-auto max-w-[70rem] px-5 justify-between items-center">
          <div className="flex items-center gap-5 md:gap-10">
            <img
              className="lg:w-auto w-[150px]"
              src="/Images/My_Kozan.png"
              alt="logo"
            />
            <div className="relative hidden md:block w-[30vw]">
              <input
                placeholder="Search"
                className="w-full rounded-md px-2 py-1 border focus:outline-orange-400 " 
              />
              <img
                src="/Images/Search.png" 
                alt="search icon"
                className="absolute animate-pulse animate-infinite right-3 top-1/2 transform -translate-y-1/2 w-5 h-5" 
              />
            </div>
            <div className="md:flex gap-5 md:block  hidden">
              <Link to='/wishlist'>

                <img
                  className="cursor-pointer"
                  src="/Images/Heart.png"
                  alt="heart"
                />
              </Link>
              <Link to='/cart'>
                <img
                  className="cursor-pointer"
                  src="/Images/Cart.png"
                  alt="cart"
                />
              </Link>
              <img
                className="cursor-pointer"
                src="/Images/User.png"
                alt="user"
              />
            </div>
          </div>
          <div>
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
        </div>
      </header>
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg w-[250px] transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'
          } z-50`}
      >
        <div className="p-5">
          <div className="flex gap-5">
            <div className="2xl:hidden block">
              <Hamburger toggled={isOpen} toggle={setOpen} />
            </div>
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
            <div>
              <Link to="/wishlist" onClick={() => setOpen(false)}>
                <div className="hover:text-orange-500 cursor-pointer">
                  Wishlist
                </div>
              </Link>
            </div>
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
