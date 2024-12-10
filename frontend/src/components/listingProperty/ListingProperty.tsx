import { useCallback, useState } from 'react'
import { Outlet } from 'react-router'

function ListingProperty() {
  const [formData, setFormData] = useState({
    details: {},
    amenities: {},
    establishments: {},
    images: {},
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

  console.log(formData.details)

  return (
    <div>
      <Outlet context={{ formData, updateFromData }} />
    </div>
  )
}

export default ListingProperty
