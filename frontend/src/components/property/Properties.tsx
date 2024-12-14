import { MdOutlineEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";

function Properties() {
    return (
      <div className="bg-darkGray-400">
        <div className="container mx-auto py-20">
          <div className="min-h-80 bg-transparent font-proximaNova border rounded-3xl overflow-hidden py-5 px-7">
            <div className="grid grid-cols-10 font-bold text-center py-5 text-md">
              <div>ID</div>
              <div className="col-span-2">Image</div>
              <div className="col-span-6">Title</div>
              <div className="col-span-1">Actions</div>
            </div>
            <div className="grid grid-cols-10 gap-4 items-center border-t py-2 ">
              <div className="text-center">1</div>
              <div className="col-span-2">
                <img
                  src="/images/property-card.jpg"
                  alt="property-card.jpg"
                  className="w-full object-cover rounded"
                />
              </div>
              <div className="col-span-6">Sample Title</div>
              <div className="col-span-1 flex gap-5 justify-center">
                <button className="">
                  <MdOutlineEdit size={30}/>
                </button>
                <button className="">
                  <MdDeleteOutline size={35} color="#ff0000"/>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Properties;