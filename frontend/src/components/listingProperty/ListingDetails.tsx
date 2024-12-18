import { FaRegBuilding } from 'react-icons/fa'
import { PiHouseBold } from 'react-icons/pi'
import { LuHotel } from 'react-icons/lu'
import { BsBuildings } from 'react-icons/bs'
import { FaHouseLock } from 'react-icons/fa6'
import { useCallback, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { getPropertyDetails, propertyDetails } from '../../apis/propertyApi'

enum PropertyType {
  HOUSE = 'HOUSE',
  APARTMENT = 'APARTMENT',
  HOTEL = 'HOTEL',
  CONDOMINIUM = 'CONDOMINIUM',
  PRIVATE = 'PRIVATE',
}

function ListingDetails() {
  const { propertyId } = useParams() 
  const navigate = useNavigate()
  const [detailsData, setDetailsData] = useState(
    {
      title: '',
      type: PropertyType.HOUSE,
      location: '',
      price: 0,
      description: '',
    },
  )
  const [propertyType, setPropertyType] = useState(detailsData.type)

  const handleSubmit = useCallback(
    async(event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()

      if (propertyId) {
        await propertyDetails(detailsData, propertyId)
        navigate(`/property-listing/amenities/${propertyId}`)
      } else {
        console.error('Property ID is undefined')
      }
    },
    [navigate, propertyId, detailsData],
  )

  const handlePropertyType = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault()
      const property = event?.currentTarget.value
      setPropertyType(property as PropertyType)
      setDetailsData((prevDetails) => ({
        ...prevDetails,
        ['type']: property as PropertyType,
      }))
    },
    [],
  )

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.currentTarget
      setDetailsData((prevDetails) => ({ ...prevDetails, [name]: value }))
    },
    [],
  )

  const handleDescChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      const { name, value } = event.currentTarget
      setDetailsData((prevDetails) => ({ ...prevDetails, [name]: value }))
    },
    [],
  )

  useEffect(() => {
    async function fetchData(): Promise<void> {
      if (propertyId) {
        const property = await getPropertyDetails(propertyId)
        setDetailsData(property)
      } else {
        console.error('Property ID is undefined')
      }
    }

    fetchData()
  }, [propertyId])

  return (
    <div className="bg-darkGray-400">
      <div className="container mx-auto flex flex-col py-14">
        <h1 className="text-3xl border-b w-fit pr-10 border-beige-400 mb-10">
          LETS BEGIN WITH THE BASICS
        </h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-10 px-7 font-proximaNova"
        >
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
                value={detailsData.title}
                onChange={handleChange}
              />
              <input
                type="text"
                id="price"
                name="price"
                className="w-6/12 outline-none bg-transparent border px-4 py-2.5 text-lg"
                onChange={handleChange}
                value={detailsData.price}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-proximaNova">PROPERTY TYPE</h1>
            <div className="flex items-center font-proximaNova justify-between gap-5">
              <button
                className={`flex flex-row gap-2 items-center w-full justify-center px-10 py-4 text-lg ${
                  propertyType === 'HOUSE' ? 'bg-beige-400' : 'bg-secondary-400'
                }`}
                value="HOUSE"
                onClick={handlePropertyType}
              >
                <FaRegBuilding />
                <h1>House</h1>
              </button>
              <button
                className={`flex flex-row gap-2 items-center w-full justify-center px-10 py-4 text-lg ${
                  propertyType === 'APARTMENT'
                    ? 'bg-beige-400'
                    : 'bg-secondary-400'
                }`}
                value="APARTMENT"
                onClick={handlePropertyType}
              >
                <PiHouseBold />
                <h1>Apartment</h1>
              </button>
              <button
                className={`flex flex-row gap-2 items-center w-full justify-center px-10 py-4 text-lg ${
                  propertyType === 'HOTEL' ? 'bg-beige-400' : 'bg-secondary-400'
                }`}
                value="HOTEL"
                onClick={handlePropertyType}
              >
                <LuHotel />
                <h1>Hotel Room</h1>
              </button>
              <button
                className={`flex flex-row gap-2 items-center w-full justify-center px-10 py-4 text-lg ${
                  propertyType === 'CONDOMINIUM'
                    ? 'bg-beige-400'
                    : 'bg-secondary-400'
                }`}
                value="CONDOMINIUM"
                onClick={handlePropertyType}
              >
                <BsBuildings />
                <h1>Condominium</h1>
              </button>
              <button
                className={`flex flex-row gap-2 items-center w-full justify-center px-10 py-4 text-lg ${
                  propertyType === 'PRIVATE'
                    ? 'bg-beige-400'
                    : 'bg-secondary-400'
                }`}
                value="PRIVATE"
                onClick={handlePropertyType}
              >
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
              onChange={handleChange}
              value={detailsData.location}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="description">DESCRIPTION</label>
            <textarea
              name="description"
              id="description"
              className="outline-none bg-transparent border w-full px-4 py-2 text-lg"
              rows={10}
              onChange={handleDescChange}
              value={detailsData.description}
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-beige-400 w-fit px-28 py-3 text-xl mx-auto transition-all hover:bg-secondary-400 duration-500"
          >
            NEXT
          </button>
        </form>
      </div>
    </div>
  )
}

export default ListingDetails
