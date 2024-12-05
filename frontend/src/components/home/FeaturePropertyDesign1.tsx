function FeaturePropertyDesign1(props: {
  id: number
  title: string
  desc: string
  price: number
  hasSwimmingPool: boolean
  noOfRooms: number
  hasCarPort: boolean
  noOfBathrooms: number
  image: string
}) {
  return (
    <div className="container w-4/5 mx-auto">
      <div className="flex justify-between mx-auto gap-x-28">
        <div className="flex flex-col gap-y-6 border-r border-solid pr-10 ">
          <h1 className="text-3xl text-beige-400 tracking-wider">
            {props.title}
          </h1>
          <p className="text-primary-400 tracking-wide text-xl">{props.desc}</p>
          <div className="flex justify-between">
            <h1>{props.hasSwimmingPool ? 'Swimming Pool' : <></>}</h1>{' '}
            <h1>{props.noOfRooms} Rooms</h1>
          </div>
          <div className="flex justify-between">
            <h1>{props.hasCarPort ? 'Car Port' : <></>}</h1>{' '}
            <h1>{props.noOfBathrooms} Bathrooms</h1>
          </div>
          <div className="flex justify-between">
            <h1>PHP {props.price}</h1>
            <a href={"/"+ props.id} className="bg-beige-400 px-8 py-2.5 hover:bg-secondary-400 transition-all duration-300">VIEW LISTING</a>
          </div>
        </div>
        <img
          src={props.image}
          alt={props.image}
          style={{ width: '534px', height: '322.718px' }}
        />
      </div>
    </div>
  )
}

export default FeaturePropertyDesign1