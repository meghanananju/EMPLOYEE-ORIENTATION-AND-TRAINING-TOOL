/*
*****************************************************************************
* License Information :Alten Global Technology Solutions Pvt. Ltd.                  *

*                      #72 & 73, Krishna Reddy Colony, Domlur layout,            *

*                      Domlur,Bangalore - 560071, INDIA                     *

*                      Licensed software and All rights reserved.           *

*****************************************************************************

* File             : login.tsx
*
* Description      : Login
*
* Author(s)        : Chetan Biradar
*
* Version History:
* <Version Number>                 <Author>                <date>        <defect Number>      <Modification
*                                                                                           made and the
*                                                                                           reason for
*                                                                                           modification >
*  1.0                            Chetan Biradar          14-04-2025         --              initial version
*
* References        :
*                     
* Assumption(s)     : None.
*                     
* Constraint(s)     : None.
*                     
****************************************************************************
*/


// import React, { useState } from 'react';
// // import Header from '../layout/mainHeader';
// import bgVideo from '../../public/studyBg.mp4';
// import Logo from '../Images/ALTEN logo Black.png';
// import Button from '../components/UI/button';
// import Input from '../components/UI/input';
// import { useNavigate } from 'react-router-dom';
// const Login: React.FC = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [videoError, setVideoError] = useState(false);
//   const navigate = useNavigate();


//   const handleLogin = () => {
//     console.log('Email:', email);
//     console.log('Password:', password);
//     // You can do validation here, then navigate
//     navigate('/dashboard');
//   };



//   return (
//     <>

//       {/* Fullscreen background wrapper */}
//       <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">

//         {/* Header */}
//         <header className="absolute top-0 left-0 w-full z-20   px-6 py-3 flex items-center text-white  ">
//           {/* Logo */}
//           <div className="flex items-center space-x-2 ">
//             <img src={Logo} alt="Logo" className="h-14 w-auto" />
//             {/* <span className="text-xl font-semibold tracking-wide">MyApp</span> */}
//           </div>

//           {/* Navigation */}
//           <nav className="hidden sm:flex space-x-6 text-sm font-serif ml-5">
//             <a href="/" className="hover:text-blue-600 transition-colors duration-300">Home</a>
//             <a href="/about" className="hover:text-blue-600 transition-colors duration-300">About</a>
//             <a href="/dashboard" className="hover:text-blue-600 transition-colors duration-300">Dashboard</a>
//             <a href="/contact" className="hover:text-blue-600 transition-colors duration-300">Contact</a>
//           </nav>
//         </header>


//         {/* Background Video or Image */}
//         {!videoError ? (
//           <video
//             className="absolute top-0 left-0 w-full h-full object-cover z-[-2]"
//             autoPlay
//             muted
//             loop
//             playsInline
//             onError={() => setVideoError(true)}
//           >
//             <source src={bgVideo} type="video/mp4" />
//             Your browser does not support the video tag.
//           </video>
//         ) : (
//           <img
//             src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1950&q=80"
//             alt="Fallback Background"
//             className="absolute top-0 left-0 w-full h-full object-cover z-[-2]"
//           />
//         )}
//         <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-[-1]" />

//         {/* Login card */}
//         <div className="relative z-10 w-full max-w-md px-4">
//           <div className="bg-white backdrop-blur-md shadow-2xl rounded-md p-8 sm:p-10">
//             <div className="text-center">
//               <h1 className="text-2xl font-extrabold text-blue-700">Welcome Back</h1>
//               <p className="mt-2 text-gray-600 text-sm sm:text-base">
//                 Sign in to your account and continue your journey with us.
//               </p>
//             </div>

//             <div className="mt-4 space-y-6">
//               <Input
//                 id="email"
//                 name="email"
//                 label="Email Address"
//                 type="email"
//                 placeholder="Enter your email"
//                 onChange={(val) => setEmail(val)}
//                 value={email}
//               />
//               <Input
//                 id="password"
//                 name="password"
//                 label="Password"
//                 type="password"
//                 placeholder="Enter your password"
//                 onChange={(val) => setPassword(val)}
//                 value={password}
//               />
//               <Button
//                 text="Login"
//                 onClick={() => handleLogin()}
//                 type="info"
//                 size="sm"
//                 fullwidth={true}
//               />
//             </div>

//             <p className="mt-6 text-center text-sm text-gray-500">
//               Don’t have an account?{' '}
//               <a href="#" className="text-blue-600 hover:underline font-medium">
//                 Sign up
//               </a>
//             </p>
//           </div>
//         </div>
//       </div>

