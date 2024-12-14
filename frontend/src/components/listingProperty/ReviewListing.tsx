import { useOutletContext } from 'react-router'
import Details from '../property/Details'

enum PropertyType {
  House = 'house',
  Apartment = 'apartment',
  Hotel = 'hotel',
  condominium = 'condominium',
  private = 'private',
}
interface OutletContext {
  formData: {
    details: {
      title: string
      type: PropertyType
      location: string
      price: string
      description: string
    }
    amenities: {
      bedroomCount: number
      guestRoomCount: number
      bathroomCount: number
      carPortCount: number
      swimmingPoolCount: number
    }
    establishments: string[]
    images: File[]
  }
}

function ReviewListing() {
  const { formData } = useOutletContext<OutletContext>()

  return (
    <div>
      <div className="bg-darkGray-400">
        <Details
          title={formData.details.title}
          location={formData.details.location}
          price={formData.details.price}
          description={formData.details.description}
          bedroom={formData.amenities.bedroomCount}
          toilet={formData.amenities.bathroomCount}
          SwimmingPool={formData.amenities.swimmingPoolCount}
          carPort={formData.amenities.carPortCount}
        />
      </div>
    </div>
  )
}

export default ReviewListing
