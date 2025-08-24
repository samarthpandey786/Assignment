import React from 'react'
import Button from '../components/Button'

const Home = () => {
  return (
    <div className="flex flex-col justify-end  w-full min-h-screen bg-white ">
      {/* upper text section */}
      <div className='flex flex-col ml-4'>
     
        <h1 className="text-2xl font-bold mb-2 sm:text-4xl text-wrap">Welcome to PopX</h1>
        <p className="text-gray-400 mb-6">
          Lorem, ipsum dolor sit amet,<br/> consectetur adipisicing elit.
        </p>
        </div>
        {/* button section  */}
        <div className="flex flex-col gap-3 sm:flex-row mb-6 items-center">
          <Button 
            name="Create Account" 
            className="bg-[#6c25ff] text-white hover:bg-blue-700 w-[90%]"
          />
          <Button 
            name="Already Registered? Login" 
            className="bg-[#cebafb] text-black hover:bg-gray-400  w-[90%]"
          />
        </div>
      
    </div>
  )
}

export default Home
