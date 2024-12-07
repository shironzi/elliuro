import { FaStar } from 'react-icons/fa'
import { FaRegStar } from 'react-icons/fa'

function Rate(props: { ratingDesc: string; rate: number, name: string }) {
  return (
    <div>
      <h1>{props.ratingDesc}</h1>
      <div>{props.rate ? <FaStar /> : <FaRegStar />}</div>
      <h1>{props.name}</h1>
    </div>
  )
}

export default Rate
