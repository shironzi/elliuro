import { IoIosSearch } from 'react-icons/io'

import { memo, useCallback, useEffect, useState } from 'react'
import { searchProperty } from '../../apis/propertyApi'
import SearchResult from './SearchResult'

interface Property {
  details: {
    title: string
    location: string
    price: number
  }
  image: {
    image: File
  }
}

interface SearchForm {
  location?: string
  propertyType?: string
  minPrice?: number
  maxPrice?: number
}

function SearchProperties() {
  const [searchForm, setSearchForm] = useState<SearchForm>({
    location: '',
    propertyType: '',
    minPrice: 0,
    maxPrice: 0,
  })

  const [propertiesData, setPropertiesData] = useState<Property[]>([])

  const handleInput = useCallback(
    async (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setSearchForm((prevState) => ({
        ...prevState,
        [event.target.name]: event.target.value,
      }))
    },
    [],
  )

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()

      const properties = await searchProperty(searchForm)
      setPropertiesData(properties)
    },
    [searchForm],
  )

  useEffect(() => {
    const event = new Event('submit', { bubbles: true, cancelable: true })
    handleSubmit(event as unknown as React.FormEvent<HTMLFormElement>)
  }, [handleSubmit])

  return (
    <div className="bg-darkGray h-full">
      <div className="container mx-auto">
        <form
          onSubmit={handleSubmit}
          className="border border-secondary-400 rounded-full border-r-0 my-20 w-fit mx-auto pl-5 flex flex-row items-center justify-center space-x-4 text-xl text-beige-400"
        >
          <input
            type="text"
            id="location"
            name="location"
            placeholder="LOCATION"
            onChange={handleInput}
            className="outline-none text-beige-400 w-80"
          />
          <select
            name="propertyType"
            id="propertyType"
            className="outline-none border-l border-secondary-400 px-5"
            onChange={handleInput}
          >
            <option value="any">any</option>
          </select>
          <input
            type="number"
            placeholder="MIN PRICE"
            name="minPrice"
            id="minPrice"
            className="outline-none border-l border-secondary-400 pl-4 w-40"
            onChange={handleInput}
          />
          <input
            type="number"
            placeholder="MAX PRICE"
            name="maxPrice"
            id="maxPrice"
            className="outline-none border-l border-secondary-400 pl-4 w-40"
            onChange={handleInput}
          />
          <button
            type="submit"
            className="bg-beige-400 rounded-full p-1.5 border-secondary-400"
          >
            <IoIosSearch size={35} color="ffffff" />
          </button>
        </form>
        <SearchResult propertiesData={propertiesData} />
      </div>
    </div>
  )
}

export default memo(SearchProperties)
