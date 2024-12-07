import { FaStar } from 'react-icons/fa'
import { FaRegStar } from 'react-icons/fa'

function RateCard(props: { ratingDesc: string; rate: number; name: string }) {
  return (
    <div className="w-1/4 flex flex-col gap-2">
      <h1 className="tracking-wider text-2xl">{props.ratingDesc}</h1>
      <div className="flex flex-row gap-1">
        {props.rate ? (
          <>
            <FaStar color="#FFFF00" />
            <FaStar color="#FFFF00" />
            <FaStar color="#FFFF00" />
            <FaStar color="#FFFF00" />
            <FaStar color="#FFFF00" />
          </>
        ) : (
          <FaRegStar />
        )}
      </div>
      <h1 className="text-beige-400 text-xl tracking-wider">{props.name}</h1>
    </div>
  )
}

export default RateCard
