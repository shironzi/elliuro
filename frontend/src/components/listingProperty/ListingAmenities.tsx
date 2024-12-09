import { useCallback, useState } from 'react'
import { MdAddCircleOutline } from 'react-icons/md'
import { MdOutlineRemoveCircleOutline } from 'react-icons/md'
import { MdOutlineAdd } from 'react-icons/md'
import { Link } from 'react-router'

function ListingAmenities() {
  const [bedroomCount, setBedroomCount] = useState(1)
  const [guestRoomCount, setGuestRoomCount] = useState(0)
  const [bathroomCount, setBathroomCount] = useState(1)
  const [carPortCount, setCarPortCount] = useState(0)

  const handleQuantity = useCallback(
    async (event: React.MouseEvent<HTMLButtonElement>): Promise<void> => {
      event.preventDefault()
      try {
        const id = event.currentTarget.id
        switch (id) {
          case 'bedroomAdd':
            setBedroomCount(bedroomCount + 1)
            break
          case 'bedroomMinus':
            if (bedroomCount > 1) {
              setBedroomCount(bedroomCount - 1)
            }
            break
          case 'guestRoomAdd':
            setGuestRoomCount(guestRoomCount + 1)
            break
          case 'guestRoomMinus':
            if (guestRoomCount > 0) {
              setGuestRoomCount(guestRoomCount - 1)
            }
            break
          case 'bathroomAdd':
            setBathroomCount(bathroomCount + 1)
            break
          case 'bathroomMinus':
            if (bathroomCount > 1) {
              setBathroomCount(bathroomCount - 1)
            }
            break
          case 'carPortAdd':
            setCarPortCount(carPortCount + 1)
            break
          case 'carPortMinus':
            if (carPortCount > 0) setCarPortCount(carPortCount - 1)
            break
        }
      } catch (error) {
        throw Error(String(error))
      }
    },
    [bedroomCount, guestRoomCount, bathroomCount, carPortCount],
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
          <form className="px-16 flex flex-col gap-12 mt-12">
            <div className="flex justify-between items-center border-b px-5">
              <h1>BEDROOM</h1>
              <div className="flex flex-row gap-10 items-center py-4">
                <button onClick={handleQuantity} id="bedroomMinus">
                  <MdOutlineRemoveCircleOutline size={25} cursor={'pointer'} />
                </button>
                <h1 className="bg-transparent w-5 outline-none" id="bedroom">
                  {bedroomCount}
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
                  {guestRoomCount}
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
                  {bathroomCount}
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
                  {carPortCount}
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
            <Link
              to="/property-listing/establishments"
              className="bg-beige-400 w-fit px-28 py-3 text-xl mx-auto transition-all hover:bg-secondary-400 duration-500"
            >
              NEXT
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ListingAmenities