//     </>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import bgVideo from '../../public/studyBg.mp4';
import Logo from '../Images/ALTEN logo Black.png';
import Button from '../components/UI/button';
import Input from '../components/UI/input';
import { useNavigate } from 'react-router-dom';
import { baseURL } from '../config/config'
import StripAlert from '../components/UI/stripAlert';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [videoError, setVideoError] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // const handleLogin = async () => {
  //   // Basic validation
  //   if (!email || !password) {
  //     setError('Please enter both email and password');
  //     return;
  //   }

  //   setLoading(true);
  //   setError('');

  //   try {
  //     const response = await fetch(`${baseURL}login`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         // Add authorization header if needed
  //       },
  //       body: JSON.stringify({
  //         email,
  //         password
  //       })
  //     });

  //     const data = await response.json();

  //     if (!response.ok) {
  //       throw new Error(data.message || 'Login failed');
  //     }

  //     // Handle successful login
  //     console.log('Login successful:', data);

  //     // Store token in localStorage or context
  //     if (data.token) {
  //       localStorage.setItem('authToken', data.token);
  //       localStorage.setItem('email', data.email);
  //       localStorage.setItem('username', data.userName);

  //     }

  //     // Redirect to dashboard
  //     navigate('/dashboard');
  //   } catch (err) {
  //     setError(err.message || 'An error occurred during login');
  //     console.error('Login error:', err);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleLogin = async () => {
    // Basic validation
    if (!email || !password) {
      setError('Please enter both email and password');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const response = await fetch(`${baseURL}login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password
        })
      });

      const result = await response.json();

      if (!response.ok) {
        // Handle different error response structures
        const errorMessage = result.message ||
          result.error ||
          (result.data && result.data.message) ||
          'Login failed';
        throw new Error(errorMessage);
      }

      // Handle successful login
      console.log('Login successful:', result);

      // Store user data - adjust according to your actual API response structure
      if (result.data) {
        localStorage.setItem('authToken', result.data.token || '');
        localStorage.setItem('email', result.user.email || email);
        localStorage.setItem('username', result.user.userName || '');
      } else {
        navigate('/login');
      }

      // Redirect to dashboard
      navigate('/dashboard');
    } catch (err) {
      // Handle different error types
      const errorMessage = err instanceof Error ? err.message : 'An error occurred during login';
      setError(errorMessage);
      console.error('Login error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Fullscreen background wrapper */}
      <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Header */}
        <header className="absolute top-0 left-0 w-full z-20 px-6 py-3 flex items-center text-white">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={Logo} alt="Logo" className="h-14 w-auto" />
          </div>

          {/* Navigation */}
          <nav className="hidden sm:flex space-x-6 text-sm font-serif ml-5">
            <a href="/" className="hover:text-blue-600 transition-colors duration-300">Home</a>
            <a href="/about" className="hover:text-blue-600 transition-colors duration-300">About</a>
            <a href="/dashboard" className="hover:text-blue-600 transition-colors duration-300">Dashboard</a>
            <a href="/contact" className="hover:text-blue-600 transition-colors duration-300">Contact</a>
          </nav>
        </header>

        {/* Background Video or Image */}
        {!videoError ? (
          <video
            className="absolute top-0 left-0 w-full h-full object-cover z-[-2]"
            autoPlay
            muted
            loop
            playsInline
            onError={() => setVideoError(true)}
          >
            <source src={bgVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1950&q=80"
            alt="Fallback Background"
            className="absolute top-0 left-0 w-full h-full object-cover z-[-2]"
          />
        )}
        <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-[-1]" />

        {/* Login card */}
        <div className="relative z-10 w-full max-w-md px-4">
          <div className="bg-white backdrop-blur-md shadow-2xl rounded-md p-8 sm:p-10">
            <div className="text-center">
              <h1 className="text-2xl font-extrabold text-blue-700">Welcome Back</h1>
              <p className="mt-2 text-gray-600 text-sm sm:text-base">
                Sign in to your account and continue your journey with us.
              </p>
            </div>

            {/* Error message */}
            {error && (
              <div className="mt-4">
                <StripAlert
                  message={error}
                  type="danger"
                  onClose={() => setError('')}
                />
              </div>
            )}

            <div className="mt-4 space-y-6">
              <Input
                id="email"
                name="email"
                label="Email Address"
                type="email"
                placeholder="Enter your email"
                onChange={(val) => setEmail(val)}
                value={email}
              />
              <Input
                id="password"
                name="password"
                label="Password"
                type="password"
                placeholder="Enter your password"
                onChange={(val) => setPassword(val)}
                value={password}
              />
              <Button
                text={loading ? "Logging in..." : "Login"}
                onClick={handleLogin}
                type="info"
                size="sm"
                fullwidth={true}
                disabled={loading}
              />
            </div>

            <p className="mt-6 text-center text-sm text-gray-500">
              Don't have an account?{' '}
              <a href="#" className="text-blue-600 hover:underline font-medium">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;