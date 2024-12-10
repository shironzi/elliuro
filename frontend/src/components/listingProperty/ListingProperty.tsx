import { useCallback, useState } from 'react'
import { Outlet } from 'react-router'

enum PropertyType {
  House = 'house',
  Apartment = 'apartment',
  Hotel = 'hotel',
  condominium = 'condominium',
  private = 'private',
}

function ListingProperty() {
  const [formData, setFormData] = useState({
    details: {
      title: '',
      type: PropertyType.House,
      location: '',
      price: '',
      description: '',
    },
    amenities: {
      bedroomCount: 0,
      guestRoomCount: 0,
      bathroomCount: 0,
      carPortCount: 0,
      swimmingPoolCount: 0,
    },
    establishments: [],
    images: [] as File[],
  })

  const updateFromData = useCallback(
    (section: string, data: Record<string, unknown>) => {
      setFormData((prevData) => ({
        ...prevData,
        [section]: data,
      }))
    },
    [],
  )

  return (
    <div>
      <Outlet context={{ formData, updateFromData }} />
    </div>
  )
}

export default ListingProperty
