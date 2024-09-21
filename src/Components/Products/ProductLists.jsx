import React from "react";

import ProductCard from "../Products/ProductCard";

export default function ProductsList() {

  const products = [
    {
      id: 1,
      image: "/Images/product1.png",
      title: "Reusable Wooden Money Box with Counter",
      price: "5.99",
      minQty: 50,
      buttonText: "Buy now"
    },
    {
      id: 2,
      image: "/Images/product2.png",
      title: "E-Writing Doodle Board for Kids",
      price: "8.99",
      minQty: 60,
      buttonText: "Buy now"
    },
    {
      id: 3,
      image: "/Images/product3.png",
      title: "Selfie Stick",
      price: "5.99",
      minQty: 50,
      buttonText: "Buy now"
    }
  ];

  return (
    <>
    <div className="flex flex-wrap gap-6 justify-center">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          title={product.title}
          price={product.price}
          minQty={product.minQty}
          buttonText={product.buttonText}
        />
      ))}
    </div>
   
    </>
  );
}
