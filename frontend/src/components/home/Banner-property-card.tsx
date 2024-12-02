function Banner_property_card(props: { image: string; title: string }) {
  return (
    <div className="overflow-hidden rounded-xl w-72 h-40 relative bg-cover">
      <div className="group hover:scale-150 transition-all duration-300 ease-linear w-full h-full">
        <img className="w-full h-full object-cover" src={props.image} alt="" />
        <h1 className="absolute right-4 bottom-3 transition-opacity duration-300 ease-linear opacity-100 group-hover:opacity-0 font-proximaNova">
          {props.title}
        </h1>
      </div>
    </div>
  )
}

export default Banner_property_card
