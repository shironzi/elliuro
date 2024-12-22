import { IoIosSearch } from 'react-icons/io'
import PropertyCard from './searchPropertyCard'
import { useCallback, useState } from 'react'
import { searchProperty } from '../../apis/propertyApi'

function SearchProperties() {

  const [searchForm, setSearchForm] = useState({
    location: "",
    propertyType: "any",
    minPrice: 0,
    maxPrice: undefined
  })

  const handleInput = useCallback(async(event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchForm(prevState => ({...prevState, [event.target.name]: event.target.value}))
    }, [])

  const handleSubmit = useCallback(async() => {
    searchProperty(searchForm)
  }, [searchForm])

  return (
    <div className="bg-darkGray h-full">
      <div className="container mx-auto">
      <form
          action=""
          onSubmit={handleSubmit}
          className="border border-secondary-400 rounded-full border-r-0 my-20 w-fit mx-auto pl-5 flex flex-row items-center justify-center space-x-4 text-xl text-beige-400"
        >
          <input type="text" placeholder="LOCATION" onSubmit={() => handleInput} className="outline-none text-beige-400 w-80" />
          <select
            name="propertyType"
            id="propertyType"
            className="outline-none border-l border-secondary-400 px-5"
            onSubmit={() => handleInput}
          >
            <option value="any">any</option>
          </select>
          <input
            type="number"
            placeholder="MIN PRICE"
            name="minPrice"
            className="outline-none border-l border-secondary-400 pl-4 w-40"
            onSubmit={() => handleInput}
          />
          <input
            type="number"
            placeholder="MAX PRICE"
            name="maxPrice"
            className="outline-none border-l border-secondary-400 pl-4 w-40"
            onSubmit={() => handleInput}
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
