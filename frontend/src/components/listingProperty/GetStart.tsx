import { Link } from 'react-router'

function GetStart() {
  return (
    <div className=" bg-darkGray-400">
      <div className="w-fit mx-auto flex items-center">
        <img src="/images/get-Started-Listing.png" alt="" />
        <div className="p-20 max-w-screen-lg flex flex-col gap-32 justify-center">
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl tracking-widest">
              Unlock the Potential of Your Property with Us
            </h1>
            <p className="font-proximaNova text-base leading-8">
              Whether you’re looking to rent, lease, or sell, our platform makes
              it easy to connect with the right tenants and buyers. Start
              listing your property today and take the first step toward
              reaching your real estate goals.
            </p>
          </div>
          <Link
            to="details"
            className="mx-auto bg-beige-400 px-11 py-4 font-proximaNova text-xl transition-colors duration-300 ease-in hover:bg-secondary-400"
          >
            GET STARTED
          </Link>
        </div>
      </div>
    </div>
  )
}

export default GetStart
