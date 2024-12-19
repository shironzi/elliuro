import { useCallback, useEffect, useState } from 'react'
import { MdAddCircleOutline } from 'react-icons/md'
import { MdOutlineRemoveCircleOutline } from 'react-icons/md'
import { MdOutlineAdd } from 'react-icons/md'
import { useNavigate, useParams } from 'react-router'
import { getPropertyAmenities, propertyAmenities } from '../../apis/propertyApi'

function ListingAmenities() {
  const { propertyId } = useParams()

  const navigate = useNavigate()
  const [amenities, setAmenities] = useState({
    bedroom: 0,
    guestRoom: 0,
    bathroom: 0,
    carPort: 0,
    swimmingPool: 0,
  })

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      const amenitiesArray = Object.entries(amenities).map(([key, value]) => ({
        name: key,
        value: value,
        property_id: Number(propertyId),
      }))

      if (propertyId) {
        propertyAmenities(amenitiesArray, propertyId)
      } else {
        console.error('Property ID is undefined')
      }
      event.preventDefault()
      navigate(`/property-listing/images/${propertyId}`)
    },
    [navigate, amenities, propertyId],
  )

  const handleAddQuantity = useCallback(
    async (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault()

      const amenityType = event.currentTarget.closest('div')?.id
      if (amenityType) {
        setAmenities((prevAmenities) => ({
          ...prevAmenities,
          [amenityType as keyof typeof amenities]:
            (prevAmenities[amenityType as keyof typeof amenities] || 0) + 1,
        }))
      }
    },
    [],
  )

  const handleMinusQuantity = useCallback(
    async (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault()

      const amenityType = event.currentTarget.closest('div')?.id
      if (amenityType) {
        setAmenities((prevAmenities) => ({
          ...prevAmenities,
          [amenityType as keyof typeof amenities]: Math.max(
            (prevAmenities[amenityType as keyof typeof amenities] || 0) - 1,
            0,
          ),
        }))
      }
    },
    [],
  )

  useEffect(() => {
    async function fetchAmenities() {
      if (propertyId) {
        const amenitiesArray = await getPropertyAmenities(propertyId)
        const amenitiesObject = amenitiesArray.reduce(
          (
            acc: Record<string, number>,
            amenity: { name: string; value: number },
          ) => {
            acc[amenity.name] = amenity.value
            return acc
          },
          {},
        )
        setAmenities(amenitiesObject)
      }
    }

    fetchAmenities()
  }, [propertyId])

  return (
    <div className="bg-darkGray-400">
      <div className="container mx-auto py-14">
        <h1 className="text-3xl border-b w-fit pr-10 pb-2 border-beige-400">
          Describe Your Property’s Unique Features
        </h1>
        <div className="px-10 font-proximaNova mt-6">
          <p
            className="text-xs mb-10"
            style={{ color: 'rgba(224, 224, 224, 0.60)' }}
          >
            Share the key features of your property, like the number of rooms,
            bathrooms, and parking options. Buyers and renters want to know the
            specifics!
          </p>
          <form
            className="px-16 flex flex-col gap-12 mt-12"
            onSubmit={handleSubmit}
          >
            <div className="flex justify-between items-center border-b px-5">
              <h1>BEDROOM</h1>
              <div
                className="flex flex-row gap-10 items-center py-4"
                id="bedroom"
              >
                <button onClick={handleMinusQuantity}>
                  <MdOutlineRemoveCircleOutline size={25} cursor={'pointer'} />
                </button>
                <h1 className="bg-transparent w-5 outline-none" id="bedroom">
                  {amenities.bedroom}
                </h1>
                <button onClick={handleAddQuantity}>
                  <MdAddCircleOutline size={25} cursor={'pointer'} />
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center border-b px-5">
              <h1>GUEST ROOM</h1>
              <div
                className="flex flex-row gap-10 items-center py-4"
                id="guestRoom"
              >
                <button onClick={handleMinusQuantity}>
                  <MdOutlineRemoveCircleOutline size={25} cursor={'pointer'} />
                </button>
                <h1 className="bg-transparent w-5 outline-none">
                  {amenities.guestRoom}
                </h1>
                <button onClick={handleAddQuantity}>
                  <MdAddCircleOutline size={25} cursor={'pointer'} />
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center border-b px-5">
              <h1>BATHROOM</h1>
              <div
                className="flex flex-row gap-10 items-center py-4"
                id="bathroom"
              >
                <button onClick={handleMinusQuantity}>
                  <MdOutlineRemoveCircleOutline size={25} cursor={'pointer'} />
                </button>
                <h1 className="bg-transparent w-5 outline-none">
                  {amenities.bathroom}
                </h1>
                <button onClick={handleAddQuantity}>
                  <MdAddCircleOutline size={25} cursor={'pointer'} />
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center border-b px-5">
              <h1>CAR PORT</h1>
              <div
                className="flex flex-row gap-10 items-center py-4"
                id="carPort"
              >
                <button onClick={handleMinusQuantity}>
                  <MdOutlineRemoveCircleOutline size={25} cursor={'pointer'} />
                </button>
                <h1 className="bg-transparent w-5 outline-none">
                  {amenities.carPort}
                </h1>
                <button onClick={handleAddQuantity}>
                  <MdAddCircleOutline size={25} cursor={'pointer'} />
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center border-b px-5">
              <h1>SWIMMING POOL</h1>
              <div
                className="flex flex-row gap-10 items-center py-4"
                id="swimmingPool"
              >
                <button onClick={handleMinusQuantity}>
                  <MdOutlineRemoveCircleOutline size={25} cursor={'pointer'} />
                </button>
                <h1 className="bg-transparent w-5 outline-none">
                  {amenities.swimmingPool}
                </h1>
                <button onClick={handleAddQuantity}>
                  <MdAddCircleOutline size={25} cursor={'pointer'} />
                </button>
              </div>
            </div>

            {/* add a additional amenities */}
            <MdOutlineAdd
              size={50}
              cursor={'pointer'}
              className="mx-auto bg-beige-400 rounded-full p-2 transition-all hover:bg-secondary-400 duration-500"
            />
            <button
              type="submit"
              className="bg-beige-400 w-fit px-28 py-3 text-xl mx-auto transition-all hover:bg-secondary-400 duration-500"
            >
              NEXT
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ListingAmenities
