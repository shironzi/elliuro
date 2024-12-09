import { FaLocationDot } from 'react-icons/fa6'

import { IoBedOutline } from 'react-icons/io5'
import { PiBathtubFill } from 'react-icons/pi'
import { FaPersonSwimming } from 'react-icons/fa6'
import { FaCar } from 'react-icons/fa6'

function Details() {
  return (
    <div className="font-proximaNova">
      <div className="flex flex-row h-96">
        <img src="/images/banner.png" alt="" className="w-6/12" />
        <div className="flex flex-col w-2/6">
          <img src="/images/banner.png" alt="" className="h-48" />
          <img src="/images/banner.png" alt="" className="h-48" />
        </div>
        <img src="/images/banner.png" alt="" className="w-4/12" />
      </div>
      <div className="container mx-auto">
        <div className="flex flex-row justify-between items-center pt-10 pb-16 border-b border-beige-400">
          <div className="flex flex-col gap-5 w-4/5">
            <h1 className="font-mogella text-3xl">LUXE HAVEN RESIDENCES</h1>
            <div className="flex flex-row gap-3 items-center ">
              <FaLocationDot />
              <h1>Sampaloc, Manila Philippines</h1>
            </div>
            <h1>Php 13,500,000.00</h1>
            <div className="flex flex-row justify-between w-3/5  text-beige-400">
              <div className="flex flex-row gap-3 items-center">
                <IoBedOutline />
                <h1>Bedroom</h1>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <PiBathtubFill />
                <h1>Toilet & Bath</h1>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <FaPersonSwimming />
                <h1>Swimming Pool</h1>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <FaCar />
                <h1>Car Port</h1>
              </div>
            </div>
          </div>
          <a href="">CONTACT BROKER</a>
        </div>
        <div>
          <p className="px-20 tracking-widest leading-10 text-lg py-32">
            <span className="text-beige-400 font-mogella text-2xl">
              Luxe Haven Residences
            </span>{' '}
            presents an extraordinary living experience, situated in the serene
            neighborhood of Sampaloc, Manila. This modern masterpiece exudes
            sophistication and comfort, featuring expansive spaces that
            seamlessly blend indoor luxury with outdoor tranquility. With 5
            spacious bedrooms, 4 elegantly designed bathrooms, a refreshing
            swimming pool, and a 4-car port, this residence perfectly balances
            form and function. The open-plan layout invites natural light,
            highlighting high-end finishes and contemporary architecture
            throughout. <br /> Enjoy moments of relaxation in the exquisite bath
            area or host gatherings in the spacious living and dining spaces.
            The property’s state-of-the-art amenities and lush surroundings
            create an unparalleled ambiance that caters to both relaxation and
            entertainment. Embrace the prestige of Luxe Haven Residences – where
            luxury meets timeless elegance.
          </p>
        </div>
        <div >
          <h1>NEARBY ESTABLISHMENTS</h1>
          <div className="flex flex-col">
            <div className='flex flex-row'>
              <h1>PARKS</h1>
              <h1>HOSIPITAL</h1>
              <h1>SCHOOLS</h1>
            </div>
            <div className='flex flex-row'>
              <h1>MALLS</h1>
              <h1>RESTAURANT</h1>
              <h1>AIRPORT</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details
