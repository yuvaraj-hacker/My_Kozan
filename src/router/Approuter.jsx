import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../core/Main/Main";
import Home from "../Components/HomePage/Home";
import Wishlist from "../Components/WishlistPage/Wishlist";
import Cart from "../Components/CartPage/Cart";
import ProductCard from "../Shared/Components/Products/ProductCard";
import Order from "../Components/OrderPage/Order";
import Product from "../Shared/Components/Product/Product";
import Login from "../Shared/Components/Login/Login.jsx";
import SignUp from "../Components/SignUpPage/SignUp.jsx";
import PrivacyPolicy from "../Components/Policy/PrivacyPolicy.jsx";
import DoodleBoard from "../Components/DoodleBoard/DoodleBoard.jsx";
import Forgot from "../Components/Forgot Password/Forgot.jsx";
import AdminRoute from "../Admin/router/adminRoute.jsx";
import AdminProduct from "../Admin/components/AdminProduct.jsx";
import SearchResults from "../Shared/Components/SearchedComponent/SearchResults.jsx";
import SideBar from "../Admin/core/sidebar/SideBar.jsx";


export default function Approuter() {
  const products = [
    { id: 1, name: 'Product 1', description: 'Description for product 1' },
    { id: 2, name: 'Product 2', description: 'Description for product 2' },
    { id: 3, name: 'Product 3', description: 'Description for product 3' },
  ];
  return (
    <BrowserRouter>
      <Routes>

        <Route element={<Main />}>

          <Route path="/" element={<Home />} />
          <Route path="/productsdetail/:id" element={<ProductCard />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/order" element={<Order />} />
          <Route path="/product" element={<Product />} />
          <Route path="/signin" element={<SignUp />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/doodle" element={<DoodleBoard />} />
          <Route path="/forgot" element={<Forgot />} />

        </Route>
        <Route path="/pr" element={<AdminProduct />} />

        <Route path="/admin/*" element={<AdminRoute />} />
      </Routes>
    </BrowserRouter>
  );
}
