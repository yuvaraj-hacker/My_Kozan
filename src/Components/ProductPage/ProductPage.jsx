
import React, { useState, useEffect } from "react";
import axios from 'axios';

const ProductPage = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true); 
   
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:3000/products/products'); 
                setProducts(response.data); 
                setLoading(false);
            } catch (error) {
                console.error('Error fetching products:', error);
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) {
        return <div>Loading products...</div>;
    }

    // const products = [
    //     { Product_Name:'Reusable Wooden Money Box with Counter...' , Images:`/Images/product1.png` , Sale_Price:'5.99' , piece:'50' },
    //     { Product_Name:'E-Writing Doodle Board for Kids...' , Images:'/Images/product4.png' , Sale_Price:'8.99' , piece:'50' },
    //     { Product_Name:'Selfie Stick' , Images:'/Images/product7.png' , Sale_Price:'5.99' , piece:'50' },
    //     { Product_Name:'E-Writing Doodle Board for Kids...' , Images:'/Images/product5.png' , Sale_Price:'8.99' , piece:'50' }
    // ]

  return (
    <>
      <section className="w-full mt-10">
        <div className="max-w-screen-lg w-full mx-auto">
          <div className="p-2 text-white bg-[#00712D] w-28 rounded-lg text-center mx-auto text-xl">
            Products
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-5 lg:px-0 my-5 gap-5">
          {products.map((item,index)=>(
            <div key={index} className="flex flex-col border-2 rounded-3xl p-4 group hover:shadow-lg duration-300 hover:-translate-y-1">
              <div className="w-full mx-auto overflow-hidden  rounded-2xl">
                <img className="w-full object-center object-cover border h-[300px] cursor-pointer rounded-2xl " 
                src={item.Images
                    && item.Images.length >= 1 ? item.Images[0] : '/Images/default_image.png'
                } 
                alt={item.Product_Name} />
              </div>
              <div>
                <h3 className="text-xl text-center opacity-50 py-4 lg:min-h-24">{item.Product_Name}</h3>
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className='text-[#E38734] text-3xl font-bold'>${item.Sale_Price}</h2>
                    <p className="opacity-50 text-lg">(Min. 50 Pcs)</p>
                  </div>
                  <div>
                    <button className="p-2 px-4 text-white bg-[#00712D] rounded-lg text-center mx-auto font-semibold">Buy now</button>
                  </div>
                </div>
              </div>
            </div>
        ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductPage;
