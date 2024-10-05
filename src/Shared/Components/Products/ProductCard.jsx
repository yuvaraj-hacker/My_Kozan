import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import { getProductbyId } from '../../Services/products/apiProducts';



function ProductCard() {
  const { id } = useParams(); 
  const [currentProductImage, setCurrentProductImage] = useState('');
  const [productDetails, setProductDetails] = useState(null); 
  const [cart, setCart] = useState([]);
  const [zoom, setZoom] = useState({ backgroundPosition: '0% 0%', backgroundSize: '100%' });
  const [loading, setLoading] = useState(true); 

  const handleImageClick = (image) => {
    setCurrentProductImage(image);
  };

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const product = await getProductbyId(id);
        setProductDetails(product);
      if (product && product.length > 0 && product[0].Images && product[0].Images.length > 0) {
  setCurrentProductImage(product[0].Images[0]);
}
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product details:', error);
        setLoading(false);
      }
    };

    fetchProductDetails();
  }, [id]);

  const handleAddToCart = () => {
    if (productDetails && !cart.includes(productDetails)) {
      setCart([...cart, productDetails]);
      toast.success('Added To Cart Successfully');
    } else {
      toast.success('Already added to Cart');
    }
  };

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setZoom({ backgroundPosition: `${x}% ${y}%`, backgroundSize: '150%' , });
  };
  const handleMouseLeave = () => {
    setZoom({ backgroundPosition: '0% 0%', backgroundSize: '100%' });
  };

  if (loading) {
    return <div>Loading product details...</div>;
  }

  if (!productDetails) {
    return <div>No product details available.</div>;
  }

  return (
    <section className='mx-auto max-w-[70rem] px-5 my-10'>
      { productDetails.map((product , index) => (  
      <div className="grid lg:grid-cols-10 grid-cols-5 lg:gap-10 gap-4">
        <div className='col-span-1 flex flex-col gap-3'>
        {product.Images && product.Images.length > 0 ? (
        product.Images.map((image, imgIndex) => (
          <img
            key={imgIndex}
            className='w-full cursor-pointer hover:scale-105 duration-200 hover:border h-[65px] hover:border-black'
            src={image} 
            alt={`product-${imgIndex + 1}`}
            onClick={() => handleImageClick(image)}
          />
        ))
      ) : (
        <p>No Images Available</p>
      )}
        </div>
        <div className='col-span-4 flex flex-col'>
          <div
            className='relative overflow-hidden w-full lg:h-[370px] md:h-[500px] h-[370px]'
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              backgroundImage: `url(${currentProductImage || ''})`,
              backgroundSize: zoom.backgroundSize,
              backgroundPosition: zoom.backgroundPosition,
              backgroundRepeat: 'no-repeat',
            }}
          >
            <img
              className='absolute top-0 left-0 w-full h-full object-cover'
              src={currentProductImage}
              alt='selected product'
              style={{ opacity: 0 }}
            />
          </div>
          <div className='flex justify-between px-4 mt-4'>
            <button
              className='border py-2 lg:px-4 px-2 rounded-lg flex gap-1 text-white hover:scale-105 duration-200 bg-[#E38734]  '
              onClick={handleAddToCart} 
            >
              <span className=''>
                <img src='/assets/Images/Header/Shopping Cart.png' alt='cart' />
              </span>
              Add to Cart
            </button>
            <Link to='/order'>
              <button className='border py-2 px-3 rounded-lg hover:scale-105 duration-200 text-white bg-[#00712D]'>
                Buy Now
              </button>
            </Link>
          </div>
        </div>
        <div className='col-span-5 flex flex-col gap-3'>
          <p className='text-xl text-gray-400'>
            {product.Product_Name}
          </p>
          <div className='flex items-center gap-3'>
            <div className='flex gap-4 bg-[#00712D] py-2 px-4 rounded-lg'>
              <p className='text-white text-xl'>{product.Specs[0].Star_Rate}</p>
              <img className='h-4 mt-1' src='/assets/Images/WishList/Star (2).png' alt='star' />
            </div>
            <p className='text-lg text-gray-400'>{product.Specs[0].Rating_mem} Ratings & {product.Specs[0].Review_mem} Reviews</p>
          </div>
          <p className='text-[#E38734] text-lg'>
            <span className='text-2xl font-bold'>$ {product.Sale_Price} </span> (Min.{product.General[0].MOQ} Pcs)
          </p>
          <div className='border mt-5'>
            <div className='border-b-2 p-4'>
              <p className='text-xl font-bold'>Specifications</p>
            </div>
            <div>
              <p className='px-4 py-2 text-xl'>In The Box</p>
              <div className='grid grid-cols-3 p-4 text-gray-400 gap-1 grid-rows-2'>
                {product.Specs &&
                  product.Specs.map((spec, index) => (
                    <React.Fragment key={index}>
                      <p className='col-span-1'>Sales Package</p>
                      <p className='col-span-2'>{spec.Sales_Package}</p>
                      <p className='col-span-1'>Pack of</p>
                      <p className='col-span-2'>{spec.Pack_of}</p>
                    </React.Fragment>
                  ))}
              </div>
            </div>
          </div>
          <div className='border'>
            <div>
              <p className='px-4 py-2 text-xl'>General</p>
              <div className='grid grid-cols-3 text-gray-400 p-4 gap-1 grid-rows-2'>
              {product.General && 
  product.General.map((gen, index) => (
    <React.Fragment key={index}>
      <p className='col-span-1'>Material:</p>
      <p className='col-span-2'>{gen.Material}</p>
      <p className='col-span-1'>Shape:</p>
      <p className='col-span-2'>{gen.Shape}</p>
      <p className='col-span-1'>Place of Origin:</p>
      <p className='col-span-2'>{gen.Place_of_Origin}</p>
      <p className='col-span-1'>Brand Name:</p>
      <p className='col-span-2'>{gen.Brand_Name}</p>
      <p className='col-span-1'>Modal Number:</p>
      <p className='col-span-2'>{gen.Modal_Number}</p>
      <p className='col-span-1'>Design:</p>
      <p className='col-span-2'>{gen.Design}</p>
      <p className='col-span-1'>MOQ:</p>
      <p className='col-span-2'>{gen.MOQ}</p>
      <p className='col-span-1'>Usage:</p>
      <p className='col-span-2'>{gen.Usage}</p>
      <p className='col-span-1'>Function:</p>
      <p className='col-span-2'>{gen.Function}</p>
    </React.Fragment>
  ))
}
              </div>
            </div>
          </div>
        </div>
      </div>
      ))}
    </section>
  );
}

export default ProductCard;

