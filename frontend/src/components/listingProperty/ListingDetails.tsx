import { Link } from 'react-router'
import { FaRegBuilding } from 'react-icons/fa'
import { PiHouseBold } from 'react-icons/pi'
import { LuHotel } from 'react-icons/lu'
import { BsBuildings } from 'react-icons/bs'
import { FaHouseLock } from 'react-icons/fa6'

function ListingDetails() {
  return (
    <div className="bg-darkGray-400">
      <div className="container mx-auto flex flex-col py-14">
        <h1 className="text-3xl border-b w-fit pr-10 border-beige-400 mb-10">
          LETS BEGIN WITH THE BASICS
        </h1>
        <form action="" className="flex flex-col gap-10 px-7 font-proximaNova">
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-8">
              <div className="w-full">
                <label htmlFor="title" className="text-xl">
                  TITLE
                </label>
                <p
                  className="text-xs mt-1"
                  style={{ color: 'rgba(224, 224, 224, 0.60)' }}
                >
                  Begin by giving your property an appealing title. Make it
                  attention-grabbing yet informative
                </p>
              </div>
              <label htmlFor="price" className="w-6/12">
                PRICE
              </label>
            </div>
            <div className="flex flex-row gap-8">
              <input
                type="text"
                id="title"
                name="title"
                className="w-full outline-none bg-transparent border px-4 py-2.5 text-lg"
              />
              <input
                type="text"
                id="price"
                name="price"
                className="w-6/12 outline-none bg-transparent border px-4 py-2.5 text-lg"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-proximaNova">PROPERTY TYPE</h1>
            <div className="flex items-center font-proximaNova justify-between gap-5">
              <button className="flex flex-row gap-2 items-center w-full justify-center bg-beige-400 px-10 py-4 text-lg">
                <FaRegBuilding />
                <h1>House</h1>
              </button>
              <button className="flex flex-row gap-2 items-center w-full justify-center bg-secondary-400 px-10 py-4 text-lg">
                <PiHouseBold />
                <h1>Apartment</h1>
              </button>
              <button className="flex flex-row gap-2 items-center w-full justify-center bg-secondary-400 px-10 py-4 text-lg">
                <LuHotel />
                <h1>Hotel Room</h1>
              </button>
              <button className="flex flex-row gap-2 items-center w-full justify-center bg-secondary-400 px-10 py-4 text-lg">
                <BsBuildings />
                <h1>Condo</h1>
              </button>
              <button className="flex flex-row gap-2 items-center w-full justify-center bg-secondary-400 px-10 py-4 text-lg">
                <FaHouseLock />
                <h1>Private room</h1>
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="location">LOCATION</label>
            <input
              type="text"
              id="location"
              name="location"
              className="outline-none bg-transparent border px-4 py-2.5 text-lg"
              style={{ width: '65%' }}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="description">DESCRIPTION</label>
            <textarea
              name="description"
              id="description"
              className="outline-none bg-transparent border w-full px-4 py-2 text-lg"
              rows={10}
            ></textarea>
          </div>
          <Link
            to="/property-listing/amenities"
            className="bg-beige-400 w-fit px-28 py-3 text-xl mx-auto transition-all hover:bg-secondary-400 duration-500"
          >
            NEXT
          </Link>
        </form>
      </div>
    </div>
  )
}

export default ListingDetails
