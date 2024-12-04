function FeaturePropertyDesign1(props: {
  title: string
  desc: string
  hasSwimmingPool: boolean
  noOfRooms: number
  hasCarPort: boolean
  noOfBathrooms: number
  image: string
}) {
  return (
    <div className="container flex justify-between">
      <div>
        <h1>{props.title}</h1>
        <p>{props.desc}</p>
        <div>
          <h1>{props.hasSwimmingPool ? 'Swimming Pool' : <></>}</h1>{' '}
          <h1>{props.noOfRooms} Rooms</h1>
        </div>
        <div>
          <h1>{props.hasCarPort ? 'Car Port' : <></>}</h1>{' '}
          <h1>{props.noOfBathrooms} Bathrooms</h1>
        </div>
      </div>
      <img src={props.image} alt="" />
    </div>
  )
}

export default FeaturePropertyDesign1
