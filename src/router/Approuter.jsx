import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../core/Main/Main";
import Home from "../Components/HomePage/Home";
import Wishlist from "../Components/WishlistPage/Wishlist";
import Cart from "../Components/CartPage/Cart";
import ProductCard from "../Shared/Components/Products/ProductCard";
import Order from "../Components/OrderPage/Order";
import ProductPage from "../Components/ProductPage/ProductPage";
import Product from "../Shared/Components/Product/Product";
import Login from "../Shared/Components/Login/Login.jsx";
import SignUp from "../Components/SignUpPage/SignUp.jsx";
import PrivacyPolicy from "../Components/Policy/PrivacyPolicy.jsx";
import DoodleBoard from "../Components/DoodleBoard/DoodleBoard.jsx";
import Forgot from "../Components/Forgot Password/Forgot.jsx";
import SelfieStick from "../Components/SelfieStick/SelfieStick.jsx";
import ScrollToTop from "./ScrollToTop.jsx";
export default function Approuter() {
    return (
        <>
            <BrowserRouter>
                <ScrollToTop />
                <Routes>
                    <Route element={<Main />}  >
                        <Route path="/" element={<Home />} />
                        <Route path="/products" element={<ProductCard />} />
                        <Route path="/productpage" element={<ProductPage />} />
                        <Route path="/wishlist" element={<Wishlist />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/order" element={<Order />} />
                        <Route path="/product" element={<Product />} />
                        <Route path="/signin" element={<SignUp />} />
                        <Route path="/privacy" element={<PrivacyPolicy />} />
                        <Route path="/doodle" element={<DoodleBoard />} />
                        <Route path="/forgot" element={<Forgot />} />
                        <Route path="/selfiestick" element={<SelfieStick />} />
                    </Route >
                </Routes>
            </BrowserRouter>
        </>
    )
}
