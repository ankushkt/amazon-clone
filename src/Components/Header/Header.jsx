import React from 'react'
import './Header.css'

function Header() {
  return (
    <>
      <header>
        <div className=' flex bg-black h-auto'>
          <div className='flex  align-center'>
            <img className='size-26 ml-3 mt-1' src="https://raw.githubusercontent.com/myaduvanshi/amazon-prime/main/src/Components/Images/amazonLogo.svg" alt="" />
            <span className='text-white text-sm font-normal mt-5   '>.in</span>
          </div>
          <div className='ml-4'>
            <div className='flex mt-3 text-small mb-3'>
              <img className='size-5 mt-4 ' src="https://raw.githubusercontent.com/myaduvanshi/amazon-prime/main/src/Components/Images/location.svg" alt="" />
              <p className='text-white text-sm  font-thin'>Delivering to Delhi 110002 <br />
                <span className='text-white font-bold text-base'>Updated location </span></p>
            </div>
          </div>
          <div className='flex w-80 h-12 relative top-2 ml-4 rounded-md '>
            <div className=' w-14 h-full '>
              <select className='w-full h-full text-balck border-none rounded-sm bg-gray-200 px-2' name="category" id="category">
                <option value="allCategories">All categories</option>
                <option value="alexaSkills">Alexa Skills</option>
                <option value="amazonDevice">Amazon Device</option>
                <option value="amazonFashion">Amazon Fashion</option>
                <option value="amazonFresh">Amazon Fresh</option>
              </select>
            </div>
            <div className='bg-white w-48  flex  items-center '>
              <span className='ml-3 font-normal text-lg'> Search Amazon.in   </span>
            </div>
            <div className='w-14 bg-yellow-600 '>
              <img className='relative top-3 left-4' src="https://raw.githubusercontent.com/myaduvanshi/amazon-prime/main/src/Components/Images/seacrh.svg" alt="" />
            </div>
          </div>
          <div className=' flex w-14 border-none justify-center items-center ml-0'>
            <img className='size-5' src="https://raw.githubusercontent.com/myaduvanshi/amazon-prime/main/src/Components/Images/indiaFlagIcon.svg" alt="indian flag"  />
            <span className='text-center text-white'>EN</span>
            <select className='w-full h-full text-white bg-black border-none' name="category" id="category"> 
            <li className='list-disc '>हिन्दी - HI - अनुवाद</li>
             </select>

          </div>

        </div>
      </header>
    </>
  )
}

export default Header