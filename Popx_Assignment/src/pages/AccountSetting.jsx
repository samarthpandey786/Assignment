import React from 'react'
import arnold from '../assets/arnold.jpg.jpg'
const AccountSetting = () => {
  return (
    <>
    <header className='w-full h-18  flex justify-start items-center px-4 pt-4  text-2xl shadow-xl font-sm text-black font-semibold' >
      Account Settings
    </header>

    <div className='w-full h-[250px] border-b-3 border-dotted'>
        <div className='flex flex-row justify-start items-center gap-6 pt-5 mx-8'>
          <img src={arnold} alt="profile" className='size-25 rounded-full bg-black' />
          <div className='flex flex-col  text-black font-medium text-lg'>
          <h4>Marry Doe</h4>
          <h4 className='text-gray-400 text-sm'>Marry@Gmail.com</h4>
          </div>
        </div>

        <div className='flex justify-center items-center h-[50%]  px-[30px] text-sm font-medium text-gray-'>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos facilis aut repellendus! Fuga, autem cum neque obcaecati ipsum eveniet accusamus dolorem praesentium maxime?</p>
        </div>

    </div>
    </>
  )
}

export default AccountSetting
