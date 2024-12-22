import { FaLocationDot } from 'react-icons/fa6'

function searchPropertyCard(props: {
  title: string
  location: string
  price: number
  size: string
}) {
  const formattedPrice = new Intl.NumberFormat('en-PH', {
    minimumFractionDigits: 2,
  }).format(props.price)
  return (
    <div className="text-darkGray-400 font-proximaNova w-fit">
      <img
        src="/public/images/property-card.jpg"
        alt=""
        className="w-full object-cover rounded-t-lg"
      />
      <h1>{props.title}</h1>
      <h1 className="text-sm flex flex-row gap-2 items-center w-fit">
        <FaLocationDot />
        {props.location}
      </h1>
      <h1 className="text-sm w-fit">Php {formattedPrice}</h1>
      <h1 className="text-xs w-fit">{props.size}</h1>
    </div>
  )
}

export default searchPropertyCard
