import { useParams } from 'react-router'
import Details from '../property/Details'
import { useEffect, useState } from 'react'
import { getPropertyById } from '../../apis/propertyApi'

enum PropertyType {
  House = 'house',
  Apartment = 'apartment',
  Hotel = 'hotel',
  condominium = 'condominium',
  private = 'private',
}

function ReviewListing() {
  const {propertyId} = useParams()
  const [data, setData] = useState({
    details: {
      title: '',
      type: PropertyType.House,
      location: '',
      price: '',
      description: ''
    },
    establishments: [],
    images: []
  })

  const [amenities, setAmenities] = useState<{ name: string; value: number }[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchProperty(): Promise<void> {
      
        if(propertyId){
          try {
            const property = await getPropertyById(propertyId)
    
            const amenities: { name: string; value: number }[] = property.amenities.map((amenity: { name: string; value: number }) => ({
              name: amenity.name,
              value: amenity.value
            }))
    
            setAmenities(amenities)
    
            setData({
              details: {
                title: property.details.title,
                type: property.details.type,
                location: property.details.location,
                price: property.details.price,
                description: property.details.description
              },
              establishments: property.establishments,
              images: property.images
            }) 
          }
          catch (error) {
            console.error('Failed to fetch property data:', error);
          }finally {
            setLoading(false);
          }
      }else{
        console.error(`Property ID is undefined`)
      }
    }
    fetchProperty()
  }, [propertyId, data])

  if(loading){
    return(
      <div>Loading....</div>
    )
  }

  return (
    <div>
      <div className="bg-darkGray-400">
        <Details
          title={data.details.title}
          location={data.details.location}
          price={data.details.price}
          description={data.details.description}
          bedroom={amenities.find(amenity => amenity.name === 'bedroom')?.value || 0}
          toilet={amenities.find(amenity => amenity.name === 'bathroom')?.value || 0}
          SwimmingPool={amenities.find(amenity => amenity.name === 'swimmingPool')?.value || 0}
          carPort={amenities.find(amenity => amenity.name === 'carPort')?.value || 0}
        />
      </div>
    </div>
  )
}

export default ReviewListing
