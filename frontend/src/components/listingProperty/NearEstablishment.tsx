import { Link } from "react-router"

function NearEstablishment() {
  return (
    <div className="bg-darkGray-400 pt-10 pb-20">
      <div className="container mx-auto">
        <h1 className="text-3xl border-b border-beige-400 w-fit pr-10 pb-2">Highlight What Makes Your Property Special</h1>
        <div className="mt-5 mx-10 flex flex-col gap-20 font-proximaNova">
          <p className="text-xs" style={{color: "rgba(224, 224, 224, 0.60)"}}>
            Is your property part of an exclusive community, or does it offer
            unique amenities? Let buyers know what makes it stand out.
          </p>
          <input type="text" id="establishment" name="establishment" placeholder="ENTER AN ESTABLISHMENT" className="w-3/5 px-5 py-3 bg-transparent outline-none border"/>
          <div>
            <ul className="list-disc text-lg">
                <li>Establishment</li>
            </ul>
          </div>
          <Link to={"/property-listing/images"} className="px-28 py-3 bg-beige-400 w-fit mx-auto hover:bg-secondary-400 transition-colors duration-300 ease-out">NEXT</Link>
        </div>
      </div>
    </div>
  )
}

export default NearEstablishment
