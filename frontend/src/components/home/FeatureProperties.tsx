import FeaturePropertyDesign1 from './FeaturePropertyDesign1'
import FeaturePropertyDesign2 from './FeaturePropertyDesign2'

function FeatureProperties() {
  return (
    <div className="container mx-auto pb-1">
      <h1 className="text-center mb-36 mt-24 font-merriweather tracking-wider text-4xl text-beige-400 border-b-2 border-solid border-beige-400 w-fit mx-auto px-16 pb-2">
        FEATURED PROPERTIES
      </h1>
      <div>
        <FeaturePropertyDesign1
          id={1}
          title={'Luxe Haven Residences'}
          desc={
            'Nestled in the heart of Manila, this exceptional property combines modern elegance with unparalleled comfort, offering spacious interiors, top-of-the-line amenities, and breathtaking views – the perfect retreat for refined living.'
          }
          price={5000000}
          hasSwimmingPool={true}
          hasCarPort={true}
          noOfRooms={4}
          noOfBathrooms={4}
          image={'/images/property-card.jpg'}
        />

        <FeaturePropertyDesign2
          id={1}
          title={'Luxe Haven Residences'}
          desc={
            'Nestled in the heart of Manila, this exceptional property combines modern elegance with unparalleled comfort, offering spacious interiors, top-of-the-line amenities, and breathtaking views – the perfect retreat for refined living.'
          }
          price={5000000}
          hasSwimmingPool={true}
          hasCarPort={true}
          noOfRooms={4}
          noOfBathrooms={4}
          image={'/images/property-card.jpg'}
        />

        <FeaturePropertyDesign1
          id={1}
          title={'Luxe Haven Residences'}
          desc={
            'Nestled in the heart of Manila, this exceptional property combines modern elegance with unparalleled comfort, offering spacious interiors, top-of-the-line amenities, and breathtaking views – the perfect retreat for refined living.'
          }
          price={5000000}
          hasSwimmingPool={true}
          hasCarPort={true}
          noOfRooms={4}
          noOfBathrooms={4}
          image={'/images/property-card.jpg'}
        />
      </div>
    </div>
  )
}

export default FeatureProperties
