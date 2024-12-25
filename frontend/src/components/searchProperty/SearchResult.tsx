import { memo } from 'react'
import SearchPropertyCard from './SearchPropertyCard'

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

interface SearchResultProps {
  propertiesData: Property[]
}

function SearchResult({ propertiesData }: SearchResultProps) {
  return (
    <div className="flex flex-row my-32 ">
      <div className="w-fit">
        <h1>{propertiesData.length} PROPERTIES</h1>
        <div className="grid grid-cols-4 gap-10 place-items-center">
          {propertiesData.length ? (
            propertiesData.map((property, index) => (
              <SearchPropertyCard
                key={index}
                title={property.details.title}
                location={property.details.location}
                price={property.details.price}
                size="1 hectare"
              />
            ))
          ) : (
            <>NO PROPERTY FOUND</>
          )}
        </div>
      </div>
    </div>
  )
}

export default memo(SearchResult)
