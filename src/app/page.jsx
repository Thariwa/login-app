import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Page() {
  return (
    <>
    <div className='bg-gradient-to-r from-slate-800 to-rose-500 min-h-screen'>
        <div className='flex py-36 justify-center'>
            <Image src= 'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80' width={500} height={500}  className='border  rounded-bl-2xl rounded-tl-2xl ' />
            <div className='bg-slate-200 rounded-br-2xl h-96 w-2/4 rounded-tr-2xl '>

              <div className='flex gap-6 justify-center py-5 '>
              <Link href='/signup'>
            <p>Sign up</p>
            </Link>
              <Link href='/signin'>
            <p>Sign In</p>
            </Link>
           
              </div>
           
             
      <div className='py-2 px-4  ml-48  w-64 bg-slate-700 border rounded-md mb-10'>
      <p><label htmlFor="name" >Full Name</label></p>
      <p><input type="text" name='name' placeholder='Umar Thariwat' className='bg-transparent border-solid border-b border-black' /></p>
      <p><label htmlFor="email" >Email</label></p>
      <p><input type="text" name='email' placeholder='Umarthariwat@gmail.com' className='bg-transparent border-solid border-b border-black'  /></p>
      <p><label htmlFor="password" >Password</label></p>
      <p><input type="text" name='password' className='bg-transparent border-solid border-b border-black ' /></p>
      <button className='text-center bg-blue-900 text-white px-20 py-0 border rounded-md mt-4 '>Sign Up</button>
      <Link href='/signin'>
      <p className='mt-4 text-red-600 text-center'>I have an account?</p>
      </Link>
     
     </div>

     
    
 
     
      

      </div>
      </div>
     
    </div>
    </>
    
  )
}
