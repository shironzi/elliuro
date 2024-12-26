import UserPropertiesCard from './UserPropertiesCard'

function userProperties() {
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
          <UserPropertiesCard
            title="Sample"
            image={'/images/property-card.jpg'}
            number={1}
          />
          <UserPropertiesCard
            title="Sample"
            image={'/images/property-card.jpg'}
            number={2}
          />
          <UserPropertiesCard
            title="Sample"
            image={'/images/property-card.jpg'}
            number={3}
          />
        </div>
      </div>
    </div>
  )
}

export default userProperties
