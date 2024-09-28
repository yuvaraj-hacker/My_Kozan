// import React, { useState } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { IoEye } from "react-icons/io5";
// import { IoMdEyeOff } from "react-icons/io";
// import axios from 'axios';
// import apiurl from '../../Services/api/apiendpoint';
// import toast from 'react-hot-toast';

// function Login() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [data, setData] = useState({ email: "", password: "" });

//   const navigate = useNavigate(); 
//   const location = useLocation(); 


//   const handleOnChange = (e) => {
//     const { name, value } = e.target;
//     setData((prev) => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     handleLogin( ); 
//   };

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post(`${apiurl()}/api/apilogin`, {
//         Email: data.email,
//         Password: data.password,
//       });

//       if (response.data.status === 'Success') {
       
//         localStorage.setItem('token', response.data.token); 
//         toast.success('Login successful!');

//         navigate('/product');
       
       
//       } else {
//         toast.error('Invalid email or password');
//       }
//     } catch (error) {
//       console.error('Login error:', error);
//       toast.error('Login failed. Please try again.');
//     }
//   };

//   return (
//     <>
//       <section className='md:mt-0 mt-36 my-20 px-2 flex justify-center items-center'>
//         <div className='lg:max-w-[30rem] mx-auto max-h-[40rem] border'>
//           <div className='flex justify-center items-center gap-2 bg-[#00712D]'>
//             <h1 className='text-white lg:text-xl text-lg text-center py-4 font-bold'>Login</h1>
//           </div>
//           <form className='md:p-6 p-2 md:my-0 my-4' onSubmit={handleSubmit}>
//             <div className='space-y-6'>
//               <div>
//                 <p className="lg:text-lg text-md text-gray-400">Enter Email/ Mobile Number</p>
//                 <input
//                   type="text"
//                   required
//                   name='email'
//                   value={data.email}
//                   onChange={handleOnChange}
//                   className='border-b-2 w-full mt-2 border-gray-200 outline-none'
//                 />
//               </div>
//               <div>
//                 <p className="lg:text-lg text-md text-gray-400">Password</p>
//                 <div className='flex'>
//                   <input
//                     type={showPassword ? "text" : "password"}
//                     name='password'
//                     value={data.password}
//                     onChange={handleOnChange}
//                     required
//                     className='border-b-2 w-full border-gray-200 outline-none'
//                   />
//                   <div className='cursor-pointer' onClick={() => setShowPassword((prev) => !prev)}>
//                     <span className='text-xl'>
//                       {showPassword ? <IoEye /> : <IoMdEyeOff />}
//                     </span>
//                   </div>
//                 </div>
//                 <Link to={'/forgot'} className='w-fit block ml-auto hover:underline hover:text-red-600 mt-3'>
//                   Forgot Password?
//                 </Link>
//               </div>
//               <p className="lg:text-base text-md text-gray-400">
//                 By continuing, you agree to <span className='text-[#00712D]'>My Kozan LLC</span> terms of Use and
//                 <span className='text-[#00712D]'> Privacy Policy</span>
//               </p>
//             </div>
//             <div className='text-center mt-10'>
//               <button
//                 type='submit'
//                 className='p-3 w-full bg-[#E38734] hover:scale-105 duration-200 lg:text-xl text-lg text-white rounded-lg'
//               >
//                 Sign In
//               </button>
//             </div>
//             <div className='flex flex-wrap justify-center items-center mt-5'>
//               <p className='text-center md:text-base text-sm'>New to MyKozan LLC?</p>
//               <Link to='/signin'>
//                 <span className='font-semibold cursor-pointer'>
//                   <div className='flex justify-center items-center'>
//                     <img className='md:w-12 md:h-12 w-9 h-9 -hue-rotate-60' src='/assets/Images/sign/nnn.gif' alt='' />
//                     <p className='md:text-base text-sm'> Create an Account</p>
//                   </div>
//                 </span>
//               </Link>
//             </div>
//           </form>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Login;



import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { IoEye } from "react-icons/io5";
import { IoMdEyeOff } from "react-icons/io";
import axios from 'axios';
import apiurl from '../../Services/api/apiendpoint';
import toast from 'react-hot-toast';

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [data, setData] = useState({ email: "", password: "" });

  const navigate = useNavigate(); 
  const location = useLocation(); 

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(); 
    // navigate('/product');
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${apiurl()}/api/apilogin`, {
        Email: data.email,
        Password: data.password,
      });

      console.log('API Response:', response.data);

      if (response.data.status === 'Success') {
        localStorage.setItem('token', response.data.token); 
        toast.success('Login successful!');

        console.log('Location state:', location.state);
        // setTimeout(() => {
        //     // const redirectPath = location.state?.from || '/product';
        navigate("/product");
        //   }, 1000);
      } else {
        toast.error('Invalid email or password');
      }
    } catch (error) {
      console.error('Login error:', error);
      toast.error('Login failed. Please try again.');
    }
  };

  return (
    <section className='md:mt-0 mt-36 my-20 px-2 flex justify-center items-center'>
      <div className='lg:max-w-[30rem] mx-auto max-h-[40rem] border'>
        <div className='flex justify-center items-center gap-2 bg-[#00712D]'>
          <h1 className='text-white lg:text-xl text-lg text-center py-4 font-bold'>Login</h1>
        </div>
        <form className='md:p-6 p-2 md:my-0 my-4' onSubmit={handleSubmit}>
          <div className='space-y-6'>
            <div>
              <p className="lg:text-lg text-md text-gray-400">Enter Email/ Mobile Number</p>
              <input
                type="text"
                required
                name='email'
                value={data.email}
                onChange={handleOnChange}
                className='border-b-2 w-full mt-2 border-gray-200 outline-none'
              />
            </div>
            <div>
              <p className="lg:text-lg text-md text-gray-400">Password</p>
              <div className='flex'>
                <input
                  type={showPassword ? "text" : "password"}
                  name='password'
                  value={data.password}
                  onChange={handleOnChange}
                  required
                  className='border-b-2 w-full border-gray-200 outline-none'
                />
                <div className='cursor-pointer' onClick={() => setShowPassword((prev) => !prev)}>
                  <span className='text-xl'>
                    {showPassword ? <IoEye /> : <IoMdEyeOff />}
                  </span>
                </div>
              </div>
              <Link to={'/forgot'} className='w-fit block ml-auto hover:underline hover:text-red-600 mt-3'>
                Forgot Password?
              </Link>
            </div>
            <p className="lg:text-base text-md text-gray-400">
              By continuing, you agree to <span className='text-[#00712D]'>My Kozan LLC</span> terms of Use and
              <span className='text-[#00712D]'> Privacy Policy</span>
            </p>
          </div>
          <div className='text-center mt-10'>
            <button
              type='submit'
              className='p-3 w-full bg-[#E38734] hover:scale-105 duration-200 lg:text-xl text-lg text-white rounded-lg'
            >
              Sign In
            </button>
          </div>
          <div className='flex flex-wrap justify-center items-center mt-5'>
            <p className='text-center md:text-base text-sm'>New to MyKozan LLC?</p>
            <Link to='/signin'>
              <span className='font-semibold cursor-pointer'>
                <div className='flex justify-center items-center'>
                  <img className='md:w-12 md:h-12 w-9 h-9 -hue-rotate-60' src='/assets/Images/sign/nnn.gif' alt='' />
                  <p className='md:text-base text-sm'> Create an Account</p>
                </div>
              </span>
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Login;
