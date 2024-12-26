import { MdOutlineEdit } from 'react-icons/md'
import { MdDeleteOutline } from 'react-icons/md'

interface propertiesData {
  number: number
  image: File
  title: string
}

function userPropertiesCard(props: propertiesData) {
  return (
    <div className="grid grid-cols-10 gap-4 items-center border-t py-2 ">
      <div className="text-center">{props.number}</div>
      <div className="col-span-2">
        <img
          src={URL.createObjectURL(props.image)}
          alt="property-card.jpg"
          className="w-full object-cover rounded"
        />
      </div>
      <div className="col-span-6">{props.title}</div>
      <div className="col-span-1 flex gap-5 justify-center">
        <button className="">
          <MdOutlineEdit size={30} />
        </button>
        <button className="">
          <MdDeleteOutline size={35} color="#ff0000" />
        </button>
      </div>
    </div>
  )
}

export default userPropertiesCard
