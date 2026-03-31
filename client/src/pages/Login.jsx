import React from 'react';
import { assets } from '../assets/assets';
import { Star } from 'lucide-react';
import { SignIn, SignUp } from '@clerk/react';

const Login = () => {
  return (
    <div className='relative min-h-screen flex flex-col md:flex-row'>
      {/* Background Image - Added absolute/inset-0 so it stays in the background */}
      <img 
        src={assets.bgImage} 
        alt="Login Background" 
        className='absolute inset-0 -z-10 w-full h-full object-cover'
      />

      {/* left side: branding */}
      <div className='flex-1 flex flex-col justify-between p-6 md:p-10 lg:pl-40'>
        <img src={assets.logo} alt="Branding" className='h-18 w-fit object-contain'/>
        
        <div>
          <div className='flex items-center gap-3 mb-4 max-md:mt-10'>
            <img src={assets.group_users} alt="group users" className='h-8 md:h-10'/>
            <div>
               <div className='flex'>
                  {/* Fixed Array logic: Array(5).fill(0) */}
                  {Array(5).fill(0).map((_, i) => (
                    <Star 
                      key={i}
                      className='size-4 md:size-5 text-transparent fill-amber-500'
                    />
                  ))}
               </div>
               <p className='text-gray-600'>Used by 12k+ Developers</p>
            </div>
          </div>
          <h1>More than just friends truly connect </h1>
          <p className='text-xl md:text-xl text-indigo-800 max-w-72'>connect with global muslim community on UmmahConnect.</p>
        </div>
        <span className='md:h-10'></span>
      </div>
      {/* Right sight login form */}
      <div className='flex-1 flex items-center justif-center p-6 sm:p-10'>
        <SignIn></SignIn>
      </div>
    </div>
  )
}
export default Login;