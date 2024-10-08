// components/Products.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../Product/Product.css";
import toast from "react-hot-toast";
import { getAllProducts } from "../../Services/products/apiProducts";
import UseCart from "../../Services/Store/UseCart";

function Products() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const addToCart = UseCart(state => state.addToCart);

    const handleAddToCart = (product) => {
        addToCart(product);
        toast.success("Product added to cart!");
    };

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await getAllProducts();
                setProducts(res || []);
            } catch (error) {
                console.error("Error fetching products:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);

    if (loading) {
        return <div className="text-center">Loading products...</div>;
    }

    if (products.length === 0) {
        return <div className="text-center">No products available at the moment.</div>;
    }

    return (
        <section className="my-10 max-w-[68rem] mx-auto md:mt-36 mt-24">
            <h1 className="text-center md:text-2xl text-xl border bg-[#00712D] w-fit mx-auto text-white p-2 rounded-lg">
                Products
            </h1>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mx-4 mt-6">
                {products.map((product) => (
                    <div
                        key={product._id}
                        className="relative md:w-full lg:h-[360px] hover:shadow-md border rounded-lg overflow-hidden group"
                    >
                        <Link to={`/productsdetail/${product._id}`}>
                            <div className="relative w-full flex justify-center items-center pt-[10px] z-10">
                                <img
                                    src={product.Images[0]}
                                    alt={product.Product_Name}
                                    className="max-w-full rare lg:group-hover:max-w-[60%]"
                                />
                            </div>
                            <div className="relative p-[5px] flex justify-center items-center flex-col z-10 cursor-default">
                                <h2 className="text-center md:text-lg font-semibold mb-2">
                                    {product.Product_Name}
                                </h2>
                                <p className="text-center text-gray-700">
                                    <span className="text-[#E38734] font-bold md:text-xl">
                                        {product.Sale_Price}
                                    </span>
                                    <span className="block text-sm">(Min. 50 Pcs)</span>
                                </p>
                            </div>
                        </Link>
                        <div className="flex justify-around items-center lg:mb-0 mb-5">
                            <Link to="/order">
                                <button className="bg-[#00712D] hover:scale-105 mt-4 md:text-base text-sm duration-200 text-white py-2 px-4 rounded-lg w-full transition">
                                    Buy Now
                                </button>
                            </Link>
                            <img
                                onClick={() => handleAddToCart(product)}
                                src="/assets/Images/Products/Add Shopping Cart.png"
                                alt="Add to cart"
                                className="hover:scale-105 duration-200 w-8 h-8 cursor-pointer transition mt-5"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Products;
