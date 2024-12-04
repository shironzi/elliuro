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
    <div className="container w-4/5 mx-auto">
        <div className="flex justify-between mx-auto gap-x-28">
            <div className="flex flex-col gap-y-6">
            <h1 className="text-3xl text-beige-400 tracking-wider">{props.title}</h1>
            <p className="text-primary-400 tracking-wide text-xl">{props.desc}</p>
            <div className="flex justify-between">
                <h1>{props.hasSwimmingPool ? 'Swimming Pool' : <></>}</h1>{' '}
                <h1>{props.noOfRooms} Rooms</h1>
            </div>
            <div className="flex justify-between">
                <h1>{props.hasCarPort ? 'Car Port' : <></>}</h1>{' '}
                <h1>{props.noOfBathrooms} Bathrooms</h1>
            </div>
            </div>
            <img
            src={props.image}
            alt=""
            style={{ width: '634px', height: '422.718px' }}
            />
        </div>
    </div>
  )
}

export default FeaturePropertyDesign1
