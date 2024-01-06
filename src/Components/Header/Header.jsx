import React from 'react'

function Header() {
  return (
    <>
    <header>
      <div className=' flex bg-black h-auto '>
        <div className='flex p-6 align-center'>
          <img className='text-3xl' src="https://raw.githubusercontent.com/myaduvanshi/amazon-prime/main/src/Components/Images/amazonLogo.svg" alt="" />
          <span className='text-white text-sm font-normal mb-3 '>.in</span>
        </div>
        <div>
          <p className='text-white text-sm m-3 font-light'>Delivering to Delhi 110002</p>
          <p className='text-white font-bold  '>Update location</p>

        </div>
      </div>
    </header>
    </>
  )
}

export default Header