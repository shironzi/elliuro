import { FaRegBuilding } from 'react-icons/fa'
import { PiHouseBold } from 'react-icons/pi'
import { LuHotel } from 'react-icons/lu'
import { BsBuildings } from 'react-icons/bs'
import { FaHouseLock } from 'react-icons/fa6'
import { useCallback, useState } from 'react'
import { useNavigate, useOutletContext } from 'react-router'

enum PropertyType {
  House = 'house',
  Apartment = 'apartment',
  Hotel = 'hotel',
  condominium = 'condominium',
  private = 'private',
}
interface ContextOutlet {
  formData: {
    details: {
      title: string
      type: PropertyType
      location: string
      price: string
      description: string
    }
  }
  updateFromData: (key: string, value: string | number | object) => void
}

function ListingDetails() {
  const navigate = useNavigate()
  const { formData, updateFromData } = useOutletContext<ContextOutlet>()
  const [details, setDetails] = useState(
    formData.details || {
      title: '',
      type: PropertyType.House,
      location: '',
      price: '',
      description: '',
    },
  )
  const [propertyType, setPropertyType] = useState(details.type)

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      updateFromData('details', details)
      navigate('/property-listing/amenities')
    },
    [details, updateFromData, navigate],
  )

  const changePropertyType = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault()
      const property = event?.currentTarget.value
      setPropertyType(property as PropertyType)
      setDetails((prevDetails) => ({
        ...prevDetails,
        ['type']: property as PropertyType,
      }))
    },
    [],
  )

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.currentTarget
      setDetails((prevDetails) => ({ ...prevDetails, [name]: value }))
    },
    [],
  )

  const handleDescChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      const { name, value } = event.currentTarget
      setDetails((prevDetails) => ({ ...prevDetails, [name]: value }))
    },
    [],
  )

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
                value={details.title || ''}
                onChange={handleChange}
              />
              <input
                type="text"
                id="price"
                name="price"
                className="w-6/12 outline-none bg-transparent border px-4 py-2.5 text-lg"
                onChange={handleChange}
                value={details.price || ''}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-proximaNova">PROPERTY TYPE</h1>
            <div className="flex items-center font-proximaNova justify-between gap-5">
              <button
                className={`flex flex-row gap-2 items-center w-full justify-center px-10 py-4 text-lg ${
                  propertyType === 'house' ? 'bg-beige-400' : 'bg-secondary-400'
                }`}
                value="house"
                onClick={changePropertyType}
              >
                <FaRegBuilding />
                <h1>House</h1>
              </button>
              <button
                className={`flex flex-row gap-2 items-center w-full justify-center px-10 py-4 text-lg ${
                  propertyType === 'apartment'
                    ? 'bg-beige-400'
                    : 'bg-secondary-400'
                }`}
                value="apartment"
                onClick={changePropertyType}
              >
                <PiHouseBold />
                <h1>Apartment</h1>
              </button>
              <button
                className={`flex flex-row gap-2 items-center w-full justify-center px-10 py-4 text-lg ${
                  propertyType === 'hotel' ? 'bg-beige-400' : 'bg-secondary-400'
                }`}
                value="hotel"
                onClick={changePropertyType}
              >
                <LuHotel />
                <h1>Hotel Room</h1>
              </button>
              <button
                className={`flex flex-row gap-2 items-center w-full justify-center px-10 py-4 text-lg ${
                  propertyType === 'condominium'
                    ? 'bg-beige-400'
                    : 'bg-secondary-400'
                }`}
                value="condominium"
                onClick={changePropertyType}
              >
                <BsBuildings />
                <h1>Condominium</h1>
              </button>
              <button
                className={`flex flex-row gap-2 items-center w-full justify-center px-10 py-4 text-lg ${
                  propertyType === 'private'
                    ? 'bg-beige-400'
                    : 'bg-secondary-400'
                }`}
                value="private"
                onClick={changePropertyType}
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
              value={details.location || ''}
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
              value={details.description || ''}
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
