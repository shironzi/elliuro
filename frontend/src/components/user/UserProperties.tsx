import { useEffect, useState } from 'react'
import UserPropertiesCard from './UserPropertiesCard'
import { getProperties } from '../../apis/userApi'

interface userProperty {
  id: number
  title: string
  image: string
}

function UserProperties() {
  const [userProperties, setUserProperties] = useState<userProperty[]>()

  useEffect(() => {
    async function fetchData() {
      const properties = await getProperties()
      setUserProperties(properties)
    }
    fetchData()
  }, [])

  return (
    <div className="bg-darkGray-400">
      <div className="container mx-auto py-20">
        <div className="min-h-80 bg-transparent font-proximaNova border rounded-3xl overflow-hidden py-5 px-7">
          <div className="grid grid-cols-10 font-bold text-center py-5 text-md">
            <div>No.</div>
            <div className="col-span-2">Image</div>
            <div className="col-span-6">Title</div>
            <div className="col-span-1">Actions</div>
          </div>
          {userProperties ? (
            userProperties.map((property, index) => (
              <UserPropertiesCard
                key={index}
                id={property.id}
                title={property.title}
                image={property.image}
                listNum={index + 1}
              />
            ))
          ) : (
            <div>No properties found.</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default UserProperties
