import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../core/Main/Main";
import Home from "../Components/HomePage/Home";
import About from "../Components/AboutPage/AboutUs";
import Wishlist from "../Components/WishlistPage/Wishlist";
import Cart from "../Components/CartPage/Cart";
import ProductCard from "../Shared/Components/Products/ProductCard";
import Order from "../Components/OrderPage/Order";
import ProductPage from "../Components/ProductPage/ProductPage";
import Sign from "../Components/SignUpPage/Sign";
import Product from "../Shared/Components/Product/Product";
export default function Approuter() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<Main />}  >
                        <Route path="/" element={<Home />} />
                        <Route path="/aboutus" element={<About />} />
                        <Route path="/products" element={<ProductCard />} />
                        <Route path="/productpage" element={<ProductPage />} />
                        <Route path="/wishlist" element={<Wishlist />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/signup" element={<Sign/>} />
                        <Route path="/order" element={<Order />} />
                        <Route path="/product" element={<Product />} />
                    </Route >
                </Routes>
            </BrowserRouter>
        </>
    )
}
