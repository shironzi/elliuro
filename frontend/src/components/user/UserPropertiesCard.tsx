import { MdOutlineEdit } from 'react-icons/md'
import { MdDeleteOutline } from 'react-icons/md'

interface userProperty {
  id: number
  title: string
  imageName: string
  listNum: number
}

function UserPropertiesCard(props: userProperty) {
  return (
    <div className="grid grid-cols-10 gap-4 items-center border-t py-10">
      <div className="text-center">{props.listNum}</div>
      <div className="col-span-2 w-full">
        <img
          src={props.imageName}
          alt="Property"
          className="w-full border object-cover rounded"
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

export default UserPropertiesCard
