import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
function Products() {
    const [cart, setCart] = useState([]);
    const toggleMenu = () => {
        if (!isOpen) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        setOpen(!isOpen);
      };
    const handleAddToCart = (product) => {
        const isProductInCart = cart.find(cartItem => cartItem.imageSrc === product.imageSrc);
        if (isProductInCart) {
            toast.success('Already added to Cart');
        } else {
            setCart([...cart, product]);
            toast.success('Added To Cart Successfully');
        }
    };
    const products = [
        {
            imageSrc: "/assets/Images/Products/product-1.png",
            title: "Reusable Wooden Money Box",
            price: "$5.99",
            minOrder: "Min. 50 Pcs",
            buttonText: "Buy Now",
            button: "Add To Cart",
        },
        {
            imageSrc: "/assets/Images/Products/product2.png",
            title: "Reusable Wooden Money Box",
            price: "$8.99",
            minOrder: "Min. 50 Pcs",
            buttonText: "Buy Now",
            button: "Add To Cart",
        },
        {
            imageSrc: "/assets/Images/Products/product3.png",
            title: "Reusable Wooden Money Box",
            price: "$5.99",
            minOrder: "Min. 50 Pcs",
            buttonText: "Buy Now",
            button: "Add To Cart",
        },
    ];
    const productss = [
        {
            imageSrc: "/assets/Images/Products/product4.png",
            title: "Doodle Board",
            price: "$5.99",
            minOrder: "Min. 50 Pcs",
            buttonText: "Buy Now",
            button: "Add To Cart",
        },
        {
            imageSrc: "/assets/Images/Products/product5.png",
            title: "Doodle Board",
            price: "$5.99",
            minOrder: "Min. 50 Pcs",
            buttonText: "Buy Now",
            button: "Add To Cart",
        },
        {
            imageSrc: "/assets/Images/Products/product6.png",
            title: "Doodle Board",
            price: "$5.99",
            minOrder: "Min. 50 Pcs",
            buttonText: "Buy Now",
            button: "Add To Cart",
        },
    ];
    return (
        <section className="my-10 max-w-[68rem] mx-auto">
            <h1 className="text-center md:text-2xl text-xl border bg-[#00712D] w-fit mx-auto text-white p-2 rounded-lg">
                Products
            </h1>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 mx-4 mt-6">
                {products.map((product, index) => (
                    <div key={index} className="bg-white border rounded-lg shadow-lg p-4 hover:scale-105 duration-200">
                        <img
                            src={product.imageSrc}
                            alt={product.title}
                            className="w-full object-cover mb-4"
                        />
                        <h2 className="text-center text-lg font-semibold mb-2">
                            {product.title}
                        </h2>
                        <p className="text-center text-gray-700 mb-4">
                            <span className="text-[#E38734] font-bold text-xl">
                                {product.price}
                            </span>
                            <span className="block text-sm">({product.minOrder})</span>
                        </p>
                        <Link to='/products' onClick={toggleMenu}>
                            <button className="bg-[#00712D] hover:scale-105 duration-200 text-white py-2 px-4 rounded-lg w-full transition">
                                {product.buttonText}
                            </button>
                        </Link>
                        <button onClick={() => handleAddToCart(product)} className="bg-[#00712D] hover:scale-105 duration-200 text-white py-2 px-4 rounded-lg w-full transition mt-5">
                            {product.button}
                        </button>
                    </div>
                ))}
            </div>
            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 mx-4 mt-6">
                {productss.map((product, index) => (
                    <div key={index} className="bg-white border rounded-lg shadow-lg p-4 hover:scale-105 duration-200">
                        <img
                            src={product.imageSrc}
                            alt={product.title}
                            className="w-full object-cover mb-4"
                        />
                        <h2 className="text-center text-lg font-semibold mb-2">
                            {product.title}
                        </h2>
                        <p className="text-center text-gray-700 mb-4">
                            <span className="text-[#E38734] font-bold text-xl">
                                {product.price}
                            </span>
                            <span className="block text-sm">({product.minOrder})</span>
                        </p>
                        <Link to='/doodle' onClick={toggleMenu}>
                            <button className="bg-[#00712D] hover:scale-105 duration-200 text-white py-2 px-4 rounded-lg w-full transition">
                                {product.buttonText}
                            </button>
                        </Link>
                        <button onClick={() => handleAddToCart(product)} className="bg-[#00712D] hover:scale-105 duration-200 text-white py-2 px-4 rounded-lg w-full transition mt-5">
                            {product.button}
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
}
export default Products;
