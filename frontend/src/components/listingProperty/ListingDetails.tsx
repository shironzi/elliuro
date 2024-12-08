import { Link } from 'react-router'

function ListingDetails() {
  return (
    <div className="bg-darkGray-400">
      <div className="container mx-auto flex flex-col py-14">
        <h1 className="text-3xl border-b w-fit pr-10 border-beige-400 mb-10">
          LETS BEGIN WITH THE BASICS
        </h1>
        <form action="" className="flex flex-col gap-10 px-7 font-proximaNova">
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-8">
              <div className="w-full">
                <label htmlFor="title" className="text-xl">
                  TITLE
                </label>
                <p className="text-xs mt-1">
                  Begin by giving your property an appealing title. Make it
                  attention-grabbing yet informative
                </p>
              </div>
              <label htmlFor="price" className="w-6/12">
                PRICE
              </label>
            </div>
            <div className="flex flex-row gap-8">
              <input
                type="text"
                id="title"
                name="title"
                className="w-full outline-none bg-transparent border px-4 py-2.5 text-lg"
              />
              <input
                type="text"
                id="price"
                name="price"
                className="w-6/12 outline-none bg-transparent border px-4 py-2.5 text-lg"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="location">LOCATION</label>
            <input
              type="text"
              id="location"
              name="location"
              className="outline-none bg-transparent border px-4 py-2.5 text-lg"
              style={{ width: '65%' }}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="description">DESCRIPTION</label>
            <textarea
              name="description"
              id="description"
              className="outline-none bg-transparent border w-full px-4 py-2 text-lg"
              rows={10}
            ></textarea>
          </div>
          <Link
            to="amenities"
            className="bg-beige-400 w-fit px-28 py-3 text-xl mx-auto transition-all hover:bg-secondary-400 duration-500"
          >
            NEXT
          </Link>
        </form>
      </div>
    </div>
  )
}

export default ListingDetails
