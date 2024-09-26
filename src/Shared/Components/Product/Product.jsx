import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Product/Product.css'
import toast from 'react-hot-toast';
import useCartStore from '../../Services/Store/UseCart';
function Products() {
    const [cart, setCart] = useState([]);
    const toggleMenu = () => {
        if (!isOpen) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        setOpen(!isOpen);
    };

    const { addToCart } = useCartStore();

    const handleAddToCart = (product) => {
        addToCart(product);
        toast.success('Already added to Cart');

    };
    const products = [
        {
            _id: 1,
            imageSrc: "/assets/Images/Products/product-1.png",
            title: "Reusable Wooden Money Box",
            price: "$5.99",
            minOrder: "Min. 50 Pcs",
            buttonText: "Buy Now",
            image: "/assets/Images/Products/Add Shopping Cart.png",
        },
    
    ];
    const productss = [
        {      _id:2,
            imageSrc: "/assets/Images/Products/product4.png",
            title: "Doodle Board",
            price: "$5.99",
            minOrder: "Min. 50 Pcs",
            buttonText: "Buy Now",
            image: "/assets/Images/Products/Add Shopping Cart.png",
        },
      
    ];
    return (
        <>
            <section className="my-10 max-w-[68rem] mx-auto md:mt-0  mt-36">
                <h1 className="text-center md:text-2xl text-xl border bg-[#00712D] w-fit mx-auto text-white p-2 rounded-lg">
                    Products
                </h1>
                <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 mx-4 mt-6'>
                    <div className=" ">
                        {products.map((product, index) => (
                            <div key={index} className="relative md:w-full md:h-[360px]   hover:shadow-md   group-hover:bg-neutral-950 border rounded-lg overflow-hidden">
                                <div className='group '>
                                    <Link to='/products' >
                                        <div className='relative w-[100%] flex justify-center items-center pt-[10px] z-10'>
                                            <img
                                                src={product.imageSrc}
                                                alt={product.title}
                                                className="max-w-[100%] rare md:group-hover:max-w-[50%] "
                                            />
                                        </div>
                                        <div className='relative p-[10px] flex justify-center items-center flex-col z-10 cursor-default' >
                                            <h2 className="text-center md:text-lg font-semibold mb-2">
                                                {product.title}
                                            </h2>
                                            <p className="text-center text-gray-700 mb-4">
                                                <span className="text-[#E38734] font-bold md:text-xl">
                                                    {product.price}
                                                </span>
                                                <span className="block text-sm">({product.minOrder})</span>
                                            </p>
                                        </div>
                                    </Link>
                                    <div className='flex justify-around items-center md:mb-0 mb-5'>
                                        <Link to='/order' onClick={toggleMenu}>
                                            <button className="bg-[#00712D] hover:scale-105 mt-4 md:text-base text-sm duration-200 text-white py-2 px-4 rounded-lg w-full transition">
                                                {product.buttonText}
                                            </button>
                                        </Link>
                                        <img
                                            onClick={() => handleAddToCart(product)}
                                            src={product.image}
                                            alt="Add to cart"
                                            className=" hover:scale-105 duration-200  w-8 h-8 cursor-pointer  transition mt-5"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className=" ">
                        {productss.map((product, index) => (
                            <div key={index} className="relative md:w-full md:h-[360px]   hover:shadow-md  group-hover:bg-neutral-950 border rounded-lg overflow-hidden">
                                <div className='group '>
                                    <Link to='/doodle' onClick={toggleMenu}>
                                        <div className='relative w-[100%] flex justify-center items-center pt-[10px] z-10'>
                                            <img
                                                src={product.imageSrc}
                                                alt={product.title}
                                                className="max-w-[100%] rare md:group-hover:max-w-[50%] "
                                            />
                                        </div>
                                        <div className='relative p-[10px] flex justify-center items-center flex-col z-10 cursor-default'>
                                            <h2 className="text-center md:text-lg font-semibold mb-2">
                                                {product.title}
                                            </h2>
                                            <p className="text-center text-gray-700 mb-4">
                                                <span className="text-[#E38734] font-bold md:text-xl">
                                                    {product.price}
                                                </span>
                                                <span className="block text-sm">({product.minOrder})</span>
                                            </p>
                                        </div>
                                    </Link>
                                    <div className='flex justify-around items-center md:mb-0 mb-5'>
                                        <Link to='/order' onClick={toggleMenu}>
                                            <button className="bg-[#00712D] mt-4 hover:scale-105 md:text-base text-sm  duration-200 text-white py-2 px-4 rounded-lg w-full transition">
                                                {product.buttonText}
                                            </button>
                                        </Link>
                                        <img
                                            onClick={() => handleAddToCart(product)}
                                            src={product.image}
                                            alt="Add to cart"
                                            className=" hover:scale-105 duration-200  w-8 h-8  cursor-pointer   transition mt-5"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
export default Products;
