import React from 'react'

function Header() {
  return (
    <>
      <header>
        <div className=' flex bg-black h-auto'>
          <div className='flex  align-center hover:border-solid hover:border-2 hover:border-white'>
            <img className='size-26 ml-3 mt-1' src="https://raw.githubusercontent.com/myaduvanshi/amazon-prime/main/src/Components/Images/amazonLogo.svg" alt="" />
            <span className='text-white text-sm font-normal mt-5   '>.in</span>
          </div>
          <div className='ml-7'>
            <div className='flex mt-3 text-small mb-3 hover:border-solid hover:border-2 hover:border-white'>
              <img className='size-5 mt-4 ' src="https://raw.githubusercontent.com/myaduvanshi/amazon-prime/main/src/Components/Images/location.svg" alt="" />
              <p className='text-white text-sm  font-thin'>Delivering to Delhi 110002 <br />
              <span className='text-white font-bold text-base'>Updated location </span></p>
            </div>
            <div>

            </div>
          



          </div>
        </div>
      </header>
    </>
  )
}

export default Header