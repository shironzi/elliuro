import FeaturePropertyDesign1 from './FeaturePropertyDesign1'

function FeatureProperties() {
  return (
    <div className="container">
      <h1>FEATURED PROPERTIES</h1>
      <FeaturePropertyDesign1
        title={'Luxe Haven Residences'}
        desc={
          'Nestled in the heart of Manila, this exceptional property combines modern elegance with unparalleled comfort, offering spacious interiors, top-of-the-line amenities, and breathtaking views – the perfect retreat for refined living.'
        }
        hasSwimmingPool={true}
        hasCarPort={true}
        noOfRooms={4}
        noOfBathrooms={4}
        image={'/images/property-card.jpg'}
      />
    </div>
  )
}

export default FeatureProperties
