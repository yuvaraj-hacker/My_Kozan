import { BrowserRouter, Route,  Routes } from "react-router-dom";
import Main from "../core/Main/Main";
import Home from "../Components/Home/Home";
import About from "../Components/About/About";
import Wishlist from "../Components/Wishlist/Wishlist";
import Cart from "../Components/Cart/Cart";
import SignUp from "../Components/SignUp/SignUp";
import ProductCard from "../Components/Products/ProductCard";
import Order from "../Components/Order/Order";
import ProductLists from "../Components/Products/ProductLists";
export default function Approuter() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<Main />}  >
                        <Route path="/" element={<Home />} />
                        <Route path="/aboutus" element={<About />} />
                        <Route path="/products" element={<ProductCard/>} />
                        <Route path="/wishlist" element={<Wishlist />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/order" element={<Order/>} />
                    </Route >
                </Routes>
            </BrowserRouter>
        </>
    )
}
