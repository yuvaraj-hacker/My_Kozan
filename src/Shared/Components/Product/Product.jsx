import React from 'react';
import { Link } from 'react-router-dom';

function Products() {
    const products = [
        {
            imageSrc: "/assets/Images/Products/product-1.png",
            title: "Reusable Wooden Money Box with Counter...",
            price: "$5.99",
            minOrder: "Min. 50 Pcs",
            buttonText: "Buy Now",
        },
        {
            imageSrc: "/assets/Images/Products/product2.png",
            title: "E-Writing Doodle Board for Kids...",
            price: "$8.99",
            minOrder: "Min. 50 Pcs",
            buttonText: "Buy Now",
        },
        {
            imageSrc: "/assets/Images/Products/product3.png",
            title: "Selfie Stick",
            price: "$5.99",
            minOrder: "Min. 50 Pcs",
            buttonText: "Buy Now",
        },
    ];

    return (
        <section className="my-10 max-w-[68rem] mx-auto">
            <h1 className="text-center md:text-3xl text-xl border bg-[#00712D] w-fit mx-auto text-white p-2 rounded-lg">
                Products
            </h1>
            <div className="grid md:grid-cols-3  sm:grid-cols-2 grid-cols-1 gap-6 mx-4 mt-6">
                {products.map((product, index) => (
                    <div key={index} className="bg-white border rounded-lg shadow-lg p-4">
                        <img
                            src={product.imageSrc}
                            alt={product.title}
                            className="w-full  object-cover mb-4"
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
                        <Link to='/products'>

                            <button className="bg-[#00712D] hover:scale-105 duration-200 text-white py-2 px-4 rounded-lg w-full  transition">
                                {product.buttonText}
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Products;
