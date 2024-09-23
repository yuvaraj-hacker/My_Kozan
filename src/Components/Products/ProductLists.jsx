import React, { useEffect, useState } from 'react';

const ProductLists = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, 5000); 

    return () => clearTimeout(timer); 
  }, []);

  return (
    visible && (
      <div className="bg-[#E38734] px-2 py-2 rounded-md inline-block w-[200px] text-center animate-shake animate-infinite animate-duration-[2000ms]">
        <button className="bg-black text-white w-full py-2 border border-[#a88734] rounded-md">
          Sign in
        </button>
        <p className="text-black text-sm mt-2">
          New customer? <a href="#" className="text-white font-thin">Start here.</a>
        </p>
        
      </div>
    )
  );
};

export default ProductLists;
