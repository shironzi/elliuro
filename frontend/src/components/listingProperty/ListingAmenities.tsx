import { MdAddCircleOutline } from 'react-icons/md'
import { MdOutlineRemoveCircleOutline } from 'react-icons/md'
import { MdOutlineAdd } from 'react-icons/md'
import { Link } from 'react-router'

function ListingAmenities() {
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
          <div className="px-16 flex flex-col gap-12 mt-12">
            <div className="flex justify-between items-center border-b px-5">
              <h1>BEDROOM</h1>
              <div className="flex flex-row gap-10 items-center py-4">
                <MdOutlineRemoveCircleOutline size={25} cursor={'pointer'} />
                <span className="bg-transparent w-5 outline-none">0</span>
                <MdAddCircleOutline size={25} cursor={'pointer'} />
              </div>
            </div>
            <div className="flex justify-between items-center border-b px-5">
              <h1>GUEST ROOM</h1>
              <div className="flex flex-row gap-10 items-center py-4">
                <MdOutlineRemoveCircleOutline size={25} cursor={'pointer'} />
                <span className="bg-transparent w-5 outline-none">0</span>
                <MdAddCircleOutline size={25} cursor={'pointer'} />
              </div>
            </div>
            <div className="flex justify-between items-center border-b px-5">
              <h1>BATHROOM</h1>
              <div className="flex flex-row gap-10 items-center py-4">
                <MdOutlineRemoveCircleOutline size={25} cursor={'pointer'} />
                <span className="bg-transparent w-5 outline-none">0</span>
                <MdAddCircleOutline size={25} cursor={'pointer'} />
              </div>
            </div>
            <div className="flex justify-between items-center border-b px-5">
              <h1>CAR PORT</h1>
              <div className="flex flex-row gap-10 items-center py-4">
                <MdOutlineRemoveCircleOutline size={25} cursor={'pointer'} />
                <span className="bg-transparent w-5 outline-none">0</span>
                <MdAddCircleOutline size={25} cursor={'pointer'} />
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
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListingAmenities
