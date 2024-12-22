import { IoIosSearch } from 'react-icons/io'
import PropertyCard from './searchPropertyCard'

function SearchProperties() {
  return (
    <div className="bg-darkGray h-full">
      <div className="container mx-auto">
        <form
          action=""
          className="border border-secondary-400 rounded-full border-r-0 my-20 w-fit mx-auto pl-5 flex flex-row items-center justify-center space-x-4 text-xl text-beige-400"
        >
          <input type="text" placeholder="LOCATION" className="outline-none" />
          <select
            name="propertyType"
            id="propertyType"
            className="outline-none border-l border-secondary-400 px-5"
          >
            <option value="any">any</option>
          </select>
          <input
            type="number"
            placeholder="PRICE"
            className="outline-none border-l border-secondary-400 pl-4"
          />
          <button
            type="submit"
            className="bg-beige-400 rounded-full p-1.5 border-secondary-400"
          >
            <IoIosSearch size={35} color="ffffff" />
          </button>
        </form>
        <div className='flex flex-row my-32 '>
          <div className='w-fit'>
            <h1>0 PROPERTIES</h1>
            <div className='grid grid-cols-4 gap-10 place-items-center'>
              <PropertyCard
                title="title"
                location="manila"
                price={150000}
                size="1 hectare"
              />
              <PropertyCard
                title="title"
                location="manila"
                price={150000}
                size="1 hectare"
              />
              <PropertyCard
                title="title"
                location="manila"
                price={150000}
                size="1 hectare"
              />
              <PropertyCard
                title="title"
                location="manila"
                price={150000}
                size="1 hectare"
              />
              <PropertyCard
                title="title"
                location="manila"
                price={150000}
                size="1 hectare"
              />
              <PropertyCard
                title="title"
                location="manila"
                price={150000}
                size="1 hectare"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchProperties
