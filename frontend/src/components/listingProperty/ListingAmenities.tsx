import { useCallback, useState } from 'react'
import { MdAddCircleOutline } from 'react-icons/md'
import { MdOutlineRemoveCircleOutline } from 'react-icons/md'
import { MdOutlineAdd } from 'react-icons/md'
import { useNavigate, useOutletContext } from 'react-router'

interface ContextOutlet {
  formData: {
    amenities: {
      bedroomCount: number
      guestRoomCount: number
      bathroomCount: number
      carPortCount: number
    }
  }

  updateFromData: (key: string, value: string | number | object) => void
}

interface Amenities {
  bedroomCount: number
  guestRoomCount: number
  bathroomCount: number
  carPortCount: number
}

function ListingAmenities() {
  const navigate = useNavigate()
  const { formData, updateFromData } = useOutletContext<ContextOutlet>()

  const [amenities, setAmenities] = useState(
    formData.amenities || {
      bedroomCount: 0,
      guestRoomCount: 0,
      bathroomCount: 0,
      carPortCount: 0,
    },
  )

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      updateFromData('amenities', amenities)
      navigate('/property-listing/establishments')
    },
    [amenities, updateFromData, navigate],
  )

  const handleQuantity = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>): void => {
      event.preventDefault()
      const { id } = event.currentTarget

      const updateCount = (key: keyof Amenities, increment: boolean) => {
        setAmenities((prevAmenities) => ({
          ...prevAmenities,
          [key]: increment
            ? prevAmenities[key] + 1
            : Math.max(prevAmenities[key] - 1, 0),
        }))
      }

      const actionMap: Record<
        string,
        { key: keyof Amenities; increment: boolean }
      > = {
        bedroomAdd: { key: 'bedroomCount', increment: true },
        bedroomMinus: { key: 'bedroomCount', increment: false },
        guestRoomAdd: { key: 'guestRoomCount', increment: true },
        guestRoomMinus: { key: 'guestRoomCount', increment: false },
        bathroomAdd: { key: 'bathroomCount', increment: true },
        bathroomMinus: { key: 'bathroomCount', increment: false },
        carPortAdd: { key: 'carPortCount', increment: true },
        carPortMinus: { key: 'carPortCount', increment: false },
      }

      const action = actionMap[id]
      if (action) {
        updateCount(action.key, action.increment)
      }
    },
    [],
  )

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
              <div className="flex flex-row gap-10 items-center py-4">
                <button onClick={handleQuantity} id="bedroomMinus">
                  <MdOutlineRemoveCircleOutline size={25} cursor={'pointer'} />
                </button>
                <h1 className="bg-transparent w-5 outline-none" id="bedroom">
                  {amenities.bedroomCount}
                </h1>
                <button onClick={handleQuantity} id="bedroomAdd">
                  <MdAddCircleOutline size={25} cursor={'pointer'} />
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center border-b px-5">
              <h1>GUEST ROOM</h1>
              <div className="flex flex-row gap-10 items-center py-4">
                <button onClick={handleQuantity} id="guestRoomMinus">
                  <MdOutlineRemoveCircleOutline size={25} cursor={'pointer'} />
                </button>
                <h1 className="bg-transparent w-5 outline-none">
                  {amenities.guestRoomCount}
                </h1>
                <button onClick={handleQuantity} id="guestRoomAdd">
                  <MdAddCircleOutline size={25} cursor={'pointer'} />
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center border-b px-5">
              <h1>BATHROOM</h1>
              <div className="flex flex-row gap-10 items-center py-4">
                <button onClick={handleQuantity} id="bathroomMinus">
                  <MdOutlineRemoveCircleOutline size={25} cursor={'pointer'} />
                </button>
                <h1 className="bg-transparent w-5 outline-none">
                  {amenities.bathroomCount}
                </h1>
                <button onClick={handleQuantity} id="bathroomAdd">
                  <MdAddCircleOutline size={25} cursor={'pointer'} />
                </button>
              </div>
            </div>
            <div className="flex justify-between items-center border-b px-5">
              <h1>CAR PORT</h1>
              <div className="flex flex-row gap-10 items-center py-4">
                <button onClick={handleQuantity} id="carPortMinus">
                  <MdOutlineRemoveCircleOutline size={25} cursor={'pointer'} />
                </button>
                <h1 className="bg-transparent w-5 outline-none">
                  {amenities.carPortCount}
                </h1>
                <button onClick={handleQuantity} id="carPortAdd">
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
