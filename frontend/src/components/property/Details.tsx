import { FaLocationDot } from 'react-icons/fa6'

import { IoBedOutline } from 'react-icons/io5'
import { PiBathtubFill } from 'react-icons/pi'
import { FaPersonSwimming } from 'react-icons/fa6'
import { FaCar } from 'react-icons/fa6'

import { PiParkDuotone } from 'react-icons/pi'
import { FaRegHospital } from 'react-icons/fa6'
import { LuSchool } from 'react-icons/lu'
import { MdLocalMall } from 'react-icons/md'
import { IoMdRestaurant } from 'react-icons/io'
import { MdOutlineLocalAirport } from 'react-icons/md'

interface PropsTypes {
  title: string
  location: string
  price: string
  bedroom: number
  toilet: number
  SwimmingPool: number
  carPort: number
  description: string
}

function Details(props: PropsTypes) {
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
            <h1 className="font-mogella text-3xl">{props.title}</h1>
            <div className="flex flex-row gap-3 items-center ">
              <FaLocationDot />
              <h1>{props.location}</h1>
            </div>
            <h1>{props.price}</h1>
            <div className="flex flex-row justify-between w-3/5  text-beige-400">
              <div className="flex flex-row gap-3 items-center">
                <IoBedOutline />
                <h1>{props.bedroom} Bedroom</h1>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <PiBathtubFill />
                <h1>{props.toilet} Toilet & Bath</h1>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <FaPersonSwimming />
                <h1>{props.SwimmingPool} Swimming Pool</h1>
              </div>
              <div className="flex flex-row gap-3 items-center">
                <FaCar />
                <h1>{props.carPort} Car Port</h1>
              </div>
            </div>
          </div>
          <a
            href=""
            className="bg-beige-400 px-10 py-2.5 text-lg hover:bg-secondary-400 transition-colors duration-300 ease-out"
          >
            CONTACT BROKER
          </a>
        </div>
        <div>
          <p className="px-20 tracking-widest leading-10 text-lg py-32">
            {props.description}
          </p>
        </div>
        <div className="flex flex-col py-28">
          <h1 className="text-center text-3xl mb-24">NEARBY ESTABLISHMENTS</h1>
          <div className="flex flex-col gap-0.5 bg-beige-400 w-fit mx-auto">
            <div className="flex flex-row mx-auto gap-0.5">
              <div className="flex flex-row gap-5 items-center justify-center bg-secondary-400 w-80 px-5 py-5">
                <PiParkDuotone size={75} /> PARKS
              </div>
              <div className="flex flex-row gap-5 items-center justify-center bg-secondary-400 w-80 px-5 py-5">
                <FaRegHospital size={75} /> HOSIPITAL
              </div>
              <div className="flex flex-row gap-5 items-center justify-center bg-secondary-400 w-80 px-5 py-5">
                <LuSchool size={75} /> SCHOOLS
              </div>
            </div>
            <div className="flex flex-row mx-auto gap-0.5">
              <div className="flex flex-row gap-5 items-center justify-center bg-secondary-400 w-80 px-5 py-5">
                <MdLocalMall size={75} /> MALLS
              </div>
              <div className="flex flex-row gap-5 items-center justify-center bg-secondary-400 w-80 px-5 py-5">
                <IoMdRestaurant size={75} /> RESTAURANT
              </div>
              <div className="flex flex-row gap-5 items-center justify-center bg-secondary-400 w-80 px-5 py-5">
                <MdOutlineLocalAirport size={75} /> AIRPORT
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details
