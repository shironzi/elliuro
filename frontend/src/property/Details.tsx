import { FaLocationDot } from 'react-icons/fa6'

import { IoBedOutline } from "react-icons/io5";
import { PiBathtubFill } from "react-icons/pi";
import { FaPersonSwimming } from "react-icons/fa6";
import { FaCar } from "react-icons/fa6";

function Details() {
  return (
    <div>
      <div className='flex flex-row h-96'>
        <img src="/images/banner.png" alt="" className='w-6/12'/>
        <div className='flex flex-col w-2/6'>
          <img src="/images/banner.png" alt="" className='h-48'/>
          <img src="/images/banner.png" alt="" className='h-48'/>
        </div>
        <img src="/images/banner.png" alt="" className='w-4/12'/>
      </div>
      <div>
        <div>
          <h1>LUXE HAVEN RESIDENCES</h1>
          <div className='flex flex-row gap-3 items-center '>
            <FaLocationDot />
            <h1>Sampaloc, Manila Philippines</h1>
          </div>
          <h1>Php 13,500,000.00</h1>
          <div>
          <div className='flex flex-row gap-3 items-center'>
                <IoBedOutline/>
                <h1>Bedroom</h1>
            </div>
            <div className='flex flex-row gap-3 items-center'>
                <PiBathtubFill/>
                <h1>Toilet & Bath</h1>
            </div>
            <div className='flex flex-row gap-3 items-center'>
                <FaPersonSwimming/>
                <h1>Swimming Pool</h1>
            </div>
            <div className='flex flex-row gap-3 items-center'>
                <FaCar/>
                <h1>Car Port</h1>
            </div>
          </div>
        </div>
        <a href="">CONTACT BROKER</a>
      </div>
    </div>
  )
}

export default Details
