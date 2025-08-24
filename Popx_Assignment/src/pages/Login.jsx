import React from 'react'
import Button from '../components/Button'

const Login = () => {
  return (
  <>
    {/* // text section  */}
    <div className='flex flex-col gap-3 mb-6 my-10 mx-8 '>
      <h1 className='text-black text-3xl font-medium font-monsterate'>Signin to your <br /> PopX account</h1>
      <p className='text-gray-400 font-medium text-xl'>Lorem ipsum dolor sit amet, <br /> consectetur adipisicing elit.</p>
    </div>
    <div className=' relative bottom-34'>
    {/* //  input section  */}
    <div className='flex flex-col justify-between  relative top-21'>
         <h4 className=' relative mx-14 my-13 bg-white  text-sm text-[#6c25ff] ' >Email Address</h4>
    <h4 className='text-[#6c25ff] relative mx-14 bg-white '>Password</h4>
    </div>
   
    <div className='flex flex-col items-center '>
      <input 
        type="email" 
        placeholder=' Enter Email Address' 
        className='w-[85%]  p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2  '
      />
      <br />
      <input 
        type="password" 
        placeholder='Enter Password' 
        className='w-[85%] mb-4 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 '
      />
      
    </div>
    </div>

    <div className='flex justify-center items-center relative bottom-34'>
    {/* // button section  */}
    <Button name={"Login"}
    className='w-[85%] flex bg-gray-300  text-white font-medium items-center justify-center'/>
    </div>
  </>
  )
}

export default Login
