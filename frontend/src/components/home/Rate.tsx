import { FaStar } from 'react-icons/fa'
import { FaRegStar } from 'react-icons/fa'

function Rate(props) {
  return (
    <div>
      <h1>{props.ratingDesc}</h1>
      <div>{props.rate ? <FaStar /> : <FaRegStar />}</div>
    </div>
  )
}

export default Rate
